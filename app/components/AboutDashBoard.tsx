"use client";
import Link from 'next/link';
import React from 'react'
import UnlockPage from './UnlockPage';
import Image from 'next/image';
import bg1 from '../../public/empowerment/11.jpeg'

function AboutDashBoard() {
  return (
    <div style={{
      
      marginBottom:30,
    }} >
    <div style={{
      marginTop:10,
      marginBottom:10,
    }} >
      {/*<UnlockPage/>*/}
    <h1 style={{
        textAlign:"center",
        fontSize:30,
        //fontWeight:20,
        marginTop:10,
        marginBottom:10,
        width:"80%",
      marginLeft:"10%",
        
      }} >MGM Institute of Gender and Women Empowerment</h1>
      <div className=' transparent lg:h-[500px] md:h-[400px] sm:h-[300px]  w-full  rounded-md '>
        <Image src={bg1} alt="holder" className='h-full rounded-md w-[98%] mx-auto '  />
      </div>
      <p className='lg:text-xl  ' style={{
        marginTop:20,
        width:"90%",
      marginLeft:"5%",
      }} >
        The MGM Institute of Gender and Women Empowerment stands as a beacon of
        progress in the ongoing battle for gender equality and the empowerment
        of women. Founded on the principles of inclusivity, equity, and social
        justice, this dedicated institution has been instrumental in reshaping
        societal norms and advancing the rights of women.
      </p>
    </div >
      {/*upload faqs*/}
    </div>
  )
}

export default AboutDashBoard