"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaCaretRight, FaCaretLeft, FaCircle } from 'react-icons/fa';
import fs from 'fs';
import about from "@/public/empowerment/11.png";
import mv from "@/public/empowerment/12.jpeg"

interface CarouselItem {
  id: number;
  NavItem: string;
  NavDescription: string;
  NavImage: any;
}

interface CarouselProps {
}

const Carousel: React.FC<CarouselProps> = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  
  const NavInfo: CarouselItem[] = [
    {
      id:1,
      NavItem:"About Us",
      NavDescription:"Discover the power of MGM - where learning knows no bounds. Dive deeper and unlock a world of possibilities today!",
      NavImage:about,
    },
    {
      id:2,
      NavItem:"Our Mission & Vision",
      NavDescription:"Discover MGM: Empowering minds, shaping futures. Learn more about our mission and vision today!",
      NavImage:mv,
    }
  ];

  const prevItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? NavInfo.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === NavInfo.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = NavInfo[currentItemIndex];

  return (
    <div className="carousel flex flex-row md:w-[80%] lg:w-[80%] sm:w-[90%] mx-auto h-[300px] mt-6 ">
     <button className="prev-button btn btn-circle my-auto mr-2 border border-black bg-white text-black  " onClick={prevItem}>
          <FaArrowLeft />
        </button>
        
      <div className="item flex flex-col-reverse w-full relative  ">
      <div className={`lower-navigation h-10 w-full flex justify-center items-center`}>
          {NavInfo.map((item, index) => (
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
        <div className="card  w-full mx-auto bg-base-100 shadow-xl image-full h-[400px] ">
            <figure className=' ' >
              <Image
                src={currentItem.NavImage}
                alt={currentItem.NavItem}
                layout="fill" // Adjust layout property here
                objectFit="cover" // Ensure the image covers the entire container
                className="rounded-t-xl"
              />
            </figure>
          <div className="card-body  ">
            <h2 className="card-title text-[#e97902] ">{currentItem.NavItem}</h2>
            <p className='text-[#e97902] ' >{currentItem.NavDescription}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{currentItem.NavItem}</button>
          </div>
      </div>
</div>
        
      </div>
      <button className="next-button btn btn-circle my-auto ml-2 border border-black bg-white text-black " onClick={nextItem}>
          <FaArrowRight />
        </button>
    </div>
  );
};
{/*
<div className='w-full h-[300px] flex flex-col border border-white rounded-md'>
             className='rounded-md object-fit w-full h-full  ' /> 
          <div className='absolute p-2 lg:bottom-[30px] sm:bottom-[28px] mt-[50px] flex flex-row h-fit backdrop-blur-sm bg-white/30 w-full justify-between  rounded-bl-md rounded-br-md font-mono  '>              
              <p className='text-sm font-bold p-2 '>{currentItem.NavDescription}</p>           
            <div className='justify-end flex  w-full ' >
            <button className='btn btn-primary  hover:border hover:border-[#e1b382] hover:text-[#e97902] hover:bg-[#0f2027] mt-[5px] mr-1 sm:text-sm w-fit  h-fit '>
            {currentItem.NavItem}
            </button>
            </div>
          </div>      
        </div>
*/}

export default Carousel;
