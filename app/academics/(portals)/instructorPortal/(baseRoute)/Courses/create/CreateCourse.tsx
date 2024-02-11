import React from 'react'
import { FaCaretRight, FaPlus, FaTimes } from 'react-icons/fa'
import dummyPic from "@/public/empowerment/1.jpeg"


function CreateCourse({setcreatecourse}:any) {
  return (
    <div>
      <form className='background p-10 overflow-y-scroll h-screen ' >
        <p className='w-[90%] mx-auto text-center font-bold  ' >CREATE A NEW COURSE</p>
      {/*-----course details-----*/}
      {/*----cover photo----*/}
      <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >cover image</p>
        </div>
        <input className='w-[80%] sm:w-[70%] p-6 ' type='file' placeholder='eg basic computer knowledge ' />
      </div>
      
      {/*---- add preview video button ----*/}
      <button className='btn btn-info ml-[10%] mt-2 mb-4 ' ><FaPlus/> add preview video </button>
      </div>
      {/*---course name / Title ---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >course name / Title</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Project Managment ' />
      </div>
      {/*---course category---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >course category</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Information Technology ' />
      </div>
      {/*---course code---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >course code</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg IT245 ' />
      </div>
      {/*course description */}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >course description</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Learn to manage projects ' />
      </div>
      {/*course requirements*/}
      <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >course requiremnts</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg basic computer knowledge ' />
      </div>
      {/*---- add requirement button ----*/}
      <button className='btn btn-info ml-[10%] mt-2 ' ><FaPlus/> another requirement </button>
      </div>
      {/*---course instructor(s)---*/}
      <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' text-[#e1b382] h-[98%] my-auto lg:p-6 sm:p-4  ' >course Instructors</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg basic computer knowledge ' />
      </div>
      {/*---- add requirement button ----*/}
      <button className='btn btn-info ml-[10%] mt-2 ' ><FaPlus/> another instructor </button>
      </div>

      {/*----create course button----*/}
      <div className='mt-6 justify-between flex flex-row' >
      <button className='btn flex flex-row btn-error  ' onClick={()=>{
        setcreatecourse(false);
      }} ><p>close</p><FaTimes size={15} /></button>
      <button className='btn btn-success flex flex-row ' onClick={()=>{
        setcreatecourse(false);
      }} ><p>Create Course</p><FaPlus size={15} /></button>
      </div>

    </form>
    </div>
  )
}

export default CreateCourse