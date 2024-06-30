'use client';
import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import Examplemg from '@/public/categories/women-studies-1yGyZfLICKnAbMyt3m49yqRYrNyL7z.jpg';
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
  avatar: string;
  instructor_id: string;
}

interface Topics {
  topic_id: string;
  topic_cover: string;
  topic_name: string;
  topic_description: string;
  topic_content: string;
  topic_completed: boolean;
}

interface Instructor {
  instructor_id: string;
  instructor_names: string;
  instructor_email: string;
  instructor_phonenumber: string;
  instructor_rating: string;
}

function Enrolled_Course() {
  const [selectedId, setSelectedId] = useState<string>('');
  const [instructor, setInstructor] = useState<Instructor >({
    instructor_id: '',
  instructor_names: '',
  instructor_email: '',
  instructor_phonenumber: '',
  instructor_rating: '',
  });
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
    avatar: '',
    instructor_id: ''
  });
  const [topics, setTopics] = useState<Topics[]>([]);

  useEffect(() => {
    const courseId = localStorage.getItem('selected_item');
    if (courseId) {
      setSelectedId(courseId.replace(/"/g, ''));
    }
  }, []);

  useEffect(() => {
    async function getCourseById(id: string) {
      try {
        const response = await fetch(`/api/get_course_by_id?id=${id}`);
        if (!response.ok) throw new Error('Error fetching course data');
        const data = await response.json();
        setCourse(data);
        getInstructorById(data.instructor_id); // Fetch instructor data after course data is fetched
      } catch (error: any) {
        console.error('Error fetching course data:', error.message);
      }
    }

    if (selectedId) {
      getCourseById(selectedId);
    }
  }, [selectedId]);

  useEffect(() => {
    async function getTopics(id: string) {
      try {
        const response = await fetch(`/api/get_course_topics?id=${id}`);
        if (!response.ok) throw new Error('Error fetching topics');
        const data = await response.json();
        setTopics(data);
      } catch (error: any) {
        console.error('Error fetching topics:', error.message);
      }
    }

    if (selectedId) {
      getTopics(selectedId);
    }
  }, [selectedId]);

  async function storeId(id: string) {
    if (id) {
      localStorage.setItem('topic_id', id);
    } else {
      alert('No ID to store');
    }
  }

  async function getInstructorById(id: string) {
    try {
      const response = await fetch(`/api/get_instructor?id=${id}`);
      if (!response.ok) {
        throw new Error('Error fetching instructor data');
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setInstructor(data);
    } catch (error: any) {
      console.error('Error fetching instructor data:', error.message);
      // Handle error state or alert here
      alert('Instructor data not found');
    }
  }
  

  return (
    <div className='h-[600px] my-auto w bg-blue-200 p-2'>
      <div className='overflow-y-scroll w-[90%] h-[90%] rounded-md bg-white mx-auto mt-1 justify-between'>
        <div className='flex flex-col-reverse h-fit bg-white'>
          <h1 className='text-center bg-white rounded-tl-lg rounded-tr-lg p-2 h-fit my-auto w-full font-bold text-2xl font-serif'>
            <p>{course.course_name}</p>
          </h1>
          <div className='flex flex-row justify-left rounded-md bg-gray-100 shadow-inner cursor-pointer w-[250px] h-fit p-2 mt-2 ml-2'>
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image src={Examplemg} alt="Instructor" />
              </div>
            </div>
            <div className='flex flex-col w-full text-center'>
              <p className='text-sm font-bold pt-2'>{course.course_instructors}</p>
              <div className='text-sm font-bold pt-2 flex flex-row p-1 w-full text-blue-600 underline hover:text-red-600 justify-evenly'>
                <label htmlFor="my_modal_7" className="flex flex-row p-1 justify-between cursor-pointer" onClick={()=>{
                  getInstructorById('79912d0a-f6c4-42b5-ab2e-dfb6b270584d');
                }} >
                  <p>more info</p> <FaInfoCircle />
                </label>
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <h3 className="text-lg font-bold ">Instructor Information</h3>
                    {instructor ? (
                      <div className='text-black '>
                        <div className='card flex flex-row '>
                        <p className='card-title '>Name: </p>
                        <p className='card-body ' >{instructor.instructor_names}</p>
                        </div>
                        <div className='card flex flex-row '>
                        <p className='card-title '>Email: </p>
                        <p className='card-body ' >{instructor.instructor_email}</p>
                        </div>
                        <div className='card flex flex-row '>
                        <p className='card-title '>phonenumber: </p>
                        <p className='card-body ' >{instructor.instructor_phonenumber}</p>
                        </div>
                       
                        <div className='card flex flex-row '>
                        <p className='card-title '>Rating: </p>
                        <p className='card-body ' >{instructor.instructor_rating}</p>
                        </div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card mt-1 bg-white p-2'>
          <p className='font-semibold text-xl text-center font-serif underline font-bold'>Introduction</p>
          <p className='card-body text-center'>{course.course_introduction_statement}</p>
        </div>
        <div className='card mt-1 bg-white p-2'>
          <p className='font-semibold text-xl text-center font-serif underline font-bold'>Overview</p>
          <p className='card-body text-center'>{course.course_overview}</p>
        </div>
        <div className='card mt-1 bg-white p-2'>
          <p className='font-semibold text-xl text-center font-serif underline'>Topics/Chapters</p>
          <div className='card-body text-center'>
            {topics.map((topic, index) => (
              <div key={index} className='btn btn-ghost hover:bg-white text-blue-600 hover:text-red-600 hover:underline cursor-pointer' onClick={(e: any) => {
                e.preventDefault();
                storeId(topic.topic_id);
              }}>
                <p>{topic.topic_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrolled_Course;
