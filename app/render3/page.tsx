'use client';
import React, { useEffect, useState } from 'react';
import { FaBars, FaEyeSlash, FaFacebookMessenger } from 'react-icons/fa';
import data from "./data.json";
import { useRouter } from 'next/navigation';

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
  const [course, setCourse] = useState<Courses[]>([]);
  const [chapters, setChapters] = useState<Chapters[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSubTopics = (index: number) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleClick = async (chapter: string) => {
    if (isMounted) {
      router.push(`/course/${chapter}`);
    }
  };

  const info = data.courses[0]; // Example course data from JSON

  return (
    <div className="bg-gray-300 text-black">
      <div className="h-fit w-[80%] mx-auto bg-gray-200 p-2">
        <div className="underline text-blue-400 text-center text-lg">
          {info.title}
        </div>
        <div className="w-[99%] mx-auto p-2 mt-2 flex flex-col">
          <div className="flex flex-row-reverse p-2 justify-between w-full bg-gray-200">
            <div className="flex flex-row p-1">
              <img
                src={info.instructor.photo}
                alt=""
                className="h-[25px] w-[25px] rounded-full bg-red-300"
              />
              <p className="ml-1">{info.instructor.name}</p>
              <div>
                <FaFacebookMessenger size={20} className="cursor-pointer ml-1" />
              </div>
            </div>
            <p className="text-center text-lg text-blue-400">Overview</p>
            <button onClick={() => setOptions(!options)}>
              {options ? <FaEyeSlash size={20} /> : <FaBars size={20} />}
            </button>
            {options && (
              <div className="h-[200px] w-[200px] bg-red-400 absolute z-100">
                <p>Options Menu</p>
              </div>
            )}
          </div>
          <p>{info.overview}</p>
        </div>

        <div className="flex flex-col h-[400px] w-full bg-gray-200 p-2">
          <p className="text-blue-400 text-center text-lg">Chapters</p>
          <div className="h-full overflow-y-auto">
            {info.topics.map((chapter) => (
              <div
                key={chapter.unit}
                className="bg-gray-200 p-2 mt-1 w-[90%] mx-auto rounded-md"
              >
                <p
                  onClick={() => {
                    setSelectedSubtopic(chapter.unit);
                    handleClick(chapter.unit);
                  }}
                  className="text-purple-600 underline cursor-pointer hover:text-red-400"
                >
                  {chapter.unit}
                </p>
                <p className="text-black cursor-pointer hover:text-purple-400">
                  {chapter.subtopics}
                </p>
              </div>
            ))}
          </div>
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