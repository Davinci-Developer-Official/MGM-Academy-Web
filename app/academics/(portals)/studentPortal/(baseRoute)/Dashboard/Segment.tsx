'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaEllipsisV } from 'react-icons/fa';
import ba from "@/public/placeholders/ba.jpeg";
import bb from "@/public/placeholders/bb.jpeg";
import bc from "@/public/placeholders/bc.jpeg";

const Segment = () => {
  const initialCourses = [
    { id: 1, name: "Sub-poena Drafting", instructor: "John Lenon", image: ba, status: "active" },
    { id: 2, name: "Litigation Drafting", instructor: "Grace Lenon", image: bb, status: "completed" },
    { id: 3, name: "UI Design Basics", instructor: "Thomas Mithamo", image: bc, status: "active" },
    { id: 4, name: "Mental Health", instructor: "Grace Williams", image: ba, status: "archived" },
    { id: 5, name: "Mistrial Prep", instructor: "Miss Kim", image: bb, status: "completed" },
    { id: 6, name: "Public Speaking", instructor: "Sarah Kimani", image: bc, status: "archived" },
    { id: 7, name: "Negotiation Skills", instructor: "Alex Mwangi", image: ba, status: "active" },
    { id: 8, name: "Graphic Design", instructor: "Sam Gachohi", image: bb, status: "completed" },
    { id: 9, name: "Critical Thinking", instructor: "Peter Gitonga", image: bc, status: "active" },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const itemsPerPage = 6;

  const totalPages = Math.ceil(
    courses.filter((course) =>
      (selectedStatus === 'all' || course.status === selectedStatus) &&
      (course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
    ).length / itemsPerPage
  );

  const filteredCourses = courses.filter(
    (course) =>
      (selectedStatus === 'all' || course.status === selectedStatus) &&
      (course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const toggleMenu = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleCourseAction = (action: string, courseId: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, status: action } : course
      )
    );
    setActiveMenu(null);
  };

  const handleOpenCourse = (courseName: string) => {
    alert(`Opening course: ${courseName}`);
  };

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 w-full h-full p-4 flex flex-col items-center">
      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-3xl mb-6 gap-4">
        <input
          type="text"
          className="input input-bordered w-full lg:w-3/4"
          placeholder="Search for courses or instructors"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="select select-bordered lg:w-1/4 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 "
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {paginatedCourses.length > 0 ? (
          paginatedCourses.map((course) => (
            <div key={course.id} className="relative p-4 bg-white rounded-lg dark:bg-gray-800 dark:text-gray-100 shadow-md flex flex-col">
              <Image src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="mt-4 text-lg font-semibold">{course.name}</h2>
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              <p className={`text-sm mt-2 font-bold ${course.status === 'active' ? 'text-green-600' : course.status === 'completed' ? 'text-blue-600' : 'text-red-600'}`}>
                Status: {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleOpenCourse(course.name)}
                >
                  Open Course
                </button>
                <button
                  className="btn btn-sm btn-outline text-gray-600"
                  onClick={() => toggleMenu(course.id)}
                >
                  <FaEllipsisV />
                </button>
              </div>
              {activeMenu === course.id && (
                <div className="absolute right-4 top-4 bg-white shadow-lg border rounded-lg p-2 z-10">
                  <button
                    className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100"
                    onClick={() => handleCourseAction('archived', course.id)}
                  >
                    Archive
                  </button>
                  <button
                    className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100"
                    onClick={() => handleCourseAction('completed', course.id)}
                  >
                    Mark Completed
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No courses found matching your criteria.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center w-full max-w-3xl mt-6">
        <button
          className="btn btn-sm btn-outline"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <span className="font-medium text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-sm btn-outline"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Segment;
