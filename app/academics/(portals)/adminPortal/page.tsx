"use client";
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg'
import Image from 'next/image';
import data from './data.json'

export interface Courses {
      id:number;
      course_id:string;
      course_name:string;
      course_instructor:string;
      price:string;
}
export interface Students {
      id:number,
      student_id:string;
      student_name:string;
}
export interface Instructors{
      id:number,
      instructor_id:string;
      instructor_name:string;
      instructor_rating:string
}
export interface Payments {
      id:1,
      payer:string;
      card:string;
      payee:string;
      agent:string;
      amount:string;
      date:string;
}
function page() {
  const[searchParams,setSearchParams]=useState<boolean>(false);
  const[searchParamData,setSearchParamData]=useState<Courses[]| Students[]| Instructors[]| Payments[]>([]);
  const[filterOption,setFilterOption]=useState<string>('ALL');
 
  if(filterOption.toLocaleUpperCase()=="ALL"){
    const newData = [...data.courses,...data.instructors,...data.students,...data.payments];
   //alert(JSON.stringify(newData));
   //@ts-ignore
   //setSearchParamData(JSON.stringify(newData))

    //alert('all')
  }else if(filterOption.toLocaleUpperCase()=="STUDENTS"){
    alert('students')
  }else if(filterOption.toLocaleUpperCase()=="COURSES"){
    alert('courses')
  }else if(filterOption.toLocaleUpperCase()=="INSTRUCTORS"){
    alert('instructors')
  }else if(filterOption.toLocaleUpperCase()=="PAYMENTS"){
    alert('payments')
  }else{
    alert('error not filtered')
  }

  return (
    <div className='overflow-y-scroll h-screen ' >
      <div className='card bg-gray-200 w-[80%] p-2 mx-auto h-[540px] my-auto  '>

        <div className='h-[400px] w-[99%] mx-auto rounded-md '>
          <p className='absolute pt-5 bg-gray-100 p-2 rounded-tl-md rounded-br-md ' >Information desk</p>
          <Image src={placeholder} alt='card image' className='rounded-md w-full h-full object-fit'  />
        </div>

      <div className='bg-white w-[99%] mx-auto h-fit flex flex-col p-1 mt-1 ' >
    
    <div className=" w-[90%] mx-auto  mt-1 ">
<div>
  <div>
    <input className="input w-[80%] mx-auto input-bordered join-item" placeholder="Search"  onClick={()=>{
    setSearchParams(true)
    }}
     />
  </div>
</div>
<select className="select select-bordered join-item hover:bg-green-400">
  <option disabled selected>Filter</option>
  <option onClick={()=>{
    setFilterOption('ALL')
  }} >ALL</option>
  <option onClick={()=>{
    setFilterOption('STUDENTS')
  }}>students</option>
  <option onClick={()=>{
    setFilterOption('COURSES')
  }}>courses</option>
  <option onClick={()=>{
    setFilterOption('INSTRUCTORS')
  }}>instructors</option>
</select>
<div className="indicator">
  
  <button className="btn text-black hover:bg-green-400 join-item"><FaSearch size={20} /></button>
</div>
</div>
</div>

      </div>
      {searchParams&&<div className='w-[80%] mx-auto mb-1 mt-1 bg-gray-200 h-[400px] card overflow-y-scroll p-2 '>
        params
        </div>}
    </div>
  )
}

export default page
