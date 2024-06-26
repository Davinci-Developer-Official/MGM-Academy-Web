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
}

interface Topics {
  topic_cover: string;
  topic_name: string;
  topic_description: string;
  topic_content: string;
  topic_completed: boolean;
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
    avatar: 'https://vercel.com/smiles-projects-886154b1/mgm-academy-web/stores/blob/store_SWkzW6EvztKyfVAE/browser?file_url=https%253A%252F%252Fswkzw6evztkyfvae.public.blob.vercel-storage.com%252Fb2-DcTEtS7VTNqIOxwgIzGChzBpFfkgic.jpeg',
  });
  const [topics, setTopics] = useState<Topics[]>([]);

  useEffect(() => {
    async function getSelectedCourseId() {
      const courseId = localStorage.getItem('selected_item');
      if (courseId) {
        setSelectedId(courseId.replace(/"/g, '')); // Ensure ID has no extra quotes
      } else {
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

  useEffect(() => {
    async function getTopics(id: string) {
      const response = await fetch(`/api/get_course_topics?id=${id}`, {
        method: 'GET',
      });
      if (!response.ok) {
        alert('Error fetching topics');
      } else {
        const data = await response.json();
        setTopics(data);
      }
    }

    if (selectedId) {
      getTopics(selectedId);
    }
  }, [selectedId]);

  return (
    <div className='h-[600px] my-auto w bg-blue-200 p-2 '>
      <div className='overflow-y-scroll w-[90%] h-[90%] rounded-md bg-white mx-auto mt-1 justify-between'>
        <div className='flex flex-col-reverse h-fit bg-white'>
          <h1 className='text-center bg-white rounded-tl-lg rounded-tr-lg p-2 h-fit my-auto w-full font-bold text-2xl font-serif'>
            <p>{course.course_name}</p>
          </h1>
          <div className='flex flex-row justify-left rounded-md bg-gray-100 outset shadow-inner cursor-pointer w-[250px] h-fit  p-2 mt-2 ml-2' >
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <Image src={Examplemg} alt="Instructor" />
              </div>
            </div>
            <div className='flex flex-col w-full text-center'>
              <p className='text-sm font-bold pt-2'>{course.course_instructors}</p>
              <div className='text-sm font-bold pt-2 flex flex-row p-1 w-full text-blue-600 underline hover:text-red-600 justify-evenly'>
                <span>more info</span> <FaInfoCircle className='pt-[1px] ' />
              </div>
            </div>
          </div>
        </div>
        <div className='card mt-1 bg-white p-2'>
          <p className='font-semibold text-xl text-center font-serif underline font-bold '>Introduction</p>
          <p className='card-body text-center'>{course.course_introduction_statement}</p>
        </div>
        <div className='card mt-1 bg-white p-2'>
          <p className='font-semibold text-xl text-center font-serif underline font-bold'>Overview</p>
          <p className='card-body text-center'>{course.course_overview}</p>
        </div>
        <div className='card mt-1 bg-white p-2'>
          <p className='font-semibold text-xl text-center font-serif underline '>Topics/Chapters</p>
          <div className='card-body text-center'>
            {topics.map((topic: Topics, index) => (
              <div key={index} className='btn btn-ghost hover:bg-white text-blue-600 hover:text-red-600  hover:underline coursor-pointer '>
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
