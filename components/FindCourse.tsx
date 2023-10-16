"use client"
import { useState } from 'react';
import { FaBinoculars } from 'react-icons/fa';
import Searchbar from './Searchbar';

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
    // Add more course names as needed
  ];

  return (
    <div>
      <button className="btn flex flex-row" onClick={openModal}>
        Find Course(s) <FaBinoculars />
      </button>
      {modalIsOpen && (
        <dialog
          id="my_modal_3"
          className="modal bg-green-500 w-[96%] mx-auto h-[96%] my-auto rounded-md flex flex-col"
          open
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute text-black text-xl right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="mb-2 text-black text-xl">MGM Courses</div>
          <Searchbar />
          <div className="modal-box h-full">
            <div className="grid grid-cols-2 gap-4 w-full ">
              {courseData.map((course, index) => (
                <div key={index} className="bg-white p-4 rounded-md">
                  {course}
                </div>
              ))}
            </div>
            <form method="dialog">
              {/* Additional form content can be added here if needed */}
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default FindCourse;
