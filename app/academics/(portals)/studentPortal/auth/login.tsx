
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase'
import { FaCaretRight, FaChevronCircleDown, FaChevronCircleUp, FaCompress, FaDoorOpen, FaExpand } from 'react-icons/fa';
import Image from 'next/image';
import image from "@/public/empowerment/10.jpeg"


interface LoginStudentProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Student {
  id: number;
  student_id: string;
  Avatar: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  email: string;
  gender: string;
  nationality: string;
  residence: string;
  phone_number: string;
  date_of_birth: string;
  time_created: string;
  exposure:string;
  password:string;
}

function LoginStudent({setNavigation,navigation}:any) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(false);
  const [error, setError] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  
  //fetch on each render;
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get_student');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setStudents(data.students);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[students]);
  
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const findEmail = students.find(user => user.email === email);
    const findPass = students.find(user => user.password === password);

    if (findEmail && findPass) {
      setSecure(true);
      setLoading(true);
      //setError(null);

      setTimeout(() => {
        setLoading(false);
       // router.push('/academics/studentPortal/Dashboard');
      }, 2000);
    } else {
      setError('Email or password is incorrect');
    }
  };


  return (
    <div>
      <div className='flex flex-row w-full justify-between p-4 ' >
      {!navigation&&<button onClick={()=>{setNavigation(true)}} className='btn btn-ghost flex flex-col ' ><FaCompress size={15} /></button>}
            {navigation&&<button onClick={()=>{setNavigation(false)}} className='btn btn-ghost  flex flex-col ' ><FaExpand size={15} /></button>}
      <div className=" normal-case text-xl  ml-4 p-2 font-mono "> student portal  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaDoorOpen size={20} /></button>
    </div>
   
    <div className="hero min-h-screen background">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left   ">
         
      <div className="card w-99 bg-base-100 shadow-xl image-full">
      <figure><Image src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h1 className="font-bold  text-center text-lg w-full ">Login</h1>
        <p className="py-6 font-mono  ">Step into the vibrant world of MGM Institute of Gender And Women Empowerment's Student Portal. Here, learning is more than just textbooks; it's a journey of self-discovery and empowerment. Dive into engaging courses, connect with fellow students, and explore a wealth of resources designed to fuel your passion for gender equality.

        With a user-friendly interface and personalized features, navigating your academic journey has never been easier. Gain access to exclusive internships, job opportunities, and networking events that pave the way for a bright future.

        Join us today and unlock a world of endless possibilities. Register or log in to the MGM Student Portal and embark on a transformative adventure that will shape not only your academic career but also your life. Welcome to a community dedicated to empowering you to create change and make a difference.</p>
        <div className="card-actions w-[90%]  mx-auto flex flex-row justify-around  bg-white rounded-lg text-black text-center font-serif ">
          <p className='pt-4  ' >You dont have an account ? </p>
          <Link  href="/academics/studentApplication"  className='btn btn-primary ml-2  h-[40px] ' >
              register
            
          </Link>
        </div>
      </div>
    </div>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-4xl   border border-[#e97902]   ">
          <div className="card-body  ">
            <div className="form-control  ">
              <label className="label">
                <span className="font-bold font-mono  ">Email</span>
              </label>
              <input
                type="email"
                placeholder=" example@gmail.com "
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered  border border-b-[#e97902] placeholder-[#e97902] text-black bg-white "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold font-mono ">Password</span>
              </label>
              <input
                type="password"
                placeholder=" example "
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered  border border-b-[#e1b382] placeholder-[#e97902] text-black bg-white "
              />
              <label className="label">
                <a href="#" className="-text-alt link link-hover text-[#e97902] ">
                  Forgot password?
                </a>
              </label>
            </div>
            
            {secure?<p className='text-center w-full ' >welcome back  </p>:<p className='text-center w-full text-red-500 ' >email or password not correct or possibly empty </p>}
            {/*text-[#e1b382] bg-gradient-to-r from-[#2d545e]*/}
            <div className="form-control mt-6">
            {secure ? (
          <Link href="/academics/studentPortal/Dashboard">
            <p className="btn btn-success w-[70%] mx-auto flex items-center justify-center">
              Continue Learning <FaCaretRight size={20} className="ml-2" />
            </p>
          </Link>
        ) : (
          <button className="btn btn-success w-[70%] mx-auto" onClick={handleLogin}>
            {loading ? (
              <p className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500">h</p>
            ) : (
              <p>Login</p>
            )}
          </button>
        )}
              
              {/*
              {secure ? (
                <Link href="/academics/studentPortal/Dashboard">
                  <button className="btn  bg-[#e97902] text-[#0f2027] hover:bg-[#0f2027] hover:text-[#e97902]  font-bold font-mono ">Login</button>
                </Link>
              ) : (
                <>
                  <button onClick={handleLogin} className="btn bg-[#e97902] text-[#0f2027] hover:bg-[0f2027] hover:text-[#e97902] font-bold font-mono " >
                    Verify
                  </button>
                  {error && <p className="text-red-500 font-bold font-mono ">{error}</p>}
                </>
              )}
              */}
            </div>
          </div>
          <p  className='font-bold font-mono p-2 ' style={{ marginLeft: '5%' }}>
            You don't have an account? 
            <Link className='ml-2 text-[#e97902]  ' href="/academics/studentApplication" >
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginStudent;
