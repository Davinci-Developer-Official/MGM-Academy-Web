'use client';
import React, { useMemo, useState } from 'react';
import { FaCaretDown, FaCaretUp, FaInfoCircle, FaMinus, FaPlus } from 'react-icons/fa';
import data from "./data.json";
import Image from 'next/image';


interface Courses{
  id:string
  cover:string;
  title:string;
  description:string;
  instructor_id:string;
  created:string
}
interface Chapters{
  id:string;
  course_id:string;
  title:string;
  description:string;
  order:string;
  created:string;
  file:string;
  video:string
}


function Page() {
  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({});

  const toggleSubTopics = (index: number) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  

  // Find the course with unitCode 'GS104'
  const [course,setCourse]  = useState<Courses|null>(null);
  const[chapters,setChapters]= useState<Chapters[]>([])
  const[error,setError]=useState()
  const[arrCourse,setArrCourse]=useState<Courses[]>([])
  const[loading,setLoading]=useState(false)
  const used_id = '21feb3ce-14ce-497c-99c1-a2fd9a4b772f'
  useMemo(()=>{
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/api/remodelled/courses/get_course_by_id?id=${used_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        //alert(JSON.stringify(data))
        setCourse(data);
        setArrCourse(data)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses()
  },[])
  
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='w-full h-full p-2 background'>
      <div className='w-full mb-8'>
        <div className='w-full flex flex-row p-1 justify-evenly'>
          <div className='flex flex-row justify-left bg-gray-200 cursor-pointer w-[200px] my-auto tooltip tooltip-open tooltip-bottom p-2 mb-2' data-tip={course.instructor_id}>
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <Image src={course.cover} alt="Instructor" width={300} height={300} />
              </div>
            </div>
            <div className='flex flex-col w-full text-center'>
              <p className='text-sm font-bold pt-2'>{course.instructor_id}</p>
              <p className='text-sm font-bold pt-2 flex flex-row p-1 justify-between'>
                <span>{course.id}</span> <FaInfoCircle />
              </p>
            </div>
          </div>
          <div className='p-2 lg:pt-4 sm:pt-6 md:pt-5 w-[80%] mx-auto'>
            <p className='text-center font-bold text-lg'>{course.title}</p>
          </div>
        </div>

        <div className='p-2'>
          {arrCourse.map(({index,data}:any)=>(
            <section key={data.id} className='p-2 text-center flex flex-col mt-2 card'>
            <p className='text-xl font-bold underline text-center text-blue-800'>Title</p>
            <p className='font-bold text-lg card-body'>{data.title}</p>
            <p className='text-xl font-bold underline text-center text-blue-800'>Overview</p>
            <p className='font-semibold card-body text-lg'>{data.description}</p>
          </section>
          ))}
        </div>

        <div className='text-xl font-bold underline text-center text-blue-800'>Topics/Chapters</div>
        <div>
          {chapters.map((topic, index) => (
            <div key={index} className='w-[90%] mx-auto h-fit mt-2 bg-white'>
              <button 
                className='btn btn-ghost rounded-lg w-full justify-between hover:text-blue-900 hover:underline'
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubTopics(index);
                }}
              >
                <p>Chapter : {index + 1}</p>
                <p>{topic.title}</p>
                {expandedTopics[index] ? <FaMinus /> : <FaPlus />}
              </button>
              {/*subchapters*/}
              {expandedTopics[index] && (
                <div className='horizontal-scroll-container w-[88%] mx-auto'>
                  {chapters.map((subtopic, subIndex) => (
                    <div 
                      key={subIndex}
                      className='card bg-gray-300 w-fit h-fit p-2 ml-2 tooltip'
                      data-tip={subtopic}
                    >
                      <label className='card-title btn btn-circle bg--gray-300'>{subIndex + 1}</label>
                      <label 
                        className='card-title pt-2 hover:text-blue-800 cursor-pointer' 
                        htmlFor={`modal_${index}_${subIndex}`}
                      >
                        {subtopic.description}
                      </label>

                      {/* The button to open modal */}
                      <input type="checkbox" id={`modal_${index}_${subIndex}`} className="modal-toggle" />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <h3 className="text-lg font-bold">{subtopic.title}</h3>
                          <p className="py-4">Details about {subtopic.video} will be here.</p>
                        </div>
                        <label className="modal-backdrop" htmlFor={`modal_${index}_${subIndex}`}>Close</label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
