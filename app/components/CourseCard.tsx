// components/CourseCard.tsx

import Image from 'next/image';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

interface Course {
  id: number;
  courseName: string;
  instructorName: string;
  courseCoverImage: any;
  briefOverview: string;
  price: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleOverview = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="course-card border border-[#e1b382] text-[#e1b382] bg-[#2d545e] p-4  rounded-md sm:w-[350px] sm:h-fit md:w-[300px] md:h-fit lg:w-[400px] lg:h-fit mx-auto my-2  ">
      <div className="course-info">
        <div className="course-details  ">
          <h3 className='text-[#e1b382] mb-2 text-xl text-center ' >{course.courseName}</h3>
          <p className='text-[#e1b382] mb-2 text-center  ' >Instructor: {course.instructorName}</p>
        </div>
        <Image src={course.courseCoverImage} alt={course.courseName} className='rounded-md sm:w-[350px] md:w-[300px] lg:w-[400px]  ' />
      </div>
      <div className="course-description text-[#e1b382] pt-2 pb-2 ">
        <p className={expanded ? 'expanded' : 'collapsed'}>
          {course.briefOverview}
        </p>
        <button onClick={toggleOverview} className='text-white' >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="purchase  ">
        <p className='text-xl text-white pb-2 pt-2   ' >${course.price}</p>
        <button className="purchase-button pt-2 flex flex-row btn hover:text-[#e1b382] hover:bg-[#2d545e] bg-[#e1b382] text-[#2d545e] border hover:border-[#e1b382] justify-center "><FaCartPlus size={20} /> Purchase Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
