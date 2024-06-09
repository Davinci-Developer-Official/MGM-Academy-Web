"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

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

    const [showOptions, setShowOptions] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({
        courseName: "",
        courseCode: "",
    });
    const [showCompletionRate, setShowCompletionRate] = useState("");

    const checkRate = useCallback(() => {
        const course = courses.find(item => 
            item.courseName === selectedCourse.courseName || 
            item.classCode === selectedCourse.courseCode
        );
        if (course) {
            setShowCompletionRate(course.completionRate);
        }
    }, [selectedCourse, courses]);

    useEffect(() => {
        checkRate();
    }, [checkRate, selectedCourse]);

    return (
        <div className='w-[70%] bg-[#2d545e] mx-auto mt-10 rounded-md p-1'>
            <div className='flex flex-row'>
                <div className='w-[94%] h-[90px] flex flex-col'>
                    {selectedCourse.courseCode === "" ? (
                        <p className='h-[25px] rounded-tl-md text-center'>no course selected</p>
                    ) : (
                        <p className='h-[25px] rounded-tl-md text-center flex flex-row'>{selectedCourse.courseCode}</p>
                    )}
                    {selectedCourse.courseName === "" ? (
                        <p className='h-[75%] p-4 rounded-bl-md'>please select course</p>
                    ) : (
                        <div className='h-[75%] p-4 rounded-bl-md flex flex-row justify-evenly'>
                            <p>{selectedCourse.courseName}</p>
                            <p>{showCompletionRate} completion rate</p>
                        </div>
                    )}
                </div>
                {showOptions ? (
                    <button className='w-[6%]' onClick={() => setShowOptions(false)}>
                        <FaCaretUp size={20} />
                    </button>
                ) : (
                    <button className='w-[6%]' onClick={() => setShowOptions(true)}>
                        <FaCaretDown size={20} />
                    </button>
                )}
            </div>
            {showOptions && (
                <div className='h-[300px] overflow-y-scroll'>
                    {courses.map(items => (
                        <ol key={items.id} className='flex flex-row justify-between p-4 m-2 bg-[#e1b382] text-[#2d545e] rounded-md'>
                            <li>{items.courseName}</li>
                            <input type='radio' onChange={() => setSelectedCourse({
                                courseCode: items.classCode,
                                courseName: items.courseName,
                            })} />
                        </ol>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UpdatesCard;
