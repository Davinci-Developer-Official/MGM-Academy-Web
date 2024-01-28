'use client'
import Link from 'next/link'
import React from 'react'
//import { useColorTheme } from '@/hooks/useColorTheme' 
import ChangeTheme from "./ChangeTheme"
import DarkModeButton from './DarkModeButton'
import { FaBookOpen, FaFemale, FaFile, FaFolder, FaGithub, FaGraduationCap, FaHandshake, FaHome, FaInfo, FaInfoCircle, FaIntercom, FaMoneyBill, FaPersonBooth, FaSun } from 'react-icons/fa'

function Navbar() {
    //const [colorTheme] = useColorTheme();



  return (
    <div className="navbar bg-[#2d545e]  text-[#e1b382] "  >
  <div className="navbar-start">
    <div className="dropdown z-10 ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-[#2d545e]  text-[#e1b382] ">
        <li><Link href="/" > <FaHome size={20} /> Home</Link></li>
        {/*About MGM*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row ' > <FaInfoCircle size={20} className="mr-2" />  About MGM  </Link></summary>
          <ul className="p-1  w-fit  ">
            <li><Link href="/AboutMGM/AboutUs" > <FaInfoCircle/> About MGM  </Link></li>
            <li><Link href="/AboutMGM/Mission&Vision" > <FaSun/> Mission & Vision  </Link></li>
            <li><Link href="/AboutMGM/MGMAdministration"> <FaPersonBooth/>  Administration</Link></li>
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaGraduationCap size={20} className="mr-2" /> Academics</Link></summary>
          <ul className="p-1    ">
          <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaPersonBooth size={20} className="mr-2"  /> Portals</Link></summary>
          <ul className="p-1      ">
            <li><Link href="/academics/studentPortal/auth" > <FaPersonBooth/> Student portal</Link></li>
            <li><Link href="/academics/instructorPortal/auth" > <FaPersonBooth/> Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal"> <FaPersonBooth/> Admin portal</Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/studentPortal/auth" className='flex flex-row' > <FaGraduationCap size={20} className="mr-2" /> MGM Courses</Link></li>
            <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaFile size={20} className="mr-2"  /> Apply</Link></summary>
          <ul className="p-1  ">
            <li><Link href="/academics/studentApplication" > <FaFile/> student application</Link></li>
            <li><Link href="/academics/InstructorApplication" > <FaFile/> Instructor application </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal"> <FaInfoCircle size={20} /> FAQ</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0} >
        <details>
          <summary><Link href="http://localhost:3000" className='flex flex-row' > <FaHandshake size={20} className="mr-2" /> Contribute</Link></summary>
          <ul className="p-1    ">
            <li><Link href="https://github.com/Davinci-Developer-Official/MGM-Academy-Web.git" > <FaGithub/> Github</Link></li>
            <li><Link href="http://localhost:3000" > <FaMoneyBill/> Donate </Link></li>
            <li><Link href="http://localhost:3000"> <FaIntercom/> Social Media</Link></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white "> MGM Institute </a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1  ">
    <li><Link href="/" > <FaHome size={20} /> Home</Link></li>
        {/*About MGM*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row ' > <FaInfoCircle size={20} className="mr-2" />  About MGM  </Link></summary>
          <ul className="p-1  w-fit  z-10 ">
            <li><Link href="/AboutMGM/AboutUs" > <FaInfoCircle/> About MGM  </Link></li>
            <li><Link href="/AboutMGM/Mission&Vision" > <FaSun/> Mission & Vision  </Link></li>
            <li><Link href="/AboutMGM/MGMAdministration"> <FaPersonBooth/>  Administration</Link></li>
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaGraduationCap size={20} className="mr-2" /> Academics</Link></summary>
          <ul className="p-1  z-10  ">
          <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaPersonBooth size={20} className="mr-2"  /> Portals</Link></summary>
          <ul className="p-1      ">
            <li><Link href="/academics/studentPortal/auth" > <FaPersonBooth/> Student portal</Link></li>
            <li><Link href="/academics/instructorPortal/auth" > <FaPersonBooth/> Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal"> <FaPersonBooth/> Admin portal</Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/studentPortal/auth" className='flex flex-row' > <FaBookOpen size={20} className="mr-2" /> MGM Courses</Link></li>
            <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaFolder size={20} className="mr-2"  /> Apply</Link></summary>
          <ul className="p-1  ">
            <li><Link href="/academics/studentApplication" > <FaFile/> student application</Link></li>
            <li><Link href="/academics/InstructorApplication" > <FaFile/> Instructor application </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal"> <FaInfoCircle size={20} /> FAQ</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0} >
        <details>
          <summary><Link href="http://localhost:3000" className='flex flex-row' > <FaHandshake size={20} className="mr-2" /> Contribute</Link></summary>
          <ul className="p-1    ">
            <li><Link href="https://github.com/Davinci-Developer-Official/MGM-Academy-Web.git" > <FaGithub/> Github</Link></li>
            <li><Link href="http://localhost:3000" > <FaMoneyBill/> Donate </Link></li>
            <li><Link href="http://localhost:3000"> <FaIntercom/> Social Media</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className='mr-1' >
    <FaFemale size={30} />
         
  </div>
  </div>
  
</div>
  )
}

export default Navbar