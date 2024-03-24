'use client';
import Construction from '@/app/components/Construction'
import React, { useState } from 'react'
import Form from "./form"
import Navbar from '@/app/components/Navbar';
import Remodel from './Remodel';

function Page() {
  const[navigation,setNavigation]= useState(false);

  return (
    <div>
      {navigation&&<Navbar/>}
      {/*<Form setNavigation={setNavigation} navigation={navigation} />*/}
      <Remodel/>
    </div>
  )
}

export default Page