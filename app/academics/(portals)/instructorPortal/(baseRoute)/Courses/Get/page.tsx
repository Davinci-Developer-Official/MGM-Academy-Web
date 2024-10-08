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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/remodelled/courses/get_course');
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

  // Calculate the courses to display on the current page
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const currentCourses = courses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="background h-full w-full p-5">
      <h1 className="text-2xl font-bold mb-5">Courses</h1>
      {courses.length === 0 ? (
        <div>No courses available.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto h-[450px] w-[98%] mx-auto">
            {currentCourses.map((course: Course) => (
              <div key={course.course_id} className="p-4 border rounded shadow">
                <h2 className="text-xl font-semibold">{course.course_title}</h2>
                <div className="h-[250px] w-full mb-4">
                  <img
                    src={course.course_cover}
                    alt={course.course_title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>{course.course_description}</p>
                <small>Instructor ID: {course.instructor_id}</small>
                <br />
                <small>Created at: {new Date(course.created_at).toLocaleString()}</small>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4 space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
