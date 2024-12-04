'use client';
import { useState } from "react";
import Students from './students/register/page';
import Instructors from './instructors/register/page';

function RoleDropdown() {
    const [role, setRole] = useState("student");

    // Handle the change in dropdown selection
    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                    Create an Account
                </h1>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Select Role:
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={handleRoleChange}
                            className="w-full h-[45px] px-4 py-2 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="student">Student</option>
                            <option value="instructor">Instructor</option>
                        </select>
                    </div>
                    <div className="text-center md:text-left text-sm text-gray-600 dark:text-gray-400">
                        Account Type:{" "}
                        <span className="font-medium text-gray-800 dark:text-white">
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                        </span>
                    </div>
                </div>
                <div className="mt-8">
                    {role === 'student' ? <Students /> : <Instructors />}
                </div>
            </div>
        </div>
    );
}

export default RoleDropdown;
