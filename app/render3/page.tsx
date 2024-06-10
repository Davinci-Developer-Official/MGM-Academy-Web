'use client';
import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaInfoCircle, FaMinus, FaPlus } from 'react-icons/fa';
import data from "./data.json";

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
}

function Page() {
  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({});

  const toggleSubTopics = (index: number) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const course: Course | undefined = data.courses.find(course => course.unitCode === 'GS104'); // Find course number 4

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='w-full h-full p-2 background'>
      <div className='card-title w-full flex flex-row sm:flex-col-reverse '>
        <div className='flex flex-row justify-left bg-gray-200 cursor-pointer w-[200px] mr-[70%] tooltip tooltip-open tooltip-bottom p-2 ' data-tip="hello there 👋 contact instructor ">
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Instructor" />
            </div>
          </div>
          <div className='flex flex-col w-full text-center '>
            <p className='text-sm font-bold pt-2'>Emma Mwangi</p>
            <p className='text-sm font-bold pt-2 flex flex-row p-1 justify-between'>
              <span>Instructor</span> <FaInfoCircle />
            </p>
          </div>
        </div>
        <p className='text-center'>{course.title}</p>
      </div>

      <div className='p-2 ' >
        <p className='p-2 text-center ' >My name is Emma Mwangi and i will be your instructor, guiding you through {course.title}. Classes will be  online both live and pre-recorded and will provide links for the classes <br/>
        Assignments and topic materials will be available once the topic is unlocked by the instructor for every week of class participation
         <br/>In the pursuit of a more equitable society, education stands as a fundamental pillar shaping the future of individuals and communities alike. However, the classrooms where this education takes place are often microcosms reflecting broader societal dynamics, including gender inequalities. "Classrooms of Equality: Gender Dynamics in Education" delves into the intricate ways gender influences educational experiences, opportunities, and outcomes. By examining these dynamics, we aim to uncover the subtle and overt biases that persist in educational settings and explore strategies to foster a more inclusive and empowering learning environment for all genders. Through this exploration, we seek to illuminate the path towards true equality in education, ensuring that every student has the opportunity to thrive and succeed, irrespective of gender.</p>
      </div>

      <div>
      {course.topics.map((topic, index) => (
        <div key={index} className='w-[90%] mx-auto h-fit mt-2 bg-white'>
          <button 
            className='btn btn-ghost rounded-lg bg-blue-200 w-full justify-between '
            onClick={(e) => {
              e.preventDefault();
              toggleSubTopics(index);
            }}
          > <p>chapter : {index+1}</p>
           <p> {topic.unit}</p>
           {expandedTopics[index]?<div><FaMinus/></div>:<div><FaPlus/></div>}
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
  );
}

export default Page;
