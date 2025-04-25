"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import placeholder from "@/public/placeholders/bb.jpeg";
import { FaCartPlus } from "react-icons/fa";

interface Info {
    type: string;
    price: string;
    course_name: string;
    instructor: string;
    student: string;
    purchase_method: string;
    student_id: string;
    course_id: string;
}

interface Course {
    course_name: string;
    course_cover: string | null;
    course_instructor: string;
    instructor_id: string;
    course_video: string | null;
    course_description: string;
    course_category: string;
    course_price: string;
    course_offer: string;
    created_at: string | null;
    course_id: string;
}

function Page() {
    const router = useRouter();

    const [category, setCategory] = useState<string>("Gender Studies");
    const [datasets, setDataSets] = useState<Course[]>([]);
    const [errorMsgCategory, setErrorMsgCategory] = useState("");
    const [hoverSwitch, setHoverSwitch] = useState(false);

    useEffect(() => {
        async function getCourseByCategory() {
            try {
                const response = await fetch(`/api/remodelled/courses/get_course_category?course_category=${category}`);
                if (!response.ok) throw new Error("Failed to fetch courses");

                const info: Course[] = await response.json();
                setDataSets(info);
            } catch (error) {
                console.error("Error fetching courses:", error);
                setErrorMsgCategory("Error getting course category");
            }
        }

        getCourseByCategory();
    }, [category]);

    async function confirmPurchase(course: Course) {
        try {
            const payload: Info = {
                type: "course",
                price: course.course_price,
                course_name: course.course_name,
                instructor: course.course_instructor,
                student: "Titus Mwangi",
                purchase_method: "stripe",
                student_id: "2e4r5wegdy3443423sfdw44",
                course_id: course.course_id,
            };

            const response = await fetch("/api/remodelled/courses/purchase_course", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            alert(JSON.stringify(payload))
            if (!response.ok) {
                alert("Purchase failed!");
                return;
            }else{
                alert("nyiett");
                return;
            }

           // router.push(`/academics/Courses/${payload.student_id}/${payload.course_id}`);
        } catch (error) {
            alert("Error: " + error);
        }
    }

    return (
        <div className="min-h-screen w-full p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <h1 className="text-3xl font-semibold mb-6 text-center">Courses in {category}</h1>

            {errorMsgCategory && <p className="text-red-500 text-center">{errorMsgCategory}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {datasets.map((course) => (
                    <div
                        key={course.course_id}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <div
                            className="relative w-full h-60"
                            onMouseEnter={() => setHoverSwitch(true)}
                            onMouseLeave={() => setHoverSwitch(false)}
                        >
                            {hoverSwitch && course.course_video ? (
                                <video
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    controls
                                    className="w-full h-full object-cover"
                                >
                                    <source src={course.course_video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={placeholder}
                                    alt={course.course_name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            )}
                            
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{course.course_name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{course.course_description}</p>

                            <div className="flex justify-between items-center mb-4">
                                <p className="text-orange-500 font-medium">Instructor: {course.course_instructor}</p>
                                <p className="text-lg">{course.course_price}</p>
                            </div>

                            <button
                                onClick={() => confirmPurchase(course)}
                                className="flex items-center justify-center w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
                            >
                                <FaCartPlus size={20} className="mr-2" /> Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;


