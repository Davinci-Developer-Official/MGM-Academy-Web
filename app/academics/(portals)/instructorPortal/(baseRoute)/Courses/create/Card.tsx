import React, { useEffect, useState } from 'react';
import loading from '@/public/animated/loading.gif';
import Image from 'next/image';
import axios from 'axios';
import CreateChapter from './CreateChapter';
import failed from '@/public/animated/denied.gif'
import success from '@/public/animated/green-tick.gif'

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
  
  interface CourseCardProps {
    course: CourseDetails;
  }
  
  function Card(){
    const[courses,setCourses]=useState<CourseDetails[]>([])
    const[createChapter,setCreateChapter]=useState(false)
    const[successfulUpload,setSuccessfulUpload]=useState(false)
    const[failedUpload,setFailedUpload]=useState(false)
    useEffect(()=>{
        async function fetchCourses(){
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
          fetchCourses();
    },[courses,createChapter,successfulUpload,failedUpload])
    const openModal = () => {
        const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
        if (modal) {
          modal.showModal();
          setCreateChapter(true)
          
        }
      };
  return (
    <div className='overflow-y-scroll h-full ' >
        {courses.map((course)=>(
         <div className=' flex flex-row mt-2 mb-2 bg-white w-[90%] mx-auto rounded justify-between ' key={course.id} >

         <div className="avatar">
           <div className="w-12 rounded-full ml-2 border-red-400 border-[2px] ">
           <Image className='object-fit rounded-full' src={course.cover_image} alt='cover image' width={100} height={100} />
           </div>
         </div>
             <div className='' ><p className='' >{course.course_name}</p></div>
             <button className="btn" onClick={openModal}>add chapter</button>
        <dialog id="my_modal_4" className="modal">
        <div className="modal-box  background ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=>{setCreateChapter(true)}} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {createChapter&&<CreateChapter setCreateChapter={setCreateChapter} setSuccessfulUpload={setSuccessfulUpload} setFailedUpload={setFailedUpload} />}
          {successfulUpload&&<p>
            <Image src={success} alt='loading' />
            <p>retry creating a chapter</p>
            </p>}
            {failedUpload&&<p>
            <Image src={failed} alt='loading' />
            <p>retry creating a chapter</p>
            </p>}
        </div>
        </dialog>
         </div>
        ))}
      </div>
    
  );
};

export default Card;