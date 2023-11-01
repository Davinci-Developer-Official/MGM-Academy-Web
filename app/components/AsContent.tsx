'use client';
import React, { useState } from 'react'
import ba from "../../public/placeholders/ba.jpeg";
import bb from "../../public/placeholders/bb.jpeg";
import bc from "../../public/placeholders/bc.jpeg";
import SearchbarAsn from './SearchbarAsn';
import FilterAsn from './FilterAsn';
import { FaArrowRight, FaCompress, FaExpand, FaLock } from 'react-icons/fa';
import Image from 'next/image';
//import Choices from './Choices';
import FilterSelectorCourses from './FilterSelectorCourses';

function AsContent() {
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
    <div className='lg:w-full sm:w-full  flex flex-col '>
    <SearchbarAsn/>
    <div className='h-[50px] mt-2 bg-white w-[90%] mx-auto flex flex-row  mb-3 '>
        <FilterSelectorCourses/>
        {scrollbar?<button className='btn btn-ghost text-green-700 py-auto ' onClick={()=>showScrollbar(false)} ><FaExpand/></button>:<button className='btn btn-ghost py-auto ' onClick={()=>showScrollbar(true)} ><FaCompress/></button>}
    </div>
    <div className={scrollbar?' lg:w-[85%] sm:w-full  mx-auto  flex flex-col bg-base  overflow-y-scroll  ':'lg:w-full sm:w-full flex flex-col bg-base  overflow-y-scroll  '} >
       
        {items.map(items=>(
            <div key={items.id} className='bg-white mt-[10px] w-[90%] mx-auto mb-[10px] rounded-md flex flex-row h-18 border-[2.7px] border-green-500  ' >
            <span className=' h-18 rounded-tl-md rounded-bl-md  bg-red-400 w-[20%] ' >
            <Image className='rounded-tl-md rounded-bl-md'  src={items.coverImage} alt={`${items.courseName} cover photo` } style={{
                height:"100%",
                width:"100%",
                objectFit:"fill"
            }}  />
            </span>
             <div className='flex flex-col text-black sm:pt-1 lg:pt-4 w-[80%] pl-10 pt-auto ' >
                <p className='sm:text-base md:text-base lg:text-xl ' >{items.courseName}</p>
                <p className='sm:text-xs md:text-xs lg:text-base ' > instructor: {items.courseInstructor}</p>
             </div>
             
             <button className='flex flex-row my-auto mr-2  btn  btn-success ' >View  </button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default AsContent