// Import React and necessary components/modules
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import animation from "../../public/animated/Animation - 1701465071077.gif";
//import { fetchData } from "";
import SingleCourse, { Placeholders } from "./SingleCourse";
import { MotionDiv } from "./MotionDiv";

// Define types for the course data
interface Course {
    id:number,
    courseName:string,
    courseInstructor:string,
    coverImage:string|StaticImageData,
    locked:boolean
}

// Define the API URL
const url = "https://65644addceac41c0761dd04d.mockapi.io/users/api/profile";

// Component definition
export default function LoadingCourses() {
  // State for storing fetched data
  const [data, setData] = useState<Placeholders[]>([]);

  // State for tracking intersection
  const { ref, inView } = useInView();

  // Effect to fetch data when the component is in view
  useEffect(() => {
    async function form (){
      if (inView) {
        const response= await fetch('/api/get_student')
        const info = await response.json();  
        setData(info);
  
          alert(JSON.stringify(data))
      }
    }
  }, [inView,data]);

  return (
    <>
      {/* Display the list of courses */}
      <div className="lg:w-[85%] sm:w-full mx-auto h-[650px] md:h-[950px] flex flex-col bg-base overflow-y-scroll">
        {data.map((course) => (
          <SingleCourse key={course.id} items={course} />
        ))}
      </div>

      {/* Loading animation section */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src={animation}
            alt="loading animation"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
