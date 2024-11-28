'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
//import { useColorTheme } from '@/hooks/useColorTheme' 
import ChangeTheme from "./ChangeTheme"
import DarkModeButton from './DarkModeButton'
import { FaBookOpen, FaCaretDown, FaCaretUp, FaChalkboardTeacher, FaEdit, FaFemale, FaFile, FaFolder, FaGithub, FaGraduationCap, FaHandshake, FaHome, FaInfo, FaInfoCircle, FaIntercom, FaMoneyBill, FaPen, FaPersonBooth, FaSchool, FaSignInAlt, FaSignOutAlt, FaSun, FaTerminal, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import Cookies from 'js-cookie'
import Image from 'next/image'
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg'


function Navbar() {
    //const [colorTheme] = useColorTheme();
    const[loggedIn,setLoggedIn]=useState(true) // false ie fetch from cookies
    const[typE,setTypE]=useState('student')
    const[user,setUser]=useState(null)
    const[userOptions,setUserOptions]=useState(false)
    useEffect(()=>{
      async function userStatus(){
        await Cookies.set('s-user','josh')
        await Cookies.set('i-user','miriam')
        const student = await Cookies.get("s-user")
        const instructor =await Cookies.get("i-user")
        //setUser(JSON.stringify(student))
        const students = JSON.stringify(student)
        const instructors = JSON.stringify(instructor)
        //alert(student)
        if(students){
          //alert('working 1')
          setLoggedIn(true)
          setTypE("student")
          setUser(JSON.parse(students))
          //alert(user)
          //alert(typE)
        }else if(instructors){
          setLoggedIn(true)
          setTypE("instructor")
          setUser(JSON.parse(instructors))
          //alert(user)
          //alert(typE)
        }else if(students&&instructors){
          setLoggedIn(true)
          setTypE("haloo")
          //alert(typE)
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
          <li><Link href="/AboutMGM/Mission" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Mission </Link></li>
          <li><Link href="/AboutMGM/Vision" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Vision </Link></li>
          <li><Link href="/AboutMGM/Initiative" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Initiative </Link></li>
          <li><Link href="/AboutMGM/Direction" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Direction </Link></li>
            <li><Link href="/AboutMGM/Impact" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Impact </Link></li>
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
          <li><Link href="/AboutMGM/Mission" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Mission </Link></li>
          <li><Link href="/AboutMGM/Vision" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Vision </Link></li>
          <li><Link href="/AboutMGM/Initiative" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Initiative </Link></li>
          <li><Link href="/AboutMGM/Direction" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Direction </Link></li>
            <li><Link href="/AboutMGM/Impact" > <FaInfoCircle size={20} className='text-[#e97902] ' />  Impact </Link></li>
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
                <div className='mr-2 bg-red-400 rounded-md w-fit h-fit ' >
                  
                  {!loggedIn?<p>sign in / sign up</p>:<div className='flex flex-row p-1 justify-between ' >
                    <span className='w-[50px] h-[40px] my-auto rounded-full mr-1  ' >
                      <Image src={placeholder} alt='' className='w-full h-full object-fit rounded-full '  />
                    </span>
                    <p className='p-[.5px] w-[70%] flex flex-col  ' >{typE=="student"? <div>
                      <p className='text-center text-sm p-1 text-sm h-[30px] w-full  ' >{user}</p>
                      <p className='text-xs text-center bg-yellow-300 p-[.8px]  ' >student</p>
                    </div> :<div>
                      <p>{user}</p>
                      </div>}</p>
                      <button onClick={()=>{
                        if(userOptions==false){
                          setUserOptions(true)
                        }else{
                          setUserOptions(false)
                        }
                      }} >{userOptions?<FaCaretUp/>:<FaCaretDown/>}</button>
                    </div>}
                    {userOptions&&(
                      <div className='absolute rounded-md flex flex-col mt-2 border-red-400 border-[1px]  bg-white border-b-red-400 border-b-[5px] h-[120px] w-[150px] z-100 p-1  ' style={{right:'10px'}} >
                      <Link href='/academics/studentPortal/Dashboard' className=' bg-red-200 mt-1 w-[90%] mx-auto rounded-md cursor-pointer p-1 text-[14px] ' >E-Learning portal</Link>
                      {/*<button className=' bg-red-200 mt-1 w-[90%] mx-auto rounded-md cursor-pointer p-1 text-[15px] ' >{typE=="student"? 'student portal' : 'instructor portal' }</button>*/}
                      <button className=' bg-red-200 mt-1 w-[90%] mx-auto rounded-md cursor-pointer p-1 text-[15px] ' >switch accounts</button>
                      <div className='flex flex-row bg-red-100 mt-2 h-full ' >
                        <button className=' mt-[8px] ml-4 hover:bg-red-300 rounded-full cursor-pointer hover:tooltip hover:tooltip-open hover:tooltip-bottom  ' data-tip={" log out "}  ><FaSignOutAlt  /></button>
                        <Link href='/academics/studentPortal/Dashboard' className=' mt-[8px] ml-4 hover:bg-red-300 rounded-full cursor-pointer hover:tooltip hover:tooltip-open hover:tooltip-bottom  ' data-tip={"E-learning Dashboard "}  ><FaGraduationCap  /></Link>
                      </div>
                    </div>
                    )}
                </div>
                </div>
  
</div>
  )
}

export default Navbar

