'use client';
import HeaderDash from '@/app/components/HeaderDash'
import React, { useState } from 'react'
import Metrics from "./Metrics"
import Carousel from './Carousel'
import ba from "@/public/placeholders/ba.jpeg";
import bb from "@/public/placeholders/bb.jpeg";
import bc from "@/public/placeholders/bc.jpeg";
import Image from 'next/image';

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
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  return (
    <div className=' h-screen flex flex-col  p-1  ' >
       {/* <HeaderDash/>*/}
        
        <div className="title p-2 text-center font-serif font bold flex flex-row justify-evenly " >
          <p>11-05-2024</p>
          <p>Upcoming activity</p>
          <p>welcome back: Thomas</p>
        </div>

      
      <Carousel items={items}/>
        {/*
        tabIndex={0}
        styling:"collapse collapse-arrow font-serif text-center font-semibold  border border-base-300 bg-base-200"*/}
    <div  className="flex flex-col  backdrop: w-full  text-black font-serrif  ">
      <div className="collapse-title text-xl font-medium bg-white text-center ">
        Track your progress
      </div>
      {/*styling:"collapse-content overflow-y-scroll h-full  "*/}
      
      
      <div className="overflow-y-scroll h-[400px]  ">
      <table className="table">
        {/* head */}
        <thead>
          <tr className='text-black text-lg font-serif '>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>cover image</th>
            <th>Course Name</th>
            <th>Course Instructor</th>
            <th>Course completion%</th>
            <th>Assignment Completion%</th>
            <th>Quizzes Completion%</th>
            <th>CAT Completion%</th>
            <th>Attendance%</th>
            <th>Average Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the data array to render rows dynamically */}
          {items.map(item => (
            <tr key={item.id} className='text-black text-lg font-serif   '  >
              <td>
                <label>
                <input
                        type="checkbox"
                        className="checkbox  bg-gray-400 "
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image  src={item.coverImage} alt="Avatar" />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
              <div className="font-bold  ">{item.courseName}</div>

              </td>
              <td>
              <div className="text-sm font-semibold font-serif  ">{item.courseInstructor}</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif  " >100</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif  " >80</div>
              </td>
              <td>
              <div className="text-sm font-semibold font-serif   " >70</div>
              </td>
              <td>
              <div className="text-sm font-semibold font-serif   " >80</div>
              </td>
              <td>
              <div className="text-sm font-semibold font-serif   " >80</div>
              </td>
              <td>
              <div className="text-sm font-semibold font-serif   " >B+ (70)</div>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr className='text-black text-lg font-serif ' >
            <th></th>
            <th>cover image</th>
            <th>Course Name</th>
            <th>Course Instructor</th>
            <th>Course completion%</th>
            <th>Assignment Completion%</th>
            <th>Quizzes Completion%</th>
            <th>CAT Completion%</th>
            <th>Attendance%</th>
            <th>Average Grade</th>
          </tr>
        </tfoot>
      </table>
    </div>
      </div>
      </div>
   
          
         
        
        
        
  
  )
}

export default Segment