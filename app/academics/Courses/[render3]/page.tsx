'use client';
import React, { useEffect, useState } from 'react';
import { FaBars, FaEyeSlash, FaFacebookMessenger } from 'react-icons/fa';
import data from "./data.json";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';

interface Courses {
  id: string;
  cover: string;
  title: string;
  description: string;
  instructor_id: string;
  created: string;
}

interface Chapters {
  id: string;
  course_id: string;
  title: string;
  description: string;
  order: string;
  created: string;
  file: string;
  video: string;
}

function Page() {
  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({});
  const [options, setOptions] = useState(false);
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const router = useRouter();

  const toggleSubTopics = (index: number) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const info = data.courses[0]; // Sample data from the JSON
  const handleClick = async (chapter: string) => {
    const topic = await Cookies.get('c-course');
    router.push(`/academics/Courses/${topic}/${chapter}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Course Header */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold underline text-blue-500">{info.title}</h1>
        </div>

        {/* Instructor and Overview Section */}
        <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mt-4">
          <div className="flex items-center">
            <Image
              src={info.instructor.photo}
              alt={info.instructor.name}
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="ml-2 font-semibold">{info.instructor.name}</p>
            <FaFacebookMessenger size={20} className="ml-2 cursor-pointer text-blue-500" />
          </div>
          <p className="text-blue-500 font-medium">Overview</p>
          <button onClick={() => setOptions(!options)} className="relative">
            {options ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>
          {options && (
            <div className="absolute top-12 right-0 bg-white dark:bg-gray-700 shadow-lg p-4 rounded-md w-48">
              <p className="text-sm">More Options</p>
            </div>
          )}
        </div>
        <p className="mt-4">{info.overview}</p>
      </div>

      {/* Chapters Section */}
      <div className="max-w-4xl mx-auto mt-6 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
        <h2 className="text-center text-lg font-bold text-blue-500">Chapters</h2>
        <div className="mt-4 max-h-96 overflow-y-auto space-y-4">
          {info.topics.map((chapter, index) => (
            <div
              key={chapter.unit}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md"
            >
              <p
                onClick={() => {
                  setSelectedSubtopic(chapter.unit);
                  handleClick(selectedSubtopic);
                }}
                className="text-blue-500 underline cursor-pointer hover:text-blue-300"
              >
                {chapter.unit}
              </p>
              <div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{chapter.subtopics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;


{/*{course.length!==0?course.map((data:Courses)=>(
        <div key={data.id} className='bg-red-400 w-[80%] mx-auto h-[300px] ' >
          <p className='text-black bg-white h-[50px] p-2 text-center '>{data.title}</p>
          <p className='h-[50px] bg-green-300 p-2 text-center  '>{data.description}</p>
        </div>
      )):<div>2</div>}*/}