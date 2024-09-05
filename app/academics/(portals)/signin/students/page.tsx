'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Student {
    email: string;
    password: string;
}

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Student[]>([]);
    const [details, setDetails] = useState<Student>({
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
            setExists(true);
           // setDetails((prevDetails) => ({ ...prevDetails, password: user.password }));
        } else {
            alert('No matching email found');
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
            ) : (
                <div>Loading.....</div>
            )}
        </div>
    )
}
