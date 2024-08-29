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
        <div className="h-full " >
            <div className="flex flex-col w-[80%] mx-auto items-start">
            <label htmlFor="role" className="mb-2 text-gray-700">Select Role:</label>
            <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                className="p-2 border rounded-md"
            >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>
            <div className="mt-4 text-gray-700">
                account type: {role.charAt(0).toUpperCase() + role.slice(1)}
            </div>
        </div>
        <div>
        {role=='student'?<Students/>:<Instructors/>}
        </div>
        </div>
    );
}

export default RoleDropdown;

