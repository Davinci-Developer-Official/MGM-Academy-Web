'use client';
import React, { useState } from 'react'
import CreateCourse from './CreateCourse';

function Page() {
  const[createcourse,setcreatecourse]=useState(true);
  return (
    <div className='h-screen w-full  ' >
      {/*--create course--*/}
      {createcourse&&<CreateCourse setcreatecourse={setcreatecourse} />}
    </div>
  )
}

export default Page;