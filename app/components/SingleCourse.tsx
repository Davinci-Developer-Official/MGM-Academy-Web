import React from 'react';
import { MotionDiv } from './MotionDiv';
import Image, { StaticImageData } from 'next/image';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface Placeholders {
  id: number;
  coursename: string;
  courseinstructor: string;
  coverimage: string | StaticImageData;
  courseprice: string;
  coursedescription: string;
}

interface Props {
  items: Placeholders;
}

function SingleCourse({ items }: Props) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"  // Corrected typo in "hidde" to "hidden"
      animate="visible"
      transition={{
        delay: 1,
        ease: 'easeInOut',
        duration: items.id * 0.5,
      }}
      viewport={{ amount: 0 }}
      className="w-[80%] mx-auto mt-3 mb-3 h-[300px] flex flex-col border-[3px] border-[#2d545e] rounded-md"
    >
      <Image
        src={items.coverimage}
        alt={`${items.coursename} cover image`}
        width={100}
        height={100}
        style={{
          width: '100%',
          height: '240px',
          objectFit: 'cover',
          backgroundColor: 'grey',
        }}
        className="rounded-tl-md rounded-tr-md"
      />
      <div className="flex flex-row h-[60px] justify-between text-[#e1b382] bg-[#2d545e] rounded-bl-md rounded-br-md">
        <div className="flex flex-col ml-2 w-[80%]">
          <h2 className="text-base pt-1">{items.coursename}</h2>
          <p className="text-sm">Instructed by: {items.courseinstructor}</p>
        </div>
        <button className="btn mt-1 mr-1 sm:text-sm bg-[#e1b382] text-[#2d545e] hover:text-[#e1b382] hover:bg-[#2d545e] border hover:border-[#e1b382] w-[20%]">
          View Course
        </button>
      </div>
    </MotionDiv>
  );
}

export default SingleCourse;
