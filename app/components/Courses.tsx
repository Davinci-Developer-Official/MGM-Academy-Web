"use client"
import React, { useState } from 'react'
import SearchbarAsn from './SearchbarAsn'
import ba from "../../public/placeholders/ba.jpeg";
import bb from "../../public/placeholders/bb.jpeg";
import bc from "../../public/placeholders/bc.jpeg";
import Image from 'next/image';
import { FaCompress, FaExpand, FaSearch } from 'react-icons/fa';
import FilterSelectorCourses from './FilterSelectorCourses';
import LoadingCourses from './LoadingCourses';

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
    <div className='lg:w-full sm:w-full  flex flex-col  lg:h-screen  bg-[#e1b382] '>
       <SearchbarAsn/>
    
   
        <LoadingCourses  />
    </div>
  )
}

export default Courses