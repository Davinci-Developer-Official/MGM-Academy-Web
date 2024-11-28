'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { FaBars, FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretUp, FaEllipsisH, FaEllipsisV, FaEyeSlash, FaFacebookMessenger, FaInfoCircle, FaMinus, FaPlus } from 'react-icons/fa';
import data from "./data.json";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


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


function Page(Course:Courses) {

 

  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({});

  const toggleSubTopics = (index: number) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  

  // Find the course with unitCode 'GS104'
  const [course,setCourse]  = useState<Courses[]>([]);
  {/*
    {
    id: "",
    cover:"",
    title: "",
    description: "",
    instructor_id: "",
    created: ""
  }
    */}
  
  const[chapters,setChapters]= useState<Chapters[]>([])
  const[error,setError]=useState()
  const[arrCourse,setArrCourse]=useState<Courses[]>([])
  const[loading,setLoading]=useState(false)
  const used_id = '21feb3ce-14ce-497c-99c1-a2fd9a4b772f'
 
  
  if (!course) {
    return <div>Course not found</div>;
  }

  const info = data.courses[0]
  const[options,setOptions]=useState(false)
  
  //alert(JSON.stringify(info))
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false);
  const[selectedSubtopic,setSelectSubtopic]=useState("")
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = async(chapter:string) => {
    if (isMounted) {
      //const i = info.topics.map
      const topic= await Cookies.get('c-course')
      router.push(`/academics/Courses/${topic}/${chapter}`);
      //await CurrentItem({label:'current-course',content:id});
    }
  };
  return (
    <div className='bg-gray-300 text-black' >
      <div className='h-fit w-[80%] mx-auto bg-gray-200 p-2 ' >
        <div className='underline text-blue-400 text-center text-lg ' > {info.title}  </div>
        <div className='w-[99%] mx-auto p-2 mt-2 flex flex-col ' > 
          <div className='flex flex-row-reverse p-2 justify-between  w-full bg-gray-200 ' >
            <div className='flex flex-row p-1 '>
              <img src={info.instructor.photo} alt="" className='h-[25px] w-[25px] rounded-full bg-red-300  '  />
              <p className='ml-1 ' > {info.instructor.name} </p>
              <div>
              <FaFacebookMessenger size={20} className='cursor-pointer ml-1 '  />
              </div>
            </div>
            <p className='text-center text-lg text-blue-400  ' >overview</p> 
            {options==false?<button onClick={()=>{
              setOptions(true)
            }} ><FaBars size={20} /></button>:<button onClick={()=>{
              setOptions(false)
            }} ><FaEyeSlash size={20} /></button>}
            {options&&<div className='h-[200px] w-[200px] bg-red-400 absolute z-100  ' >
              <p>yes</p>
              </div>}
          </div>
          <p>{info.overview}</p> 
         
          
        </div>

        <div className='flex flex-col h-[400px] w-full bg-gray-200 p-2  ' >
            <p className='text-blue-400 text-center  text-lg  ' > chapters </p>
            <div className='h-full overflow-y-auto ' >
              {info.topics.map((chapter)=>(
                <div key={chapter.unit} className='bg-gray-200 p-2 mt-1 w-[90%] mx-auto rounded-md ' >
                  <p onClick={()=>{
                    setSelectSubtopic(chapter.unit)
                    handleClick(selectedSubtopic)
                  }} className='text-purple-600 underline cursor-pointer hover:text-red-400  ' > {chapter.unit} </p>
                  <p className='text-black  cursor-pointer hover:text-urple-400  ' >{chapter.subtopics}</p>
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