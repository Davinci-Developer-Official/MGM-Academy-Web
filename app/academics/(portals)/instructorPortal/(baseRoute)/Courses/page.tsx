'use client'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Add from "./Add/page"
import Get from './Get/page'

interface Courses{
  course_name:string
}

function page() {
  const courses:Courses[] = []

  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  
  return (
    <div className='background h-full w-full p-5' >

<button className="btn" onClick={openModal}>add course</button>
      {
        courses.length==0? <div className='p-5 ' > <Get/> </div>: 
        <div>
          {courses.map((course:Courses)=>(
            <div className='p-5 ' key={course.course_name}  >{course.course_name}</div>
          ))}
        </div>
      }
      <dialog id="my_modal_3" className="modal  ">
        <div className="modal-box background w-full  h-full mx-auto ">
            <p className='btn btn-rounded btn-ghost ' onClick={(e:any)=>{
              e.preventDefault();
              const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
              modal?.close()
            }} > x </p>
            <Add/>
          
        </div>
      </dialog>
    </div>
  )
}

export default page