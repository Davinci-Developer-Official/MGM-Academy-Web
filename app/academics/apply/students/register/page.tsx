'use client';

import Link from "next/link";
import { useState } from "react";

// Define an interface for the form data (Student)
interface Student {
    avatar: string;
    names: string;
    email: string;
    phonenumber: string;
    gender: string;
    password: string;
}

function Page() {
    // State to hold form data
    const [formData, setFormData] = useState<Student>({
        avatar: 'aaaaa',
        names: '',
        email: '',
        phonenumber: '',
        gender: '',
        password: '',
    });

    // State to handle loading and success/error messages
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [exists, setExists] = useState('');

    // State to handle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/remodelled/students/add_student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            //alert(JSON.stringify(formData))
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            setMessage('Student profile created successfully!');
            setFormData({
                avatar: 'aaaaa',
                names: '',
                email: '',
                phonenumber: '',
                gender: '',
                password: '',
            });
        } catch (error) {
            setMessage('Error creating student profile.');
            console.error('Error:', error);
            setExists('A user with this email exists.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-[80%] mx-auto p-4 h-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">Create student Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-1">
                    <label className="text-orange-600">Name:</label>
                    <input
                        type="text"
                        name="names"
                        value={formData.names}
                        onChange={handleChange}
                        required
                        className="h-[35px] px-3 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-orange-600 flex justify-between">
                        Email: <p className="text-red-500 text-sm">{exists}</p>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-[35px] px-3 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-orange-600">Phone Number:</label>
                    <input
                        type="text"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                        className="h-[35px] px-3 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-orange-600">Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="h-[35px] px-3 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-orange-600">Password:</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="h-[35px] px-3 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <div>
                    <button className="btn btn-ghost bg-orange-600 text-white hover:bg-orange-500 w-full py-2 rounded-md" type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
            {message && <div className="mt-4 text-center text-green-500">{message}</div>}
        </div>
    );
}

export default Page;





