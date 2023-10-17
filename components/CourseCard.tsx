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
    <div className="course-card bg-green-700 p-4  rounded-md sm:w-[350px] sm:h-fit md:w-[300px] md:h-fit lg:w-[400px] lg:h-fit mx-auto my-2  ">
      <div className="course-info">
        <div className="course-details text-black ">
          <h3>{course.courseName}</h3>
          <p>Instructor: {course.instructorName}</p>
        </div>
        <Image src={course.courseCoverImage} alt={course.courseName} className='rounded-md' />
      </div>
      <div className="course-description text-black">
        <p className={expanded ? 'expanded' : 'collapsed'}>
          {course.briefOverview}
        </p>
        <button onClick={toggleOverview} className='text-white' >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="purchase text-black ">
        <p className='text-xl text-white  ' >${course.price}</p>
        <button className="purchase-button  flex flex-row btn btn-warning "><FaCartPlus size={20} /> Purchase Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
