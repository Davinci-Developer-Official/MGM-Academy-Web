"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import b from "@/public/empowerment/11.png";
import CountrySelector from './Countries';
import Uploader from "./Upload";
import axios from 'axios';
import { FaCaretLeft } from 'react-icons/fa';
import Main from "@/app/components/SendMail"

//user details
interface User {
    avatar: any;
    first_name: any;
    middle_name: any;
    last_name: any;
    username: any;
    email: any;
    gender: any;
    nationality: any;
    residence: any;
    phone_number: any;
    date_of_birth: any;
    exposure: any;
    password: any;
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
      const[passCode,setUpPasscode]=useState(false);
      const[proceed,setProceed]=useState(false)

      async function upload(){
       
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
               alert(user)
              }).catch((error:any)=>{
                //alert("error it failed"+error)
                console.error(error)
              })

            // Handle success
        } catch(error){
        alert(error)
        console.error(error)
      }}

      //verification code generator
  function generateRandomNumber() {
    // Generate a random number between 100,000 (inclusive) and 999,999 (inclusive)
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
  const[newCode,setNewCode]=useState("")
  async function sendVerificationCode(e:any){
    const x = generateRandomNumber();
    setNewCode(JSON.stringify(x));
    e.preventDefault();
    await Main({
      email:user.email,
      code:JSON.stringify(generateRandomNumber())
    }).then((code)=>{
     
      setVerifyEmail(true)
      alert(verificationCode)
    })
  }

      const[verificationCode,setVerificationCode]=useState("");
      async function verify (){
        //session storage;
        //const data = sessionStorage.getItem("code");
        alert(verificationCode)
        if(parseInt(newCode)==parseInt(verificationCode)){
          
         setUpPasscode(true)
          alert("passing...");
        }else{
          alert("boo")
        }
        if(verificationCode==null){
         // alert(newCode)
        alert(verificationCode)
          setUpPasscode(false)
        }
        
      }
    useEffect(()=>{

    },[user,verificationCode])
  return (
    
        <div className={personalDetails?'w-[80%] mx-auto h-fit pb-4 ': 'w-[80%] mx-auto h-screen '} >
          <div className=" w-full pt-8  ">
            
      {/*personal details*/}
  <div className="flex flex-col mt-2 mb-2  ">
    <button className={personalDetails?'btn btn-success flex flex-row ':'btn btn-ghost flex flex-row '}>
      <p>Personal details</p>

    </button>
  {personalDetails&&<div className="overflow-y-scroll h-[650px] ">
  <Uploader initials={initials} /> 
  <form className='background  p-2  w-[99%] mx-auto ' > 
  {/*First Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >First Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Jane' value={user.first_name} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setUser({first_name:value})
    }}  />
  </div>
  {/*Middle Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold ' >Middle Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Emily' value={user.middle_name} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-mname",value);
      //@ts-ignore
      setUser({middle_name:value})
    }}  />
  </div>
  {/*Last Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >Last Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder=' Doe ' value={user.last_name} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-lname",value);
      //@ts-ignore
      setUser({ last_name: value });
    }}  />
  </div>
  {/*User Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >username *(optional)</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='J Doe' value={user.username} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-uname",value);
      //@ts-ignore
      setUser({ username: value });
    }} />
  </div>
  {/*Email address*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Email </p>
    <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='janeemilydoe@gmail.com' value={user.email} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-email",value)
      //@ts-ignore
      setUser({ email: value });
    }}  />
  </div>
  {/*gender selection*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >gender</p>
    <div className='flex flex-row p-2 ' >
  <input type="radio" checked={user.gender === "male"} onChange={(e:any)=>{
    //sessionStorage.setItem("s-gender","male")
    //@ts-ignore
    setUser({ gender: "male" });
  }} />
  <p className='ml-2 font-mono font-bold ' >Male</p>
</div>
<div className='flex flex-row p-2 ' >
  <input type="radio" checked={user.gender === "female"} onChange={(e:any)=>{
    //sessionStorage.setItem("s-gender","female")
    //@ts-ignore
    setUser({gender: "female" });
  }} />
  <p className='ml-2 font-mono font-bold ' >Female</p>
</div>

    <div className='flex flex-col p-2 ' >
      <p className='ml-2 font-mono font-bold ' >Other</p>
      <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='state your gender' value={user.gender} onChange={(e:any)=>{
        const value = e.target.value;
        //sessionStorage.setItem("s-gender",value)
        //@ts-ignore
        setUser({ gender: value });
      }}  />         
    </div>
  </div>
  {/*Nationality*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Nation of origin / citizenship </p>
    {/* edited 07/03/2024: You may need to update CountrySelector accordingly  */}
    <CountrySelector setcitizenship={setUser} citizenship={user.nationality} /> 
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' value={"Please select your country"} />
  </div>
  
  {/*Residence*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Residence City/Town  </p>
    <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Nairobi' value={user.residence} onChange={(e:any)=>{
      const value = e.target.value;
     // sessionStorage.setItem("s-residence",value)
      //@ts-ignore
      setUser({residence: value });
    }}  />
  </div>
  {/*phone number*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold'  > Phone number </p>
    <input type='tel' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent '  placeholder=' (254)12345678 ' value={user.phone_number} onChange={(e:any)=>{
      const value = e.target.value;
     // sessionStorage.setItem("s-pnumber",value);
      //@ts-ignore
      setUser({phone_number: value });
    }}  />
  </div>
  {/*Date of birth*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Date of birth </p>
    <input type='date' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' value={user.date_of_birth} onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-dob",value)
      //@ts-ignore
      setUser({date_of_birth: value });
    }}  />
  </div>
  <button type='submit'className='btn btn-success w-[80%] ml-[10%] ' onClick={sendVerificationCode} >Next</button>
</form>
    </div>}
  </div>
  <div className="flex flex-col mt-2 mb-2  ">
    <button className={verifyEmail?'btn btn-success flex flex-row ':'btn btn-error flex flex-row '}>
      <p>Verify Email</p>

    </button>
    {verifyEmail&&<div className=""> 
    <div className='w-[60%] mx-auto font-mono mt-[20px] mb-[20px] ' >
     
    <div className='flex flex-col  ' >
        <p className='mb-4  ' >Enter the verification code that was sent to {user.email}.<p className='text-[#e97902]' > b@gmail.com</p></p>
        <input type='email' className='h-[50px] rounded-lg p-2  border-4 bg-white ' placeholder='enter 6 digit code.' onChange={(e)=>{
          //@ts-ignore
          setVerificationCode(JSON.stringify(e.target.value))}
        } />
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={verify} > verify your account</button>
    </div>
    </div>
    </div>}
  </div>
  <div className="flex flex-col mt-2 mb-2 bg-red-400 ">
    <button className={passCode?'btn btn-success flex flex-row ':'btn btn-error flex flex-row '}>
      <p>setup Password</p>

    </button>
    {passCode&&<div className=""> 
      <p>hello</p>
    </div>}
  </div>
  <div className="flex flex-col mt-2 mb-2 bg-red-400 ">
    <button className={proceed?'btn btn-success flex flex-row ':'btn btn-error flex flex-row '}>
      <p>proceed to login</p>

    </button>
    {proceed&&<div className=""> 
      <p>hello</p>
    </div>}
  </div>
</div> 
        </div>
    
  )
}

export default Remodel