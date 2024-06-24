'use client';

import React, { useEffect, useState } from 'react';


interface Courses{
    course_id: string,   
    course_instructors:string,
    course_name:string,
    course_category:string,
    course_introduction_statement:string,
    course_overview:string
    course_content:string
    purchase_status:string
    course_price:string
}
function Enrolled_List() {
    const [courses ,setCourses] = useState<Courses[]>([]);
    const[selectedCourse,setSelectedCourse]=useState("");
    useEffect(()=>{
       async function getUser(){
        const response = await fetch('/api/get_courses',{
            method:'GET'
        });
        if(!response.ok) return 'Error data not fetched';
        const data = await response.json();
        setCourses(data);
       };

       getUser();
    },[]);
    async function selectCourse(){
       if(selectedCourse.length!==0){
         await localStorage.setItem('selected_item',JSON.stringify(selectedCourse));
       }else{
        //alert("nikubad");
        return;
       };   
    };
    async function deleteCourse(){
        if(selectedCourse.length!==0){
          await localStorage.removeItem('selected_item');
        }else{
        //alert("nikubad");
        return;
        };   
     };

  return (
    <div className='h-[400px] overflow-y-scroll ' >
    <button className='btn bg-red-500 ' onClick={(e:any)=>{
        e.preventDefault()
        deleteCourse()    
    }}>clear</button>
      {courses.map((item:Courses)=>(
        <div key={item.course_id} className='btn btn-ghost ' onClick={(e:any)=>{
            e.preventDefault();
            selectCourse();
            setSelectedCourse(item.course_id);
            //alert(selectedCourse)
        }} >
            <p>{item.course_name}</p>
        </div>
      ))}
    </div>
  )
}

export default Enrolled_List
