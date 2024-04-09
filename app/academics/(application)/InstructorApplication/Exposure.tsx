'use client';
import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

function Exposure({setSlide2,setSlide3,setSlide4,user,setUser}:any) {
    const[exposure,setexposure]=useState("");
    function thanksForTheReview(){
      if(1===1){
        setSlide3(false);
          setSlide4(true);
      }
    }
  return (
   <>
   <button className='flex flex-row btn btn-ghost ' onClick={()=>{
          setSlide3(false);
          setSlide2(true);
        }} > <FaCaretLeft size={20} /> back</button>
     {/*exposure*/}
     <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 font-mono '  >
        <p className='font-mono font-bold' >How did you find out about us</p>
        <div className='flex flex-row p-2 ' >
  <input type="radio" checked={sessionStorage.getItem("s-exposure") === "youtube"} onChange={(e:any)=>{
    sessionStorage.setItem("s-exposure", "youtube");
    //@ts-ignore
    setUser(prevUser => ({ ...prevUser, exposure: "youtube" }));
  }} />
  <p className='ml-2 font-mono font-bold' >Youtube ads</p>
</div>
<div className='flex flex-row p-2 ' >
  <input type="radio" checked={sessionStorage.getItem("s-exposure") === "facebook"} onChange={(e:any)=>{
    sessionStorage.setItem("s-exposure", "facebook");
    //@ts-ignore
    setUser(prevUser => ({ ...prevUser, exposure: "facebook" }));
  }} />
  <p className='ml-2 font-mono font-bold' >Facebook ads</p>
</div>
<div className='flex flex-row p-2 ' >
  <input type="radio" checked={sessionStorage.getItem("s-exposure") === "instagram"} onChange={(e:any)=>{
    sessionStorage.setItem("s-exposure", "instagram");
    //@ts-ignore
    setUser(prevUser => ({ ...prevUser, exposure: "instagram" }));
  }} />
  <p className='ml-2 font-mono font-bold' >Instagram ads</p>
</div>
<div className='flex flex-row p-2 ' >
  <input type="radio" checked={sessionStorage.getItem("s-exposure") === "twitter(X)"} onChange={(e:any)=>{
    sessionStorage.setItem("s-exposure", "twitter(X)");
    //@ts-ignore
    setUser(prevUser => ({ ...prevUser, exposure: "twitter(X)" }));
  }} />
  <p className='ml-2 font-mono font-bold' >Twitter(X) ads</p>
</div>
<div className='flex flex-row p-2 ' >
  <input type="radio" checked={sessionStorage.getItem("s-exposure") === "snapchat"} onChange={(e:any)=>{
    sessionStorage.setItem("s-exposure", "snapchat");
    //@ts-ignore
    setUser(prevUser => ({ ...prevUser, exposure: "snapchat" }));
  }} />
  <p className='ml-2 font-mono font-bold' >Snapchat ads</p>
</div>

        <div className='flex flex-col p-2 ' >
          <p className='ml-2 font-mono font-bold ' >Other platforms </p>
          <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='state the platform / influencer /reference / website  ' value={sessionStorage.getItem("s-exposure")||user.exposure} onChange={(e:any)=>{
          const value = e.target.value;
          sessionStorage.setItem("s-exposure",value)
          //@ts-ignore
          setUser({exposure:value})
        }}  />         
        </div>
        </div>
        {/*continue*/}
        <button className='btn btn-success w-[80%] ml-[10%] mt-5 justify-between  ' onClick={thanksForTheReview} >continue <FaCaretRight size={20} /> </button>
        {/*skip*/}
        <button className='btn btn-ghost ml-[10%] mt-2 ' onClick={()=>{
          setSlide3(false);
          setSlide4(true);
        }} >skip</button>
   </>
  )
}

export default Exposure