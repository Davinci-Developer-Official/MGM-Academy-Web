"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaCaretRight, FaCaretLeft, FaCircle, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import RadialProgress from "./Radial"


interface CarouselItem {
  id: number;
  courseName: string;
  courseInstructor: string;
  coverImage: any;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const prevItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = items[currentItemIndex];
  const[progress,setProgress]=useState(20);//default==0
  const[showProgress,setShowProgress]=useState(false);
  //track realtime changes;
  useEffect(()=>{},[progress,showProgress])
  return (
    <div className="carousel w-full flex flex-col h-[300px]   ">
      <div className="item flex flex-col w-[97%] mx-auto relative">
        <button className=" prev-button btn absolute top-[25%] left-0 transform -translate-y-1/2 bg-white text-black hover:text-[#e97902] hover:bg-white rounded-full border-none mt-5  " onClick={prevItem}>
          <FaAngleLeft size={30} />
        </button>
        <button className=" next-button btn  absolute top-[30%] right-0 transform -translate-y-1/2 bg-white text-black hover:text-[#e97902] hover:bg-white rounded-full border-none mt-5  " onClick={nextItem}>
          <FaAngleRight size={30} />
        </button>
        {/*carousel content*/}
          <div className='card flex flex-col  w-[80%] mx-auto mt-2 bg-gray-500 h-[230px] ' >
          <Link href='/academics/studentPortal/Assignments/dashboard' className=' card rounded-lg flex flex-row justify-between bg-gray-500 hover:bg-gray-500 cursor-pointer text-white hover:text-white h-[200px] ' onMouseEnter={()=>{
            setShowProgress(true)
          }} onMouseLeave={()=>{
            setShowProgress(false)
          }} >
            
            <div className='w-full text-center  flex flex-col ' >
              <div className='font-serif font-semibold card-title pl-5 h-[80%] bg-red-400 ' >Chapter 1: Introduction to Integers</div>
              <div className='card-body h-[10%] font-mono  flex flex-row justify-evenly p-1 bg-green-500 ' >
                <p className='pt-2 ' >{currentItem.courseName}</p>
                <p className='pt-2 ' >{currentItem.courseInstructor}</p>
              </div>
            </div> 
            <figure className='pt-[8px] pr-[8px] bg-gray-400 absolute left-[90%] ' >
              <RadialProgress value={70} />
            </figure>     
          </Link>
          <div className='flex flex-row p-2 justify-evenly bg-grey-400 hover:border hover:border-[#e1b382] hover:text-[#e97902] hover:bg-[#0f2027] w-full '>
          
          <p>50%</p>
          <progress className="progress progress-success w-56" value={50} max="100"></progress>
          <Link href='/academics/studentPortal/Assignments/dashboard' className='btn btn-success ' > continue </Link>
          </div>
          </div>
             {/*
          <Image src={currentItem.coverImage} alt={currentItem.courseName} style={{
            width:"100%",
            height:"140px",
            objectFit:"cover",
            backgroundColor:"grey",         
          }} className='rounded-tl-md rounded-tr-md avatar w-96  ' /> 
          <div className='flex flex-row h-[60px]  justify-between bg-[#e97902] rounded-bl-md rounded-br-md font-mono'>
            <div className='flex flex-col ml-2 w-[80%]'>
              <h2 className='text-base pt-2'>{currentItem.courseName}</h2>
              <p className='text-sm'>Instructed by: {currentItem.courseInstructor}</p>
            </div>
            <Link href='/academics/studentPortal/Assignments/dashboard' className='btn btn-success hover:border hover:border-[#e1b382] hover:text-[#e97902] hover:bg-[#0f2027] mt-[5px] mr-1 sm:text-sm w-[20%]'>
              Chapter 1
            </Link>
          </div> 
        */}  
        <div className={`lower-navigation h-10 w-full flex justify-center items-center`}>
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentItemIndex(index)}
              className={`lower-nav-button mt-2 mb-2 ${currentItemIndex === index ? 'active' : ''}`}
            >
              <FaCircle
                className={`lower-nav-icon ml-1 h-2 ${
                  currentItemIndex === index ? 'active text-[#e97902]' : 'hover:opacity-70'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

