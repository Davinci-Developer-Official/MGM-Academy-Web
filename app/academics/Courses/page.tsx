'use client';
//import Construction from '@/app/components/Construction'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import Section from './section'
import Remodel from './remodelled'

function Page() {
  const[hideMenu,setHideMenu]=useState(true);
  useEffect(()=>{
    console.log("listenning to hideMenu")
  },[hideMenu])
  return (
    <div>
      {hideMenu&&<Navbar/>}
       {/*<Section setHideMenu={setHideMenu} hideMenu={hideMenu} />*/}
      <Remodel/>
      </div>
  )
}

export default Page