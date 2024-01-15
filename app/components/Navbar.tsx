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
        <li><Link href="/" >Home</Link></li>
        {/*About MGM*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >About MGM </Link></summary>
          <ul className="p-1  w-fit  ">
            <li><Link href="/AboutMGM/AboutUs" >About Us</Link></li>
            <li><Link href="/" >Mission & Vision  </Link></li>
            <li><Link href="/">MGM Administration</Link></li>
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Academics</Link></summary>
          <ul className="p-1    ">
          <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Portals</Link></summary>
          <ul className="p-1      ">
            <li><Link href="/academics/studentPortal/auth" >Student portal</Link></li>
            <li><Link href="/academics/instructorPortal/auth" >Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal">Admin portal</Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/studentPortal/auth" >MGM Courses</Link></li>
            <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Apply</Link></summary>
          <ul className="p-1  ">
            <li><Link href="/academics/studentPortal/auth" >student application</Link></li>
            <li><Link href="/academics/instructorPortal/auth" >Instructor application </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal">FAQ</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Contribute</Link></summary>
          <ul className="p-1    ">
            <li><Link href="/academics/studentPortal/auth" >Github</Link></li>
            <li><Link href="/academics/instructorPortal/auth" >Donate </Link></li>
            <li><Link href="/academics/adminPortal">Social Media</Link></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white "> MGM Institute </a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/" >Home</Link></li>
      {/*About MGM*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >About MGM </Link></summary>
          <ul className="p-1  w-fit  ">
            <li><Link href="/AboutMGM/AboutUs" >About Us</Link></li>
            <li><Link href="/" >Mission & Vision  </Link></li>
            <li><Link href="/">MGM Administration</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Academics</Link></summary>
          <ul className="p-1    ">
          <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Portals</Link></summary>
          <ul className="p-1    ">
            <li><Link href="/academics/studentPortal/auth" >Student portal</Link></li>
            <li><Link href="/academics/instructorPortal/auth" >Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal">Admin portal</Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/studentPortal/auth" >MGM Courses</Link></li>
            <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Apply</Link></summary>
          <ul className="p-1   ">
            <li><Link href="/academics/studentPortal/auth" >student application</Link></li>
            <li><Link href="/academics/instructorPortal/auth" >Instructor application </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal">FAQ</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0}>
        <details>
          <summary><Link href="/academics" >Contribute</Link></summary>
          <ul className="p-1 ">
            <li><Link href="/academics/studentPortal/auth" >Github</Link></li>
            <li><Link href="/academics/instructorPortal/auth" >Donate </Link></li>
            <li><Link href="/academics/adminPortal">Social Media</Link></li>
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