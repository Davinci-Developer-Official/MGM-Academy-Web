"use client"
import DarkModeButton from '@/components/DarkModeButton';
import LoginStudent from '@/components/LoginStudent';
import Navbar from '@/components/Navbar';
import RegisterStudent from '@/components/RegisterStudent';
import React, { useState } from 'react'

function page() {

  const [login, setLogin] = useState<boolean>(true);
 

  return (
    <div>
      <Navbar/>
      <DarkModeButton/>
      {login ? <LoginStudent setlogin={setLogin} /> : <RegisterStudent setlogin={setLogin} />}
    </div>  )
}

export default page