'use client'
import React, { useEffect, useState } from 'react'
import { fetchMappableCourses } from '@/app/api/get'
import SearchbarAsn from '@/app/components/SearchbarAsn'
import { StaticImageData } from 'next/image';
import Card from "./card"

export interface Course {
    id:number,
    courseName:string,
    courseInstructor:string,
    coverImage:string|StaticImageData,
    locked:boolean
}
const url = "https://65644addceac41c0761dd04d.mockapi.io/users/api/profile";

//preloaded courses list data
function PreLoaded(){
const[data,setData]=useState<Course[]>([]);
const[error,setError]=useState(undefined)
//Dealing with api Data;
function DataSorting(){
    fetchMappableCourses(url)
    .then(res=>{
        
        setData((prevData) => [...prevData, ...res]);
    }).catch(err=>{
        setError(err);
        console.log(err)
    })
}
useEffect(()=>{
    DataSorting()
},[data])
return<div className="lg:w-[85%] sm:w-full mx-auto h-[650px] md:h-[950px] flex flex-col bg-base overflow-y-scroll">
{data.map(items=><Card items={items} />)}
</div>
}
//Courses content
export default function list() {
  return (
    <div className='lg:w-full sm:w-full  flex flex-col  lg:h-screen  bg-[#e1b382] ' >
    <SearchbarAsn/>
    <PreLoaded/>
    </div>
  )
}

