'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight, FaCaretLeft, FaCaretRight, FaCircle } from 'react-icons/fa';

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

  return (
    <div className="carousel w-full flex flex-col ">
      
      <div className="item flex flex-col w-full  ">
        <div className='w-full h-[300px] flex flex-col border border-[#2d545e] rounded-md  '  >
        <Image src={currentItem.coverImage} alt={currentItem.courseName} style={{
          width:"100%",
          height:"240px",
          objectFit:"cover",
          backgroundColor:"grey",         
        }} className='rounded-tl-md rounded-tr-md ' /> 
        <div className='flex flex-row h-[60px]  justify-between text-[#e1b382] bg-[#2d545e] rounded-bl-md rounded-br-md '   >
         <div className='flex flex-col ml-2 w-[80%] ' >
         <h2 className='text-base  pt-2 ' > {currentItem.courseName}</h2>
         <p className='text-sm  ' >Instructed by: {currentItem.courseInstructor}</p>
         </div>
         <button className='btn bg-[#e1b382] text-[#2d545e] hover:border hover:border-[#e1b382] hover:text-[#e1b382] hover:bg-[#2d545e] mt-[5px] mr-1 sm:text-sm   w-[20%] ' >
          view course
          
         </button>
        </div>      
        </div>
        <div className={`lower-navigation h-10 w-full flex justify-center items-center`}>
  {items.map((item, index) => (
    <button
      key={item.id}
      onClick={() => setCurrentItemIndex(index)}
      className={`lower-nav-button mt-2 mb-2 ${currentItemIndex === index ? 'active' : ''}`}
    >
      <FaCircle
        className={`lower-nav-icon ml-1 h-2 ${
          currentItemIndex === index ? 'active text-[#2d545e]' : 'hover:opacity-70'
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
