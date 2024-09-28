'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
//import { useColorTheme } from '@/hooks/useColorTheme' 
import ChangeTheme from "./ChangeTheme"
import DarkModeButton from './DarkModeButton'
import { FaBookOpen, FaChalkboardTeacher, FaEdit, FaFemale, FaFile, FaFolder, FaGithub, FaGraduationCap, FaHandshake, FaHome, FaInfo, FaInfoCircle, FaIntercom, FaMoneyBill, FaPen, FaPersonBooth, FaSchool, FaSignInAlt, FaSun, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import Cookies from 'js-cookie'
import Image from 'next/image'

function Navbar() {
    //const [colorTheme] = useColorTheme();
    const[loggedIn,setLoggedIn]=useState(false) // false ie fetch from cookies
    useEffect(()=>{
      function userStatus(){
        const cookie = Cookies.get("user")
        if(cookie?.length!==0){
          //alert('working 1')
          setLoggedIn(true)
        }else{
          //alert('not working')
          setLoggedIn(false)
        }
      }
      userStatus()
    },[])

  return (
  <div className="navbar  "  >{/*bg-[#2d545e]  text-[#e1b382]*/}
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
          <summary><button className='flex flex-row ' > <FaInfoCircle size={20} className="mr-2 text-[#e97902] " />  About MGM  </button></summary>
          <ul className="p-1  w-fit border-b-2 border-b-[#e97902] ">
            <li><Link href="/AboutMGM" > <FaInfoCircle size={20} className='text-[#e97902] ' />  info </Link></li>
            {/*<li><Link href="/AboutMGM/Mission&Vision" > <FaSun size={20} className='text-[#e97902] ' /> Mission & Vision  </Link></li>
            <li><Link href="/AboutMGM/MGMAdministration"> <FaPersonBooth size={20} className='text-[#e97902] ' />  Administration</Link></li>*/}
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaSchool size={20} className="mr-2 text-[#e97902] " /> E-Learning </button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
          <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaUserCircle size={20} className="mr-2 text-[#e97902] "  /> Student/Instructor </button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/signin" > <FaSignInAlt size={20} className='text-[#e97902] ' /> sign in</Link></li>
            {/*<li><Link href="/academics/instructorPortal/auth" > <FaChalkboardTeacher size={20} className='text-[#e97902] ' /> Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal"> <FaPersonBooth size={20} className='text-[#e97902] ' /> Admin portal</Link></li>*/}
          </ul>
        </details>
      </li>
      {/* href="/academics/Courses"*/}
            <li><Link href="/academics/Courses" className='flex flex-row' > <FaGraduationCap size={30} className="mr-2 text-[#e97902] " /> Offered Courses </Link></li>
            <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaFolder size={20} className="mr-2 text-[#e97902] "  /> Apply</button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/apply" > <FaFile size={20} className='text-[#e97902]' /> create account </Link></li>
            <li><Link href="/academics" className='flex flex-row' > <FaInfoCircle size={20} className="mr-2 text-[#e97902] "  /> info </Link></li>
          </ul>
        </details>
      </li>
            <li><Link href="/academics/adminPortal"> <FaUserCircle size={20} className='text-[#e97902] ' /> Admin</Link></li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0} >
        <details>
          <summary><Link href="/contribute" className='flex flex-row' > <FaGithub size={20} className="mr-2 text-[#e97902] " /> Developer</Link></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="https://github.com" > <FaFile size={20} className='text-[#e97902] ' /> Docs</Link></li>
            {/*<li><Link href="http://localhost:3000" > <FaMoneyBill size={20} className='text-[#e97902] ' /> Donate </Link></li>
            <li><Link href="http://localhost:3000"> <FaIntercom size={20} className='text-[#e97902] ' /> Social Media</Link></li>*/}
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <div className=" font-mono font-bold normal-case text-lg text-[#0f2027] border-b-[#d0b49f] border-b-[3px] ml-4 p-2 "> MGM Institute  </div>
  </div>
  <div className="navbar-center hidden lg:flex border-b-2 border-b-[#e97902] ">
    <ul className="menu menu-horizontal px-1 border-b-2 border-b-[#e97902] ">
    <li><Link href="/" > <FaHome size={20} className="text-[#e97902]  " /> Home</Link></li>
        {/*About MGM*/}
      <li >
        <details>
          <summary><button className='flex flex-row ' > <FaInfoCircle size={20} className="mr-2 text-[#e97902] " />  About MGM  </button></summary>
          <ul className="p-1  w-fit  z-10 background border-b-2 border-b-[#e97902] ">
            <li><Link href="/AboutMGM" > <FaInfoCircle className="text-[#e97902] " size={20} /> info  </Link></li>
           {/* <li><Link href="/AboutMGM/Mission&Vision" > <FaSun className='text-[#e97902] ' size={20} /> Mission & Vision  </Link></li>
            <li><Link href="/AboutMGM/MGMAdministration"> <FaPersonBooth className='text-[#e97902] ' size={20} />  Administration</Link></li>*/}
          </ul>
        </details>
      </li>
        {/*Academics*/}
      <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaSchool size={20} className="mr-2 text-[#e97902] " /> E-Learning </button></summary>
          <ul className="p-1  z-10 background border-b-2 border-b-[#e97902] ">
          <li tabIndex={0}>
        <details>
          <summary><button className='flex flex-row' > <FaUserCircle size={20} className="mr-2 text-[#e97902] "  /> Student/Instructor </button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/signin" > <FaSignInAlt size={20} className="text-[#e97902] " /> sign in </Link></li>
            {/*<li><Link href="/academics/signin" > <FaSignInAlt size={20} className="text-[#e97902] " /> sign up </Link></li> */}

            {/*<li><Link href="/academics/instructorPortal/auth" > <FaChalkboardTeacher size={20} className="text-[#e97902] " /> Instructor Portal </Link></li>
            <li><Link href="/academics/adminPortal"> <FaPersonBooth size={20} className="text-[#e97902] " /> Admin portal</Link></li>*/}
          </ul>
        </details>
      </li>
      <li><Link href="/academics/adminPortal"> <FaUserCircle size={20} className="text-[#e97902]" /> Admin Sign In </Link></li>

      {/*href="/academics/Courses"*/}
            <li><Link href="/academics/Courses" className='flex flex-row' > <FaGraduationCap size={30} className="mr-2 text-[#e97902] " /> Offerd Courses </Link></li>
            <li tabIndex={0}>
        {/*
        <details>
          <summary><button className='flex flex-row' > <FaFolder size={20} className="mr-2 text-[#e97902] "  /> Apply</button></summary>
          <ul className="p-1 border-b-2 border-b-[#e97902] ">
            <li><Link href="/academics/apply" > <FaFile size={20} className='text-[#e97902] ' /> create account</Link></li>
            <li><Link href="/academics" > <FaInfoCircle size={20} className='text-[#e97902] ' /> info </Link></li>
          </ul>
        </details>
        */}
      </li>
          </ul>
        </details>
      </li>
     
      {/*Contribute*/}
      <li tabIndex={0} >
        <details>
          <summary><Link href="/contribute" className='flex flex-row  ' > <FaGithub size={20} className="mr-2 text-[#e97902] " /> Developer</Link></summary>
          <ul className="p-1 background border-b-2 border-b-[#e97902] ">
            <li><Link href="https://github.com" > <FaFile size={20} className='text-[#e97902] '  /> Docs</Link></li>
            {/*<li><Link href="http://localhost:3000" > <FaMoneyBill size={20} className='text-[#e97902] ' /> Donate </Link></li>
            <li><Link href="http://localhost:3000"> <FaIntercom size={20} className='text-[#e97902] ' /> Social Media</Link></li>*/}
          </ul>
        </details>
      </li>
    </ul>
  </div>
  

            <div className="navbar-end">
                <div className="dropdown z-10 ml-4 relative">
                    <label tabIndex={0} className={loggedIn?`btn btn-ghost btn-circle avatar mr-10`:`btn btn-ghost btn-circle avatar tooltip tooltip-open tooltip-bottom mr-10`} data-tip={!loggedIn?"sign in /sign up ":""}>
                        <div className="w-full h-full bg-white rounded-full">
                            {loggedIn?<Image src="https://placeimg.com/192/192/people" alt="User Avatar" className="w-full h-full object-cover rounded-full" />:<div className='bg-white  ' >.</div> }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 border-b-2 border-b-[#e97902] absolute right-0 top-full">
                        {loggedIn ? (
                            <>
                                <li>
                            <Link href='/academics/studentPortal/Profile' className="justify-between">
                              profile
                              <span className="badge"><FaUser/></span>
                            </Link>
                          </li>
                          <li><a>Settings</a></li>
                          <li><Link href='/academics/signin' >Logout</Link></li>
                            </>
                        ) : (
                        <>
                          <li><Link href="/academics/signin"><FaSignInAlt className='text-[#e97902]' size={20} /> Sign In</Link></li>
                          <li><Link href="/academics/apply"><FaUserCircle className='text-[#e97902]' size={20} /> Sign Up</Link></li>
                        </>
                        )}
                    </ul>
                    {/*<li>
                            <Link href='/academics/signin' className="justify-between">
                              sign in
                              <span className="badge"><FaUser/></span>
                            </Link>
                          </li>
                          <li><a>Settings</a></li>
                          <li><Link href='/academics/signin' >Logout</Link></li> */}
                </div>
                </div>
  
</div>
  )
}

export default Navbar