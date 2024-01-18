'use client';
import React, { useState } from 'react'
import Login from "./login";
import Register from "./register"

function Page() {
    const[signIn,setSignIn]=useState(true)
  return (
    <div>
        {signIn?<Login setSignIn={setSignIn} />:<Register setSignIn={setSignIn} />}
    </div>
  )
}

export default Page