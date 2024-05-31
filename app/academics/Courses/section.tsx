'use client';
import Image from 'next/image'
import {category} from './data.json'
import img from '@/public/empowerment/1.jpeg';
import { FaArrowAltCircleLeft, FaArrowDown, FaArrowUp, FaBars, FaCaretDown, FaCartPlus,FaChevronCircleDown,FaChevronCircleUp,FaChevronDown,FaChevronUp,FaCompress,FaEraser,FaExpand,FaFemale,FaGraduationCap,FaInfo,FaInfoCircle,FaStar,FaStarHalfAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from "./CourseCard"
import Rating from './Rating';
import axios from 'axios';
import { Course } from '../(portals)/studentPortal/(baseRoute)/courses/list';
import noImage from "@/public/icons/noImageFound.png"
import noVideo from "@/public/icons/noVideoFound.png"
import collect from 'collect.js';
import loading from '@/public/animated/loading.gif';

interface Data {
    id:number,
    category:string,
}

interface CourseDetails {
    id: number;
    cover_image:string,
    cover_video:string,
    course_name: string;
    course_description: string;
    course_code: string;
    course_category: string;
    unit_code: string;
    course_requirements: string;
    course_instructor: string;
    course_rating:string;
}
interface Props {
  courses: CourseDetails[];
}

export default function Section({setHideMenu,hideMenu}:any){

    const[category,showCategory]=useState([
        {
            id:1,
            category:"gender studies",
        },
        {
            id:2,
            category:"information Technology"
        },{
            id:1,
            category:"law studies",
        },
        {
            id:2,
            category:"journalism studies"
        }
    ]);
    const[renderCategory,setRenderCategory]=useState(false);
    const[selectedCategory,setSelectedCategory]=useState("");
    const[filteredData,setFilteredData]=useState<CourseDetails[]>([])
    const [newCourses, setNewCourses] = useState<CourseDetails[]>([]); 
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page
  const[details,setDetails]=useState("")
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = newCourses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newCourses.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const [selectedItemId, setSelectedItemId] = useState(null); // State to store the ID of the selected item
//const selectedCategorys = "Your desired category"; // Set your desired category here
const [loading, setLoading] = useState(false);
const [xloading, setXloading] = useState(false);
  const fetchData = async () => {
    try {
      {/*
        await axios.get('/api/get_course').then((res)=>{
          setNewCourses(res.data)
          setFilteredData(res.data)
          //alert(JSON.stringify(newCourses))
      })
      */}
      const response = await axios.get('/api/get_course');
    
    // Check if the response status is successful
    if (response.status === 200) {
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
          setNewCourses(response.data)
        
        }
    }else {
      // If the response status is not successful, log an error
      console.error('Unexpected status code:', response.status);
    }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally{
      setLoading(false)
    }
  };
  fetchData();
  

const uniqueCategories = Array.from(new Set(newCourses.map(item => item.course_category)));

  //useEffect
    useEffect(()=>{
        
        
      },[newCourses,selectedCategory,details,imageError,loading,xloading]);//left here
    
    return(
        //rendered courses;
        <div className='flex flex-col h-screen ' >
            {/*filter course category*/}
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
        {renderCategory&&<ul className=' h-fit rounded-md background border-[#e1b382] border overflow-y-scroll absolute mt-10 z-10 ' >
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
        {/*mapping courses*/}
        
            {/*mapped courses*/}
     

        
        {xloading&&(

<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-transparent">
  <div className="relative max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
    <button
      onClick={() => {
        setSelectedCategory("")
        setXloading(false); // Set isLoading state to false to hide the loading component
      }} // Add your cancel function here
      className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-600 dark:text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2.646 2.646a.5.5 0 0 1 .708 0L10 9.293l6.646-6.647a.5.5 0 0 1 .708.708L10.707 10l6.647 6.646a.5.5 0 0 1-.708.708L10 10.707l-6.646 6.647a.5.5 0 1 1-.708-.708L9.293 10 2.646 3.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
    {selectedCategory&&<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">{selectedCategory}.</h5>}
    <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div role="status" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
</div>


)}
       
      <div className='  overflow-y-scroll  mb-2 h-screen'>
        
        {currentCourses.length > 0 ? (
          <div className="w-[98%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {/*purpose:loaded courses from server*/}
            {currentCourses.map((item) => (
              <div  className={`${
                parseInt(details) !== item.id
                  ? " h-[430px] card background w-[320px] mx-auto shadow-lg shadow-indigo-500/50 border borde-t-[#e97902] border-t-3"
                  : " h-[530px] card background w-[320px] mx-auto shadow-lg shadow-indigo-500/50 border borde-t-[#e97902] border-t-3"
              }`}  key={item.id}>
               <h2 className="card-title pt-1 justify-center text-[#e97902] rounded-tl-xl rounded-tr-xl ">
                    <p>{item.course_name}</p>
                    
                  </h2>
                  {parseInt(details) !== item.id &&<figure className='w-full h-[200px]  ' >
                  {parseInt(details) !== item.id &&
                  <div className="avatar ">
                  <div className="w-[150px] rounded-xl">
                
                  {imageError?<Image src={noImage}  width={200} height={200} alt="holder"/>:<Image src={item.cover_image}  width={200} height={200} alt="holder"  onError={() => setImageError(true)} />}
                  </div>
                  </div>
                  } {/* Adjust width and height as per your requirement */}
                  {/* {parseInt(details) === item.id && <video autoPlay loop={false} muted={true} width="400" height="400" controls preload="none">
                            <source src={item.cover_video} type="video/mp4" />
                            <track
                              src="/path/to/captions.vtt"
                              kind="subtitles"
                              srcLang="en"
                              label="English"
                            />
                            Your browser does not support the video tag.
                          </video>}*/}
                </figure>}
                <div className="card-body">
                  
                  
                {parseInt(details) !== item.id &&<div className="w-full  justify-between flex flex-row ">

                    <div className="flex flex-col ">
                      <p className='p-2 text-[#e97902] font-bold font-mono text-xs '>instructor(s): </p>
                      <p className='p-2 '>{item.course_instructor}</p>

                    </div>
                    <div className="flex flex-col text-xs "><p className='p-2 text-[#e97902] font-bold font-mono '>Rating:</p><p className='p-2 '> <Rating rating={parseInt(item.course_rating)} /></p> </div>

                  </div>}
                  <div className='flex flex-col w-full  '>
                  {parseInt(details) !== item.id &&<button className=' p-2 flex flex-row justify-around ' onClick={() => {
                      setDetails(JSON.stringify(item.id));
                    }}  >
                      {parseInt(details) === item.id ? <button className="  btn btn-ghost h-[40px] " onClick={() => {
                        setDetails("")
                      }}>
                        <FaInfo size={20} />
                      </button> : <button className="  btn btn-ghost  " onClick={() => {
                        setDetails(JSON.stringify(item.id))
                      }}><FaInfo size={20} /></button>}

                      <p className='font-mono font-bold btn btn-ghost '>details</p>
                    </button>}
                    {parseInt(details) === item.id ? (
                      <div className="     overflow-y-scroll h-[400px]  " >{/*testing color: bg-red-500*/}
                        {videoError?<Image src={noVideo}  width={280} height={200} alt="holder"/>:
                        <video autoPlay loop={false} muted={true} width="290" height="200" className='mx-auto' controls preload="none" onError={()=>{
                          setVideoError(true)
                        }} >
                            <source src={item.cover_video} type="video/mp4" />
                            <track
                              src="/path/to/captions.vtt"
                              kind="subtitles"
                              srcLang="en"
                              label="English"
                            />
                            Your browser does not support the video tag.
                          </video>}
                        <div>
                          <p className='font-mono font-bold text-[#e97902] ' >unit code:</p>
                          <p>{item.unit_code}</p>
                        </div>
                        <div className='flex flex-col w-full '>
                        <p className='p-2 text-[#e97902] font-bold font-mono '>category:</p>
                        <p className='p-2 '>{item.course_category}</p>
                        </div>
                        <div>
                          <p className='font-mono font-bold text-[#e97902] '>description:</p>
                          <p>{item.course_description}</p>
                        </div>
                        

                    <div className="flex flex-col ">
                      <p className='p-2 text-[#e97902] font-bold font-mono text-xs '>instructor(s): </p>
                      <p className='p-2 '>{item.course_instructor}</p>

                    </div>
                    <div className="flex flex-col text-xs ">
                      <p className='p-2 text-[#e97902] font-bold font-mono '>Rating:</p>
                      <p className='p-2 '> <Rating rating={parseInt(item.course_rating)} /></p> </div>

                  
                        <div>
                          <p className='font-mono font-bold text-[#e97902] '>requirements:</p>
                          <p>{item.course_requirements}</p>
                        </div>
                      </div>
                    ) : ""}
                  </div>
                  <button className='btn btn-success ' >
                    <Link href="/academics/Courses/content">Buy</Link>
                  </button>
                </div>
              </div>))}</div>) : (
          //when courses are unavailable in the server ie no courses added.
          <div className='flex flex-col w-full h-screen  ' >
            <p className="text-center w-full bg-red-400   " >No courses available</p>
            <div className='shadow-lg shadow-[#e97902] card w-[90%] lg:w-[60%] mx-auto mt-4  ' >
              <div className='text-center card-body  ' >
                <p className=' card-title text-center ' >It seems there are no courses available.</p>
                <p className='' > To add a new course you need create an account with us as an instructor</p> 
                <Link href="/academics/InstructorApplication" className='btn btn-success ' >register now</Link>
                <p>if you are an already registered instructor you can create a course  now !</p>
                <Link href="/academics/instructorPortal/Courses/create" className='btn btn-secondary '  >create course</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-center mt-4'>
        <ul className='flex space-x-2'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <button
                className={`${
                  currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-100'
                } px-3 py-1 rounded`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
        </div>
        
        
    )
}
{/*
<Link href='/academics/Courses/content' key={item.id} className=' w-[300px] h-[300px] bg-white border-2  hover:border-2 hover:border-[#e2c5a6] hover:cursor-pointer rounded-md ' >
            <div className='  w-full  ' >
            <Image src={img} alt={`${item.course_name}cover image`} className='w-full object-fit h-full ' />
            </div>
            <p className='h-fit  p-[6px]  ' >{item.course_name}</p>
            <p className='h-[30px]  p-[5px]  ' >{item.course_instructors}</p>
            <p className='h-[30px]  p-1 ' >$200</p>
            </Link>
*/}