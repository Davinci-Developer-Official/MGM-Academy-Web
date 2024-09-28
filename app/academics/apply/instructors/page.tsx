'use client';

import { useEffect, useState } from "react";
import Register from './register/page';
import Image from "next/image";

// Define an interface for the student data
interface Student {
    id: number;
    avatar: string;
    names: string;
    email: string;
    phonenumber: string;
    gender: string;
    password: string; // Consider not displaying or using password
}

function Page() {
    const [data, setData] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getStudents() {
            try {
                const response = await fetch('/api/remodelled/students/get_student');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: Student[] = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }
        getStudents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-screen bg-red-200 w-full p-2">
            <Register />
            {data.length > 0 ? (
                <ul className="list-disc pl-5">
                    {data.map(({ id, names, email, phonenumber, gender, avatar }) => (
                        <li key={id} className="mb-4">
                            <div>
                                <h2 className="text-xl font-bold">{names}</h2>
                                <p>Email: {email}</p>
                                <p>Phone Number: {phonenumber}</p>
                                <p>Gender: {gender}</p>
                                {/* Conditionally render avatar if present */}
                                {avatar && <Image src={avatar} alt={names} className="w-24 h-24 object-cover rounded-full" />}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No students found.</div>
            )}
        </div>
    );
}

export default Page;
