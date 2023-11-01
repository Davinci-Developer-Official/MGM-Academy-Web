"use client"
import React, { useState } from 'react'
import SearchbarAsn from './SearchbarAsn'
import ba from "../../public/placeholders/ba.jpeg";
import bb from "../../public/placeholders/bb.jpeg";
import bc from "../../public/placeholders/bc.jpeg";
import Image from 'next/image';
import { FaCompress, FaExpand, FaSearch } from 'react-icons/fa';
import FilterSelectorCourses from './FilterSelectorCourses';

function Courses() {
    const items = [
        {
          "id":1,
          "courseName":"Sub-poena drafting ",
          "courseInstructor":"John Lenon",
          "coverImage":ba,
          "locked":true
      },{
          "id":2,
          "courseName":"Litigation drafting ",
          "courseInstructor":"Grace Lenon",
          "coverImage":bb,
          "locked":true
      },{
          "id":3,
          "courseName":"Ui Design drafting ",
          "courseInstructor":"Thomas Mithamo",
          "coverImage":bc,
          "locked":true
      },{
          "id":4,
          "courseName":"Mental Health ",
          "courseInstructor":"Grace williams",
          "coverImage":ba,
          "locked":true
      },{
          "id":5,
          "courseName":"Mistrial ",
          "courseInstructor":"Miss Kim",
          "coverImage":bb,
          "locked":true
      }, {
        "id":6,
        "courseName":"Sub-poena drafting ",
        "courseInstructor":"John Lenon",
        "coverImage":ba,
        "locked":true
    },{
        "id":7,
        "courseName":"Litigation drafting ",
        "courseInstructor":"Grace Lenon",
        "coverImage":bb,
        "locked":true
    },{
        "id":8,
        "courseName":"Ui Design drafting ",
        "courseInstructor":"Thomas Mithamo",
        "coverImage":bc,
        "locked":true
    },{
        "id":9,
        "courseName":"Mental Health ",
        "courseInstructor":"Grace williams",
        "coverImage":ba,
        "locked":true
    },{
        "id":10,
        "courseName":"Mistrial ",
        "courseInstructor":"Miss Kim",
        "coverImage":bb,
        "locked":true
    }, {
        "id":11,
        "courseName":"Sub-poena drafting ",
        "courseInstructor":"John Lenon",
        "coverImage":ba,
        "locked":true
    },{
        "id":12,
        "courseName":"Litigation drafting ",
        "courseInstructor":"Grace Lenon",
        "coverImage":bb,
        "locked":true
    },{
        "id":13,
        "courseName":"Ui Design drafting ",
        "courseInstructor":"Thomas Mithamo",
        "coverImage":bc,
        "locked":true
    },{
        "id":14,
        "courseName":"Mental Health ",
        "courseInstructor":"Grace williams",
        "coverImage":ba,
        "locked":true
    },{
        "id":15,
        "courseName":"Mistrial ",
        "courseInstructor":"Miss Kim",
        "coverImage":bb,
        "locked":true
    }, {
      "id":16,
      "courseName":"Sub-poena drafting ",
      "courseInstructor":"John Lenon",
      "coverImage":ba,
      "locked":true
  },{
      "id":17,
      "courseName":"Litigation drafting ",
      "courseInstructor":"Grace Lenon",
      "coverImage":bb,
      "locked":true
  },{
      "id":18,
      "courseName":"Ui Design drafting ",
      "courseInstructor":"Thomas Mithamo",
      "coverImage":bc,
      "locked":true
  },{
      "id":19,
      "courseName":"Mental Health ",
      "courseInstructor":"Grace williams",
      "coverImage":ba,
      "locked":true
  },{
      "id":20,
      "courseName":"Mistrial ",
      "courseInstructor":"Miss Kim",
      "coverImage":bb,
      "locked":true
  }
      ];
      const[scrollbar,showScrollbar]=useState(false)

  return (
    <div className='lg:w-full sm:w-full  flex flex-col  lg:h-screen  '>
       <SearchbarAsn/>
    <div className='h-[50px] mt-2  bg-white w-[90%] mx-auto flex flex-row  mb-3 '>
        <FilterSelectorCourses/>
        {scrollbar?<button className='btn btn-ghost text-green-700 py-auto ' onClick={()=>showScrollbar(false)} ><FaExpand/></button>:<button className='btn btn-ghost py-auto ' onClick={()=>showScrollbar(true)} ><FaCompress/></button>}
    </div>
   
    <div className='lg:w-[85%] sm:w-full  mx-auto h-[650px] md:h-[950px]  flex flex-col bg-base  overflow-y-scroll ' >
    {items.map(items=>(
            <div className='w-[80%] mx-auto mt-3 mb-3 h-[300px] flex flex-col border-[3px] border-green-700 rounded-md  '  >
            <Image src={items.coverImage} alt={items.courseName} style={{
              width:"100%",
              height:"240px",
              objectFit:"cover",
              backgroundColor:"grey",         
            }} className='rounded-tl-md rounded-tr-md ' /> 
            <div className='flex flex-row h-[60px]  justify-between bg-blue-300 rounded-bl-md rounded-br-md '   >
             <div className='flex flex-col ml-2 w-[80%] ' >
             <h2 className='text-base text-black pt-2 ' > {items.courseName}</h2>
             <p className='text-sm text-black ' >Instructed by: {items.courseInstructor}</p>
             </div>
             <button className='btn btn-success mt-1 mr-1 sm:text-sm text-black  w-[20%] ' >
              view course
              
             </button>
            </div>      
            </div>
            
        ))}
    </div>
    </div>
  )
}

export default Courses