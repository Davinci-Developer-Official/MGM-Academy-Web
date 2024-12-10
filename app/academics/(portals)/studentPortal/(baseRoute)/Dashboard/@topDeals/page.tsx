"use client";

import { FaArrowRight, FaCaretDown, FaCartPlus, FaGraduationCap, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import data from "./data.json";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import collect from "collect.js";
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg';

import { useRouter } from "next/navigation";

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

  const router = useRouter()

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
    <div className="flex flex-col w-full h-screen bg-gray-100 dark:text-gray-100 text-black dark:bg-gray-900 dark:text-gray-100 transition-all"> {/*bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500*/}
      <div className="flex flex-row h-fit  justify-between p-4 items-center rounded-xl">{/*bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
        <p className="font-bold text-2xl flex items-center"><FaGraduationCap size={24} className="mr-2" /> MGM Courses</p>
        <div className="relative">
          <button
            className="btn btn-ghost h-fit text-left w-full text-lg flex items-center space-x-2"
            onClick={() => setRenderCategory(!renderCategory)}
          >
            <span>{selectedCategory !== "" ? selectedCategory : "ALL"}</span>
            <FaCaretDown size={20} />
          </button>
          {renderCategory && (
            <ul className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-gray-100 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => {
                    setSelectedCategory("");
                    setRenderCategory(false);
                    setCurrentPage(1);
                  }}
                >
                  ALL
                </button>
              </li>
              {filteredData.map((category, index) => (
                <li key={category || index}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => {
                      setSelectedCategory(category);
                      setRenderCategory(false);
                      setCurrentPage(1);
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

      <div className=" overflow-y-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {currentCourses.map((course) => (
          <div key={course.unitCode} className=" dark:bg-gray-800 hover:bg-gray-700 rounded-xl p-4 transition-all shadow-2xl transform hover:scale-105">
            <figure>
              <Image src={placeholder} alt="placeholder Image" className="w-full h-48 object-cover rounded-lg" />
            </figure>
            <h2 className="font-bold text-xl mt-2">{course.title}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="font-medium text-sm">Course Requirements:</p>
              {!showRequirements[course.unitCode] ? (
                <FaInfoCircle
                  size={18}
                  className="cursor-pointer"
                  onClick={() => toggleShowRequirements(course.unitCode)}
                />
              ) : (
                <FaTimesCircle
                  size={18}
                  className="cursor-pointer"
                  onClick={() => toggleShowRequirements(course.unitCode)}
                />
              )}
            </div>
            {showRequirements[course.unitCode] && (
              <ul className="bg-gray-900 text-sm mt-2 p-2 rounded-lg">
                {course.courseRequirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            )}
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold">$499.99</span>
              <span className="text-sm">{course.category}</span>
              <div className="pt-3">
                <Rating rating={5} />
              </div>
              <button
                className="ml-5 text-blue-600 hover:text-red-500"
                onClick={() => setSelectedCourse(course)}
              >
                <FaInfoCircle size={20} className="inline mr-1" />
                More Info
              </button>
            </div>
            <button onClick={()=>{
              router.push(`/academics/Courses/${course.title}`);
            }} className="btn bg-purple-600 text-white mt-3 w-full hover:bg-purple-500">
              Buy
              <FaCartPlus size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="join-item btn btn-ghost">Page {currentPage}</button>
          <button
            className="join-item btn"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>

      {/* Modal for Course Details */}
      <input type="checkbox" id="course-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 text-black dark:text-white">
          <h3 className="text-lg font-bold">Course Outline</h3>
          {selectedCourse && (
            <div className="card mt-3">
              {selectedCourse.topics.map((topic, index) => (
                <div key={index} className="card-title bg-gray-200 dark:bg-gray-700 mt-2 rounded-lg p-2">
                  <div className="flex justify-between items-center">
                    <p>{topic.unit}:</p>
                    <FaTimesCircle
                      size={18}
                      className="cursor-pointer"
                      onClick={() => toggleShowSubTopics(selectedCourse.unitCode, index)}
                    />
                  </div>
                  {showSubTopics[selectedCourse.unitCode]?.[index] && (
                    <ul className="list-disc ml-5 mt-2">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <li key={subIndex}>{subtopic}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          <div className="modal-action">
            <label htmlFor="course-modal" className="btn btn-primary">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
