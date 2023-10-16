// components/CourseCard.tsx

import Image from 'next/image';
import React, { useState } from 'react';

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
    <div className="course-card bg-green-700 p-4  rounded-md sm:w-[350px] sm:h-[350px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto my-2  ">
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
        <button onClick={toggleOverview}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="purchase text-black ">
        <p>${course.price}</p>
        <button className="purchase-button">Purchase Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
