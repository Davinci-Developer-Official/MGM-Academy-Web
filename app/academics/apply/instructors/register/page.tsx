'use client';

import { useState } from "react";
//import Upload from './Upload'
// Define an interface for the form data (Student)
interface Student {
    avatar:string;
    names: string;
    email: string;
    phonenumber: string;
    gender: string;
    password: string;
}

function Page() {
    // State to hold form data
    const [formData, setFormData] = useState<Student>({
        avatar:'aaaaa',
        names: '',
        email: '',
        phonenumber: '',
        gender: '',
        password: '',
    });

    // State to handle loading and success/error messages
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
alert(JSON.stringify(formData))
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            setMessage('Student profile created successfully!');
            setFormData({
                avatar:'aaaaa',
                names: '',
                email: '',
                phonenumber: '',
                gender: '',
                password: '',
            });
        } catch (error) {
            setMessage('Error creating student profile.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-[80%] mx-auto p-2  h-full ">
            <h1>Create  Profile</h1>
            <form onSubmit={handleSubmit} className=" h-fit p-1 ">
                {/*<Upload initials={'USR'} />*/}
                <div  >
                    <label>
                        Name:
                        <input
                            type="text"
                            name="names"
                            value={formData.names}
                            onChange={handleChange}
                            required
                            className="h-[35px]  "
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-[35px]  "
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            name="phonenumber"
                            value={formData.phonenumber}
                            onChange={handleChange}
                            required
                            className="h-[35px]  "
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="h-[35px]  "
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="h-[35px]  "
                        />
                    </label>
                </div>
                <div>
                    <button className="btn btn-ghost " type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default Page;




