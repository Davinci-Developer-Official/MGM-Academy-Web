import React from 'react'

interface RegisterStudentProps {
    setlogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function RegisterStudent(props: RegisterStudentProps ) {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
      Create An account to access the stundent portal for MGM Institute of Gender And women Empowerment Courses as a Student  
      </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Names</span>
          </label>
          <input type="text" placeholder="Full Names" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phonenumber</span>
          </label>
          <input type="tel"  placeholder=" +1(555) 555-1234 " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Create Password</span>
          </label>
          <input type="text" placeholder="Create Password" className="input input-bordered" />        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="repeat password" className="input input-bordered" />        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <p style={{
            marginLeft:"5%"
        }} >Already have an account ? sign in <button style={{
            color:"purple"
        }} onClick={()=>{
            props.setlogin(true)
        }} >now</button> </p>
    </div>
  </div>
</div>
  )
}

export default RegisterStudent