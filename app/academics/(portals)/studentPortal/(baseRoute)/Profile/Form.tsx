'use client';
import React, { useEffect, useMemo, useState } from 'react'
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
  const [userProfile, setUserProfile] = useState('');

  
  

  useEffect(() => {
    async function getUser() {
      try {
        const user = Cookie.get('user');
        if (user !== '') {
          if (typeof user === 'string' && user !== '') {
            setUserProfile(user);
          }
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
    getUser();
  }, []);

    // Use `useMemo` to memoize the first element from the array as the initial state
    const initialInfo = useMemo(() => User[0], [User]);

    // Initialize state using the memoized first element
    const [info, setInfo] = useState(initialInfo);

    // Ensure that `info` gets updated when `User[0]` becomes available
  useEffect(() => {
    if (User.length > 0) {
      setInfo(User[0]);  // Update info with fetched User[0]
    }
  }, [User.length]);


    // Function to update individual fields
    const handleUpdate = (field:string, value:string) => {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [field]: value, // Update only the field being modified
      }));
    };

  async function update() {
    try {
      
      
      
        const response = await fetch(`/api/remodelled/students/edit_profile?id=${userProfile}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            avatar: info.avatar,
            names: info.names,
            email: info.email,
            phonenumber: info.phonenumber,
            gender: info.gender,
            password: info.password,
          }),
        });
  
        if (response.ok) {
          alert('Update successful');
        } else {
          alert('Update failed');
        }
      
    } catch (error) {
      console.error(error);
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

  const[triggerDelete,setTriggerDelete]=useState("")
  
  async function deleteUser(){
    try {
      if(triggerDelete!==""&&triggerDelete=="delete_account"){
        const response = await fetch(`/api/remodelled/students/delete_student?id=${userProfile}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
        if(response.ok){
          alert('success')
        }else{
          alert('failure')
        }
      }else{
        alert('please enter value')
      }
    } catch (error) {
      alert({error:error} + 'your fault')
    }
  }

  return (
    <form action="" method="post" className='background w-full'>
       
        <div >
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
              <p className='ml-12 mt-2'> your names</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="full names"
                  placeholder='your full names / username of choice'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.names}
                  value={info?.names }
                  onChange={(e) => handleUpdate('names', e.target.value)}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("names");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.names ? <FaBackspace onClick={(e:any)=>{
                    e.preventDefault();
                    
                  }} /> : <FaSave />}
                </button>
              </div>
            </div>

            {/* Email */}
            <div className='w-full'>
              <p className='ml-12 mt-2'> email</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="email"
                  placeholder='example@gmail.com'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.email}
                  value={info?.email }
                  onChange={(e) => handleUpdate('email', e.target.value)}
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
              <p className='ml-12 mt-2'> phone number</p>
              <div className='relative w-[90%] mx-auto'>
                <textarea
                  name="phone number"
                  placeholder='0123456789'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.phonenumber}
                  value={info?.phonenumber }
                  onChange={(e) => handleUpdate('phonenumber', e.target.value)}
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
                  value={info?.gender }
                  placeholder='your gender'
                  className='w-full p-4 pr-10 rounded-lg border resize-none'
                  readOnly={readOnly.gender}
                  onChange={(e) => handleUpdate('gender', e.target.value)}
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
                  value={info?.password }
                  onChange={(e) => handleUpdate('password', e.target.value)}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  handleInputToggle("password");
                }} className='absolute top-2 right-2 text-gray-500 hover:text-black'>
                  {readOnly.password ? <FaBackspace /> : <FaSave />}
                </button>
              </div>
            </div>

           
          </div>
          <div className='w-[80%] ml-[10%] mt-2 mb-2 p-2 '>
              <div className='flex flex-col' >
              <p className=' '> You can delete your account, this action is permanent  and it cannot be reversed all your progress and transactions will be lost  </p>
              <div className=' text-sm flex flex-row p-2 '>type: <p className='text-red-700 ml-1 mr-1' > delete_account </p> to delete your account</div>
              </div>
              
                <input
                  name="confirm password"
                  placeholder='delete_account'
                  className='w-[80%] mx-auto p-4 pr-10 rounded-lg border resize-none'
                  onChange={(e) =>{
                    setTriggerDelete(e.target.value)
                  }}
                />
                <button onClick={(e: any) => {
                  e.preventDefault();
                  deleteUser()
                }} className=' btn w-[80%] mx-auto text-gray-500 hover:text-black'>
                  delete account
                </button>
              
            </div>
        </div>
     
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