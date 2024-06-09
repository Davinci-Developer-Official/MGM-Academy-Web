"use client";

import { FaArrowRight, FaCaretDown, FaCaretRight, FaCaretUp, FaCartPlus, FaCompress, FaExpand, FaGraduationCap, FaInfoCircle, FaLock, FaLockOpen, FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import data from "./data.json";
import Image from "next/image";
import Rating from "../Rating";
import Link from "next/link";
import collect from "collect.js";
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg'

type Course = {
  title: string;
  courseRequirements: string[];
  unitCode: string;
  topics: {
    unit: string;
    subtopics: string[];
  }[];
  category: string; // Add the category field to the course type
};

const CoursesPage = () => {
  const [showRequirements, setShowRequirements] = useState<Record<string, boolean>>({});
  const [showSubTopics, setShowSubTopics] = useState<Record<string, Record<number, boolean>>>({});
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(data.courses);

  const toggleShowRequirements = (unitCode: string) => {
    setShowRequirements((prev) => ({ ...prev, [unitCode]: !prev[unitCode] }));
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
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const [hideMenu, setHideMenu] = useState(true);
  const [renderCategory, setRenderCategory] = useState(false);
  const [filteredData, setFilteredData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = [...data.courses];
        const collection = collect(response);
        const uniqueCategories = collection.pluck('category').unique().all();
        //@ts-ignore
        setFilteredData(uniqueCategories);
        if (selectedCategory !== "") {
          const filter = collection.where('category', selectedCategory).all();
          //@ts-ignore
          setFilteredCourses(filter);
        } else {
          setFilteredCourses(response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className='flex flex-row h-fit w-full justify-between p-4'>
        {!hideMenu && <button onClick={() => { setHideMenu(true) }} className='btn btn-ghost flex flex-col'><FaCompress size={15} /></button>}
        {hideMenu && <button onClick={() => { setHideMenu(false) }} className='btn btn-ghost flex flex-col'><FaExpand size={15} /></button>}

        <p className='btn btn-ghost font-bold lg:text-xl md:text-lg sm:text-sm'>MGM Courses</p>
        <div className='flex flex-col'>
          <button className='btn btn-ghost h-fit' onClick={() => {
            setRenderCategory(true);
          }}>
            {selectedCategory !== "" && <p className='sm:text-sm'>{selectedCategory}</p>}
            {selectedCategory === "" && <p>ALL</p>}
            <FaCaretDown size={20} />
          </button>
          {renderCategory && <ul className='h-[250px] rounded-md background border-[#e1b382] border overflow-y-scroll absolute mt-10 z-10'>
            {filteredData.map((category, index) => (
              <div key={category || index}>
                <button
                  className='btn btn-ghost w-[90%] ml-[5%] mt-2'
                  onClick={() => {
                    setSelectedCategory(category);
                    setRenderCategory(false);
                    setCurrentPage(1); // Reset to the first page when changing category
                  }}
                >
                  {category}
                </button>
              </div>
            ))}
          </ul>}
        </div>
        <button className='cursor-none'><FaGraduationCap size={30} /></button>
      </div>
      <div className="w-full overflow-y-auto h-screen p-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {currentCourses.map((course) => (
          <div key={course.unitCode} className="p-1 bg-gray-200 mt-1 mx-auto card w-[550px] h-fit shadow-xl shadow-gray-500">
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
            <div className="card-actions justify-start p-1">
              <div className="label ml-5">$ 499.99</div>
              <div className="label">{course.category}</div>
              <div className="label pt-3"><Rating rating={5} /></div>
              <label
                htmlFor="my_modal_7"
                className="ml-[18%] text-blue-600 cursor-pointer hover:text-red-500 flex flex-row"
                onClick={() => {
                  setSelectedCourse(course);
                }}
              >
                <p>more info</p>
                <FaInfoCircle size={20} className="ml-1" />
              </label>
            </div>
            <Link href="/academics/Courses/content" className="btn bg-gray-300 text-black font-serif border-none hover:bg-gray-400 hover:text-black">
              buy
              <FaCartPlus size={20} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 text-black font-mono font-semibold h-[50px]">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="join-item btn btn-ghost lg:p-2">Page {currentPage}</button>
          <button
            className="join-item btn"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>

      {/* Modal showing course details */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold">Course Outline</h3>
          {selectedCourse && (
            <div className="card mt-1 h-full">
              {selectedCourse.topics.map((topic, index) => (
                <div key={index} className="card-title bg-gray-200 mt-1 w-[96%] mx-auto flex flex-col">
                  <div className="card-title flex flex-row justify-between w-[90%] mx-auto">
                    <p>{topic.unit}:</p>
                    <FaLock
                      size={18}
                      className="cursor-pointer pt-[2px]"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleShowSubTopics(selectedCourse.unitCode, index);
                      }}
                    />
                  </div>
                  {showSubTopics[selectedCourse.unitCode]?.[index] && (
                    <ul className="card-compact bg-white w-[98%] mx-auto mt-[2px]">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <div key={subIndex}>
                          <li className="flex flex-row justify-between mt-1 p-2">
                            <p>{subtopic}</p>
                            <FaInfoCircle
                              size={18}
                              className="cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleShowSubTopics(selectedCourse.unitCode, index);
                              }}
                            />
                          </li>
                          <div className="w-full h-fit">
                            {showSubTopics[selectedCourse.unitCode]?.[index] && (
                              <div>
                                <p className="text-sm p-2">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptates ratione cum nam vitae architecto perferendis explicabo quaerat impedit, labore eveniet sequi vel? Impedit ratione rem omnis blanditiis. Ex, quibusdam?
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-row p-2 w-full">
                            <Link href="" className="text-green-700 text-sm">
                              purchase course to unlock topic
                            </Link>
                            <FaArrowRight size={20} className="p-1" />
                          </div>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default CoursesPage;
