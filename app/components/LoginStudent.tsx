import Link from 'next/link';
import React, { useState } from 'react';

interface LoginStudentProps {
  setlogin: React.Dispatch<React.SetStateAction<boolean>>;
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
    <div className="hero min-h-screen bg-[#e1b382]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#2d545e] ">Login now</h1>
         
          <p className="py-6 text-[#2d545e] ">Access the student portal for MGM Institute of Gender And Women Empowerment Courses as a Student</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-[#e1b382] border border-[#2d545e]  ">
          <div className="card-body  ">
            <div className="form-control  ">
              <label className="label">
                <span className="label-text text-[#2d545e] ">Email</span>
              </label>
              <input
                type="email"
                placeholder="eg temp@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered  border border-[#2d545e] placeholder-white  "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#2d545e] ">Password</span>
              </label>
              <input
                type="password"
                placeholder="eg temp"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered  border border-[#2d545e] placeholder-white "
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-[#2d545e] ">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {secure ? (
                <Link href="/academics/studentPortal/Dashboard">
                  <button className="btn  bg-[#2d545e] text-[#e1b382]">Login</button>
                </Link>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="btn bg-[#2d545e] text-[#e1b382]"
                  >
                    Verify
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
                </>
              )}
            </div>
          </div>
          <p  className='text-[#2d545e]' style={{ marginLeft: '5%' }}>
            You don't have an account? Sign up
            <button 
              style={{
                color: 'purple',
                marginLeft:2
              }}
              onClick={() => {
                props.setlogin(false);
              }}
            >
              now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginStudent;
