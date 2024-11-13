'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";

interface Student {
    names:string;
    instructor_id:string;
    email: string;
    password: string;
}

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Student[]>([]);
    const [details, setDetails] = useState<Student>({
        names:'',
        instructor_id:'',
        email: '',
        password: ''
    });
    const [exists, setExists] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // New state to toggle password visibility
    const[verified,setVerified]=useState(false);
    const[status,setStatus]=useState("")
    useEffect(() => {
        async function getStudents() {
            try {
                const response = await fetch(`/api/remodelled/instructors/get_instructor`);
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
    
        // Ensure data and details are correctly populated
        if (!data || !details.email) {
            console.error('Data or details.email is missing');
            alert('No student data or email to check');
            return;
        }
    
        // Find student by email
        const user = data.find((student) => student.email === details.email);
        console.log("User found:", user);  // Add logging for debugging
        
        const info = data.find((instructor)=>instructor.names)
        const newData = info?.names
        if (user) {
            const instructor = user.instructor_id;
            console.log("Student ID:", instructor);  // Log the student_id
    
            if (instructor) {
                setExists(true);
                // Set cookie for 7 days with the correct path
                Cookies.set('i-id', JSON.stringify(instructor), { expires: 7, path: '/academics/instructorPortal/' });
                Cookies.set('i-name', JSON.stringify(newData), { expires: 7, path: '/academics/instructorPortal/' });
                console.log('Cookie set:', Cookies.get('user'));  // Log the cookie to ensure it’s set correctly
                //alert(student_id)
            } else {
                setExists(false);
                console.error('Student ID is undefined.');
                alert('Student ID is undefined');
            }
        } else {
            alert('No matching email found');
            console.error('No user found for email:', details.email);
        }
    }
    async function login(e:any){
        e.preventDefault();
        const pass = data.find((student) => student.password === details.password);
        if (pass) {
            setVerified(true);
            setExists(true)

        } else {
            setStatus('No matching email found');
            setVerified(false);
            setExists(true)
        }
    }
    return (
        <div>
            {!loading ? (
                <form className="w-[350px] p-2 mx-auto">
                    <div>
                        {!exists ? (
                            <label>
                                Email
                                <input
                                    type="text"
                                    value={details.email}
                                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                    required
                                />
                            </label>
                        ) : (
                            <label>
                                {details.email}
                            </label>
                        )}
                        {exists && (
                            <label className="relative">
                                Password
                                <input
                                    className="h-[20px] "
                                    type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                                    value={details.password}
                                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                    required
                                />
                                <p>{status}</p>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? <FaEyeSlash size={20} className="mt-2 cursor-pointer  " /> : <FaEye size={20} className="mt-2 cursor-pointer  " />}
                                </button>
                            </label>
                        )}
                    </div>
                    {verified?<Link href='/academics/instructorPortal/Dashboard' className="btn  ">sign in</Link>:<button  className="btn" onClick={!exists ? check : login }>
                        {exists ? 'verify' : 'Proceed'}
                    </button>}
                </form>
            ) : (
                <div>Loading.....</div>
            )}
        </div>
    )
}
