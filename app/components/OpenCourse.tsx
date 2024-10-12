'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {cookies} from 'next/headers'
import CurrentItem from "../../app/components/AddCookie"

interface OpenCourseProps {
  id: string;
  name:string;
}


export default function OpenCourse({ id,name }: OpenCourseProps) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = async() => {
    if (isMounted) {
      router.push(`/academics/instructorPortal/Courses/${name}`);
       CurrentItem({label:'current-course',content:id});
    }
  };

  return (
    <div className="btn" onClick={handleClick}>
      View Course
    </div>
  );
}
