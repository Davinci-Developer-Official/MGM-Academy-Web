import React from 'react'
import ba from "../../public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import Image from 'next/image'
import Link from 'next/link'
import { FaCaretDown, FaPhone, FaPowerOff, FaWrench } from 'react-icons/fa'

function ProfileBtn() {
  return (
    <div className="dropdown dropdown-end mt-[10%] w-full ">
      <div className='flex flex-row  '  >
      <div className="w-12 h-12 rounded-full border-[5px] border-[#e1b382] ">
          <Image src={ba} alt="image" className='w-full h-full rounded-full ' />
      </div>
      <span className=' w-[180px] text-center '  ><p className='pt-2 pb-2  '  >Thomas Mithamo ssssssssssasa </p></span>
      <label tabIndex={0} className="btn text-[#e1b382] hover:bg-[#e1b382] border border-[#e1b382] bg-[#2d545e] hover:text-[#2d545e]  btn-circle avatar">
        <FaCaretDown size={20} />
      </label>
      
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow  font-bold text-[#e1b382] border  border-[#e1b382] menu menu-sm dropdown-content bg-[#2d545e] rounded-box w-52">
        <li>
          <a >
            Profile Settings 
            <FaWrench className=' ml-2' />
            
          </a>
        </li>
        <li><a>  Support <FaPhone/> </a></li>
        <li><Link href="/academics/studentPortal" className='text-red-600'  >Logout <FaPowerOff/> </Link></li>
      </ul>
    </div>
  )
}

export default ProfileBtn