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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now</h1>
          <p className="py-6">Access the student portal for MGM Institute of Gender And Women Empowerment Courses as a Student</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="temp@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="temp"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {secure ? (
                <Link href="/academics/studentPortal/Dashboard">
                  <button className="btn btn-primary">Login</button>
                </Link>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="btn btn-primary"
                  >
                    Verify
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
                </>
              )}
            </div>
          </div>
          <p style={{ marginLeft: '5%' }}>
            You don't have an account? Sign up{' '}
            <button
              style={{
                color: 'purple',
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
