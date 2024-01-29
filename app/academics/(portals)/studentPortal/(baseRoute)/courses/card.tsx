import React from 'react'
import { Course  } from './list'
import Image from 'next/image'
import Link from 'next/link'

interface Props{
    items:Course
}
function card({items}:Props) {
  return (
    <div className="w-[80%] mx-auto mt-3 mb-3 h-[300px] flex flex-col border-solid border-2 border-[#e1b382] rounded-md" key={items.id} >
        <Image unoptimized
        alt={items.coursename}
        src={items.coverimage}
        className='w-full h-[240px] object-cover bg-gray-400 rounded-tl-md rounded-tr-md '
        width={200}
        height={200}
        />
    <div className="flex flex-row h-[60px] justify-between text-[#e1b382] bg-[#2d545e] rounded-bl-md rounded-br-md  ">
        <div className="flex flex-col ml-2 w-[80%]">
          <h2 className="text-base pt-1">{items.coursename}</h2>
          <p className="text-sm">Instructed by: {items.courseinstructor}</p>
        </div>
        <Link href="/academics/studentPortal/courses/dashboard" className="btn mt-1 mr-1 sm:text-sm bg-[#e1b382] text-[#2d545e] hover:text-[#e1b382] hover:bg-[#2d545e] border hover:border-[#e1b382] w-[20%]"  >
          View Course
        </Link>
      </div>
    </div>
  )
}

export default card