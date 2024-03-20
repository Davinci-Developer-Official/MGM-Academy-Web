'use client';
import React, { useState } from 'react'
import { FaCaretRight, FaPlus, FaTimes } from 'react-icons/fa'
import dummyPic from "@/public/empowerment/1.jpeg"


function CreateCourse({setcreatecourse,showEditor}:any) {
  const[courseInfo,setCourseInfo]=useState({
    coverimage:"",
    covervideo:"",
    coursename:"",
    coursecategory:"",
    unitcode:"",
    coursedescription:"",
    courseinstructor:"",
    courserequirements:""
  })
  return (
    <div>
      <form className='background p-10 overflow-y-scroll h-screen flex flex-col ' >
        <p className='w-[90%] mx-auto text-center font-bold  ' >CREATE A NEW COURSE</p>
      {/*-----course details-----*/}
      {/*----cover photo----*/}
      <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >cover image</p>
        </div>
        <input className='w-[80%] sm:w-[70%] p-6 ' type='file' placeholder='eg basic computer knowledge ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coverimage: value }));
    }} />
      </div>
      
     
      </div>
       {/*----cover photo----*/}
       <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >cover video</p>
        </div>
        <input className='w-[80%] sm:w-[70%] p-6 ' type='file' placeholder='eg basic computer knowledge 'onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, covervideo: value }));
    }} />
      </div>
      
     
      </div>
      {/*---course name / Title ---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >course name</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Project Managment ' onChange={(e:any)=>{
      const value = e.target.value;
      sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursename: value }));
    }} />
      </div>
      {/*---course category---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' h-[98%] my-auto lg:p-6 sm:p-4  ' >course category</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Information Technology ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursecategory: value }));
    }} />
      </div>
      {/*---course code---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >unit code</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg IT245 ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, unitcode: value }));
    }} />
      </div>
      {/*course description */}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >course description</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Learn to manage projects ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursedescription: value }));
    }} />
      </div>
      {/*---course instructor(s)---*/}
      <div className='mt-4 ' >
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >course Instructors</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg basic computer knowledge ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courseinstructor: value }));
    }} />
      </div>
     
      </div>
      {/*course requirements*/}
      <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5'>
        <div className='w-[20%] sm:w-[30%] text-center'>
          <p className='h-[98%] my-auto lg:p-6 sm:p-4'>course requirements</p>
        </div>
        <textarea className='w-[80%] sm:w-[70%] pl-3 p-2 re h-[100px] ' placeholder='eg basic computer knowledge' onChange={(e:any)=>{
      const value = e.target.value;
      sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courserequirements: value }));
    }} />
        </div>

      
      </div>
      

      {/*----create course button----*/}
      <div className='mt-10 justify-between flex flex-row' >
      <button className='btn flex flex-row btn-error  ' onClick={()=>{
        setcreatecourse(false);
      }} ><p>close</p><FaTimes size={15} /></button>
      <button className='btn btn-success flex flex-row ' onClick={(e)=>{
        e.preventDefault()
       // setcreatecourse(false);
       // showEditor(true)
        alert(JSON.stringify(courseInfo))
      }} ><p>Create Course</p><FaPlus size={15} /></button>
      </div>

    </form>
    </div>
  )
}

export default CreateCourse