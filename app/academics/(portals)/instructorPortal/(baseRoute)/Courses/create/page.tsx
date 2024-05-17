'use client';
import React, { useEffect, useState } from 'react'
import CreateCourse from './CreateCourse';
import axios from 'axios';
import Card from './Card';
import Image from 'next/image';
//import Editor from './Editor';


interface CourseDetails {
  id: number;
  cover_image:string,
  cover_video:string,
  course_name: string;
  course_description: string;
  course_code: string;
  course_category: string;
  unit_code: string;
  course_requirements: string;
  course_instructor: string;
  course_rating:string;
}


function Page() {
  const[createcourse,setcreatecourse]=useState(true);//true;
  const[editor,showEditor]=useState(false);

  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
 
  const[courses,setCourses]=useState<CourseDetails[]>([])
  useEffect(()=>{
    {/*async function fetchCourses(){
      try {
        const response = await axios.get('/api/get_course');
    
    // Check if the response status is successful
    if (response.status === 200) {
        setCourses(response.data)
       
    }else {
      // If the response status is not successful, log an error
      console.error('Unexpected status code:', response.status);
    }
    //alert(courses)
      } catch (error) {
        
      }
    }
    fetchCourses();*/}
  },[createcourse,courses]);

  return (
    <div className='h-screen w-full   pt-[3%] ' >
      {/*--create course--*/}
     {/* {createcourse&&<CreateCourse setcreatecourse={setcreatecourse} showEditor={showEditor} />}*/}
    <div className=' w-[80%] h-[96%]  mx-auto my-auto ' >
      <div className='flex flex-row  h-[10%] ' >
        <button className="btn" onClick={openModal}>add course</button>
        <button className='btn btn-neutral ' onClick={async()=>{
         const response= await fetch("/api",{
            method:"GET"
          })
          if(response.ok){
            alert(response.body)
          }else{
            return 'server is  down'
          }
        }} >test db</button>
        <dialog id="my_modal_3" className="modal  ">
        <div className="modal-box background w-[80%] mx-auto ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>{
              setcreatecourse(true);
            }} >✕</button>
          </form>
          {createcourse?<CreateCourse setcreatecourse={setcreatecourse} showEditor={showEditor} />
          :<div><p>Uploaded sucessfully</p></div>}
        </div>
        </dialog>
        
        
      </div>
      <div className='h-[90%]  ' >
      <Card/>
      </div>
    </div>
    </div>
  )
}

export default Page;