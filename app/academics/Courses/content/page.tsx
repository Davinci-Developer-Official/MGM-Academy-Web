"use client"
import ChaptersDrawer from '@/app/components/ChaptersDrawer'
import MediaDrawer from '@/app/components/MediaDrawer'
import React, { useEffect, useState } from 'react'
import Chapter from './Chapter'

function Page() {
  const[course_name,set_course_name]= useState("")
  useEffect(()=>{},[course_name]);
  return (
    //open course;
    <div className='lg:flex lg:flex-row   ' >
      {/*chapters drawer*/}
    <div className='lg:w-[280px]' ><ChaptersDrawer/></div>
      {/*chapter content segment */}
    <div className='flex flex-col w-full h-screen ' >
      {/*Chapter header || chapter name*/}   
    <div className='h-fit  mt-10 p-2 text-[#e1b382] w-[90%] mx-auto text-xl  text-center font-bold border-b-[#e1b382] border-b-solid border-b-[2px] ' > 
    {course_name}
    </div>
      {/*Chapter content*/}
    <Chapter set_course_name={set_course_name} />
    </div>
      {/*media & documents drawer*/}
    <div className='lg:w-[240px]' ><MediaDrawer/></div>
    </div>
    //open course;
  )
}

export default Page;