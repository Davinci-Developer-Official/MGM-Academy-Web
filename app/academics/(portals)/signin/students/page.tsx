'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from 'js-cookie';

interface Student {
    student_id: string;
    email: string;
    password: string;
    names: string;
}

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Student[]>([]);
    const [details, setDetails] = useState<Student>({
        student_id: '',
        email: '',
        password: '',
        names: ''
    });
    const [exists, setExists] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [verified, setVerified] = useState(false);
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function getStudents() {
            try {
                const response = await fetch(`/api/remodelled/students/get_student`);
                if (!response.ok) {
                    throw new Error('Failed to fetch students');
                }
                const info: Student[] = await response.json();
                setData(info);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getStudents();
    }, []);

    async function check(e: React.FormEvent) {
        e.preventDefault();
        const user = data.find((student) => student.email === details.email);
        if (user) {
            const student_id = user.student_id;
            if (student_id) {
                setExists(true);
                Cookies.set('s-id', JSON.stringify(student_id), { expires: 7, path: '/academics/studentPortal/' });
                Cookies.set('s-user', JSON.stringify(user.names), { expires: 7, path: '/' });
            } else {
                alert('Student ID is undefined');
            }
        } else {
            alert('No matching email found');
        }
    }

    async function login(e: React.FormEvent) {
        e.preventDefault();
        const pass = data.find((student) => student.password === details.password);
        if (pass) {
            setVerified(true);
        } else {
            setStatus('No matching email found');
            setVerified(false);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex  justify-center">
            {!loading ? (
                <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">
                        {exists ? "Verify Your Account" : "Sign In"}
                    </h2>
                    <form onSubmit={!exists ? check : login} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            {!exists ? (
                                <input
                                    id="email"
                                    type="email"
                                    value={details.email}
                                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                                />
                            ) : (
                                <div className="text-gray-800 dark:text-white">{details.email}</div>
                            )}
                        </div>
                        {exists && (
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={details.password}
                                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {status && <p className="mt-1 text-sm text-red-600">{status}</p>}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md shadow focus:outline-none"
                        >
                            {exists ? 'Verify' : 'Proceed'}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        Or <Link href="/academics/apply" className="text-orange-500 hover:underline">create an account</Link>
                    </div>
                </div>
            ) : (
                <p className="text-gray-800 dark:text-white">Loading...</p>
            )}
        </div>
    );
}
