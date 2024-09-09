'use client';
import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import Nations from './Nations';
import Cookie from'js-cookie'
import { FaBackspace, FaEdit } from 'react-icons/fa';

interface User{ 
user_id:string,
user_names:string;
user_gender:string;
user_email:string;
user_phonenumber:string;
user_nation:string;
user_verified:string;
user_password:string;
user_avatar:string
}
function Form() {
    const[user,setUser]=useState<User[]>([]);
    const[loggedIn,setLoggedIn]=useState("")
    const [userProfile, setUserProfile] = useState<any>(null);

    async function getUser() {
      try {
        const user = Cookie.get('user');
        //alert(user)
        if (user!=='') {
          // Do something with the user value
          //alert(user);
          try {
            //alert(user)
            
            const response = await fetch(`/api/remodelled/students/profile?id=${user}`);
            const data = await response.json();
            alert(JSON.stringify(data))
            if(!response.ok){
              alert('users not found');
            }
          } catch (error:any) {
            alert('error'+ 'sucker');
          }
        } else {
          console.log('No user found');
        }
      } catch (error) {
        console.error('Error fetching user cookie:', error);
      }
    }
    
    getUser();
  return (
    <form action="" method="post" className='background w-full '>
      <div className="flex flex-col items-center w-[80%]  p-6 rounded-lg  mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:justify-between">
  {/* Avatar Section */}
  <div className="flex flex-col items-center space-y-2">
    <Avatar user={user} setUser={setUser} />
    <p className="text-gray-600 text-sm">confirm changes </p>
  </div>

  {/* Save Changes Button */}
  <button 
    type="submit" 
    className="btn bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 ease-in-out transform hover:scale-105">
    Save Changes
  </button>
</div>

      <div className='w-[90%] mx-auto h-fit p-2      '>
      <div className='w-full'>
          <p className='ml-12 mt-2  '> edit your names</p>
          <div className='relative w-[90%] mx-auto'>
            <textarea 
              name="full names" 
              placeholder='your full names / username of choice'
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            ></textarea>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>
        <div className='w-full'>
          <p className='ml-12 mt-2 '> edit email</p>
          <div className='relative w-[90%] mx-auto'>
            <textarea 
              name="email" 
              placeholder='example@gmail.com'
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            ></textarea>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>
        <div className='w-full'>
          <p className='ml-12 mt-2 '> edit phone number</p>
          <div className='relative w-[90%] mx-auto'>
            <textarea 
              name="phone number" 
              placeholder=' 0123456789 '
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            ></textarea>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>
        <div className='w-full'>
          <p className='ml-12 mt-2 '> edit gender</p>
          <div className='relative w-[90%] mx-auto'>
            <input 
              name="gender" 
              placeholder='your gender'
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            />
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>
        
        <div className='w-full'>
          <p className='ml-12 mt-2 '> edit bio</p>
          <div className='relative w-[90%] mx-auto'>
            <textarea 
              name="bio" 
              placeholder='describe yourself'
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            ></textarea>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>

        {/*<div className='flex flex-row mt-2  '>
        <input readOnly type="text" name="user_nationality" placeholder="  please select nation  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>          
        <Nations user={user} setUser={setUser}  />*/}
        
        
       {/* Password Input */}
       <div className='w-full'>
          <p className='ml-12 mt-2 '>change password</p>
          <div className='relative w-[90%] mx-auto'>
            <textarea 
              name="password" 
              placeholder='enter new password'
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            ></textarea>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>

        <div className='w-full'>
          <p className='ml-12 mt-2 '> confirm password </p>
          <div className='relative w-[90%] mx-auto'>
            <textarea 
              name="confirm password" 
              placeholder='re enter your password'
              className='w-full p-4 pr-10 rounded-lg border resize-none'
            ></textarea>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-black'>
              <FaBackspace />
            </button>
          </div>
        </div>

      </div>
      
    </form>
  )
}

export default Form


 {/*
      useEffect(()=>{
      async function storedUser(){
       
         const user = Cookie.get('user')
        //alert(user)
        setLoggedIn(JSON.stringify(user));
        if(loggedIn!=="") {
          //alert(loggedIn);
          const response = await fetch(`/api/EditProfile/${loggedIn}`, {
            method: 'GET',
          });
          const userProfile = await response.json();
          setUserProfile(userProfile)
          //alert(userProfile)
        }
         
      }
      storedUser()
    },[]);
      */}