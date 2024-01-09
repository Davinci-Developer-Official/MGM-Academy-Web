import React from 'react'
import FindCourse from './FindCourse'
import { FaHome, FaSearch } from 'react-icons/fa'

function HeaderDash() {
  return (
    <div className='flex flex-row  justify-evenly w-full pt-5   ' >
       <button className=" sm:w-[20%] lg:w-[10%] rounded-md border border-[#e1b382] flex flex-row p-2 text-[#e1b382] bg-gradient-to-r from-[#2d545e] normal-case text-xl justify-around "  >  
       <FaHome size={20} className="mt-1" />
        Dashboard
       </button>
       <div className='sm:w-[65%] lg:w-[70%] border-none border-0  justify-around flex flex-row rounded-tl-md rounded-bl-md ' >
        <input placeholder=' Search courses ' className=' w-full h-full border-solid border border-t-0 border-l-0 border-r-0  border-b-[#e1b382] text-[#2d545e] bg-white p-2 rounded-tl-md rounded-bl-md text-[22px] ' />
      <button className='btn btn-ghost text-[#e1b382] bg-gradient-to-r from-[#2d545e] ' >
        <FaSearch/>
      </button>
       </div>
       </div>
  )
}

export default HeaderDash