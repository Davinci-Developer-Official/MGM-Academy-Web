import React from 'react';
import cc from '@/public/empowerment/15.jpeg';
import Image from 'next/image';

interface Course {
    id: number;
    course_name: string;
    course_description: string;
    course_code: string;
    course_category: string;
    course_average_rating: string;
    course_requirements: string;
    course_instructors: string;
    course_image: string;
    // Add more properties as needed
  }
  
  interface CourseCardProps {
    item: Course;
  }
  
  const Card: React.FC<CourseCardProps> = ({ item }) => {
  return (
    <div className="card background w-90 bg-base-100 shadow-xl" key={item.id} >
      <figure><Image src={cc} alt="holder"  /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
