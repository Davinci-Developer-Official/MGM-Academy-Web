import React from 'react'
import { FaCaretLeft } from 'react-icons/fa';

function Verify({setSlide4,setSlide5,setAddPassword}:any) {
  return (
    <div className='w-[60%] mx-auto font-mono mt-[100px] ' >
     <button className='flex flex-row btn btn-ghost ' onClick={()=>{
          setSlide5(false);
          setSlide4(true);
        }} > <FaCaretLeft size={20} /> back</button>
    <div className='flex flex-col  ' >
        <p className='mb-4  ' >Enter the verification code that was sent to your email address.<p className='text-[#e97902]' > b@gmail.com</p></p>
        <input type='email' className='h-[50px] rounded-lg p-2  border-4 bg-white ' placeholder='enter 6 digit code.' />
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={()=>{
            setSlide5(false);
            setAddPassword(true);
        }} > verify your account</button>
    </div>
    </div>
  )
}

export default Verify