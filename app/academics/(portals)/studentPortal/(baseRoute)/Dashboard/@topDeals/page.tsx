"use client";

import { FaArrowRight, FaCaretDown, FaCartPlus, FaCompress, FaExpand, FaGraduationCap, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import data from "./data.json";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import collect from "collect.js";
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg';

type Course = {
  title: string;
  courseRequirements: string[];
  unitCode: string;
  topics: {
    unit: string;
    subtopics: string[];
  }[];
  category: string;
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

  const fetchData = useCallback(() => {
    try {
      const response = [...data.courses];
      const collection = collect(response);
      const uniqueCategories = collection.pluck("category").unique().all();
      //@ts-ignore
      setFilteredData(uniqueCategories);

      if (selectedCategory !== "") {
        const filter = collection.where("category", selectedCategory).all();
        setFilteredCourses(filter);
      } else {
        setFilteredCourses(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, fetchData]);

  return (
    <div className="flex flex-col w-full h-screen background">
      <div className="flex flex-row h-fit  justify-between p-4">
     

        <p className=" font-bold lg:text-xl md:text-lg flex flex  row sm:text-sm"><p>MGM Courses</p> <FaGraduationCap size={20} /></p> 
        <div className="relative">
          <button
            className="btn btn-ghost h-fit text-left w-full"
            onClick={() => setRenderCategory(!renderCategory)}
          >
            {selectedCategory !== "" ? (
              <p className="sm:text-sm">{selectedCategory}</p>
            ) : (
              <p>ALL</p>
            )}
            <FaCaretDown size={20} className="ml-2" />
          </button>
          {renderCategory && (
            <ul className="absolute top-full mt-1 w-[150px] card border rounded-md shadow-md border-gray-300 shadow-lg max-h-64 overflow-y-auto z-10">
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedCategory("");
                    setRenderCategory(false);
                    setCurrentPage(1); // Reset to the first page when changing category
                  }}
                >
                  ALL
                </button>
              </li>
              {filteredData.map((category, index) => (
                <li key={category || index} className=" " >
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCategory(category);
                      setRenderCategory(false);
                      setCurrentPage(1); // Reset to the first page when changing category
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
      </div>

      {/* Grid layout for courses */}
      <div className="w-full overflow-y-auto h-screen p-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {currentCourses.map((course) => (
          <div key={course.unitCode} className="bg-gray-200 mt-1 mx-auto card w-full h-fit shadow-xl shadow-gray-500">
            <figure>
              <Image src={placeholder} alt="placeholder Image" className="w-full h-48 object-cover" />
            </figure>
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
              <div className="label pt-3">
                <Rating rating={5} />
              </div>
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

      {/* Pagination */}
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
                    <FaTimesCircle
                      size={18}
                      className="cursor-pointer"
                      onClick={() => toggleShowSubTopics(selectedCourse.unitCode, index)}
                    />
                  </div>
                  <div className="card-body">
                    {showSubTopics[selectedCourse.unitCode]?.[index] && (
                      <ul className="list-disc list-inside">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <li key={subIndex}>{subtopic}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="modal-action">
            <label htmlFor="my_modal_7" className="btn bg-gray-300 text-black font-serif border-none hover:bg-gray-400 hover:text-black">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
