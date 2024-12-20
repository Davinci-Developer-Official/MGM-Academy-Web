'use client'
import NotificationInstructors from '@/app/components/NotificationInstructor'
import React, { useEffect, useState } from 'react'
import UpdatesCard from './UpdatesCard'
import Cookies from "js-cookie"
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'
import Content from './Content'

interface Instructor {
  instructor:string;
  name:string;
}

function Page() {
  const [instructorInfo,setInstructorInfo]=useState<Instructor[]>([])
  const[instructor,setInstructor]=useState<string>("")
  useEffect(()=>{
    async function get_instructor(){
      try {
        const data = Cookies.get('i-name')
        //alert(data)
        //@ts-ignore
        {instructor==""&&setInstructor(data)}
        if(data?.length==0){
          const response = await fetch(`/api/remodelled/get_instructor_by_id?id=${data}`);
          const info = await response.json()
          alert(info)
        }
        
      } catch (error) {
        alert(error)

      }
    }
    get_instructor()
  },[])
  
  return (
    <div className='background ' >
    <div className='w-full h-screen  overflow-y-scroll ' >
    <div className='flex flex-row ' >
    <p className='pt-7 pl-5 text-[25px] text-[#2d545e] font-mono  ' >Welcome back {instructor} </p> 
    
    </div>
   {/* <UpdatesCard/>*/}
   <Content/>
    </div>   
    <NotificationInstructors/>
    
    </div>
  )
}

export default Page