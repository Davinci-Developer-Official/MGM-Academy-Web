import React from 'react'
import ba from "../../public/profile/user.png"
import Image from 'next/image'
import Link from 'next/link'
import { FaCaretDown, FaCog, FaGlobe, FaKey, FaLanguage, FaPhone, FaPowerOff, FaShieldAlt, FaWrench } from 'react-icons/fa'

function ProfileBtn() {
  return (
    <div className="dropdown dropdown-end mt-[10%] w-full ">
      <div className='flex flex-row  '  >
      <div className="w-12 h-12 rounded-full border border-[#e1b382] ">
          <Image src={ba} alt="image" className='w-full h-full rounded-full ' />
      </div>
      <span className=' w-[170px] text-center '  ><p className='pt-2 pb-2  '  >Thomas Mithamo ssssssssssasa </p></span>
      <label tabIndex={0} className="btn text-[#e1b382] hover:bg-[#e1b382] border border-[#e1b382] bg-[#2d545e] hover:text-[#2d545e]  btn-circle avatar">
        <FaCaretDown size={20} />
      </label>
      
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow  font-bold text-[#e1b382] border  border-[#e1b382] menu menu-sm dropdown-content bg-[#2d545e] rounded-box w-52">
        <li>
          <Link href='/academics/studentPortal/Settings/profile' >
            
            <FaWrench className=' ml-2' />
            edit  profile 
          </Link>
        </li>
        <li>
          <Link href='/academics/studentPortal/Settings/profile' >
            
            <FaCog className=' ml-2' />
            prefrences 
          </Link>
        </li>
        <li>
          <Link href='/academics/studentPortal/Settings/profile' >
            
            <FaKey className=' ml-2' />
            privacy settings
          </Link>
        </li>
        <li>
          <Link href='/academics/studentPortal/Settings/profile' >
             
            <FaShieldAlt className=' ml-2' />
            security settings
          </Link>
        </li>
        <li>
          <Link href='/academics/studentPortal/Settings/profile' >
             
            <FaGlobe className=' ml-2' />
            select language
          </Link>
        </li>
        <li><a>   <FaPhone className=' ml-2' /> Support </a></li>
        <li><Link href="/academics/studentPortal" className='text-red-600 ml-2 '  > <FaPowerOff/> Logout </Link></li>
      </ul>
    </div>
  )
}

export default ProfileBtn