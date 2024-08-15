'use client';
import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import Nations from './Nations';

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

    useEffect(()=>{
      async function storedUser(){
        const user = await localStorage.getItem('username');
        setLoggedIn(JSON.stringify(user));
        if(loggedIn!=="") {
          alert(loggedIn);
          const response = await fetch(`/api/EditProfile/${loggedIn}`, {
            method: 'GET',
          });
          const userProfile = await response.json();
          setUserProfile(userProfile)
          alert(userProfile)
        }
         
      }
      storedUser()
    },[loggedIn]);
  return (
    <form action="" method="post">
      <div className='flex flex-row w-[80%] bg-red-200 justify-evenly mx-auto '>
      <Avatar user={user} setUser={setUser} />
      <button type='submit' className='btn btn-success mx-auto my-auto ' >save changes</button>
      </div>
      <div className='w-[80%] h-[400px] overflow-y-scroll  mx-auto bg-red-200  '>
        <div className='flex flex-row mt-2  '>
        <input type="text" name="user_names" placeholder="  username  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>
        <div className='flex flex-row mt-2  '>
        <input type='email' name="user_email" placeholder="  email  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>
        <div className='flex flex-row mt-2  '>
        <input type="text" name="username" placeholder="  gender  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>
        <div className='flex flex-row mt-2  '>
        <input type="tel" name="username" placeholder="  phonenumber  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>
        <div>
        <div className='flex flex-row mt-2  '>
        <input readOnly type="text" name="user_nationality" placeholder="  please select nation  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>          
        <Nations user={user} setUser={setUser}  />
        </div>
        <div className='flex flex-row mt-2  '>
        <input type="password" name="username" placeholder="  password  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>
        <div className='flex flex-row mt-2  '>
        <input type="password" name="username" placeholder="  confirm password  " className='h-[50px] w-[88%] mx-auto border border-[#e1b382] ' />
        <button type="button" className='btn btn-ghost' >edit</button>
        </div>
      </div>
      
    </form>
  )
}

export default Form
