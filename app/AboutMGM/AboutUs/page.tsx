'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import bg1 from '../../../public/empowerment/13.jpeg'
import Info from './Info'
import Construction from '@/app/components/Construction'
import Navbar from '@/app/components/Navbar';


function Page() {
  const[navigation,setNavigation]= useState(true);
  return (
   <div  >
   
   <Info setNavigation={setNavigation} navigation={navigation} />
   </div>
  )
}

export default Page