'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';



function Edit({setformData,profiles,formData,update}:any){
  return(
    <div className='w-[80%]  ml-[10%] lg:h-[700px] sm:h-[600px] mt-[5px] lg:flex lg:flex-row  sm:flex sm:flex-col    ' >
        <div className='lg:w-[300px] lg:h-[400px] sm:w-full sm:h-[100px]   rounded-tl-md border-r-0 rounded-bl-md flex lg:flex-col sm:flex-row bg-[#2d545e] ' >
          {/* Profile Image */}
          <span className='sm:w-[250px] sm:h-[100px] lg:w-[98%] lg:h-[200px] lg:mx-auto lg:mt-1 rounded-md sm:ml-2  '>
          <Image src={profiles.avatar} unoptimized alt='Profile Image' width={100} height={100} className='object-fill h-full w-full rounded-md  '  />
          </span>
          <p className='ml-1 text-[#e1b382] rounded-bl-md ' >
            Profile picture must be 700px 700px
            <input type="file" accept="image/jpeg, image/png, image/jpg"
                onChange={(e) => {
                const files = e.target.files;

                if (files && files.length > 0) {
                  const file = files[0];

                  const reader = new FileReader();
                  reader.readAsDataURL(file);

                  reader.addEventListener("load", () => {
                    
                    const choosenImage= JSON.stringify(reader.result);
                    alert(choosenImage);
                    setformData((prevData:any)=>({
                      ...prevData,
                      avatar:choosenImage

                    }));
                  });

                  //alert(`${file.name}`);
                }
              }}/>

          </p>
        </div>
        <div className='w-full border border-[#2d545e] h-full scrollbar-hide ' >
        <form className="flex flex-col justify-between h-[80%] my-auto  pt-[50px] text-[#2d545e] " onSubmit={update} >
            {/* username */}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit Names</p>
            <input type="text" placeholder={profiles.usernames} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                username: value,
              }));
            }} value={formData.username}   name="name" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0  " />
            </div>
            {/*email*/}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit email</p>
            <input type="email"  placeholder={profiles.email} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                email: value,
              }));
            }} value={formData.email}  name="email" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0  " />
            </div>
            {/* phonenumber */}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit number</p>
            <input type="phonenumber" placeholder={profiles.phonenumber} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                phonenumber: value,
              }));
            }} value={formData.phonenumber}  name="phonenumber" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
              {/* Biography */}
            <p>self-description</p>
            <textarea style={{             
                resize: 'none',
                overflow: 'hidden',
                minHeight: '50px', // set a minimum height
                boxSizing: 'border-box', // include padding and border in the total width
                whiteSpace: 'pre-wrap', // preserve newlines and spaces
              }} placeholder={JSON.stringify(profiles.biography)} onChange={e=>{
                const value = e.target.value;
                setformData((prevData:any) => ({
                  ...prevData,
                  biography: value,
                }));
              }} value={formData.biography}  name="biography" className=" pl-5 text-[#2d545e] placeholder-white  bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            {/* Password */}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit password</p>
            <input type="password" placeholder={profiles.password} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                password: value,
              }));
            }} value={formData.password}   name="password" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            {/* Submit */}
        <button className='btn w-[100px] ml-[50%] mt-2 mb-2 bg-[#e1b382] text-[#2d545e] ' type="submit"> Update </button>
        </form>
        </div>
      </div>
  )
}

  function Current({setformData,profiles,formData}:any){
    return(
      <div className='w-[80%]  ml-[10%] lg:h-[700px] sm:h-[600px] mt-[5px] lg:flex lg:flex-row  sm:flex sm:flex-col    ' >
        <div className='lg:w-[300px] lg:h-[400px] sm:w-full sm:h-[100px]   rounded-tl-md border-r-0 rounded-bl-md flex lg:flex-col sm:flex-row bg-[#2d545e] ' >
          {/* Profile Image */}
          <span className='sm:w-[250px] sm:h-[100px] lg:w-[98%] lg:h-[200px] lg:mx-auto lg:mt-1 rounded-md sm:ml-2  '>
          <Image src={profiles.avatar} unoptimized alt='Profile Image' width={100} height={100} className='object-fill h-full w-full rounded-md  '  />
          </span>
          <p className='ml-1 text-[#e1b382] rounded-bl-md ' >
            Profile picture must be 700px 700px
            <input type="file" accept="image/jpeg, image/png, image/jpg"
                onChange={(e) => {
                const files = e.target.files;

                if (files && files.length > 0) {
                  const file = files[0];

                  const reader = new FileReader();
                  reader.readAsDataURL(file);

                  reader.addEventListener("load", () => {
                    
                    const choosenImage= JSON.stringify(reader.result);
                    alert(choosenImage);
                    setformData((prevData:any)=>({
                      ...prevData,
                      avatar:choosenImage

                    }));
                  });

                  //alert(`${file.name}`);
                }
              }}/>

          </p>
        </div>
        <div className='w-full border border-[#2d545e] h-full scrollbar-hide ' >
          {/*onSubmit={update} */}
        <form className="flex flex-col justify-between h-[80%] my-auto  pt-[50px] text-[#2d545e] "  >
            {/* username */}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit Names</p>
            <input type="text" placeholder={profiles.usernames} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                username: value,
              }));
            }} value={formData.username}   name="name" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0  " />
            </div>
            {/*email*/}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit email</p>
            <input type="email"  placeholder={profiles.email} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                email: value,
              }));
            }} value={formData.email}  name="email" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0  " />
            </div>
            {/* phonenumber */}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit number</p>
            <input type="phonenumber" placeholder={profiles.phonenumber} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                phonenumber: value,
              }));
            }} value={formData.phonenumber}  name="phonenumber" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
              {/* Biography */}
            <p>self-description</p>
            <textarea style={{             
                resize: 'none',
                overflow: 'hidden',
                minHeight: '50px', // set a minimum height
                boxSizing: 'border-box', // include padding and border in the total width
                whiteSpace: 'pre-wrap', // preserve newlines and spaces
              }} placeholder={JSON.stringify(profiles.biography)} onChange={e=>{
                const value = e.target.value;
                setformData((prevData:any) => ({
                  ...prevData,
                  biography: value,
                }));
              }} value={formData.biography}  name="biography" className=" pl-5 text-[#2d545e] placeholder-white  bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            {/* Password */}
           <div className='lg:flex lg:flex-row sm:flex sm:flex-col justify-evenly w-[96%] mx-auto text-center  ' >
            <p>Edit password</p>
            <input type="password" placeholder={profiles.password} onChange={e=>{
              const value = e.target.value;
              setformData((prevData:any) => ({
                ...prevData,
                password: value,
              }));
            }} value={formData.password}   name="password" className=" pl-5 text-[#2d545e] placeholder-white h-[50px] bg-[#e1b382] rounded-md lg:w-[60%] sm:w-full border border-[#2d545e] border-t-0 border-l-0 border-r-0   " />
            </div>
            {/* Submit */}
        <button className='btn w-[100px] ml-[50%] mt-2 mb-2 bg-[#e1b382] text-[#2d545e] ' type="submit"> Update </button>
        </form>
        </div>
      </div>
    )
  }

 function Form({url,index,profiles}:any) {
    const [formData,setformData]=useState({
    avatar:"" ,
    username:"",
    email:"",
    phonenumber:"",
    biography:"",
    password:""
    })
    
    const [makeEdit,setMakeEdit]=useState(false)
    
   {/* async function update(e:any){
      e.preventDefault();
      await PostProfileData(url,index,formData)
    }
    async function deleteAccount(e:any){
      e.preventDefault();
      await DeleteById(url,index);
    }*/}
  return (
    <div>
      <p className='text-black ml-[20%] mt-5   ' > Your Profile  settings will be available for everyone to see them </p>
      {makeEdit?<Edit setformData={setformData} profiles={profiles} formData={formData} />:<Current setformData={setformData} profiles={profiles} formData={formData} />}

    </div>
  )
}

export default Form