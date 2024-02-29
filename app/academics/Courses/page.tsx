'use client';
//import Construction from '@/app/components/Construction'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import Section from './section'

function Page() {
  const[hideMenu,setHideMenu]=useState(false);
  useEffect(()=>{
    console.log("listenning to hideMenu")
  },[hideMenu])
  return (
    <div>
      {hideMenu&&<Navbar/>}
       <Section setHideMenu={setHideMenu} hideMenu={hideMenu} />
      
      </div>
  )
}

export default Page