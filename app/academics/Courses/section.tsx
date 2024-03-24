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

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = newCourses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newCourses.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const [selectedItemId, setSelectedItemId] = useState(null); // State to store the ID of the selected item
//const selectedCategorys = "Your desired category"; // Set your desired category here
if(selectedCategory!==""){
  const filteredCourses = newCourses.filter(item => item.course_category === selectedCategory);
  setFilteredData(filteredCourses)
}else{
  const fetchData = async () => {
    try {
      await axios.get('/api/get_course').then((res)=>{
          setNewCourses(res.data)
          setFilteredData(res.data)
          //alert(JSON.stringify(newCourses))
      })

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  
}
const uniqueCategories = Array.from(new Set(newCourses.map(item => item.course_category)));

    useEffect(()=>{
        
        
      },[newCourses,selectedCategory,details]);//left here
      

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
                {uniqueCategories.map((items)=>(<div key={items} >
                    <button className='btn btn-ghost  w-[90%] ml-[5%] mt-2 outset  ' onClick={()=>{
                        setSelectedCategory(items);
                        setRenderCategory(false);
                        alert(selectedCategory)
                    }} > {items} </button>
                </div>))}</ul>}</div>
        <button className='cursor-none '  ><FaGraduationCap size={30} /></button>
        </div>
        {/*mapping courses*/}
        
            {/*mapped courses*/}
     


      <div className='  overflow-y-scroll  mb-2 h-screen'>
        {currentCourses.length > 0 ? (
          <div className="w-[98%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {currentCourses.map((item) => (
              <div className={parseInt(details) === item.id ? "mb-4 card background w-[400px] mx-auto   shadow-lg shadow-indigo-500/50 " : "card background w-[400px] h-[550px] mx-auto  mb-4  shadow-lg shadow-indigo-500/50 "} key={item.id}>
                <figure>
                  <Image src={item.cover_image} width={400} height={400} alt="holder" /> {/* Adjust width and height as per your requirement */}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.course_name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <div className='flex flex-col w-full '>
                    <p className='p-2 text-[#e97902] font-bold font-mono '>category:</p>
                    <p className='p-2 '>{item.course_category}</p>
                  </div>
                  <div className="w-full  justify-between flex flex-row ">

                    <div className="flex flex-col ">
                      <p className='p-2 text-[#e97902] font-bold font-mono '>instructor(s): </p>
                      <p className='p-2 '>{item.course_instructor}</p>

                    </div>
                    <div className="flex flex-col   "><p className='p-2 text-[#e97902] font-bold font-mono '>Rating:</p><p className='p-2 '> <Rating rating={parseInt(item.course_rating)} /></p> </div>

                  </div>
                  <div className='flex flex-col w-full  '>
                    <button className=' p-2 flex flex-row justify-around ' onClick={() => {
                      setDetails(JSON.stringify(item.id));
                    }}  >
                      {parseInt(details) === item.id ? <button className="  btn btn-ghost  " onClick={() => {
                        setDetails("")
                      }}>
                        <FaInfo size={20} />
                      </button> : <button className="  btn btn-ghost  " onClick={() => {
                        setDetails(JSON.stringify(item.id))
                      }}><FaInfo size={20} /></button>}

                      <p className='font-mono font-bold btn btn-ghost '>details</p>
                    </button>
                    {parseInt(details) === item.id ? (
                      <div className="card-body overflow-y-scroll h-[200px] " >
                        <div>
                          <p className='font-mono font-bold text-[#e97902] ' >unit code:</p>
                          <p>{item.unit_code}</p>
                        </div>
                        <div>
                          <p className='font-mono font-bold text-[#e97902] '>description:</p>
                          <p>{item.course_description}</p>
                        </div>
                        <div>
                          <p className='font-mono font-bold text-[#e97902] '>requirements:</p>
                          <p>{item.course_requirements}</p>
                        </div>
                        <div>
                          <video autoPlay loop muted={false} width="320" height="240" controls preload="none">
                            <source src={item.cover_video} type="video/mp4" />
                            <track
                              src="/path/to/captions.vtt"
                              kind="subtitles"
                              srcLang="en"
                              label="English"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    ) : ""}
                  </div>
                  <button className='btn btn-success ' >
                    <Link href="/academics/Courses/content">Buy</Link>
                  </button>
                </div>
              </div>

            )
            )}
          </div>) : (
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