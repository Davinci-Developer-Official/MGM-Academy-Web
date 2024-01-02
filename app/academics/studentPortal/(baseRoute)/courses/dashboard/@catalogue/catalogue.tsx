// Import necessary libraries and components
"use client"
import React, { useEffect, useState } from 'react';
import fetch from "./catalogue.json";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'; // Import FaCaretUp

interface Lesson {
  topic: string;
  content: string[];
}

interface Module {
  module: string;
  lessons: Lesson[];
}

const Content: React.FC = () => {
  const [graphicDesignCourse, setGraphicDesignCourse] = useState<Module[]>([]);
  const [expandedModules, setExpandedModules] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch; // Adjust the path accordingly
        const data: Module[] = await response;
        setGraphicDesignCourse(data);
        setExpandedModules(new Array(data.length).fill(false)); // Initialize the expandedModules state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleModule = (moduleIndex: number) => {
    setExpandedModules((prevExpandedModules) => {
      const newExpandedModules = [...prevExpandedModules];
      newExpandedModules[moduleIndex] = !newExpandedModules[moduleIndex];
      return newExpandedModules;
    });
  };

  return (
    <div>
      <div className='text-[#2d545e] text-center font-bold text-base ' > Course Breakdown</div>
      {graphicDesignCourse.map((module, moduleIndex) => (
        <div key={moduleIndex} className=' p-[0.05rem] rounded-md bg-[#e1b382] text-[#2d545e] border border-[#2d545e]   mt-1 w-[98%] mx-auto '>
          <h2 className='text-[#e1b382] bg-[#2d545e] flex flex-row  w-full '>
            <p className='w-[90%] text-center my-auto ' >{module.module}{' '}</p>
            <button onClick={() => toggleModule(moduleIndex)} className='btn btn-ghost  ' >
              {expandedModules[moduleIndex] ? <FaCaretUp /> : <FaCaretDown />}
            </button>{' '}
          </h2>
          {expandedModules[moduleIndex] && (
            <ul>
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>
                  <strong>{lesson.topic}</strong>
                  <ul>
                    {lesson.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Content;

