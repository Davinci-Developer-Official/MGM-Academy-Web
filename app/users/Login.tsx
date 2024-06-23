'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCaretRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import image from "@/public/empowerment/10.jpeg";
import Image from 'next/image';

interface User {
    id: number;
    user_id: string;
    user_names: string;
    user_gender: string;
    user_email: string;
    user_phonenumber: string;
    user_nation: string;
    user_verified: boolean;
    user_password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [secure, setSecure] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [userType, setUserType] = useState<string>('student');
    const [isTypeChange, setTypeChange] = useState<boolean>(true);

    const handleUserTypeChange = () => {
        setUserType('Instructor');
        if(userType=='Instructor'){
            setTypeChange(true);
            //alert('boomer')
            setUserType('student');
        }else{
            setTypeChange(false);
           // alert('2027')
           setUserType('Instructor');
        }
    };
    useEffect(() => {
        async function fetchUsers(){
            if(userType==='student'){
                const response = await fetch('/api/get_users',{
                    method: 'GET'
                });
                if(response.ok){
                    alert('iko student')
                    const data = await response.json();
                    setUsers([...data]);
                }else{
                    alert('bado')
                }
            }else if(userType==='Instructor'){
                const response = await fetch('/api/get_user_by_verification',{
                    method: 'GET'
                });
                if(response.ok){
                    alert('iko Mwalimu')
                    const data = await response.json();
                    setUsers([...data]);
                }else{
                    alert('bado mwalim')
                }
            }
            }
            
        fetchUsers();
    }, [userType]);

    useEffect(() => {
        if (secure) {
            if (checked) {
                if (emailRegex.test(emailOrUsername)) {
                    localStorage.setItem("s-email", JSON.stringify(emailOrUsername));
                } else {
                    localStorage.setItem("s-username", JSON.stringify(emailOrUsername));
                }
                localStorage.setItem("s-password", JSON.stringify(password));
            } else {
                if (emailRegex.test(emailOrUsername)) {
                    sessionStorage.setItem("s-email", JSON.stringify(emailOrUsername));
                } else {
                    sessionStorage.setItem("s-username", JSON.stringify(emailOrUsername));
                }
                sessionStorage.setItem("s-password", JSON.stringify(password));
            }
        }
    }, [secure, checked, emailOrUsername, password]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const checkUser = users.find(user=>user.user_email == emailOrUsername)
        const checkPass = users.find(user=>user.user_password == password);
        if(checkUser&&checkPass){
            //alert(' genz '+' comrade '+ emailOrUsername + password);
            setSecure(true)
        }
        else{
           setError('Email or password incorrect or missing')
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailOrUsername(e.target.value);
        setIsValid(emailRegex.test(e.target.value));
    };

    const handleCheckboxChange = () => {
        setChecked(prevChecked => !prevChecked);
    };

   

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <div className='flex flex-col justify-between w-[90%] mx-auto mt-2 h-fit p-2 bg-blue-400 mb-2 rounded-md'>
            <div className='w-full bg-red-200 h-fit mb-1 card'>
                <div className="card h-[400px] w-99 bg-base-100 shadow-xl image-full">
                    <figure><Image src={image} alt="Empowerment" /></figure>
                    <div className="card-body">
                        <h1 className="font-bold text-center text-lg w-full text-white">Login</h1>
                        <p className="h-fit font-mono hover:cursor-pointer hover:rounded-lg hover:bg-gray-500 text-white">
                            Step into the vibrant world of MGM Institute of Gender And Women Empowerment's Student Portal...
                        </p>
                        <div className="card-actions w-[90%] mx-auto flex flex-row justify-around bg-white rounded-lg text-black text-center font-serif">
                            <p className='pt-4'>You don't have an account?</p>
                            <Link href="/academics/studentApplication" className='btn btn-primary ml-2 h-[40px]'>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-[500px] mx-auto'>
                <p className='text-center text-xl font-bold p-2'>Login</p>
                <form className='card' onSubmit={handleLogin}>
                    <div className='flex flex-col w-[90%] mx-auto mt-2 card p-2'>
                        <p className='card-title text-white '>Username/Email</p>
                        <input
                            type='text'
                            placeholder='Enter your username or email'
                            className='h-[50px] w-[97%] mx-auto mt-1 rounded p-2 text-white bg-black '
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex align-center mt-2 w-[80%] mx-auto'>
                        <input
                            type="checkbox"
                            checked={userType === 'Instructor'}
                            onChange={handleUserTypeChange}
                            className="checkbox border-orange-400 checked:border-indigo-800"
                        />
                        <p className='pl-2'>As Instructor</p>
                    </div>

                    <div className='flex flex-col w-[90%] mx-auto mt-2 card p-2'>
                        <p className='card-title'>Password</p>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='h-[50px] w-[97%] mx-auto mt-1 rounded p-2 bg-black text-white '
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='absolute inset-y-0 text-white right-0 pr-3 flex items-center cursor-pointer mr-5' onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    {error && <p className='text-center w-full text-red-900'>{error}</p>}
                    
                    <div className="form-control mt-6">
                        {secure ? (
                            <Link href="/academics/studentPortal/Dashboard">
                                <p className="btn btn-success w-[70%] mx-auto flex items-center justify-center">
                                    Continue Learning <FaCaretRight size={20} className="ml-2" />
                                </p>
                            </Link>
                        ) : (
                            <button type="submit" className="btn btn-success w-[70%] mx-auto">
                                {loading ? (
                                    <p className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500">h</p>
                                ) : (
                                    <p>Login</p>
                                )}
                            </button>
                        )}
                    </div>
                    
                    <div className="form-control">
                        <div className='flex align-center mt-2 w-[50%] mx-auto'>
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="checkbox border-orange-400 checked:border-indigo-800"
                            />
                            <p className='pl-2'>Remember me</p>
                        </div>

                        <label className="card-title ml-10 mt-1 mb-1">
                            <a href="#" className="-text-alt link link-hover text-black hover:text-red-800">
                                Forgot password?
                            </a>
                        </label>
                        
                    </div>
                </form>

                <div className='flex flex-row'>
                    <p>For instructors</p>
                    <p className='hover:text-red-500 p-2 cursor-pointer'>Instructor login</p>
                </div>

                <p className='font-bold font-mono p-2' style={{ marginLeft: '5%' }}>
                    You don't have an account?
                    <Link className='ml-2 text-[#e97902]' href="/academics/studentApplication">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
