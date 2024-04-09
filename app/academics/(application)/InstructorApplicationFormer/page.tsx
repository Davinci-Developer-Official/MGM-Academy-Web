'use client';
import Construction from '@/app/components/Construction'
import React, { useState } from 'react'
import Form from "./form"
import Navbar from '@/app/components/Navbar';

function Page() {
  const[navigation,setNavigation]= useState(false);

  return (
    <div>
      {navigation&&<Navbar/>}
      <Form setNavigation={setNavigation} navigation={navigation} />
    </div>
  )
}

export default Page