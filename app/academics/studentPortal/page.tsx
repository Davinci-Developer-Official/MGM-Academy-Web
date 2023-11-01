"use client"
import DarkModeButton from '@/app/components/DarkModeButton';
import LoginStudent from '@/app/components/LoginStudent';
import Navbar from '@/app/components/Navbar';
import RegisterStudent from '@/app/components/RegisterStudent';
import React, { useState } from 'react'

function Page() {

  const [login, setLogin] = useState<boolean>(true);
 

  return (
    <div>
      <Navbar/>
      <DarkModeButton/>
      {login ? <LoginStudent setlogin={setLogin} /> : <RegisterStudent setlogin={setLogin} />}
    </div>  )
}

export default Page