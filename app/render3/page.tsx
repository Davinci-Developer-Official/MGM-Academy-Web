'use client';
import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaInfoCircle, FaMinus, FaPlus } from 'react-icons/fa';
import data from "./data.json";
import Image from 'next/image';

interface Topic {
  unit: string;
  subtopics: string[];
}

interface Course {
  title: string;
  courseRequirements: string[];
  unitCode: string;
  category: string;
  topics: Topic[];
  instructor: {
    name: string;
    photo: string;
    role: string;
    contactTip: string;
  };
  intro: string;
  overview: string;
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
  const course: Course | undefined = data.courses.find(course => course.unitCode === 'GS104');

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='w-full h-full p-2 background'>
      <div className='w-full mb-8'>
        <div className='w-full flex flex-row p-1 justify-evenly'>
          <div className='flex flex-row justify-left bg-gray-200 cursor-pointer w-[200px] my-auto tooltip tooltip-open tooltip-bottom p-2 mb-2' data-tip={course.instructor.contactTip}>
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <Image src={course.instructor.photo} alt="Instructor" />
              </div>
            </div>
            <div className='flex flex-col w-full text-center'>
              <p className='text-sm font-bold pt-2'>{course.instructor.name}</p>
              <p className='text-sm font-bold pt-2 flex flex-row p-1 justify-between'>
                <span>{course.instructor.role}</span> <FaInfoCircle />
              </p>
            </div>
          </div>
          <div className='p-2 lg:pt-4 sm:pt-6 md:pt-5 w-[80%] mx-auto'>
            <p className='text-center font-bold text-lg'>{course.title}</p>
          </div>
        </div>

        <div className='p-2'>
          <section className='p-2 text-center flex flex-col mt-2 card'>
            <p className='text-xl font-bold underline text-center text-blue-800'>Introduction</p>
            <p className='font-bold text-lg card-body'>{course.intro}</p>
            <p className='text-xl font-bold underline text-center text-blue-800'>Overview</p>
            <p className='font-semibold card-body text-lg'>{course.overview}</p>
          </section>
        </div>

        <div className='text-xl font-bold underline text-center text-blue-800'>Topics/Chapters</div>
        <div>
          {course.topics.map((topic, index) => (
            <div key={index} className='w-[90%] mx-auto h-fit mt-2 bg-white'>
              <button 
                className='btn btn-ghost rounded-lg w-full justify-between hover:text-blue-900 hover:underline'
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubTopics(index);
                }}
              >
                <p>Chapter : {index + 1}</p>
                <p>{topic.unit}</p>
                {expandedTopics[index] ? <FaMinus /> : <FaPlus />}
              </button>
              {expandedTopics[index] && (
                <div className='horizontal-scroll-container w-[88%] mx-auto'>
                  {topic.subtopics.map((subtopic, subIndex) => (
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
                        {subtopic}
                      </label>

                      {/* The button to open modal */}
                      <input type="checkbox" id={`modal_${index}_${subIndex}`} className="modal-toggle" />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <h3 className="text-lg font-bold">{subtopic}</h3>
                          <p className="py-4">Details about {subtopic} will be here.</p>
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
