import React from 'react'
import Carousel from './Carousel'
import { FaAngleDown, FaAngleUp, FaCaretDown, FaGraduationCap, FaHome } from 'react-icons/fa'


function Home({navigation,setNavigation,footer,setFooter}:any) {   
  return (
    <div className='h-screen overflow-y-scroll' >
    <div className='flex flex-row w-full justify-between p-4 ' >
      {!navigation&&<button className='btn btn-ghost  ' onClick={()=>{
        setNavigation(true)
      }} ><FaAngleDown size={20} /></button>}
      {navigation&&<button className='btn btn-ghost  ' onClick={()=>{
        setNavigation(false);
      }} ><FaAngleUp size={20} /></button>}
      <div className=" normal-case text-xl  ml-4 p-2 font-mono "> MGM Learning platform  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaHome size={20} /></button>
    </div>
    <div className='   ' >
    <div className='w-[80%] mx-auto card  font-mono' >
    <p className=' text-center text-xl lg:text-2xl font-bold  w-[90%] mx-auto mt-4 card-title '  >
     Join the MGM Institute of Gender and Women Empowerment, a champion for gender equality and women's empowerment. With our foundation in inclusivity, equity, and social justice, we're reshaping societal norms and advancing women's rights. Be part of the movement for progress and empowerment.
    </p>
    </div>
    <Carousel />
    <div className='flex flex-col mb-2 mt-2  w-[80%] mx-auto card card-body ' >
    <p className='  text-xl mt-4 w-[90%] mx-auto font-semibold font-mono '  >
    Unlock your full potential with MGM - where learning meets limitless possibilities. Dive into our curated courses
    designed to empower and inspire you to thrive in every aspect of life. Start your journey today and invest in your 
    future success!
    </p>
    <div className='flex justify-end w-full ' >
    <button className='flex flex-row btn btn-primary  w-fit h-fit  ' >start learning <FaGraduationCap size={20} /> </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home