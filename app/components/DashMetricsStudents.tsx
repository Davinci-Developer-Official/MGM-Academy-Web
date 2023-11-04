"use client";
import React, { useState } from 'react'

function DashMetricsStudents() {
  const[coursesTakenNo,setCoursesTakenNo]=useState(0)
  const[coursesCompletedNo,setCoursesCompletedNo]=useState(0)
  const[certificatesEarnedNo,setCertificatesEarnedNo]=useState(0)
  const[hoursSpentNo,sethoursSpentNo]=useState(0)

  return (
    <div className='h-[450px] bg-base rounded-md border border-[#e1b382]" flex flex-col  ' >
        <p className='text-center text-[#2d545e] text-xl h-[50px] pt-[10px] ' > Progress Tracker </p>
        {/*Row 1*/}
        <div className='h-[200px] w-full flex flex-row bg-base justify-evenly  ' >
        <label className='w-[200px] bg-base h-[80%]  my-auto rounded-md border  border-[#2d545e] '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-[#2d545e] ' >
            Courses Taken
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-[#2d545e]  ' >
            {coursesTakenNo}
          </div>
        </label>
        <label className='w-[200px] bg-base h-[80%] my-auto rounded-md border  border-[#2d545e] '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-[#2d545e] ' >
            Courses Completed
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-[#2d545e]  ' >
            {coursesCompletedNo}
          </div>
        </label>
        </div>
        {/*Row 2*/}
        <div className='h-[200px] w-full flex flex-row bg-base justify-evenly rounded-bl-md rounded-br-md ' >
        <label className='w-[200px] bg-base h-[80%] my-auto rounded-md border  border-[#2d545e] '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-[#2d545e] ' >
            Certificates Earned
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-[#2d545e]  ' >
            {certificatesEarnedNo}
          </div>
        </label>
        <label className='w-[200px] bg-base h-[80%] my-auto rounded-md border border-[#2d545e]  '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-[#2d545e] ' >
            Hours Spent
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-[#2d545e]  ' >
            {hoursSpentNo}
          </div>
        </label>
        </div>
    </div>
  )
}

export default DashMetricsStudents