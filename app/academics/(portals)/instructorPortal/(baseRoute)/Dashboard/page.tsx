'use client'
import NotificationInstructors from '@/app/components/NotificationInstructor'
import React, { useEffect } from 'react'
import UpdatesCard from './UpdatesCard'
import Cookies from "./Cookies"
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'

function Page() {
  useEffect(()=>{
    setTimeout(()=>{
      return <Cookies/>
    },100)
  },[])
  return (
    <div className='background ' >
    <div className='w-full h-screen  overflow-y-scroll ' >
    <div className='flex flex-row ' >
    <p className='pt-7 pl-5 text-[25px] text-[#2d545e] font-mono  ' >Welcome back Thomas </p> 
    
    </div>
    <UpdatesCard/>
    </div>   
    <NotificationInstructors/>
    
    </div>
  )
}

export default Page