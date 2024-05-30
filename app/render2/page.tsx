"use client";

import { FaCaretDown, FaCaretUp, FaCartPlus, FaInfo, FaInfoCircle, FaLock, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import data from "./data.json";
import Navbar from "../components/Navbar";
import placeholder from "@/public/construction/construction.jpg"
import Image from "next/image";
import Rating from "../academics/Courses/Rating";
import Link from "next/link";

type Course = {
  title: string;
  courseRequirements: string[];
  unitCode: string;
  topics: {
    unit: string;
    subtopics: string[];
  }[];
};

const CoursesPage = () => {
  const [showRequirements, setShowRequirements] = useState<Record<string, boolean>>({});
  const [showTopics, setShowTopics] = useState<Record<string, boolean>>({});
  const [showSubTopics, setShowSubTopics] = useState<Record<string, Record<string, boolean>>>({});

  const toggleShowRequirements = (unitCode: string) => {
    setShowRequirements((prev) => ({ ...prev, [unitCode]: !prev[unitCode] }));
  };

  const toggleShowTopics = (unitCode: string) => {
    setShowTopics((prev) => ({ ...prev, [unitCode]: !prev[unitCode] }));
  };

  const toggleShowSubTopics = (unitCode: string, topicIndex: number) => {
    setShowSubTopics((prev) => ({
      ...prev,
      [unitCode]: {
        ...(prev[unitCode] || {}),
        [topicIndex]: !prev[unitCode]?.[topicIndex],
      },
    }));
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = data.courses.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const totalPages = Math.ceil(data.courses.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
   
      
      <div className="flex flex-col h-full bg-white  " >
      <div className="w-full overflow-y-auto h-screen p-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {currentCourses.map((course) => (
          <div key={course.unitCode} className="p-1 bg-gray-200 mt-1 mx-auto card w-[550px] h-fit shadow-xl shadow-gray-500 ">
            <figure><Image src={placeholder} alt="placeholder Image" /></figure>
            <h2 className="card-title p-2 font-bold font-serif">{course.title}</h2>
            
            
            
            <div className="card-title p-2 flex flex-row justify-between w-[90%] mx-auto">
              <p className="font-semibold font-mono text-base">Course Requirements:</p>
              {!showRequirements[course.unitCode] ? (
                <FaInfoCircle
                  size={18}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleShowRequirements(course.unitCode);
                  }}
                />
              ) : (
                <FaTimesCircle
                  size={18}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleShowRequirements(course.unitCode);
                  }}
                />
              )}
            </div>
            {showRequirements[course.unitCode] && (
              <ul className="bg-white card-body">
                {course.courseRequirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            )}
            <div className="card-actions justify-start p-1 ">            
                <div className="label ml-5 ">$ 499.99 </div> 
                <div className="label">Gender Studies</div>
                <div className="label" ><Rating rating={5} /></div>
                <div className="ml-[18%] text-blue-600 cursor-pointer hover:text-red-500 flex flex-row " > <p>more info</p> <FaInfoCircle size={20} className="ml-1" /> </div>
            </div>
            
            {/*
              <div className="card-title flex flex-row justify-between btn justify-start ">
              <p className="font-semibold font-mono text-base">Details</p>
              {!showTopics[course.unitCode] ? (
                <FaCaretDown
                  size={18}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleShowTopics(course.unitCode);
                  }}
                />
              ) : (
                <FaCaretUp
                  size={18}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleShowTopics(course.unitCode);
                  }}
                />
              )}
            </div>
            */}
            <Link href="/academics/Courses/content" className="btn bg-gray-300 text-black font-serif border-none hover:bg-gray-400 hover:text-black " >
              buy
              <FaCartPlus size={20} />
            </Link>
            
            {showTopics[course.unitCode] && (
              <div className="card mt-1 h-[300px] overflow-y-scroll">
                {course.topics.map((topic, index) => (
                  <div key={index} className="card-title bg-gray-200 mt-1 w-[96%] mx-auto flex flex-col">
                    <div className="card-title flex flex-row justify-between w-[90%] mx-auto">
                      <p>{topic.unit}:</p>
                      {!showSubTopics[course.unitCode]?.[index] ? (
                        <FaCaretDown
                          size={18}
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleShowSubTopics(course.unitCode, index);
                          }}
                        />
                      ) : (
                        <FaCaretUp
                          size={18}
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleShowSubTopics(course.unitCode, index);
                          }}
                        />
                      )}
                    </div>
                    {showSubTopics[course.unitCode]?.[index] && (
                      <ul className="card-compact bg-red-400 w-[98%] mx-auto bg-white mt-[2px]">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <li key={subIndex} className="flex flex-row justify-between mt-1 p-2">
                            <p>{subtopic}</p>
                            <FaLock size={15} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 text-black font-mono font-semibold  h-[50px]">
        <div className="join">
          <button
            className="join-item btn  "
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="join-item btn btn-ghost lg:p-2 ">Page {currentPage}</button>
          <button
            className="join-item btn   "
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
      </div>
    
  );
};

export default CoursesPage;

