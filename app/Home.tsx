import React from 'react'
import Carousel from './Carousel'
import { FaAngleDown, FaAngleUp, FaCaretDown, FaCaretUp, FaChevronCircleDown, FaChevronCircleUp, FaCompress, FaExpand, FaGraduationCap, FaHome } from 'react-icons/fa'
import Link from 'next/link'


function Home({navigation,setNavigation,footer,setFooter}:any) {   
  const Label="MGM Academy: Empowering Education for All"
  const statement = "Welcome to the MGM Institute of Gender and Women Empowerment: Pioneers of Equality and Empowerment. As a dynamic learning platform for all, we offer a diverse range of courses. Join us in reshaping norms, advancing rights, and fostering inclusivity and justice. Together, let's champion progress and empowerment for all."
  return (
    <div className='h-screen overflow-y-scroll' >
    <div className='flex flex-row w-full justify-between p-4 ' >
    {!navigation&&<button onClick={()=>{setNavigation(true)}} className='btn btn-ghost flex flex-col ' ><FaCompress size={15} /></button>}
            {navigation&&<button onClick={()=>{setNavigation(false)}} className='btn btn-ghost  flex flex-col ' ><FaExpand size={15} /></button>}
      <div className=" font-bold text-xl  ml-4 p-2 font-mono "> {Label}  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaHome size={20} /></button>
    </div>
    <div className='   ' >
    <div className='w-[90%] sm:w-[99%] mx-auto card  font-mono' >
    <p className=' text-center font-mono    w-[90%] mx-auto  card-body '  >
     {statement}
    </p>
    <Link href="/academics/Courses" className='flex flex-row btn btn-primary  w-fit h-fit mx-auto ' >
      <p>start learning</p> 
      <FaGraduationCap size={20} /> 
    </Link>
    </div>
    <Carousel />
    {/* old model */}
    {/*<div className='flex flex-col mb-2 mt-2  w-[80%] mx-auto card card-body ' >
    <p className='  text-xl mt-4 w-[90%] mx-auto font-semibold font-mono '  >
    Unlock your full potential with MGM - where learning meets limitless possibilities. Dive into our curated courses
    designed to empower and inspire you to thrive in every aspect of life. Start your journey today and invest in your 
    future success!
    </p>
    <div className='flex justify-end w-full ' >
    <Link href="/academics/Courses" className='flex flex-row btn btn-primary  w-fit h-fit  ' >
      <p>start learning</p> 
      <FaGraduationCap size={20} /> 
    </Link>
    </div>
    </div>*/}
    </div>
    </div>
  )
}

export default Home