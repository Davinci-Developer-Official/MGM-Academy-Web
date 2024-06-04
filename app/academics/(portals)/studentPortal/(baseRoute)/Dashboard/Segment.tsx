'use client';
import HeaderDash from '@/app/components/HeaderDash'
import React, { useEffect, useState } from 'react'
import Metrics from "./Metrics"
import Carousel from './Carousel'
import ba from "@/public/placeholders/ba.jpeg";
import bb from "@/public/placeholders/bb.jpeg";
import bc from "@/public/placeholders/bc.jpeg";
import Image from 'next/image';
import BootstrapCarousel from './BootstrapCarousel';

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
  const[progress,showProgress]=useState(false);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
  ];

  useEffect(()=>{},[progress]);
  return (
    <div className='bg-white rounded-lg border border-b-[#e97902] h-screen flex flex-col  p-1  ' >
       {/* <HeaderDash/>*/}
        
        <div className="title p-2 text-center font-serif font bold flex flex-row justify-evenly " >
          <p>11-05-2024</p>
          <p>Upcoming activity</p>
          <p>welcome back: Thomas</p>
        </div>

        {/* carousel */}
        <div className="carousel w-full">
        {images.map((image, index) => (
          <div id={`item${index + 1}`} className="carousel-item w-full" key={index}>
            <img src={image} className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {images.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-ghost" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
      
      {/*<Carousel items={items}/>*/}
      {/*<BootstrapCarousel/>*/}
        {/*
        tabIndex={0}
        styling:"collapse collapse-arrow font-serif text-center font-semibold  border border-base-300 bg-base-200"*/}
    <div  className="flex flex-col  backdrop: w-[99%] mx-auto  text-black font-serrif  ">
      
    <div className='w-full justify-center  flex flex-col p-1  ' >
      <p className=' text-center text-lg p-1 font-bold ' >course overview</p>
      <div className='justify-center flex flex-row w-full  p-1 ' >
      {/*courses Taken*/}
      <div className='flex flex-col btn btn-ghost bg-gray-200 h-[100px] w-[100px] ml-2 p-1 rounded-lg text-center ' >
      <p className='text-xs  ' > Topics </p>
      <p className='text-4xl' >20%</p>
      <p className='text-xs  ' >completion </p>
      </div>
      {/*completion % */}
      <div className='flex flex-col btn btn-ghost bg-gray-200 h-[100px] w-[100px] ml-2 p-1 rounded-lg text-center ' >
      <p className='text-xs  ' >Assignments </p>
      <p className='text-4xl' >12%</p>
      <p className='text-xs  ' >completion </p>
      </div>
      {/*notifications*/}
      <div className='flex flex-col btn btn-ghost bg-gray-200 h-[100px] w-[100px] ml-2 p-1 rounded-lg text-center ' >
      <p className='text-xs  ' >quizes </p>
      <p className='text-4xl' >12%</p>
      <p className='text-xs  ' >completion </p>
      </div>
      
      </div>
  
    
    
    
    
      <button className="btn w-[290px] lg:ml-[60%] sm:mx-auto text-black hover:bg-gray-300 text-xl font-medium bg-white text-center "
      onClick={()=>{
        showProgress(true);
      }}
      >
        Track your progress
      </button></div>
      {/*styling:"collapse-content overflow-y-scroll h-full  "*/}
      
      
      {progress&&<div className="overflow-y-scroll h-[400px]  ">
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
    </div>}

      </div>
      
      </div>
   
          
         
        
        
        
  
  )
}

export default Segment