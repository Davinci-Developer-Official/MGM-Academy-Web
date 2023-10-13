import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import NotificationStudents from './NotificationStudents'
import CoursesCourasel from './CoursesCourasel'
import ba from "../public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import bb from "../public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import bc from "../public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import DashContents from './DashContents'

function DashboardContent() {
  const items=[
    {
        id:1,
        courseName:"Sub-poena drafting ",
        courseInstructor:"John Lenon",
        coverImage:ba
    },{
        id:2,
        courseName:"Litigation drafting ",
        courseInstructor:"Grace Lenon",
        coverImage:bb
    },{
        id:3,
        courseName:"Ui Design drafting ",
        courseInstructor:"Thomas Mithamo",
        coverImage:bc
    },{
        id:4,
        courseName:"Mental Health ",
        courseInstructor:"Grace williams",
        coverImage:ba
    },{
        id:5,
        courseName:"Mistrial ",
        courseInstructor:"Miss Kim",
        coverImage:bb
    }
  ]

  return (
    <div className='sm:w-full  lg:flex lg:flex-row lg:w-4/5  ' >
        <NotificationStudents/>
        <DashContents/>
        
    </div>
  )
}

export default DashboardContent