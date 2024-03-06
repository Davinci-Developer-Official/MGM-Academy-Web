import React from 'react'

function PasswordEntry() {
  return (
    <div className='w-[60%] mx-auto font-mono ' >
    <div className='flex flex-col mt-[200px] ' >
        <p className='mb-4  ' >Setup the password for your account</p>
        <div className='w-full ' >
        <p>password</p>
        <input type='email' className='w-full h-[50px] rounded-lg p-2  border-4 bg-white ' placeholder='enter 6 digit code.' />
        </div>
        <div className='w-full ' >
        <p>password</p>
        <input type='email' className='w-full h-[50px] rounded-lg p-2  border-4 bg-white  ' placeholder='enter 6 digit code.' />
        </div>
        <button className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={()=>{
            //setSlide5(false);
        }} > save password</button>
    </div>
    </div>
  )
}

export default PasswordEntry