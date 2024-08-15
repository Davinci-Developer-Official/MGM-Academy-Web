'use client'
import React, { useCallback, useEffect, useState } from 'react'

function Timer() {
    const[format,setFormat]=useState('AM/PM')
    setTimeout(()=>{
    
    },10)
    const Timex =useCallback(()=>{
        if(format=='AM/PM'){
        const gen = new Date();
        const hour = gen.getHours();
        const minutes= gen.getMinutes();
        const seconds = gen.getSeconds();
        const time = hour + ':' + minutes + ':' + seconds ;
        return time
        }else{
        const gen = new Date();
        const hour = gen.getUTCHours();
        const minutes= gen.getUTCMinutes();
        const seconds = gen.getUTCSeconds();
        const time = hour + ':' + minutes + ':' + seconds ;
        return time;
        }
    },[format]);

    const Datex= useCallback(()=>{
        const gen =  new Date();
        const day = gen.getDay();
        const month = gen.getMonth();
        const year = gen.getFullYear();
        const date = day + '/' + month + '/' + year
        return date;
    },[]);

  return (
    <div className='flex flex-col h-[200px] w-[60%] mx-auto bg-red-500 p-2 '>
        <button className={format=='AM/PM'?'btn btn-ghost w-[80%] mx-auto bg-green-400 ':'btn btn-ghost w-[80%] mx-auto bg-blue-400 '} onClick={()=>{
            setFormat('AM/PM')
        }} onDoubleClick={()=>{
            setFormat('24HRS')
        }}>{format}</button>
     <div className='w-[80%] mx-auto rounded-md  mt-2 bg-white h-[150px] mx-auto my-auto '>
        <p className='text-xl font-mono ml-[90px] mt-2 '><Datex/></p>
       <p className='text-3xl font-mono ml-[90px] mt-7 '> <Timex/></p>
     </div>
    </div>
  )
}

export default Timer
