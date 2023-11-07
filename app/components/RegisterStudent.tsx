import React from 'react'

interface RegisterStudentProps {
    setlogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function RegisterStudent(props: RegisterStudentProps ) {
  return (
    <div className="hero min-h-screen bg-[#e1b382]">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-[#2d545e] ">Register now!</h1>
      <p className="py-6 text-[#2d545e] ">
      Create An account to access the stundent portal for MGM Institute of Gender And women Empowerment Courses as a Student  
      </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-[#e1b382] border border-[#2d545e] ">
      <div className="card-body">
      <div className="form-control ">
          <label className="label">
            <span className="label-text text-[#2d545e] ">Your Names</span>
          </label>
          <input type="text" placeholder="eg John Doe" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#2d545e] ">Your Phonenumber</span>
          </label>
          <input type="tel"  placeholder="eg +1(555) 555-1234 " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#2d545e] ">Email</span>
          </label>
          <input type="text" placeholder="eg temp@gmail.com" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#2d545e] ">Create Password</span>
          </label>
          <input type="text" placeholder="eg temp123456789" className="input input-bordered" />        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#2d545e] ">Confirm Password</span>
          </label>
          <input type="text" placeholder="eg tem123456789" className="input input-bordered" />        
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-[#2d545e] text-[#e1b382]"> Register </button>
        </div>
      </div>
      <p className='text-[#2d545e]' style={{
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