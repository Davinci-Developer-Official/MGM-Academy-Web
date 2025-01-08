"use client";
import { useEffect, useState } from "react";

export interface Course {
    course_id: string; // UUID for the course
    course_cover: string; // URL for the course cover image
    course_title: string; // Title of the course
    course_description: string; // Description of the course
    instructor_id: string; // UUID of the instructor
    created_at: string; // Date the course was created (ISO 8601 string)
    course_status: string | null; // Status of the course (nullable)
    instructor_name: string | null; // Name of the instructor (nullable)
    category: string | null; // Course category (nullable)
}

export default function Page() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        async function getCategory() {
            try {
                const response = await fetch(`/api/remodelled/courses/categorized?category="gender studies"`, {
                    method: "GET",
                });
                const data = await response.json();
                //alert(JSON.stringify(data));
                { courses.length == 0 && setCourses(data); }
            } catch (error) {
                alert(error);
            }
        }
        getCategory();
    }, []);

    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const currentItems = courses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const[category,setCategory]=useState()
    return (
        <div className="w-[90%] mx-auto bg-gray-200 h-[600px]   ">
            {/* Courses Grid */}
            <h1>based on category  </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto h-full ">
                {currentItems.map((item: Course) => (
                    <div
                        key={item.course_id}
                        className="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between h-[300px] "
                    >
                        <img
                            src={item.course_cover}
                            alt={item.course_title}
                            className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-lg font-semibold">{item.course_title}</h2>
                        <p className="text-sm text-gray-600">{item.course_description}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-md ${
                                currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
