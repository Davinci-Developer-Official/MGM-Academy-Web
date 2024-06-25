'use client';
import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import Examplemg from '@/public/categories/women-studies-1yGyZfLICKnAbMyt3m49yqRYrNyL7z.jpg'
import Image from 'next/image';

interface Courses {
  course_id: string;
  course_instructors: string;
  course_name: string;
  course_category: string;
  course_introduction_statement: string;
  course_overview: string;
  course_content: string;
  purchase_status: string;
  course_price: string;
  avatar:string;
}

function Enrolled_Course() {
  const [selectedId, setSelectedId] = useState<string>('');
  const [course, setCourse] = useState<Courses>({
    course_id: '',
    course_instructors: '',
    course_name: '',
    course_category: '',
    course_introduction_statement: '',
    course_overview: '',
    course_content: '',
    purchase_status: '',
    course_price: '',
    avatar:'https://vercel.com/smiles-projects-886154b1/mgm-academy-web/stores/blob/store_SWkzW6EvztKyfVAE/browser?file_url=https%253A%252F%252Fswkzw6evztkyfvae.public.blob.vercel-storage.com%252Fb2-DcTEtS7VTNqIOxwgIzGChzBpFfkgic.jpeg',
  });

  useEffect(() => {
    async function getSelectedCourseId() {
      const courseId = localStorage.getItem('selected_item');
      if (courseId) {
        setSelectedId(courseId.replace(/"/g, '')); // Ensure ID has no extra quotes
      } else {
        //alert('No course ID found in local storage');
        return;
      }
    }
    getSelectedCourseId();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    async function getCourseById(id: string) {
      if (id) {
        const response = await fetch(`/api/get_course_by_id?id=${id}`, {
          method: 'GET',
        });
        if (!response.ok) {
          console.error('Error fetching course data:', response.statusText);
        } else {
          const data = await response.json();
          console.log('Fetched course data:', data);
          setCourse(data);
        }
      }
    }

    if (selectedId) {
      getCourseById(selectedId);
      interval = setInterval(() => getCourseById(selectedId), 5000); // Poll every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval); // Clean up interval on component unmount
    };
  }, [selectedId]);

  return (
    <div className='h-[600px] my-auto w bg-blue-200   '>
      <div className='overflow-y-scroll w-[90%] h-[90%] rounded-md  bg-white  mx-auto mt-1  justify-between  '>
      <div className='flex flex-row-reverse h-fit bg-white' >
      <h1 className='text-center  bg-white rounded-tl-lg rounded-tr-lg p-2 h-fit my-auto w-full font-bold text-2xl font-serif ' ><p> {course.course_name}</p></h1>
      <div className='flex flex-row justify-left bg-white cursor-pointer w-[300px] h-fit  tooltip tooltip-open tooltip-bottom p-2 mt-2 ml-2 ' data-tip={'hello '} >{/*data-tip={course.instructor.contactTip}*/}
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <Image src={Examplemg} alt="Instructor" />
              </div>
            </div>
            <div className='flex flex-col w-full text-center'>
              <p className='text-sm font-bold pt-2'>{course.course_instructors}</p>
              <p className='text-sm font-bold pt-2 flex flex-row p-1 justify-between'>
                <span> instructor </span> <FaInfoCircle />
              </p>
            </div>
          </div>
          
      </div>
      <div className='card mt-1 bg-white p-2 '>
        <p className='font-semibold text-xl  text-center font-serif  underline text-blue-500 hover:text-red-500 cursor-pointer ' >Introduction</p>
        <p className='card-body' >{course.course_introduction_statement}</p>
      </div>
      
      <div className='card mt-1 bg-white p-2 '>
        <p className='font-semibold text-xl  text-center font-serif  underline text-blue-500 hover:text-red-500 cursor-pointer ' >overview</p>
        <p className='card-body' >{course.course_overview}</p>
      </div>

      <div className='card mt-1 bg-white p-2 '>
        <p className='font-semibold text-xl  text-center font-serif underline text-blue-500 hover:text-red-500 cursor-pointer  ' >Topics/Chapters</p>
        <p className='card-body' >{course.course_content}</p>
      </div>
      </div>
      
      
    {/*  <p>ID: {selectedId}</p>
      
      <p>Instructors: {course.course_instructors}</p>
      <p>Category: {course.course_category}</p>
      <p>Introduction: {course.course_introduction_statement}</p>
      <p>Overview: {course.course_overview}</p>
      <p>Content: {course.course_content}</p>
      <p>Purchase Status: {course.purchase_status}</p>
      <p>Price: {course.course_price}</p>*/}
    </div>
  );
}

export default Enrolled_Course;
