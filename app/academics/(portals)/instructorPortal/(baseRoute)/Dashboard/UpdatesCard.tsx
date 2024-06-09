'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

function UpdatesCard() {
  const courses = [
    { id: 1, classCode: "CS 101", courseName: "Introduction to Computer Science", completionRate: "65%" },
    { id: 2, classCode: "ENG 202", courseName: "Advanced English Literature", completionRate: "80%" },
    { id: 3, classCode: "MATH 301", courseName: "Calculus III", completionRate: "50%" },
    { id: 4, classCode: "PHY 201", courseName: "Physics for Engineers", completionRate: "75%" },
    { id: 5, classCode: "CHEM 202", courseName: "Organic Chemistry", completionRate: "60%" },
    { id: 6, classCode: "HIST 101", courseName: "World History", completionRate: "90%" },
    { id: 7, classCode: "ART 301", courseName: "Digital Art and Design", completionRate: "55%" },
    { id: 8, classCode: "PSYCH 202", courseName: "Cognitive Psychology", completionRate: "70%" },
    { id: 9, classCode: "ECON 301", courseName: "Macroeconomics", completionRate: "85%" },
    { id: 10, classCode: "STAT 201", courseName: "Statistics for Data Science", completionRate: "78%" },
    // Add more objects as needed
];

const students = [
    {
        id: 1,
        studentName: "John Meachum",
        studentUUID: "e3t4gj2g4br4y5yu23",
        studentGrade: "C",
        courseTaken: "Introduction to Computer Science",
        courseCode: "CS 101",
    },
    {
        id: 2,
        studentName: "Emily Johnson",
        studentUUID: "a5c8h1k2b4m9d3e6",
        studentGrade: "B+",
        courseTaken: "Advanced English Literature",
        courseCode: "ENG 202",
    },
    {
        id: 3,
        studentName: "Michael Smith",
        studentUUID: "p9q2o5x8z3w7l4n6",
        studentGrade: "A",
        courseTaken: "Calculus III",
        courseCode: "MATH 301",
    },
    {
        id: 4,
        studentName: "Sophia Brown",
        studentUUID: "s1t2r3u4v5w6x7",
        studentGrade: "B-",
        courseTaken: "Physics for Engineers",
        courseCode: "PHY 201",
    },
    {
        id: 5,
        studentName: "Ethan Miller",
        studentUUID: "y8u9i2o3p4k5j6",
        studentGrade: "C+",
        courseTaken: "Physics for Engineers", // Matching to the previous course
        courseCode: "PHY 201", // Matching to the previous course
    },
    {
        id: 6,
        studentName: "Olivia Davis",
        studentUUID: "d2a5v8i3s7o4n6",
        studentGrade: "A-",
        courseTaken: "Organic Chemistry",
        courseCode: "CHEM 202",
    },
    {
        id: 7,
        studentName: "Liam Robinson",
        studentUUID: "f1g2h3j4k5l6m7",
        studentGrade: "B",
        courseTaken: "World History",
        courseCode: "HIST 101",
    },
    {
        id: 8,
        studentName: "Ava Turner",
        studentUUID: "c2z3x4y5u6i7o8",
        studentGrade: "C-",
        courseTaken: "Digital Art and Design",
        courseCode: "ART 301",
    },
    {
        id: 9,
        studentName: "Noah White",
        studentUUID: "p2s5y8c3h7o4l6o9",
        studentGrade: "B+",
        courseTaken: "Cognitive Psychology",
        courseCode: "PSYCH 202",
    },
    {
        id: 10,
        studentName: "Isabella Harris",
        studentUUID: "t2w0z2x2i2l2a2",
        studentGrade: "A+",
        courseTaken: "Macroeconomics",
        courseCode: "ECON 301",
    },
    // Add more objects as needed
];

   

  const[showOptions,setShowOptions]=useState(false)
  const[selectedCourse,setSelectedCourse]=useState({
    courseName:"",
    courseCode:"",
  });
  const[showCompletionRate,setShowCompletionRate]=useState("")

  const check = useCallback(function checkRate(){
    courses.find(item=>{
      if(item.courseName==selectedCourse.courseName||item.classCode==selectedCourse.courseCode){
        setShowCompletionRate(item.completionRate);
      }
    })
  },[])

  useEffect(()=>{
   // checkRate()
  },[check,selectedCourse,selectedCourse.courseCode,selectedCourse.courseName,showCompletionRate]);
  return (
    <div className=' w-[70%] bg-[#2d545e] mx-auto mt-10 rounded-md  p-1 ' >
    <div className=' flex flex-row  ' >
        <div className='w-[94%] h-[90px] flex flex-col ' >
        {selectedCourse.courseCode==""? <p className='h-[25px] rounded-tl-md text-center ' >no couse selected</p>:<p className='h-[25px] rounded-tl-md text-center flex flex-row   ' >{selectedCourse.courseCode}  </p>}
        {selectedCourse.courseName==""?<p className='h-[75%] p-4 rounded-bl-md '  >please select course</p>: <div className='h-[75%] p-4 rounded-bl-md flex flex-row justify-evenly ' ><p>{selectedCourse.courseName}</p> <p> {showCompletionRate} completion rate </p> </div>}
        </div>
        {showOptions==true?<button className='w-[6%]' onClick={()=>{setShowOptions(false)}} ><FaCaretUp size={20} /></button> :<button className='w-[6%]' onClick={()=>{setShowOptions(true)}} ><FaCaretDown size={20} /></button>}
        
    </div>
    {showOptions&&(
          <div className='h-[300px] overflow-y-scroll  ' >
            {courses.map(items=>(
          <ol key={items.id} className='flex flex-row justify-between p-4 m-2 bg-[#e1b382] text-[#2d545e] rounded-md ' >
            <li>{items.courseName}</li>
            
            <input type='radio' onChange={()=>{setSelectedCourse({
              courseCode:items.classCode,
              courseName:items.courseName,
            })}} />
          </ol>
        ))}
          </div>
        )}
    </div>
  )
}

export default UpdatesCard
                     