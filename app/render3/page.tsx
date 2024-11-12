'use client';
import React, { useEffect, useMemo, useState } from 'react';
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
  useEffect(()=>{
    const fetchCourses = async () => {
      try {
        //const response = await fetch(`/api/remodelled/courses/get_course_by_id?id=${used_id}`);
        //if (!response.ok) {
        //  throw new Error('Failed to fetch courses');
        //}
        //const data:Courses[] = await response.json();
        setCourse([{
          id:"aq2222qw",
          cover:"asdas",
          title:"Threadstone ",
          description:"conditioning training",
          instructor_id:"w232wea3",
          created:"12-sept-2020",
        }])
        {course.length!==0&&setLoading(false)}
        //alert(JSON.stringify(data))
        //{course==null?()=>{ alert('yes')}:alert('booo')}
        {/*
          const courseData: Courses = {
          id: data.course_id,
          cover: data.course_cover,
          title: data.course_title,
          description: data.course_description,
          instructor_id: data.instructor_id,
          created: data.created_at,
        };
          */}
        
        //{data!==null?alert("slippery"):alert("yep")}
        {/*
          {course.id!==""?setCourse({
          id: data.course_id,
          cover: data.course_cover,
          title: data.course_title,
          description: data.course_description,
          instructor_id: data.instructor_id,
          created: data.created_at,
        }):alert("no data fetched LOL"+JSON.stringify(data))}
          */}
         //{data!==null&&course.length==0 ?setCourse(data):alert("failed")}
         //{course.length!==0&&alert(JSON.stringify(course))}
        //alert(JSON.stringify(course))
        //alert(JSON.stringify(course))
        //setArrCourse(data)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses()
     
  },[course])
  
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='bg-gray-300 text-black' >
      {course.length!==0?course.map((data:Courses)=>(
        <div key={data.id} className='bg-red-400 w-[80%] mx-auto h-[300px] ' >
          <p className='text-black bg-white h-[50px] p-2 text-center '>{data.title}</p>
          <p className='h-[50px] bg-green-300 p-2 text-center  '>{data.description}</p>
        </div>
      )):<div>2</div>}
    </div>
  );
}

export default Page;

