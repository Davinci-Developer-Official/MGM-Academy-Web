"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import b from "@/public/empowerment/11.png";
import CountrySelector from './Countries';
import Uploader from "./Upload";
import axios from 'axios';
import { FaCaretLeft, FaCheck, FaEye, FaEyeSlash, FaMarker, FaStopCircle } from 'react-icons/fa';
import Main from "@/app/components/SendMail"
import Link from 'next/link';

//user details
interface User {
    avatar: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    username: string;
    email: string;
    gender: string;
    nationality: string;
    residence: string;
    phone_number: string;
    date_of_birth: string;
    exposure: string;
    password: string;
};

function Remodel() {
    const [user, setUser] = useState<User>({
        avatar: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        username: '',
        email: '',
        gender: '',
        nationality: '',
        residence: '',
        phone_number:'',
        date_of_birth: '',
        exposure:'',
        password: ''
      });
      const[initials,setInitials]=useState("")
      const[personalDetails,setPersonalDetails]=useState(true);
      const[verifyEmail,setVerifyEmail]=useState(false);
      const[passCode,setUpPasscode]=useState(false);//false
      const[proceed,setProceed]=useState(false)//false

      async function upload(){
        if(user.avatar!==""&&user.first_name!==""&&user.middle_name!==""&&user.last_name!==""&&user.email!==""&&user.gender!==""&&user.nationality!==""&&user.residence!==""&&user.phone_number!==""&&user.date_of_birth!==""&&user.password!==""){
          //alert("boo")
        try {
            axios.post('/api/add_student',{
                avatar: user.avatar,
                first_name: user.first_name,
                middle_name: user.middle_name,
                last_name:user.last_name,
                username: user.username,
                email: user.email,
                gender: user.gender,
                nationality: user.nationality,
                residence: user.residence,
                phone_number:user.phone_number,
                date_of_birth:user.date_of_birth,
                exposure:user.exposure,
                password: user.password
              }).then((response)=>{
                //alert(JSON.stringify(response))
               // sessionStorage.clear();
               //alert(user)
              }).catch((error:any)=>{
                //alert("error it failed"+error)
                console.error(error)
              })

            // Handle success
        } catch(error){
        //alert(error)
        console.error(error)
      }}else{
        //alert("no entries")
      }
    }

      //verification code generator
  function generateRandomNumber() {
    // Generate a random number between 100,000 (inclusive) and 999,999 (inclusive)
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
  const[newCode,setNewCode]=useState("")
  async function sendVerificationCode(e:any){
    const x = generateRandomNumber();
    
    e.preventDefault();
   
    if(user.avatar!==""&&user.first_name!==""&&user.middle_name!==""&&user.last_name!==""&&user.email!==""&&user.gender!==""&&user.nationality!==""&&user.residence!==""&&user.phone_number!==""&&user.date_of_birth!==""){
      await Main({
        email:user.email,
        code:JSON.stringify(x)
      }).then((code)=>{
        const ncode = JSON.stringify(code)
        setVerificationCode(JSON.stringify(code))
        setVerifyEmail(true)
        //alert(verificationCode)
      })
      //alert(JSON.stringify(user.avatar))
    }else{
      //alert("Err"+JSON.stringify(user))
    }
  }

      const[verificationCode,setVerificationCode]=useState("");
      const[responder,setresponder]=useState("")
      async function verify (){
        //alert(newCode)
        //session storage;
        //const data = sessionStorage.getItem("code");
        if(newCode){
          //alert(newCode)
          //alert(verificationCode+"nyee")
          console.log("processing verification code")
          setresponder("processing verification code")
        }else{
          //alert("no access");
          console.log(`please enter verification code sent to ${user.email}`)
          setresponder(`please enter verification code sent to ${user.email}`)
        }
        if(newCode===verificationCode){
          
         setUpPasscode(true)
          //alert("passing...");
          console.log("proceeding to adding password")
          setresponder("proceeding to adding password")
        }else{
          // alert("boo")
          console.log("the code you entered does not exist")
          setresponder("the code you entered does not exist")
        }
        if(verificationCode==null){
         // alert(newCode)
        //alert(verificationCode)
        console.log("Error generating verification code please reload")  
        setUpPasscode(false)
        setresponder("Error generating verification code please reload")
        }
        
      }

      const [newPass, setNewPass] = useState("");
      const [confirmPass, setConfirmPass] = useState("");
      const [hidden, setHidden] = useState<boolean>(true);
      const [hidden1, setHidden1] = useState<boolean>(true);
      const [showSessionStorageInfo, setShowSessionStorageInfo] = useState<boolean>(false);

      const[msg,setMsg]=useState("");
      const[msg1,setMsg1]=useState("");
      const[match,setMatch]=useState("");

      function verification() {
        if (newPass === confirmPass && newPass !== "" && confirmPass !== "") {
         //@ts-ignore
         setUser((prevData)=>({...prevData,password:confirmPass}))
          const final = confirmPass;
          //sessionStorage.setItem("s-pass", final);
          if (newPass === confirmPass) {
           //alert("damn")
           setMatch("password looks good ")
           //@ts-ignore
           setUser((prevData)=>({...prevData,password:confirmPass}))
           if(user.password){
            
            if(msg=="password looks good"&&msg1=="password looks good"){
              setProceed(true)
              //alert("ovua")
              upload();
              
            }else{
              setMatch("the password is not upto standard")
            }
            
           }else{
            setMatch("retry saving password")
           }
          }
        } else {
          setMatch("password do not match")

          // Handle password mismatch or empty fields
          // You can show an error message or handle it in your UI logic
        }
      }
    const[students,setStudents]=useState<User[]>([])
    useEffect(()=>{
      //alert(JSON.stringify(user));
      async function fetchStudents() {
        try {
            const response = await axios.get("/api/get_student");
            const students = response.data;
    
            // Logging to check the data structure
            console.log("Response data:", students);
    
            // Check if students is an array
            if (Array.isArray(students)) {
                // Use find method
                const findUser = students.find(user => user.username === user.username);
                const findEmail = students.find(user => user.email === user.email);
              alert(JSON.stringify(students))
                // Continue with your logic
            } else {
                console.error("Response data is not an array.");
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }
    
     fetchStudents()
    },[user,verificationCode,students])
  return (
    
        <div className={personalDetails?'w-[80%] mx-auto h-fit pb-4 ': 'w-[80%] mx-auto h-screen '} >
          <div className=" w-full pt-8  ">
            
      {/*personal details*/}
  <div className="flex flex-col mt-2 mb-2  ">
    <button className={personalDetails?'btn btn-ghost text-[#e97902] flex flex-row ':'btn btn-ghost flex flex-row '}>
      <p>Personal details</p>

    </button>
  {personalDetails&&<div className="overflow-y-scroll h-[650px] ">
  <Uploader initials={initials} user={user} setUser={setUser} /> 
  <form className='background  p-2  w-[99%] mx-auto ' > 
  {/*First Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >First Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Jane' value={user.first_name} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setUser((prevData)=>({...prevData,first_name:value})) 
      //alert(JSON.stringify(value))
    }}  />
  </div>
  {/*Middle Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold ' >Middle Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Emily' value={user.middle_name} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-mname",value);
      //@ts-ignore
      setUser((prevData)=>({...prevData,middle_name:value}))
    }}  />
  </div>
  {/*Last Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >Last Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder=' Doe ' value={user.last_name} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-lname",value);
      //@ts-ignore
      setUser((prevData)=>({...prevData,last_name:value}))
    }}  />
  </div>
  {/*User Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >username *(optional)</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='J Doe' value={user.username} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-uname",value);
      //@ts-ignore
      setUser((prevData)=>({...prevData,username:value}))
    }} />
  </div>
  {/*Email address*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Email </p>
    <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='janeemilydoe@gmail.com' value={user.email} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-email",value)
      //@ts-ignore
      setUser((prevData)=>({...prevData,email:value}))
    }}  />
  </div>
  {/*gender selection*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >gender</p>
    <div className='flex flex-row p-2 ' >
  <input type="radio" checked={user.gender === "male"} onChange={(e:any)=>{
    //sessionStorage.setItem("s-gender","male")
    //@ts-ignore
    setUser((prevData)=>({...prevData,gender:"male"}))
  }} />
  <p className='ml-2 font-mono font-bold ' >Male</p>
</div>
<div className='flex flex-row p-2 ' >
  <input type="radio" checked={user.gender === "female"} onChange={(e:any)=>{
    //sessionStorage.setItem("s-gender","female")
    //@ts-ignore
    setUser((prevData)=>({...prevData,gender:"female"}))
  }} />
  <p className='ml-2 font-mono font-bold ' >Female</p>
</div>

    <div className='flex flex-col p-2 ' >
      <p className='ml-2 font-mono font-bold ' >Other</p>
      <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='state your gender' value={user.gender} onChange={(e:any)=>{
        const value = e.target.value;
        //sessionStorage.setItem("s-gender",value)
        //@ts-ignore
        setUser((prevData)=>({...prevData,gender:value}))
      }}  />         
    </div>
  </div>
  {/*Nationality*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Nation of origin / citizenship </p>
    {/* edited 07/03/2024: You may need to update CountrySelector accordingly  */}
    <CountrySelector setUser={setUser} user={user} /> 
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' value={user.nationality==""?"Please select your country":user.nationality} />
  </div>
  
  {/*Residence*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Residence City/Town  </p>
    <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Nairobi' value={user.residence} onChange={(e:any)=>{
      const value = e.target.value;
     // sessionStorage.setItem("s-residence",value)
      //@ts-ignore
      setUser((prevData)=>({...prevData,residence:value}))
    }}  />
  </div>
  {/*phone number*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold'  > Phone number </p>
    <input type='tel' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent '  placeholder=' (254)12345678 ' value={user.phone_number} onChange={(e:any)=>{
      const value = e.target.value;
     // sessionStorage.setItem("s-pnumber",value);
      //@ts-ignore
      setUser((prevData)=>({...prevData,phone_number:value}))
    }}  />
  </div>
  {/*Date of birth*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Date of birth </p>
    <input type='date' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' value={user.date_of_birth} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-dob",value)
      //@ts-ignore
      setUser((prevData)=>({...prevData,date_of_birth:value}))
    }}  />
  </div>
  <button type='submit'className='btn btn-success w-[80%] ml-[10%] ' onClick={sendVerificationCode} >Next</button>
  {verificationCode==""?<div className=' w-full pt-2 text-red-500  justify-around flex flex-row  ' ><FaMarker size={20} className="" /> <p className=' ' >fill out the student form</p> </div>:<div className=' w-full pt-2 text-green-500  justify-around flex flex-row  ' ><FaCheck size={20} className="" /> <p className=' ' >form filled successfully</p> </div>}
</form>
    </div>}
  </div>
  <div className="flex flex-col mt-2 mb-2  ">
    <button className={verifyEmail?'btn btn-ghost text-[#e97902] flex flex-row ':'btn btn-error flex flex-row '}>
      <p>Verify Email</p>

    </button>
    {verifyEmail&&<div className=""> 
    <div className='w-[60%] mx-auto font-mono mt-[20px] mb-[20px] ' >
     
    <div className='flex flex-col  ' >
        <p className='mb-4  ' >Enter the verification code that was sent to .<p className='text-[#e97902]' >{user.email}</p></p>
        <input type='email' className='h-[50px] rounded-lg p-2  border-4 bg-white ' placeholder='enter 6 digit code.' onChange={(e)=>{
          const value = e.target.value;
          //@ts-ignore
          setNewCode((JSON.stringify(value)));
        }}/>
        <p className='text-sm' >{responder}</p>
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={verify} > verify your account</button>
    </div>
    </div>
    </div>}
  </div>
  <div className="flex flex-col mt-2 mb-2  ">
    <button className={passCode?'btn btn-ghost flex flex-row ':'btn btn-error flex flex-row '}>
      <p>setup Password</p>

    </button>
    {passCode&&<div className="w-[95%] mx-auto  "> 
      <div className='flex flex-col p-8 ' >
        
        <div className='w-full ' >
          <p>enter password</p>
          <div className='flex flex-row '>
            <input 
            type={hidden ? 'password' : 'text'} 
            className=' h-[50px] rounded-lg p-2  border-4 bg-white w-[90%] ' value={newPass} 
            placeholder='Enter password.' 
            onChange={(e) => {
              const value = e.target.value;
              setNewPass(value);
              const regex = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/;
                if (!regex.test(value)) {
                       setMsg('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
                 } else {
                        setMsg("password looks good")
                   }
            }} 
            
            />
            <button
              className=" btn btn-ghost"
              onClick={() => { setHidden(!hidden); }}
            >
              {hidden ? <FaEyeSlash className=" h-6 w-6 text-gray-400 hover:text-gray-700" size={30} /> : <FaEye className="  h-6 w-6 text-gray-400 hover:text-gray-" size={30} />}
            </button>
          </div>
          <p className='text-sm  text-[#e97902] ' >{msg}</p>
        </div>
        <div className='w-full ' >
          <p>confirm password</p>
          <div className='flex flex-row '>
          <input 
            type={hidden ? 'password' : 'text'} 
            className=' h-[50px] rounded-lg p-2  border-4 bg-white w-[90%] ' value={confirmPass} 
            placeholder='Enter password.' 
            onChange={(e) => {
              const value = e.target.value;
              setConfirmPass(value);
              const regex = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/;
                if (!regex.test(value)) {
                       setMsg1('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
                 } else {
                        setMsg1("password looks good")
                   }
            }} 
            
            />
            <button
              className=" btn btn-ghost"
              onClick={() => { setHidden1(!hidden1); }}
            >
              {hidden1 ? <FaEyeSlash className=" h-6 w-6 text-gray-400 hover:text-gray-700" size={30} /> : <FaEye className="  h-6 w-6 text-gray-400 hover:text-gray-" size={30} />}
            </button>
          </div>
          <p className='text-sm text-[#e97902] ' >{msg1}</p>
        </div>
        <p className="text-green-600" >{match}</p>
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={verification} > Save Password</button>
       
      </div>
    </div>}
  </div>
  <div className="flex flex-col mt-2 mb-2  ">
    <button className={proceed?'btn btn-ghost flex flex-row text-[#e97902] ':'btn btn-error flex flex-row '}>
      <p>proceed to login</p>

    </button>
    {proceed&&<div className=""> 
    <div className="h-fit  w-full pt-20 " >
           <div className="Card  w-[60%] mx-auto h-[300px]   " >
           <p className="card-item" >Welcome: {user.first_name} to MGM</p>
           {/*"/academics/studentPortal/auth"*/}
           <Link href="/academics/studentPortal/auth" className="btn btn-sucesss w-[60%] ml-[20%] "  >proceed</Link>
           </div>
            </div>
    </div>}
  </div>
</div> 
        </div>
    
  )
}

export default Remodel