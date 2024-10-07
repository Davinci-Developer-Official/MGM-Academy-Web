'use client';

import { useState, useEffect } from 'react';

interface Course {
  course_id: string;
  course_cover: string;
  course_title: string;
  course_description: string;
  instructor_id: string;
  created_at: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/remodelled/courses/get_course'); // Assuming your API route is set up at /api/courses
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        
        setCourses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="background h-full w-full p-5">
      <h1 className="text-2xl font-bold mb-5">Courses</h1>
      {courses.length === 0 ? (
        <div>No courses available.</div>
      ) : (
        <div className="flex flex-col overflow-y-scroll h-[400px] w-[90%] mx-auto ">
          {courses.map((course: Course) => (
            <div key={course.course_id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{course.course_title}</h2>
              <img src={course.course_cover} alt={course.course_title} className="w-full h-auto mb-4" />
              <p>{course.course_description}</p>
              <small>Instructor ID: {course.instructor_id}</small>
              <br />
              <small>Created at: {new Date(course.created_at).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

