"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa';

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
    ];

    const [showOptions, setShowOptions] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({
        courseName: "",
        courseCode: "",
    });
    const [showCompletionRate, setShowCompletionRate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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
    }, [checkRate]);

    const indexOfLastCourse = currentPage * itemsPerPage;
    const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    const totalPages = Math.ceil(courses.length / itemsPerPage);

    return (
        <div className='w-[70%] mx-auto mt-10 rounded-md p-1'>
            <div className='flex flex-row'>
                <div className='w-[94%] h-[90px] flex flex-col'>
                    {selectedCourse.courseCode === "" ? (
                        <p className='h-[25px] rounded-tl-md text-center'>No course selected</p>
                    ) : (
                        <p className='h-[25px] rounded-tl-md text-center flex flex-row'>{selectedCourse.courseCode}</p>
                    )}
                    {selectedCourse.courseName === "" ? (
                        <p className='h-[75%] p-4 rounded-bl-md'>Please select a course</p>
                    ) : (
                        <div className='h-[75%] p-4 rounded-bl-md flex flex-row justify-evenly'>
                            <p>{selectedCourse.courseName}</p>
                            <p>{showCompletionRate} completion rate</p>
                        </div>
                    )}
                </div>
                {showOptions ? (
                    <button className='w-[6%]' onClick={() => setShowOptions(false)}>
                        <FaTimes size={20} />
                    </button>
                ) : (
                    <button className='w-[6%]' onClick={() => setShowOptions(true)}>
                        <FaCaretDown size={20} />
                    </button>
                )}
            </div>
            {showOptions && (
                <div className='p-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {currentCourses.map(items => (
                            <div 
                                key={items.id} 
                                className='p-4 bg-[#2d545e] text-[#e1b382] rounded-md flex flex-col justify-between cursor-pointer'
                                onClick={() => setSelectedCourse({
                                    courseCode: items.classCode,
                                    courseName: items.courseName,
                                })}
                            >
                                <p className='text-lg font-semibold'>{items.courseName}</p>
                                <p>{items.classCode}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button 
                            className={`p-2 m-2 bg-[#2d545e] text-white rounded-md ${currentPage === 1 && 'opacity-50'}`} 
                            onClick={() => setCurrentPage(prev => prev - 1)} 
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button 
                            className={`p-2 m-2 bg-[#2d545e] text-white rounded-md ${currentPage === totalPages && 'opacity-50'}`} 
                            onClick={() => setCurrentPage(prev => prev + 1)} 
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdatesCard;
