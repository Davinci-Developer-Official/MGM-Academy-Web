import HeaderDash from '@/app/components/HeaderDash'
import React from 'react'
import Metrics from "./Metrics"
import Carousel from './Carousel'
import ba from "@/public/placeholders/ba.jpeg";
import bb from "@/public/placeholders/bb.jpeg";
import bc from "@/public/placeholders/bc.jpeg";

function Segment() {
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
    <div className=' h-screen flex flex-col  p-1 overflow-y-scroll ' >
        <HeaderDash/>
        <h1 className='text-center font-serif font-bold  ' >Welcome back Thomas </h1>
        <div className='' >
          <h2 className='text-center font-serif font-semibold  ' >Continue learning </h2>
          <Carousel items={items}/>
        </div>
        
        <Metrics/>
    </div>
  )
}

export default Segment