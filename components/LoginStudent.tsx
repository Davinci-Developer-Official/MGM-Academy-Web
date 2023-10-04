"use client";
import Link from 'next/link';
//import { useRouter } from 'next/router';
import React, { useState } from 'react'

interface LoginStudentProps {
    setlogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function LoginStudent(props: LoginStudentProps) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure,setSecure]=useState(false);
  const [sucessful,setSuccessful]=useState(false)
  //const router = useRouter();

  const handleLogin = async () => {
    // Replace this with your actual login logic (e.g., API call)
    //check if login is sucessful ***Temporary Placeholder TP01Lgs
    if(email=="temp@gmail.com"&& password=="temp"){
      setSuccessful(true);
    }else{
      alert("insecure")
    }
    const loginSuccessful = sucessful  ///await yourLoginFunction(username, password);

    if (loginSuccessful) {
      // Redirect to the Dashboard page upon successful login
      //router.push('/academics/studentPortal/Dashboard');
      setSecure(true)
     // return '/academics/studentPortal/Dashboard'
    } else {
      // Handle login failure (display error message, etc.)
    }
  };
  

  //const dynamicRoute = handleLogin();

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">  Login now </h1>
        <p className="py-6"> Access the stundent portal for MGM Institute of Gender And women Empowerment Courses as a Student</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
        <div  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"
             placeholder="email" 
             onChange={(e) => setEmail(e.target.value)}
             className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
          {!secure?<button  onClick={handleLogin}  
            className="btn btn-primary"
            type='submit'
            >Proceed</button>:
            <Link href='/academics/studentPortal/Dashboard'   
            className="btn btn-primary"
            type='submit'
            >Login</Link>}
          </div>
        </div>
        <p style={{
            marginLeft:"5%"
        }} >You dont have an account ? sign up <button style={{
            color:"purple"
        }} onClick={()=>{
            props.setlogin(false)
        }} >now</button> </p>
      </div>
    </div>
  </div>
  )
}

export default LoginStudent