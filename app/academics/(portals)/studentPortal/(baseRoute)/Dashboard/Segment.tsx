'use client';
import HeaderDash from '@/app/components/HeaderDash'
import React, { useEffect, useState } from 'react'
import Metrics from "./Metrics"
import Carousel from './Carousel'
import ba from "@/public/placeholders/ba.jpeg";
import bb from "@/public/placeholders/bb.jpeg";
import bc from "@/public/placeholders/bc.jpeg";
import Image from 'next/image';
import BootstrapCarousel from './BootstrapCarousel';
import { FaArchive, FaCheckDouble, FaDownload, FaRegClipboard, FaSearch } from 'react-icons/fa';
import data from '../data.json'
import { useHotkeys } from 'react-hotkeys-hook';

function Segment() {
  const items = [
    {
      "id":1,
      "courseName":"Sub-poena drafting ",
      "courseInstructor":"John Lenon",
      "coverImage":ba,
      "status":"active"
  },{
      "id":2,
      "courseName":"Litigation drafting ",
      "courseInstructor":"Grace Lenon",
      "coverImage":bb,
      "status":"completed"
  },{
      "id":3,
      "courseName":"Ui Design drafting ",
      "courseInstructor":"Thomas Mithamo",
      "coverImage":bc,
      "status":"active"
  },{
      "id":4,
      "courseName":"Mental Health ",
      "courseInstructor":"Grace williams",
      "coverImage":ba,
      "status":"archived"
  },{
      "id":5,
      "courseName":"Mistrial ",
      "courseInstructor":"Miss Kim",
      "coverImage":bb,
      "status":"completed"
  }
  ];
  const[courseStatus,setCourseStatus]=useState("active")
  const filteredRecords = items.filter(item=>item.status==courseStatus)
 {/* const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };*/}
  const[progress,showProgress]=useState(false);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
  ];
  const [click,setClick] = useState(0);
  //last added

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id:number) => {
    setSelectedItems((prevSelected:any) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item:any) => item !== id)
        : [...prevSelected, id]
    );
  };
  const[courses,setCourses]=useState([...filteredRecords])
  const handleOptionClick = (action:any, id:number) => {
    if (action === 'completed') {
      {/*setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === id ? { ...course, status: 'archived' } : course
        )
      );
      alert("archived"+courses+id)*/}
      let index = items.findIndex(item => item.id === id);
      // If the object is found, update its name
          if (index !== -1) {
            const x= items[index].status = "completed";
            alert(x)
          }

    } else if (action === 'archive') {
      {/*setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));*/}
      let index = items.findIndex(item => item.id === id);
      // If the object is found, update its name
          if (index !== -1) {
            const x= items[index].status = "archived";
            alert(x)
          }
      //alert("deleted"+JSON.stringify(courses)+id);
    }
    setVisibleMenu(null);
  };

  const [visibleMenu, setVisibleMenu] = useState(null);

  const handleEllipsisClick = (id:any) => {
    setVisibleMenu(visibleMenu === id ? null : id);
  };

  {/*const handleOptionClick = (action, id) => {
    // Handle the action (e.g., delete course, archive)
    console.log(`${action} course with id ${id}`);
    setVisibleMenu(null);
  };*/}

  

  //current date;
  let currentDate = new Date();

// Extract the day, month, and year
let day = String(currentDate.getDate()).padStart(2, '0');
let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
let year = currentDate.getFullYear();

// Format the date as MM-DD-YYYY
let formattedDate = `${day}-${month}-${year}`;

  //time state
  const [time, setTime] = useState('');
  const[searchBar,showSearchBar]=useState(false);
  useHotkeys("ctrl+v",()=>{showSearchBar(true)})
