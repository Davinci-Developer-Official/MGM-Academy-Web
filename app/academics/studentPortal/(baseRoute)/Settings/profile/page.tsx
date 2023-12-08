
import React, { FormEvent } from 'react'
import ba from "../../../../../../public/profile/user.png"
import Image from 'next/image'
import { FaUpload } from 'react-icons/fa'
//import get from '@/app/api/get'
import { fetchDataById } from '@/app/api/get'

async function page() {
  
  //data sets for fetching data
  const url = "https://65644addceac41c0761dd04d.mockapi.io/users/api/profile";
  const index = 3
  const localApi = "/api/profile";
  //get data from api
  const profiles = await fetchDataById(url,index);
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <div>
      <p className='text-black ml-[20%] mt-5   ' > Your Profile  settings will be available for everyone to see them </p>
      <div className='w-[80%]  ml-[10%] lg:h-[700px] sm:h-[600px] mt-[5px] lg:flex lg:flex-row  sm:flex sm:flex-col    ' >
        <div className='lg:w-[300px] lg:h-[400px] sm:w-full sm:h-[100px]   rounded-tl-md border-r-0 rounded-bl-md flex lg:flex-col sm:flex-row bg-[#2d545e] ' >
          <span className='sm:w-[250px] sm:h-[100px] lg:w-[98%] lg:h-[200px] lg:mx-auto lg:mt-1 rounded-md sm:ml-2  '>
          <Image src={profiles.avatar} unoptimized alt='Profile Image' width={100} height={100} className='object-fill h-full w-full rounded-md  '  />
          </span>
          <p className='ml-1 text-[#e1b382] rounded-bl-md ' >
            Profile picture must be 700px 700px
            <button className='btn  font-bold bg-[#e1b382] ml-5 text-[#2d545e] ' > <FaUpload/> upload</button>
          </p>
        </div>
        <div className='w-full border border-[#2d545e] h-full scrollbar-hide ' >
        <form className="flex flex-col justify-between h-[80%] my-auto  pt-[50px] text-[#2d545e] " >
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit Names</p>
            <input type="text" placeholder='John Doe' value={profiles.usernames}  name="name" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0  " />
            </div>
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit email</p>
            <input type="email"  placeholder='johndoe@gmail.com' value={profiles.email} name="name" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0  " />
            </div>
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit number</p>
            <input type="phonenumber" placeholder='+1 555-4323-3345' value={profiles.phonenumber} name="name" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>self-description</p>
            <textarea style={{
              
        resize: 'none',
        overflow: 'hidden',
        minHeight: '50px', // set a minimum height
        boxSizing: 'border-box', // include padding and border in the total width
        whiteSpace: 'pre-wrap', // preserve newlines and spaces
      }}  placeholder="describe your self" value={JSON.stringify(profiles.biography)} name="name" className=" pl-5 text-[#2d545e] placeholder-white  bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit password</p>
            <input type="password" placeholder='*********' value={profiles.password}  name="name" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>

        <button className='btn w-[100px] ml-[50%] mt-2 mb-2 bg-[#e1b382] text-[#2d545e] ' type="submit"> Update </button>
        </form>
        </div>
      </div>

    </div>
  )
}

export default page