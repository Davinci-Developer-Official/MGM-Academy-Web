'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import profile from '@/public/profile/user.png';
import { FaCaretRight, FaSave } from 'react-icons/fa';
//import Uploader from "./Uploader"


export interface registration {
  profileImage:string,
    userName:string,
    firstName:string,
    middleName:string,
    lastName:string,
    email:string,
    gender:string,
    citizenship:string,
    residence:string,
    phoneNumber:string
    dateOfBirth:string,
    //exposure:string,
}

function Form({setSlide1,setSlide2}:any) {
  //states
  const[profileimage,setprofileimage]=useState("");
  const[username,setusername]=useState("");
  const[firstname,setfirstname]=useState("");
  const[middlename,setmiddlename]=useState("");
  const[lastname,setlastname]=useState("");
  const[email,setemail]=useState("");
  const[gender,setgender]=useState("");
  const[citizenship,setcitizenship]=useState("");
  const[residence,setresidence]=useState("");
  const[phonenumber,setphonenumber]=useState("");
  const[dateofbirth,setdateofbirth]=useState("");
 
  //data
  const data: registration = {
    profileImage:profileimage,
    userName:username,
    firstName:firstname,
    middleName:middlename,
    lastName:lastname,
    email:email,
    gender:gender,
    citizenship:citizenship,
    residence:residence,
    phoneNumber:phonenumber,
    dateOfBirth:dateofbirth,
    //exposure:exposure
  };

  return (
    <form className='background  p-2  w-[70%] mx-auto ' > 
     
        {/*Profile Picture*/}
        {/*
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className=' p-4 font-mono font-bold ' >Profile picture</p>
        <div className='h-[250px] w-[250px]  bg-red-400  rounded-full border-[#e97902] border ' >
            <Image src={profile} alt='profile image' className='object-fit h-full w-full rounded-full ' />
        </div>
        <input type="file" className='p-2' />
        </div>
        */}
        
        {/*User Name*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' >username</p>
        <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='J Doe' value={username} onChange={(e:any)=>{
          const value = e.target.value;
          setusername(value)
        }} />
        </div>
        {/*First Name*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' >First Name</p>
        <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Jane' value={firstname} onChange={(e:any)=>{
          const value = e.target.value;
          setfirstname(value)
        }}  />
        </div>
        {/*Middle Name*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold ' >Middle Name</p>
        <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Emily' value={middlename} onChange={(e:any)=>{
          const value = e.target.value;
          setmiddlename(value)
        }}  />
        </div>
        {/*Last Name*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' >Last Name</p>
        <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder=' Doe ' value={lastname} onChange={(e:any)=>{
          const value = e.target.value;
          setlastname(value)
        }}  />
        </div>
        {/*Email address*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' > Email </p>
        <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='janeemilydoe@gmail.com' value={email} onChange={(e:any)=>{
          const value = e.target.value;
          setemail(value);
        }}  />
        </div>
        {/*gender selection*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' >gender</p>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
            setgender("male")
          }} />
          <p className='ml-2 font-mono font-bold ' >Male</p>
        </div>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
            setgender("female")
          }} />
          <p className='ml-2 font-mono font-bold ' >Female</p>
        </div>
        <div className='flex flex-col p-2 ' >
          <p className='ml-2 font-mono font-bold ' >Other</p>
          <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='state your gender' value={gender} onChange={(e:any)=>{
          const value = e.target.value;
          setgender(value)
        }}  />         
        </div>
        </div>
        {/*Nationality*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' > Nation of origin / citizenship </p>
        <input type='text' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Kenya' value={citizenship} onChange={(e:any)=>{
          const value = e.target.value;
          setcitizenship(value)
        }}  />
        </div>
        {/*Residence*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' > Residence City/Town  </p>
        <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Nairobi' value={residence} onChange={(e:any)=>{
          const value = e.target.value;
         setresidence(value)
        }}  />
        </div>
        {/*phone number*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold'  > Phone number </p>
        <input type='tel' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent '  placeholder=' (254)12345678 ' value={phonenumber} onChange={(e:any)=>{
          const value = e.target.value;
          setphonenumber(value)
        }}  />
        </div>
        {/*Date of birth*/}
        <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
        <p className='font-mono font-bold' > Date of birth </p>
        <input type='date' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' value={dateofbirth} onChange={(e:any)=>{
          const value = e.target.value;
          setdateofbirth(value)
        }}  />
        </div>
        
       <button className='btn btn-success ml-[60%] flex flex-row  ' onClick={(e)=>{
        e.preventDefault()
        alert(JSON.stringify(data))
        setSlide1(false);
        setSlide2(true);
       }} > continue <FaCaretRight size={20} /> </button>
    </form>
  )
}

export default Form;