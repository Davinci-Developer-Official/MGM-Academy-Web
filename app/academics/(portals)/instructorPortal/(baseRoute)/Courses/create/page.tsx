'use client';
import React, { useState } from 'react'
import CreateCourse from './CreateCourse';
import Editor from './Editor';

function Page() {
  const[createcourse,setcreatecourse]=useState(true);
  const[editor,showEditor]=useState(false);
  return (
    <div className='h-screen w-full  ' >
      {/*--create course--*/}
      {createcourse&&<CreateCourse setcreatecourse={setcreatecourse} showEditor={showEditor} />}
      {editor&&<Editor  />}
    </div>
  )
}

export default Page;