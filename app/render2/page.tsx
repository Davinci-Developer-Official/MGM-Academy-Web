"use client";

import { FaCaretDown, FaCaretUp, FaCartPlus, FaCompress, FaExpand, FaGraduationCap, FaInfo, FaInfoCircle, FaLock, FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import data from "./data.json";
import Navbar from "../components/Navbar";
import placeholder from "@/public/construction/construction.jpg";
import Image from "next/image";
import Rating from "../academics/Courses/Rating";
import Link from "next/link";
import collect from "collect.js";
import axios from "axios";

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
  const [showSubTopics, setShowSubTopics] = useState<Record<string, Record<string, boolean>>>({});
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

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
  const currentCourses = data.courses.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const totalPages = Math.ceil(data.courses.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const [selectedItemId, setSelectedItemId] = useState(null); // State to store the ID of the selected item
  //const selectedCategorys = "Your desired category"; // Set your desired category here
  const [loading, setLoading] = useState(false);
  const [xloading, setXloading] = useState(false);
  const[hideMenu,setHideMenu]=useState(true)
  const[selectedCategory,setSelectedCategory]=useState("");
  const[renderCategory,setRenderCategory]=useState(false);
  const slob = [" gender studies ", " feminism " ," gender politics " ]
  const[filteredData,setFilteredData]=useState([])

  const fetchData = async () => {
    try {
      {/*
        await axios.get('/api/get_course').then((res)=>{
          setNewCourses(res.data)
          setFilteredData(res.data)
          //alert(JSON.stringify(newCourses))
      })
      */}
      //const response = await axios.get('/api/get_course');
    
    // Check if the response status is successful
    {/*if (response.status === 200) {
      const collection = collect(response.data);
      const uniqueCategories = collection.pluck('course_category').unique().all();
      //@ts-ignore
      setFilteredData(uniqueCategories);
        if(selectedCategory!==""){
          const collection = collect(response.data);
          const filter = collection.where('course_category', selectedCategory).all();
          //@ts-ignore
          setNewCourses(filter)
        }else{
          //setNewCourses(response.data)
        
        }
    }*/}
    if (data.courses.length!==0) {
      const response = [...data.courses]
      const collection = collect(response);
      const uniqueCategories = collection.pluck('category').unique().all();
      //@ts-ignore
      setFilteredData(uniqueCategories);
        if(selectedCategory!==""){
          const collection = collect(response);
          const filter = collection.where(' category', selectedCategory).all();
          //@ts-ignore
          setNewCourses(filter)
        }else{
          //setNewCourses(response.data)
        
        }
    }else {
      // If the response status is not successful, log an error
      console.error('Unexpected status code:', "no data fetched" );{/*response.status*/}
    }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally{
      setLoading(false)
    }
  };
  useEffect(()=>{
    fetchData();
  },[selectedCategory,filteredData,])

  return (
    <div className="flex flex-col h-full bg-white">
      <div className='flex flex-row h-fit  w-full justify-between p-4 ' >
            {!hideMenu&&<button onClick={()=>{setHideMenu(true)}} className='btn btn-ghost flex flex-col ' ><FaCompress size={15} /></button>}
            {hideMenu&&<button onClick={()=>{setHideMenu(false)}} className='btn btn-ghost  flex flex-col ' ><FaExpand size={15} /></button>}
            
            <p className='btn btn-ghost font-bold lg:text-xl md:text-lg sm:text-sm ' >MGM Courses</p>
            <div className='flex flex-col' >
            <button className='btn btn-ghost h-fit  ' onClick={()=>{
                setRenderCategory(true);
            }} >
                {selectedCategory!==""&&<p className='sm:text-sm' >{selectedCategory}</p>}
                {selectedCategory==""&&<p>ALL</p>}
                 <FaCaretDown size={20} />
            </button>
        {renderCategory&&<ul className=' h-[250px] rounded-md background border-[#e1b382] border overflow-y-scroll absolute mt-10 z-10 ' >
        {filteredData.map((category, index) => (
  <div key={index}>
    
    <button 
      className='btn btn-ghost w-[90%] ml-[5%] mt-2 outset' 
      onClick={() => {
        //@ts-ignore
        setSelectedCategory(category);
        setRenderCategory(false);
        setXloading(true)
        setTimeout(() => {
          console.log('My function stopped after 50 seconds.');
          setXloading(false); // Stop the function
          //alert("loading")
        }, 40000);
        //alert(category); // Changed from selectedCategory to category
      }}
    >
      {/* @ts-ignore */}
      {category}
    </button>
      </div>
    ))}</ul>}</div>

        <button className='cursor-none '  ><FaGraduationCap size={30} /></button>
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
              <div className="label ml-5 ">$ 499.99 </div>
              <div className="label">Gender Studies</div>
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
        <div className="modal-box bg-white ">
          <h3 className="text-lg font-bold"> Course Outline </h3>
          {selectedCourse && (
            <div className="card mt-1  h-full ">
              {selectedCourse.topics.map((topic, index) => (
                <div key={index} className="card-title bg-gray-200 mt-1 w-[96%] mx-auto flex flex-col">
                  <div className="card-title flex flex-row justify-between w-[90%] mx-auto">
                    <p>{topic.unit}:</p>
                    {!showSubTopics[selectedCourse.unitCode]?.[index] ? (
                      <FaCaretDown
                        size={18}
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleShowSubTopics(selectedCourse.unitCode, index);
                        }}
                      />
                    ) : (
                      <FaCaretUp
                        size={18}
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleShowSubTopics(selectedCourse.unitCode, index);
                        }}
                      />
                    )}
                  </div>
                  
                    <ul className="card-compact bg-red-400 w-[98%] mx-auto bg-white mt-[2px]">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <li key={subIndex} className="flex flex-row justify-between mt-1 p-2">
                          <p>{subtopic}</p>
                          <FaLock size={15} />
                        </li>
                      ))}
                    </ul>
                  
                </div>
              ))}
            </div>
          )}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  );
};

export default CoursesPage;
