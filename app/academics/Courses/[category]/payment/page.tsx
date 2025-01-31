"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Info {
    type: string;
    price: string;
    course_name: string;
    instructor: string;
    student: string;
    purchase_method: string;
    student_id:string;
}

function Page() {
    const router =  useRouter()
    const [info, setInfo] = useState<Info | null>(null); // Define the state with the Info type
    const data: Info = {
        type: "course",
        price: "$400",
        course_name: "philosophy",
        instructor: "Mike Chege",
        student: "Titus Mwangi",
        purchase_method: "stripe",
        student_id:"1e4r342h34y8ewns344df5w4rwd4443d43tfd443eerf54"
    };

    async function confirmPurchase(props: Info) {
        try {
            const response = await fetch("/api/remodelled/courses/purchase_course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(props), // Send the data in the body
            });

            if (!response.ok)  {
                alert("Purchase failed!");
            }

            router.push(`/academics/Courses/${data.student_id}/${data.course_name}`)
        } catch (error) {
            alert("Error: " + error);
        }
    }

    return (
        <div className="h-screen w-full p-4">
            <table className="w-[90%] sm:w-[400px] bg-gray-100 dark:bg-gray-800 mx-auto text-center rounded-lg shadow-md">
                <thead>
                    <tr>
                        <th colSpan={2} className="text-xl font-semibold text-blue-600 py-2">
                            Purchase Info
                        </th>
                    </tr>
                    <tr className="underline">
                        <th className="p-2">Description</th>
                        <th className="p-2">Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">Purchase Type:</td>
                        <td className="p-2">{data.type}</td>
                    </tr>
                    <tr>
                        <td className="p-2">Price:</td>
                        <td className="p-2">{data.price}</td>
                    </tr>
                    <tr>
                        <td className="p-2">Course Name:</td>
                        <td className="p-2">{data.course_name}</td>
                    </tr>
                    <tr>
                        <td className="p-2">Instructor:</td>
                        <td className="p-2">{data.instructor}</td>
                    </tr>
                    <tr>
                        <td className="p-2">Student:</td>
                        <td className="p-2">{data.student}</td>
                    </tr>
                    <tr>
                        <td className="p-2">Purchase Method:</td>
                        <td className="p-2">{data.purchase_method}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2} className="py-4">
                            <button
                                className="btn px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                onClick={() => confirmPurchase(data)}
                            >
                                Confirm Purchase
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Page;


{/*
    <form className="flex flex-col w-[80%] mx-auto bg-gray-100 h-[400px]  ">
    <div className="flex flex-row  w-[90%] mx-auto bg-green-200 h-[60px] p-2 pt-5 justify-between  " ><p>course name</p> <p>philosophy</p> </div>
    <button className="btn   " >confirm</button>
    </form>
    */}