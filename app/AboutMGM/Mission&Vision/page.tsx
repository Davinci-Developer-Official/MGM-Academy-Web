'use client';
import Navbar from '@/app/components/Navbar';
import MissionAndVision from './MissionAndVision'
import React, { useState } from 'react'

function Page() {
  const[navigation,setNavigation]= useState(true );
  //{navigation&&<Navbar/>}
  return(
    <>
    
     <MissionAndVision setNavigation={setNavigation} navigation={navigation} />
    </>
  );
}

export default Page;