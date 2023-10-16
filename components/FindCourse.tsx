"use client"
import { useState } from 'react';
import { FaBinoculars } from 'react-icons/fa';
import Searchbar from './Searchbar';
import CourseCard from './CourseCard';
import ba from "../public/profile/vlcsnap-2022-06-29-14h22m30s920.png";
import bb from "../public/profile/vlcsnap-2022-06-29-14h23m45s921.png";
import bc from "../public/profile/vlcsnap-2022-06-29-14h24m31s848.png"

const FindCourse = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const courseData = [
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    // Add more course names as needed
  ];
  const courses = [
    // Replace with your course data
    {
      id: 1,
      courseName: 'Course 1',
      instructorName: 'Instructor 1',
      courseCoverImage: ba,
      briefOverview: 'This is the brief overview of Course 1...',
      price: 99,
    },
    {
      id: 2,
      courseName: 'Course 2',
      instructorName: 'Instructor 2',
      courseCoverImage: bb,
      briefOverview: 'This is the brief overview of Course 2...',
      price: 79,
    },
    {
      id: 3,
      courseName: 'Course 3',
      instructorName: 'Instructor 3',
      courseCoverImage: bc,
      briefOverview: 'This is the brief overview of Course 3...',
      price: 99,
    },
    {
      id: 4,
      courseName: 'Course 4',
      instructorName: 'Instructor 4',
      courseCoverImage: ba,
      briefOverview: 'This is the brief overview of Course 4...',
      price: 79,
    },{
      id: 5,
      courseName: 'Course 5',
      instructorName: 'Instructor 5',
      courseCoverImage: bb,
      briefOverview: 'This is the brief overview of Course 5...',
      price: 99,
    },
    {
      id: 7,
      courseName: 'Course 7',
      instructorName: 'Instructor 7',
      courseCoverImage: bc,
      briefOverview: 'This is the brief overview of Course 7...',
      price: 79,
    },{
      id: 8,
      courseName: 'Course 8',
      instructorName: 'Instructor 8',
      courseCoverImage: ba,
      briefOverview: 'This is the brief overview of Course 8...',
      price: 99,
    },
    {
      id: 9,
      courseName: 'Course 9',
      instructorName: 'Instructor 2',
      courseCoverImage: bb,
      briefOverview: 'This is the brief overview of Course 9...',
      price: 79,
    },{
      id: 10,
      courseName: 'Course 10',
      instructorName: 'Instructor 1',
      courseCoverImage: bc,
      briefOverview: 'This is the brief overview of Course 10...',
      price: 99,
    },
    {
      id: 11,
      courseName: 'Course 11',
      instructorName: 'Instructor 11',
      courseCoverImage: ba,
      briefOverview: 'This is the brief overview of Course 11...',
      price: 79,
    },
  ];
  return (
    
    <div>
      <button className="btn flex flex-row" onClick={openModal}>
        Find Course(s) <FaBinoculars />
      </button>
      {modalIsOpen && (
        <dialog
          id="my_modal_3"
          className="modal bg-green-900 w-[96%] mx-auto h-[96%] my-auto rounded-md flex flex-col"
          open
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute text-black text-xl right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="mb-2 text-black text-xl pt-3 pb-3 text-bold ">MGM Courses</div>
          <Searchbar />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2  w-[96%] mx-auto h-[80%] my-auto overflow-y-auto " >
          {courses.map((course) => (
             <CourseCard key={course.id} course={course} />
            ))}
          </div>
         
        </dialog>
      )}
    </div>
  );
};

export default FindCourse;
