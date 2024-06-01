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
  <div className="navbar background "  >{/*bg-[#2d545e]  text-[#e1b382]*/}
  <div className="navbar-start">
    <div className="dropdown z-10 ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52  background  border-b-2 border-b-[#e97902] ">{/*border-[#e1b382] border-[1px]*/}
        <li><Link href="/" > <FaHome size={20} className='text-[#e97902] ' /> Home</Link></li>
        {/*About MGM*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/AboutMGM" className='flex flex-row ' > <FaInfoCircle size={20} className="mr-2 text-[#e97902] " />  About MGM  </Link></summary>
          <ul className="p-1  w-fit border-b-2 border-b-[#e97902] ">
            <li><Link href="/AboutMGM/AboutUs" > <FaInfoCircle size={20} className='text-[#e97902] ' /> About MGM  </Link></li>
            <li><Link href="/AboutMGM/Mission&Vision" > <FaSun size={20} className='text-[#e97902] ' /> Mission & Vision  </Link></li>
            <li><Link href="/AboutMGM/MGMAdministration"> <FaPersonBooth size={20} className='text-[#e97902] ' />  Administration</Link></li>
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaGraduationCap size={20} className="mr-2 text-[#e97902] " /> E-Learning </button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
          <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaPersonBooth size={20} className="mr-2 text-[#e97902] "  /> Portals</button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/studentPortal/auth" > <FaPersonBooth size={20} className='text-[#e97902] ' /> Student portal</Link></li>
            <li><Link href="/academics/instructorPortal/auth" > <FaPersonBooth size={20} className='text-[#e97902] ' /> Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal"> <FaPersonBooth size={20} className='text-[#e97902] ' /> Admin portal</Link></li>
          </ul>
        </details>
      </li>
      {/* href="/academics/Courses"*/}
            <li><Link href="/academics/Courses/remodelledGrid" className='flex flex-row' > <FaGraduationCap size={20} className="mr-2 text-[#e97902] " /> Available Courses </Link></li>
            <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaFile size={20} className="mr-2 text-[#e97902] "  /> Apply</button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/studentApplication" > <FaFile size={20} className='text-[#e97902]' /> student application</Link></li>
            <li><Link href="/academics/InstructorApplication" > <FaFile size={20} className='text-[#e97902]' /> Instructor application </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal"> <FaInfoCircle size={20} className='text-[#e97902] ' /> FAQ</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0} >
        <details>
          <summary><Link href="/contribute" className='flex flex-row' > <FaHandshake size={20} className="mr-2 text-[#e97902] " /> Contribute</Link></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="https://github.com" > <FaGithub size={20} className='text-[#e97902] ' /> Github</Link></li>
            <li><Link href="http://localhost:3000" > <FaMoneyBill size={20} className='text-[#e97902] ' /> Donate </Link></li>
            <li><Link href="http://localhost:3000"> <FaIntercom size={20} className='text-[#e97902] ' /> Social Media</Link></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <div className=" font-mono font-bold normal-case lg:text-xl text-sm text-[#0f2027] border-b-[#e97902] border-b-[2px] ml-4 p-2 "> MGM Institute  </div>
  </div>
  <div className="navbar-center hidden lg:flex border-b-2 border-b-[#e97902] ">
    <ul className="menu menu-horizontal px-1 border-b-2 border-b-[#e97902] ">
    <li><Link href="/" > <FaHome size={20} className="text-[#e97902]  " /> Home</Link></li>
        {/*About MGM*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/AboutMGM" className='flex flex-row ' > <FaInfoCircle size={20} className="mr-2 text-[#e97902] " />  About MGM  </Link></summary>
          <ul className="p-1  w-fit  z-10 background border-b-2 border-b-[#e97902] ">
            <li><Link href="/AboutMGM/AboutUs" > <FaInfoCircle className="text-[#e97902] " size={20} /> About MGM  </Link></li>
            <li><Link href="/AboutMGM/Mission&Vision" > <FaSun className='text-[#e97902] ' size={20} /> Mission & Vision  </Link></li>
            <li><Link href="/AboutMGM/MGMAdministration"> <FaPersonBooth className='text-[#e97902] ' size={20} />  Administration</Link></li>
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaGraduationCap size={20} className="mr-2 text-[#e97902] " /> E-Learning </button></summary>
          <ul className="p-1  z-10 background border-b-2 border-b-[#e97902] ">
          <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaPersonBooth size={20} className="mr-2 text-[#e97902] "  /> Portals</button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/studentPortal/auth" > <FaPersonBooth size={20} className="text-[#e97902] " /> Student portal</Link></li>
            <li><Link href="/academics/instructorPortal/auth" > <FaPersonBooth size={20} className="text-[#e97902] " /> Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal"> <FaPersonBooth size={20} className="text-[#e97902] " /> Admin portal</Link></li>
          </ul>
        </details>
      </li>
      {/*href="/academics/Courses"*/}
            <li><Link href="/academics/Courses/remodelledGrid" className='flex flex-row' > <FaGraduationCap size={20} className="mr-2 text-[#e97902] " /> Available Courses </Link></li>
            <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" className='flex flex-row' > <FaFolder size={20} className="mr-2 text-[#e97902] "  /> Apply</Link></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/studentApplication" > <FaFile size={20} className='text-[#e97902] ' /> student application</Link></li>
            <li><Link href="/academics/InstructorApplication" > <FaFile size={20} className='text-[#e97902] ' /> Instructor application </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal"> <FaInfoCircle size={20} className="text-[#e97902]" /> FAQ</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0} >
        <details>
          <summary><Link href="/contribute" className='flex flex-row  ' > <FaHandshake size={20} className="mr-2 text-[#e97902] " /> Contribute</Link></summary>
          <ul className="p-1 background border-b-2 border-b-[#e97902] ">
            <li><Link href="https://github.com" > <FaGithub size={20} className='text-[#e97902] '  /> Github</Link></li>
            <li><Link href="http://localhost:3000" > <FaMoneyBill size={20} className='text-[#e97902] ' /> Donate </Link></li>
            <li><Link href="http://localhost:3000"> <FaIntercom size={20} className='text-[#e97902] ' /> Social Media</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className='mr-1  ' >
    <FaFemale size={30} />
         
  </div>
  </div>
  
</div>
  )
}

export default Navbar