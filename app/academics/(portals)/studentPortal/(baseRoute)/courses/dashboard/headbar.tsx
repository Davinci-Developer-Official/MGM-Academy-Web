import Link from 'next/link'
import React from 'react'
import { FaCaretLeft } from 'react-icons/fa'

function headbar() {
  return (
    <div className='flex flex-row justify-evenly my-auto h-[90%] ' >
      <Link href="/academics/studentPortal/courses" className=' btn  w-[100px] my-auto ' > <FaCaretLeft/> Back</Link>
      <div className='flex flex-row w-[80%]  justify-evenly  h-[98%] text-[#2d545e] ' >
        <h1 className='my-auto text-xl font-bold ' >Graphic design</h1>
        <h2 className='my-auto text-lg' > Instructor: <p className='text-base' >Jerry Brooks</p> </h2>
      </div>
    </div>
  )
}

export default headbar