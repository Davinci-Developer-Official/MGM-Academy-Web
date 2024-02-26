'use client';
import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa';

function Exposure({setSlide3,setSlide4}:any) {
    const[exposure,setexposure]=useState("");

  return (
   <>
     {/*exposure*/}
     <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 font-mono '  >
        <p className='font-mono font-bold' >How did you find out about us</p>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
           setexposure("youtube")
          }} />
          <p className='ml-2 font-mono font-bold ' >Youtube ads</p>
        </div>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
           setexposure("facebook")
          }} />
          <p className='ml-2 font-mono font-bold' >Facebook ads</p>
        </div>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
            setexposure("instagram")
          }} />
          <p className='ml-2 font-mono font-bold' >Instagram ads</p>
        </div>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
            setexposure("twitter(X)")
          }} />
          <p className='ml-2 font-mono font-bold' >Twitter(X) ads</p>
        </div>
        <div className='flex flex-row p-2 ' >
          <input type="radio" onChange={(e:any)=>{
            setexposure("snapchat")
          }} />
          <p className='ml-2 font-mono font-bold' >Snapchat ads</p>
        </div>
        <div className='flex flex-col p-2 ' >
          <p className='ml-2 font-mono font-bold ' >Other platforms </p>
          <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='state the platform / influencer /reference / website  ' value={exposure} onChange={(e:any)=>{
          const value = e.target.value;
          setexposure(value)
        }}  />         
        </div>
        </div>
        {/*continue*/}
        <button className='btn btn-success w-[80%] ml-[10%] mt-5 justify-between  ' onClick={()=>{
          setSlide3(false);
          setSlide4(true);
        }} >continue <FaCaretRight size={20} /> </button>
        {/*skip*/}
        <button className='btn btn-ghost ml-[10%] mt-2 ' onClick={()=>{
          setSlide3(false);
          setSlide4(true);
        }} >skip</button>
   </>
  )
}

export default Exposure