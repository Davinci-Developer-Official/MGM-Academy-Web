'use client';
import React, { useState } from 'react'
import Login from "./login";
//import Register from "./register"
import Navbar from '@/app/components/Navbar';

function Page() {
    const[signIn,setSignIn]= useState(true)
    const[navigation,setNavigation]= useState(true);
    
    return (
      <div>
        {navigation&&<Navbar/>}
        <Login setNavigation={setNavigation} navigation={navigation} />
    </div>
  )
}

export default Page