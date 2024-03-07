"use client";
import React, { useState } from 'react'
import { FaCaretLeft } from 'react-icons/fa';

function PasswordEntry({setSlide5,setAddPassword,user,setUser}:any) {
  const[newPass,setNewPass]=useState("");
  const[confirmPass,setConfirmPass]=useState("");

  function verification(){
    if(newPass == confirmPass && newPass !== "" && confirmPass !== ""){
      setUser({password:confirmPass})
      alert(JSON.stringify(user))
    }
    if(newPass==""&& confirmPass==""){
      alert("boo")
    }
  };

  return (
    <div className='w-[60%] mx-auto font-mono mt-[100px] ' >
      <button className='flex flex-row btn btn-ghost ' onClick={()=>{
          setSlide5(true);
          setAddPassword(false);
        }} > <FaCaretLeft size={20} /> back</button>
    <div className='flex flex-col  ' >
        <p className='mb-4  ' >Setup the password for your account</p>
        <div className='w-full ' >
        <p>password</p>
        <input type='email' className='w-full h-[50px] rounded-lg p-2  border-4 bg-white ' value={newPass} placeholder='enter password.' onChange={(e)=>{
          const value = e.target.value;
          //@ts-ignore
          setNewPass(value)
        }} />
        </div>
        <div className='w-full ' >
        <p>password</p>
        <input type='email' className='w-full h-[50px] rounded-lg p-2  border-4 bg-white  ' value={confirmPass} placeholder='confirm password.' onChange={(e)=>{
          const value = e.target.value;
          //@ts-ignore
          setConfirmPass(value);
        }} />
        </div>
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={verification} > save password</button>
    </div>
    </div>
  )
}

export default PasswordEntry