import React from 'react'
import Carousel from './CoursesCourasel'
import ba from "../../public/placeholders/ba.jpeg";
import bb from "../../public/placeholders/bb.jpeg";
import bc from "../../public/placeholders/bc.jpeg";
import DashMetricsStudents from './DashMetricsStudents';
import { FaBinoculars, FaHome, FaSearch } from 'react-icons/fa';
import FindCourse from './FindCourse';
import HeaderDash from './HeaderDash';


function DashContents() {
  const items = [
    {
      "id":1,
      "courseName":"Sub-poena drafting ",
      "courseInstructor":"John Lenon",
      "coverImage":ba
  },{
      "id":2,
      "courseName":"Litigation drafting ",
      "courseInstructor":"Grace Lenon",
      "coverImage":bb
  },{
      "id":3,
      "courseName":"Ui Design drafting ",
      "courseInstructor":"Thomas Mithamo",
      "coverImage":bc
  },{
      "id":4,
      "courseName":"Mental Health ",
      "courseInstructor":"Grace williams",
      "coverImage":ba
  },{
      "id":5,
      "courseName":"Mistrial ",
      "courseInstructor":"Miss Kim",
      "coverImage":bb
  }
  ];
  return (
    <div className='lg:w-full sm:w-full h-screen overflow-y-scroll background '  >
       <div className='h-[80px]   w-full ' >
       <HeaderDash/>
       
       </div>
        {/*column*/}
        <div className=' mx-auto w-4/5 flex flex-col  mb-5  ' >
            <p className='h-10  text-lg text-[#e97902] text-center font-mono font-bold  '>View Your courses</p>
            <Carousel items={items} />
            <DashMetricsStudents/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default DashContents