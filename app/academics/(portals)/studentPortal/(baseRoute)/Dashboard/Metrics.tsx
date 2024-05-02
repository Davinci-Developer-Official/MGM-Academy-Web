"use client";
import React, { useState } from 'react'

function DashMetricsStudents() {
  const[coursesTakenNo,setCoursesTakenNo]=useState(0)
  const[coursesCompletedNo,setCoursesCompletedNo]=useState(0)
  const[certificatesEarnedNo,setCertificatesEarnedNo]=useState(0)
  const[hoursSpentNo,sethoursSpentNo]=useState(0)

  return (
    <div className='h-[450px]  rounded-md border border-[#e1b382]" flex flex-col  ' >
        <p className='text-center p-2 text-[#e97902] text-xl h-[50px] pt-[10px] ' > Progress Tracker </p>
        {/*Row 1*/}
        <div className='h-[200px] w-full flex flex-row justify-evenly  ' >
          {/*courses taken label*/}
        <label className='w-[200px] h-[80%]  my-auto rounded-md border    '  >
          <div className='w-full h-[20%]  text-center pt-2 rounded-tr-md rounded-tl-md  ' >
            Courses Taken
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md  ' >
            {coursesTakenNo}
          </div>
        </label>
         {/*courses completed label*/}
        <label className='w-[200px]  h-[80%] my-auto rounded-md border    '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md  ' >
            Courses Completed
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md   ' >
            {coursesCompletedNo}
          </div>
        </label>
        </div>
        {/*Row 2*/}
        <div className='h-[200px] w-full flex flex-row bg-base justify-evenly rounded-bl-md rounded-br-md ' >
          {/*certificates earned label*/}
        <label className='w-[200px]  h-[80%] my-auto rounded-md border   '  >
          <div className='w-full h-[20%] text-center pt-2 rounded-tr-md rounded-tl-md  ' >
            Certificates Earned
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md   ' >
            {certificatesEarnedNo}
          </div>
        </label>
        {/*hours spent label*/}
        <label className='w-[200px]  h-[80%] my-auto rounded-md border '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md ' >
            Hours Spent
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md   ' >
            {hoursSpentNo}
          </div>
        </label>
        </div>
    </div>
  )
}

export default DashMetricsStudents