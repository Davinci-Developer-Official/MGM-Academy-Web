import React from 'react'
import Carousel from './Carousel'
import { FaGraduationCap } from 'react-icons/fa'


function Home() {   
  return (
    <div className='h-screen ' >
    <p className=' text-center lg:text-xl w-[90%] mx-auto mt-4   '  >
     Join the MGM Institute of Gender and Women Empowerment, a champion for gender equality and women's empowerment. With our foundation in inclusivity, equity, and social justice, we're reshaping societal norms and advancing women's rights. Be part of the movement for progress and empowerment.
    </p>
    <Carousel />
    <div className='flex flex-col mb-2 mt-2  w-[90%] mx-auto' >
    <p className='  lg:text-xl mt-4   '  >
    Unlock your full potential with MGM - where learning meets limitless possibilities. Dive into our curated courses
    designed to empower and inspire you to thrive in every aspect of life. Start your journey today and invest in your 
    future success!
    </p>
    <div className='flex justify-end w-full ' >
    <button className='flex flex-row btn btn-primary  w-fit h-fit  ' >start learning <FaGraduationCap size={20} /> </button>
    </div>
    </div>
    </div>
  )
}

export default Home