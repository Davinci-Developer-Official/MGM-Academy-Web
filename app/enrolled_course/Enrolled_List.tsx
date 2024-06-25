'use client';

import React, { useEffect, useState } from 'react';

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
  avatar:string;
}

function Enrolled_List() {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    async function fetchCourses() {
      const response = await fetch('/api/get_courses', {
        method: 'GET'
      });
      if (!response.ok) {
        console.error('Error fetching courses data:', response.statusText);
        return;
      }
      const data = await response.json();
      setCourses(data);
    }

    fetchCourses();
    interval = setInterval(fetchCourses, 5000); // Poll every 5 seconds

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, []);

  async function selectCourse(courseId: string) {
    if (courseId) {
      await localStorage.setItem('selected_item', JSON.stringify(courseId));
      setSelectedCourse(courseId);
    } else {
      // alert("nikubad");
      return;
    }
  }

  async function deleteCourse() {
    await localStorage.removeItem('selected_item');
    setSelectedCourse("");
  }

  return (
    <div className='h-[150px] overflow-y-scroll'>
      <button className='btn bg-red-500' onClick={(e) => {
        e.preventDefault();
        deleteCourse();
      }}>clear</button>
      {courses.map((item: Courses) => (
        <div key={item.course_id} className='btn btn-ghost' onClick={(e) => {
          e.preventDefault();
          selectCourse(item.course_id);
        }} onDoubleClick={(e) => {
          e.preventDefault();
          deleteCourse();
        }}>
          <p>{item.course_name}</p>
        </div>
      ))}
    </div>
  );
}

export default Enrolled_List;
