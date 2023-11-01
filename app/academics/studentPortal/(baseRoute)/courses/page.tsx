import Courses from '@/app/components/Courses'
import CoursesContent from '@/app/components/CoursesContent'
import DrawerStudent from '@/app/components/DrawerStudents'
import NotificationStudents from '@/app/components/NotificationStudents'
import React from 'react'

function page() {
  const prev= ()=>{
    return <div className='lg:flex lg:flex-row lg:justify-evenly '>
    <DrawerStudent/>
    <CoursesContent/>
    </div>
  }
  return (
    <div className='lg:flex lg:flex-row' >
    <Courses/>
    <div className="lg:w-[15%] bg-green-700 " ><NotificationStudents /></div>
    </div>
  )
}

export default page