//useEffect Hook
  useEffect(()=>{
   const updateTime = () => {
      const currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // The hour '0' should be '12'
      //@ts-ignore
      minutes = String(minutes).padStart(2, '0');
      //@ts-ignore
      seconds = String(seconds).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };
    
    
    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  },[progress,click,courseStatus,selectedItems]);
  
  return (
    <div className='bg-white rounded-lg border border-b-[#e97902] h-screen flex flex-col  p-1  ' >
       {/* <HeaderDash/>*/}
        
        <div className="title p-2 text-center font-serif font bold flex flex-row justify-between bg-gray-200 text-xl font-serif " >
          <p>{formattedDate}</p>       
          <p> Hello Thomas 👋 </p>
           <p>{time}</p>
        </div>

        {/* carousel */}
        <div className="carousel w-full">
        {images.map((image, index) => (
          <div id={`item${index + 1}`} className="carousel-item w-full" key={index}>
            <Image src={image} alt="s" className="w-full" width={550} height={550} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {images.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-ghost" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
      
      {/*<Carousel items={items}/>*/}
      {/*<BootstrapCarousel/>*/}
        {/*
        tabIndex={0}
        styling:"collapse collapse-arrow font-serif text-center font-semibold  border border-base-300 bg-base-200"*/}
    <div  className="flex flex-col  backdrop: w-[99%] mx-auto  text-black font-serrif  ">
      
    
    <div className='w-full justify-center  flex flex-col p-1  ' >
      <p className=' text-center text-lg p-1 font-bold ' >course overview</p>
      <div className='justify-center flex flex-row w-full  p-1 ' >
      {/*courses Taken*/}
      <div className='flex flex-col btn btn-ghost bg-gray-200 h-[100px] w-[100px] ml-2 p-1 rounded-lg text-center lg:tooltip ' data-tip="topics completed in a course" >
      <p className='text-xs  ' > Topics </p>
      <p className='text-4xl lg:pt-3 ' >20%</p>
      <p className='text-xs lg:hidden ' >completion </p>
      </div>
      {/*completion % */}
      <div className='flex flex-col  btn btn-ghost bg-gray-200 h-[100px] w-[100px] ml-2 p-1 rounded-lg text-center lg:tooltip ' data-tip="assignments completed in a course" >
      <p className='text-xs  ' >Assignments </p>
      <p className='text-4xl lg:pt-3 ' >12%</p>
      <p className='text-xs lg:hidden ' >completion </p>
      </div>
      {/*notifications*/}
      <div className='flex flex-col btn btn-ghost bg-gray-200 h-[100px] w-[100px] ml-2 p-1 rounded-lg text-center lg:tooltip ' data-tip="cat completion in a course" >
      <p className='text-xs  ' >CAT </p>
      <p className='text-4xl lg:pt-3 ' >12%</p>
      <p className='text-xs lg:hidden ' >completion </p>
      </div>
      
      </div>
  
      <div className='bg-white w-full h-fit flex flex-col p-1 ' >
    <label className="border border-black bg-white input input-bordered flex items-center gap-1 w-[80%] mx-auto  ">
  <input type="text" className="grow bg-white " placeholder="Search" onClick={()=>{
    showSearchBar(true)
    setClick(3)
    if(click==3){
      showSearchBar(false);
      setClick(0)
    }
  }} />
  <kbd className="kbd kbd-sm text-black bg-white "> <FaSearch/> </kbd>
  <kbd className="kbd kbd-sm text-black bg-white "> ⌘ </kbd>
  <kbd className="kbd kbd-sm text-black bg-white "> v </kbd>
  
</label>
{searchBar&&(<div className=' flex flex-col  bg-purple-400  w-[95%] mx-auto h-[400px] mt-2 overflow-y-auto ' >
    <p>search param</p>
  </div>)}
    </div>
    
    
    
      <button className="btn w-[290px] mx-auto text-black hover:bg-gray-300 text-xl font-medium bg-white text-center lg:tooltip " data-tip="get detailed information about your progress "
      onClick={()=>{
        setClick(1)
        showProgress(true);
        if(progress==true&&click==1){
          showProgress(false);
        }
      }} 
      >
        Track your progress
      </button></div>
      {/*styling:"collapse-content overflow-y-scroll h-full  "*/}
      
      
      {progress&&(<div className='flex flex-col h-[400px] ' >
        
        <div className="text-sm breadcrumbs p-2  ">
  <ul className='justify-center ' >
      <li>
        <a onClick={()=>{
          setCourseStatus("active")
        }} >
        <FaRegClipboard className="w-4 h-4 stroke-current"/>
          Current courses
        </a>
      </li> 
      <li>
        <a onClick={()=>{
          setCourseStatus("completed")
         }} >
          <FaRegClipboard className="w-4 h-4 stroke-current"/>
          Previous courses
        </a>
      </li> 
      <li>
      <a className="inline-flex gap-2 items-center" onClick={()=>{
        setCourseStatus("archived")
      }} >
      <FaArchive className="w-4 h-4 stroke-current"/>
      archived
      </a>
       </li>
       <li>
      <a  >
        <FaDownload className="w-4 h-4 stroke-current"/>
         Transcript
      </a>
      </li> 
      </ul>
    </div>
        
    <div className="overflow-y-scroll p-2 ">
      <table className="table">
        <thead>
          <tr className='text-black text-lg font-serif'>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>cover image</th>
            <th>Course Name</th>
            <th>Course Instructor</th>
            <th>Course completion%</th>
            <th>Assignment Completion%</th>
            <th>Quizzes Completion%</th>
            <th>CAT Completion%</th>
            <th>Attendance%</th>
            <th>Average Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map(item => (
            <tr key={item.id} className='text-black text-lg font-serif'>
              <td>
              <label>
                  <input
                    type="checkbox"
                    className="checkbox bg-gray-400"
                    //@ts-ignore
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={item.coverImage} alt="Avatar" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{item.courseName}</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">{item.courseInstructor}</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">100</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">80</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">70</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">80</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">80</div>
              </td>
              <td>
                <div className="text-sm font-semibold font-serif">B+ (70)</div>
              </td>
              <td>
                <div className="relative">
                  <button onClick={() => handleEllipsisClick(item.id)} className="p-2 focus:outline-none">
                    ⋮
                  </button>
                  {visibleMenu === item.id && (
                    <div className="absolute right-0 w-48 bg-white border border-gray-200 shadow-lg z-10 ">
                      {item.status=="completed"&&<button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => handleOptionClick('incompleted', item.id)}
                      >
                        mark as incomplete
                      </button>}
                      {item.status!=="completed"&&<button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row p-2 "
                        onClick={() => handleOptionClick('completed', item.id)}
                      >
                      <FaCheckDouble className='text-green-400 ' />  <p>mark as completed</p>
                      </button>}
                      {item.status!=='archived'&&<button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row p-2 "
                        onClick={() => handleOptionClick('archive', item.id)}
                      >
                        <FaArchive/> <p>Archive</p>
                      </button>}
                      {item.status=='unarchived'&&<button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => handleOptionClick('archive', item.id)}
                      >
                         remove from Archive
                      </button>}
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='text-black text-lg font-serif'>
            <th></th>
            <th>cover image</th>
            <th>Course Name</th>
            <th>Course Instructor</th>
            <th>Course completion%</th>
            <th>Assignment Completion%</th>
            <th>Quizzes Completion%</th>
            <th>CAT Completion%</th>
            <th>Attendance%</th>
            <th>Average Grade</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
      </div>)}

      </div>
      
      </div>
   
          
         
        
        
        
  
  )
}

export default Segment;