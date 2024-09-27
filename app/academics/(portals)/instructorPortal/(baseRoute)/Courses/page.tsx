'use client'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

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
        courses.length==0? <div className='p-5 ' > no courses added </div>: 
        <div>
          {courses.map((course:Courses)=>(
            <div className='p-5 ' >{course.course_name}</div>
          ))}
        </div>
      }
      <dialog id="my_modal_3" className="modal  ">
        <div className="modal-box background w-full  h-full mx-auto ">
          <form method="dialog">
            qwerty
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default page