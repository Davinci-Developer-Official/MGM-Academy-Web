"use client";
import React, { useState } from 'react'
import { FaCaretLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordEntry({setSlide5,setAddPassword,user,setUser}:any) {
  const[newPass,setNewPass]=useState("");
  const[confirmPass,setConfirmPass]=useState("");
  const [hidden, setHidden] = useState<boolean>(true);
  const [hidden1, setHidden1] = useState<boolean>(true);


  function verification(){
    if(newPass == confirmPass && newPass !== "" && confirmPass !== ""){
      setUser({password:confirmPass})
      alert(JSON.stringify(user))
      const final = confirmPass;
      sessionStorage.setItem("s-pass",final)
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
        <div className='flex flex-row '>
        <input type={hidden ? 'password' : 'text'} className=' h-[50px] rounded-lg p-2  border-4 bg-white w-[90%] ' value={sessionStorage.getItem("s-pass")||confirmPass} placeholder='confirm password.' onChange={(e)=>{
          const value = e.target.value;
          //@ts-ignore
          setNewPass(value);
        }} />
        <button
          className=" btn btn-ghost"
          onClick={()=>{setHidden(!hidden);}}
        >
          {hidden ? <FaEyeSlash className=" h-6 w-6 text-gray-400 hover:text-gray-700" size={30} /> : <FaEye className="  h-6 w-6 text-gray-400 hover:text-gray-" size={30} />}
        </button>
        </div>
        </div>
        <div className='w-full ' >
        <p>password</p>
        <div className='flex flex-row '>
        <input type={hidden1 ? 'password' : 'text'} className=' h-[50px] rounded-lg p-2  border-4 bg-white w-[90%] ' value={sessionStorage.getItem("s-pass")||confirmPass} placeholder='confirm password.' onChange={(e)=>{
          const value = e.target.value;
          //@ts-ignore
          setConfirmPass(value);
        }} />
        <button
          className=" btn btn-ghost"
          onClick={()=>{setHidden1(!hidden);}}
        >
          {hidden ? <FaEyeSlash className=" h-6 w-6 text-gray-400 hover:text-gray-700" size={30} /> : <FaEye className="  h-6 w-6 text-gray-400 hover:text-gray-" size={30} />}
        </button>
        </div>
        </div>
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={verification} > save password</button>
    </div>
    </div>
  )
}

export default PasswordEntry