'use client'
import Link from 'next/link'
import React from 'react'
//import { useColorTheme } from '@/hooks/useColorTheme' 
import ChangeTheme from "./ChangeTheme"
import DarkModeButton from './DarkModeButton'
import { FaFemale, FaGraduationCap } from 'react-icons/fa'

function Navbar() {
    //const [colorTheme] = useColorTheme();



  return (
    <div className="navbar bg-[#2d545e]  text-[#e1b382] "  >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-[#2d545e]  text-[#e1b382] ">
        <li><Link href="/" >About Us</Link></li>
        <li>
          <Link href="/academics" >Academics</Link>
          <ul className="p-2  bg-[#2d545e]  text-[#e1b382] ">
            <li><Link href="/academics/studentPortal" >Student portal</Link></li>
            <li><Link href="/academics/instructorPortal" >Tutor Portal </Link></li>
            <li><Link href="/academics/adminPortal">Admin portal</Link></li>
          </ul>
        </li>
        <li><Link href="/founders" >Our Founders</Link></li>
        <li><Link href="/contribute">Contribute</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white "> MGM Institute </a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/" >About Us</Link></li>
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Academics</Link></summary>
          <ul className="p-2  border border-[#e1b382]  bg-[#2d545e]    ">
            <li><Link href="/academics/studentPortal" >Student portal</Link></li>
            <li><Link href="/academics/instructorPortal" >Tutor Portal </Link></li>
            <li><Link href="/academics/adminPortal">Admin portal</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href="/founders" >Our Founders</Link></li>
      <li><Link href="/contribute">Contribute</Link></li>
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