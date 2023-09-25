import React from 'react'

interface LoginStudentProps {
    setlogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function LoginStudent(props: LoginStudentProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">  Login now </h1>
        <p className="py-6"> Access the stundent portal for MGM Institute of Gender And women Empowerment Courses as a Student</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
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