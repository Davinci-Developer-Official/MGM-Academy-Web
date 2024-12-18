'use client';
import Image from 'next/image';
import OpenCourse from '../../../../../../components/OpenCourse';
import { useState, useEffect } from 'react';
import { FaEllipsisV, FaHeart, FaShareAlt, FaThumbsUp } from 'react-icons/fa';

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
  const [selectedCourse, setSelectedCourse] = useState("A0NULL");
  const [shareDropdown, setShareDropdown] = useState<string | null>(null); // To toggle share options
  const [likes, setLikes] = useState<{ [key: string]: number }>({}); // Store likes for each course
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

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleCopyLink = (courseId: string) => {
    const courseLink = `https://your-platform-url.com/courses/${courseId}`;
    navigator.clipboard.writeText(courseLink);
    alert("Course link copied to clipboard!");
  };

  const handleWhatsAppShare = (courseId: string) => {
    const courseLink = `https://your-platform-url.com/courses/${courseId}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(courseLink)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLike = (courseId: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [courseId]: (prevLikes[courseId] || 0) + 1,
    }));
  };

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const currentCourses = courses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="background h-full w-full p-5">
      <h1 className="text-2xl font-bold mb-5">Courses</h1>
      {courses.length === 0 ? (
        <div>No courses available.</div>
      ) : (
        <>
          <div className=" p-2 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto h-[450px] w-[98%] mx-auto">
            {currentCourses.map((course: Course) => (
              <div key={course.course_id} className="relative p-1 border rounded shadow-md shadow-gray-600    "> {/* Added relative */}
                <h2 className="text-xl font-semibold">{course.course_title}</h2>
                <div className="h-[250px] w-full mb-4">
                  <Image
                    src={course.course_cover}
                    alt={course.course_title} width={200} height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>{course.course_description}</p>
                <small>Instructor ID: {course.instructor_id}</small>
                <br />
                <small>Created at: {new Date(course.created_at).toLocaleString()}</small>
                <div className='flex flex-row justify-between'>
                  <OpenCourse id={course.course_id} name={course.course_title} />
                  <div className="flex flex-row bg-white p-2 justify-evenly w-[20%] shadow-lg rounded">
                    {/* Like Button */}
                    <button
                      className="relative flex flex-col items-center"
                      onClick={() => handleLike(course.course_id)}
                    >
                      <FaHeart size={20} className='text-red-700' />
                      <small>{likes[course.course_id] || 0}</small>
                    </button>

                    {/* Share Button */}
                    <button
                      className="relative flex flex-col items-center"
                      onClick={() => setShareDropdown(shareDropdown === course.course_id ? null : course.course_id)}
                    >
                      <FaShareAlt size={20} />
                      <span className="absolute top-full mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Share
                      </span>
                    </button>

                    {/* Share Options Dropdown */}
                    {shareDropdown === course.course_id && (
                      <div className="absolute z-10 bg-white border shadow-md rounded p-2 flex flex-col space-y-2 right-0 top-[100%] mt-2"> {/* Absolute and positioned */}
                        <button
                          className="text-left hover:bg-gray-200 px-2 py-1"
                          onClick={() => handleWhatsAppShare(course.course_id)}
                        >
                          Share via WhatsApp
                        </button>
                        <button
                          className="text-left hover:bg-gray-200 px-2 py-1"
                          onClick={() => handleCopyLink(course.course_id)}
                        >
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                </div>
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
