'use client';
import Image from 'next/image'
import data from './data.json'
import img from '@/public/empowerment/1.jpeg';
import { FaArrowAltCircleLeft, FaArrowDown, FaArrowUp, FaBars, FaCaretDown, FaCartPlus,FaChevronCircleDown,FaChevronCircleUp,FaChevronDown,FaChevronUp,FaEraser,FaFemale,FaGraduationCap,FaInfo,FaInfoCircle,FaStar,FaStarHalfAlt } from 'react-icons/fa';
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

    useEffect(()=>{
        
        
      },[newCourses,selectedCategory,details,imageError,loading]);//left here
    
    return(
        //rendered courses;
        <div className='flex flex-col h-screen ' >
            {/*filter course category*/}
        <div className='flex flex-row h-fit  w-full justify-between p-4 ' >
            {!hideMenu&&<button onClick={()=>{setHideMenu(true)}} className='btn btn-ghost flex flex-col ' >show menu<FaChevronCircleDown size={20} /></button>}
            {hideMenu&&<button onClick={()=>{setHideMenu(false)}} className='btn btn-ghost  flex flex-col ' ><FaChevronCircleUp size={20} />hide menu</button>}
            
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
     


      <div className='  overflow-y-scroll  mb-2 h-screen'>
        {loading&&(<div className="bg-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          loading...
        </div>)}
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
          <p>No courses available</p>
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