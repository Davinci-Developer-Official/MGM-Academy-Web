'use client';
import HomeInfo from '@/app/components/Home'
//import AboutMGMSection from '@/components/AboutMGMSection'
import DarkModeButton from '@/app/components/DarkModeButton'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
//import Vision from '@/components/Vision'
import Image from 'next/image'
import Link from 'next/link'
import Home from "./Home"
import { useState } from 'react';

export default function Page() {
  const[navigation,setNavigation]=useState(false);
  const[footer,setFooter]=useState(false);
  return (
  <div  className=' background w-full ' >
  {navigation&&<Navbar/>}
  <Home navigation={navigation} setNavigation={setNavigation} footer={footer} setFooter={setFooter} />
  {footer&&<Footer/>}
  
  
  </div>
  )
}
