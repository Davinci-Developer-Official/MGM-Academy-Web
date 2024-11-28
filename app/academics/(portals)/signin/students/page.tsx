'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from 'js-cookie';


interface Student {
    student_id:string;
    email: string;
    password: string;
    names:string;
}

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Student[]>([]);
    const [details, setDetails] = useState<Student>({
        student_id:'',
        email: '',
        password: '',
        names:''
    });
    const [exists, setExists] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // New state to toggle password visibility
    const[verified,setVerified]=useState(false);
    const[status,setStatus]=useState("");
    const[userId,setUserId]=useState('');

    
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
    async function userInfo(){

    }



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
        const inf = data.find((students)=>  students.names)
        const stream = inf?.names
        alert(stream)
        if (user) {
            const student_id = user.student_id;
            console.log("Student ID:", student_id);  // Log the student_id
    
            if (student_id) {
                setExists(true);
                // Set cookie for 7 days with the correct path
                Cookies.set('s-id', JSON.stringify(student_id), { expires: 7, path: '/academics/studentPortal/' });
                Cookies.set('s-user', JSON.stringify(stream), { expires: 7, path: '/' });
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
                <div>
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
                    {verified?<Link href='/academics/studentPortal/Dashboard' className="btn  " >sign in</Link>:<button  className="btn" onClick={!exists ? check : login }>
                        {exists ? 'verify' : 'Proceed'}
                    </button>}
                </form>
                <div className="p-2 ml-[35%] mx-auto " >
                or create an account <Link href='/academics/apply' className="text-blue-600 " >sign up</Link>
            </div>
                </div>
            ) : (
                <div className="p-2 ml-[35%] mx-auto " >Loading.....</div>
            )}
        </div>
    )
}
