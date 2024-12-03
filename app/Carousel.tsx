"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaCircle } from 'react-icons/fa';
import about from "@/public/empowerment/11.png";
import mv from "@/public/empowerment/12.jpeg";
import Link from 'next/link';

interface CarouselItem {
  id: number;
  NavItem: string;
  NavDescription: string;
  NavImage: any;
  link: any;
}

const Carousel: React.FC = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const NavInfo: CarouselItem[] = [
    {
      id: 1,
      NavItem: "About Us",
      NavDescription: "Discover the power of MGM - where learning knows no bounds. Dive deeper and unlock a world of possibilities today!",
      NavImage: about,
      link: "/AboutMGM/AboutUs"
    },
    {
      id: 5,
      NavItem: "Student Portal",
      NavDescription: "Discover MGM: Empowering minds, shaping futures. Learn more about our mission and vision today!",
      NavImage: mv,
      link: "/academics/signin"
    },
    {
      id: 6,
      NavItem: "Instructor Portal",
      NavDescription: "Discover MGM: Empowering minds, shaping futures. Learn more about our mission and vision today!",
      NavImage: mv,
      link: "/academics/signin"
    },
    {
      id: 7,
      NavItem: "FAQS",
      NavDescription: "Discover MGM: Empowering minds, shaping futures. Learn more about our mission and vision today!",
      NavImage: mv,
      link: ""
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
    <div className="carousel flex flex-row relative w-[80%] mx-auto h-[250px] sm:h-[300px] mt-6">
      {/* Left Navigation Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-black text-black hover:text-[#e97902] p-2 rounded-full shadow-md transition duration-300"
        onClick={prevItem}
      >
        <FaArrowLeft size={18} />
      </button>

      {/* Carousel Item Container */}
      <div className="item flex flex-col-reverse w-full relative">
        {/* Lower Navigation */}
        <div className="lower-navigation h-8 w-full flex justify-center items-center absolute bottom-0 z-10 bg-white/70 rounded-b-md">
          {NavInfo.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentItemIndex(index)}
              className={`lower-nav-button ${currentItemIndex === index ? 'text-[#e97902]' : 'text-gray-500'}`}
            >
              <FaCircle
                className={`lower-nav-icon h-2 ${currentItemIndex === index ? 'text-[#e97902]' : 'hover:opacity-70'}`}
              />
            </button>
          ))}
        </div>

        {/* Carousel Card */}
        <div className="card w-full bg-base-100 shadow-xl h-[300px] sm:h-[350px] relative rounded-lg overflow-hidden">
          <figure className="relative h-full">
            <Image
              src={currentItem.NavImage}
              alt={currentItem.NavItem}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body absolute bottom-0 p-4 bg-white/80 w-full rounded-b-lg z-10 transition-all duration-300 transform hover:translate-y-1">
            <h2 className="card-title text-[#e97902] font-semibold text-lg">{currentItem.NavItem}</h2>
            <p className="text-[#333] text-sm sm:text-base">{currentItem.NavDescription}</p>
            <div className="card-actions flex justify-end mt-3">
              <Link href={currentItem.link} className="btn btn-primary bg-[#e97902] text-white hover:bg-[#d86e02] transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Navigation Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-black text-black hover:text-[#e97902] p-2 rounded-full shadow-md transition duration-300"
        onClick={nextItem}
      >
        <FaArrowRight size={18} />
      </button>
    </div>
  );
};

export default Carousel;
