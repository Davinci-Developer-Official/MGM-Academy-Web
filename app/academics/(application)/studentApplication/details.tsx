'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import profile from '@/public/profile/user.png';
import { FaCaretRight, FaSave } from 'react-icons/fa';
import Uploader from "./Upload"
import CountrySelector from './Countries';



function Form({setSlide1,setSlide2,user, setUser}:any) {
  //states
  

  {/*
    function avatarPlaceholder(){
    const first = firstname.charAt(0);
    const middle = middlename.charAt(0);
    const last = lastname.charAt(0);
    const user = username.charAt(0);
    const result = first.toUpperCase() + last.toUpperCase() 
    if(first!==""&& middle!==""&&last!=="") return setInitials(first.toUpperCase() + middle.toUpperCase() +last.toUpperCase());
    else return setInitials(user.toUpperCase()); 
    }
  */}
  const[initials,setInitials]=useState("")
  function submit (e:any){
    e.preventDefault()
    //alert(JSON.stringify(data))
    //alert(JSON.stringify(user))
    const data= JSON.stringify(user)
    sessionStorage.setItem("details",data);
    const v = sessionStorage.getItem("details");
    //alert("localstorage info"+v)
    if(v){
      setSlide1(false);
      setSlide2(true);
      alert("zee")
    }else{
      alert(v)
      setSlide1(true);
      setSlide2(false);
    }
    
   }

  useEffect(() => {
    function avatarPlaceholder() {
      const f = user.first_name || '';
      const m = user.middle_name || '';
      const l = user.last_name || '';
      const u = user.username || '';
  
      const first = f.charAt(0);
      const middle = m.charAt(0);
      const last = l.charAt(0);
      const userInitial = u.charAt(0);
      const result = first.toUpperCase() + last.toUpperCase();
      
      if (first !== "" && middle !== "" && last !== "") 
        return setInitials(first.toUpperCase() + middle.toUpperCase() + last.toUpperCase());
      else 
        return setInitials(userInitial.toUpperCase()); 
    };
    avatarPlaceholder();
  }, [user]);
  
  return (
    <>
    <Uploader initials={initials} />
    <form className='background  p-2  w-[70%] mx-auto ' > 
  {/*First Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >First Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Jane' value={user.first_name} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, first_name: value }));
    }}  />
  </div>
  {/*Middle Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold ' >Middle Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Emily' value={user.middle_name} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, middle_name: value }));
    }}  />
  </div>
  {/*Last Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >Last Name</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder=' Doe ' value={user.last_name} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, last_name: value }));
    }}  />
  </div>
  {/*User Name*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >username *(optional)</p>
    <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='J Doe' value={user.username} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, username: value }));
    }} />
  </div>
  {/*Email address*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Email </p>
    <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='janeemilydoe@gmail.com' value={user.email} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, email: value }));
    }}  />
  </div>
  {/*gender selection*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' >gender</p>
    <div className='flex flex-row p-2 ' >
      <input type="radio" onChange={(e:any)=>{
        //@ts-ignore
        setUser(prevUser => ({ ...prevUser, gender: "male" }));
      }} />
      <p className='ml-2 font-mono font-bold ' >Male</p>
    </div>
    <div className='flex flex-row p-2 ' >
      <input type="radio" onChange={(e:any)=>{
        //@ts-ignore
        setUser(prevUser => ({ ...prevUser, gender: "female" }));
      }} />
      <p className='ml-2 font-mono font-bold ' >Female</p>
    </div>
    <div className='flex flex-col p-2 ' >
      <p className='ml-2 font-mono font-bold ' >Other</p>
      <input type="text" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='state your gender' value={user.gender} onChange={(e:any)=>{
        const value = e.target.value;
        //@ts-ignore
        setUser(prevUser => ({ ...prevUser, gender: value }));
      }}  />         
    </div>
  </div>
  {/*Nationality*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Nation of origin / citizenship </p>
    {/* edited 07/03/2024: You may need to update CountrySelector accordingly  */}
    <CountrySelector setcitizenship={setUser} citizenship={user.nationality} /> 
  </div>
  {/*Residence*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Residence City/Town  </p>
    <input type="email" className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' placeholder='Nairobi' value={user.residence} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, residence: value }));
    }}  />
  </div>
  {/*phone number*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold'  > Phone number </p>
    <input type='tel' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent '  placeholder=' (254)12345678 ' value={user.phone_number} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, phone_number: value }));
    }}  />
  </div>
  {/*Date of birth*/}
  <div className='sm:w-[80%] lg-[60%]  mx-auto p-4 '  >
    <p className='font-mono font-bold' > Date of birth </p>
    <input type='date' className='w-full border-solid border-b-2 border-b-[#e97902] bg-transparent ' value={user.date_of_birth} onChange={(e:any)=>{
      const value = e.target.value;
      //@ts-ignore
      setUser(prevUser => ({ ...prevUser, date_of_birth: value }));
    }}  />
  </div>
</form>

    <div className=' justify-center w-[60%] mx-auto mb-4 ' >
    
    {/*continue*/}
    <button className='btn btn-success flex flex-row w-[80%] mx-auto justify-between ' onClick={submit} > continue <FaCaretRight size={20} /> </button>
    </div>
    </>
  )
}

export default Form;