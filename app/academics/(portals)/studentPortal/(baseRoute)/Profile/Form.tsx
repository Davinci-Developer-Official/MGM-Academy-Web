'use client';
import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import Nations from './Nations';
import Cookie from 'js-cookie'
import { FaBackspace, FaEdit, FaSave } from 'react-icons/fa';

interface User {
  avatar: string,
  names: string;
  email: string;
  phonenumber: string;
  gender: string;
  password: string;
}

function Form() {
  const [User, setUser] = useState<User[]>([]);
  const [loggedIn, setLoggedIn] = useState("");
  const [userProfile, setUserProfile] = useState<any>(null);

  async function getUser() {
    try {
      const user = Cookie.get('user');
      if (user !== '') {
        try {
          const response = await fetch(`/api/remodelled/students/profile?id=${user}`);
          const data = await response.json();

          if (User.length == 0) {
            setUser(data);
          }

          if (!response.ok) {
            alert('users not found');
          }
        } catch (error: any) {
          alert('error' + 'sucker');
        }
      } else {
        console.log('No user found');
      }
    } catch (error) {
      console.error('Error fetching user cookie:', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const [info, setInfo] = useState({
    avatar: "",
    names: "",
    email: "",
    phonenumber: "",
    gender: "",
    password: "",
  });

  async function update() {
    try {
      const user = Cookie.get('user');
      if (user !== "") {
        const response = await fetch(`/api/remodelled/students/profile?id=${user}`, {
          method: "PUT",
          body: JSON.stringify(info),
        });
        //const data = await response.json()
        if(response.ok){
          alert('yes')
        }else{
          alert('No')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [readOnly, setReadOnly] = useState({
    names: true,
    email: true,
    phonenumber: true,
    gender: true,
    password: true,
  });

  const handleInputToggle = (field: string) => {
    
    setReadOnly((prevState) => ({
      ...prevState,
      //@ts-ignore
      [field]: !prevState[field],
    }));
  };

  return (
    <form action="" method="post" className='background w-full'>
      {User.map((profile) => (
        <div key={profile.names}>
          <div className="flex flex-col items-center w-[80%] p-6 rounded-lg mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:justify-between">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-2">
              <Avatar user={User} setUser={setUser} />
              <p className="text-gray-600 text-sm">confirm changes </p>
            </div>

            {/* Save Changes Button */}
            <button onClick={(e: any) => {
              e.preventDefault();
              update()
            }}
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 ease-in-out transform hover:scale-105">
              Save Changes
            </button>
          </div>

          <div className='w-[90%] mx-auto h-fit p-2'>
            {/* Names */}
            <div className='w-full'>
              <p className='ml-12 mt-2'>edit your names</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="full names"
                  placeholder='your full names / username of choice'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.names}
                  value={info.names || profile.names}
                  onChange={(e) => setInfo({ ...info, names: e.target.value })}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("names");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.names ? <FaBackspace /> : <FaSave />}
                </button>
              </div>
            </div>

            {/* Email */}
            <div className='w-full'>
              <p className='ml-12 mt-2'>edit email</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="email"
                  placeholder='example@gmail.com'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.email}
                  value={info.email || profile.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("email");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.email ? <FaBackspace /> : <FaSave />}
                </button>
              </div>
            </div>

            {/* Phone number */}
            <div className='w-full'>
              <p className='ml-12 mt-2'>edit phone number</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="phone number"
                  placeholder='0123456789'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.phonenumber}
                  value={info.phonenumber || profile.phonenumber}
                  onChange={(e) => setInfo({ ...info, phonenumber: e.target.value })}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("phonenumber");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.phonenumber ? <FaBackspace /> : <FaSave />}
                </button>
              </div>
            </div>

            {/* Gender */}
            <div className='w-full'>
              <p className='ml-12 mt-2'>edit gender</p>
              <div className='relative w-[90%] mx-auto'>
                <input
                  name="gender"
                  value={info.gender || profile.gender}
                  placeholder='your gender'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.gender}
                  onChange={(e) => setInfo({ ...info, gender: e.target.value })}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("gender");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.gender ? <FaBackspace /> : <FaSave />}
                </button>
              </div>
            </div>

            {/* Password */}
            <div className='w-full'>
              <p className='ml-12 mt-2'>change password</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="password"
                  placeholder='enter new password'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.password}
                  value={info.password || profile.password}
                  onChange={(e) => setInfo({ ...info, password: e.target.value })}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("password");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.password ? <FaBackspace /> : <FaSave />}
                </button>
              </div>
            </div>

            <div className='w-full'>
              <p className='ml-12 mt-2'>confirm password</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="confirm password"
                  placeholder='re enter your password'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                ></textarea>
                <button onClick={(e: any) => {
                  e.preventDefault();
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  <FaSave />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </form>
  );
}

export default Form;


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