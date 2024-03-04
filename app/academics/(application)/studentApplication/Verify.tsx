import React from 'react'

function Verify({setSlide5}:any) {
  return (
    <div className='w-[60%] mx-auto font-mono ' >
    <div className='flex flex-col mt-[200px] ' >
        <p className='mb-4  ' >Enter the verification code that was sent to your email address.<p className='text-[#e97902]' > b@gmail.com</p></p>
        <input type='email' className='h-[50px] rounded-lg p-2  border-4 bg-white ' placeholder='enter 6 digit code.' />
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={()=>{
            setSlide5(false);
        }} > verify your account</button>
    </div>
    </div>
  )
}

export default Verify