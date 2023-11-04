import React from 'react'
import FindCourse from './FindCourse'
import { FaHome } from 'react-icons/fa'

function HeaderDash() {
  return (
    <div className='flex flex-row  justify-around w-full pt-5   ' >
       <button className=" flex flex-row btn btn-ghost normal-case text-xl  " style={{
        color:"#2d545e"
       }}  >  
       <FaHome/>
        Dashboard
       </button>
       <FindCourse/>
       </div>
  )
}

export default HeaderDash