'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Add from './Add/page';
import Get from './Get/page';

interface Courses {
  course_name: string;
}

function Page() {
  const courses: Courses[] = []; // Simulating no courses. Add course objects to test.

  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    modal?.close();
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-5 transition-colors duration-300">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Courses</h1>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={openModal}
        >
          <FaPlus />
          Add Course
        </button>
      </div>

      {/* Courses List or Empty State */}
      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-lg text-gray-600 dark:text-gray-400">
             Add a course to get started.
          </p>
          <div className="mt-4 ">
            <Get />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {courses.map((course: Courses) => (
            <div
              key={course.course_name}
              className="p-5 bg-white dark:bg-gray-800 shadow-md rounded-md transition hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {course.course_name}
              </h2>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <dialog
        id="my_modal_3"
        className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      >
        <div className="modal-box bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl p-6 relative">
          <button
            className="absolute top-3 right-3 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={closeModal}
          >
            ✕
          </button>
          <Add />
        </div>
      </dialog>
    </div>
  );
}

export default Page;
