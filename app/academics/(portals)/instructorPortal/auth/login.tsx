
import Link from 'next/link';
import React, { useState } from 'react';

interface LoginStudentProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginStudent(props: LoginStudentProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Replace this with your actual login logic (e.g., API call)
    if (email === 'temp@gmail.com' && password === 'temp') {
      setSecure(true);
    } else {
      setError('Email or password is incorrect');
    }
  };

  return (
    <div className="hero min-h-screen background">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left   ">
          <h1 className="text-5xl font-bold  text-[#e97902] font-mono ">Login now</h1>
         
          <p className="py-6 font-mono ">Access the Instructor portal for MGM Institute of Gender And Women Empowerment Courses as a Student</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl   border border-[#e97902]   ">
          <div className="card-body  ">
            <div className="form-control  ">
              <label className="label">
                <span className="font-bold font-mono  ">Email</span>
              </label>
              <input
                type="email"
                placeholder="eg temp@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered  border border-[#e97902] placeholder-[#e97902] text-[#e97902]  "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold font-mono ">Password</span>
              </label>
              <input
                type="password"
                placeholder="eg temp"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered  border border-[#e1b382] placeholder-[#e97902] text-[#e97902] "
              />
              <label className="label">
                <a href="#" className="-text-alt link link-hover text-[#e97902] ">
                  Forgot password?
                </a>
              </label>
            </div>
            {/*text-[#e1b382] bg-gradient-to-r from-[#2d545e]*/}
            <div className="form-control mt-6">
              {secure ? (
                <Link href="/academics/instructorPortal/Dashboard">
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
            </div>
          </div>
          <p  className='font-bold font-mono ' style={{ marginLeft: '5%' }}>
            You don't have an account? 
            <Link className='ml-2 text-[#e97902]  ' href="/academics/InstructorApplication" >
              Apply Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginStudent;
