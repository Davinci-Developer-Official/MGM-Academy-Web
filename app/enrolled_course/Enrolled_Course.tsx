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
  });

  useEffect(() => {
    async function getSelectedCourseId() {
      const courseId = localStorage.getItem('selected_item');
      if (courseId) {
        setSelectedId(courseId.replace(/"/g, '')); // Ensure ID has no extra quotes
      } else {
        alert('No course ID found in local storage');
      }
    }
    getSelectedCourseId();
  }, []);

  useEffect(() => {
    async function getCourseById(id: string) {
      if (id) {
        const response = await fetch(`/api/get_course_by_id?id=${id}`, {
          method: 'GET',
        });
        if (!response.ok) {
          console.error('Error fetching course data:', response.statusText);
        } else {
          const data = await response.json();
          console.log('Fetched course data:', data);
          setCourse(data);
        }
      }
    }
    getCourseById(selectedId);
  }, [selectedId]);

  return (
    <div className='h-[400px] w bg-blue-200 '>
      <h1>Enrolled Course</h1>
      <p>ID: {selectedId}</p>
      <p>Name: {course.course_name}</p>
      <p>Instructors: {course.course_instructors}</p>
      <p>Category: {course.course_category}</p>
      <p>Introduction: {course.course_introduction_statement}</p>
      <p>Overview: {course.course_overview}</p>
      <p>Content: {course.course_content}</p>
      <p>Purchase Status: {course.purchase_status}</p>
      <p>Price: {course.course_price}</p>
    </div>
  );
}

export default Enrolled_Course;
