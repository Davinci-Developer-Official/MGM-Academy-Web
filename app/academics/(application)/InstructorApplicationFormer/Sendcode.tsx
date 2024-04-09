import React from 'react'

function Sendcode({setSlide4,setSlide5}:any) {
  return (
    <div className='w-[60%] mx-auto font-mono ' >
    <div className='flex flex-col mt-[200px] ' >
        <p className='mb-4  ' >verification code will be sent to your email address you provide.</p>
        <input type='email' className='h-[50px] rounded-lg p-2  border-4 bg-white ' placeholder='enter email' />
        <button  className='btn btn-success mt-4 w-[80%] mx-auto ' onClick={()=>{
          
          setSlide4(false);
          setSlide5(true);
        }} >send verification code</button>
    </div>
    </div>
  )
}

export default Sendcode