"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArchive, FaBookOpen, FaChalkboardTeacher, FaCompress, FaExpand, FaGraduationCap, FaHome, FaPeopleCarry, FaPersonBooth, FaPiggyBank } from 'react-icons/fa';

function SideBar() {
    const[bar,setBar]=useState<boolean>(true);
    const[barExpanded,setBarExpanded]=useState<boolean>(false)
  return (
    <div className='flex flex-col p-2'>
      {bar&&<div className='w-[70px] flex flex-col p-2'>
        <Link href='/academics/adminPortal' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer p-2 tooltip ' data-tip={'Home'}><FaHome size={25} /></Link>
        <Link href='/academics/adminPortal/students' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer p-2 tooltip ' data-tip={'students'}><FaGraduationCap size={25} /></Link>
        <Link href='/academics/adminPortal/courses' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer p-2 tooltip ' data-tip={'courses'}><FaBookOpen size={25} /></Link>
        <Link href='/academics/adminPortal/instructors' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer p-2 tooltip ' data-tip={'Instructors'}><FaChalkboardTeacher size={25} /></Link>
        <Link href='/academics/adminPortal/payments' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer p-2 tooltip ' data-tip={'Payments'}><FaPiggyBank size={25} /></Link>
        <Link href='/academics/adminPortal/archive' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer p-2 tooltip ' data-tip={'Archived'}><FaArchive size={25} /></Link>
        
        <button  className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer    tooltip ' data-tip={'expand'} onClick={()=>{
            setBar(false);
            setBarExpanded(true)
            }}><FaExpand size={20}/></button>
        </div>}
      {barExpanded&&<div className='w-[200px] flex flex-col '>
        <Link href='/academics/adminPortal' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer'><FaHome size={25} /><p>Home</p></Link>
        <Link href='/academics/adminPortal/students' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer'><FaGraduationCap size={25} /><p>Students</p></Link>
        <Link href='/academics/adminPortal/courses' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer '><FaBookOpen size={25} /><p>Courses</p></Link>
        <Link href='/academics/adminPortal/instructors' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer '><FaChalkboardTeacher size={25} /><p>Instructors</p></Link>
        <Link href='/academics/adminPortal/payments' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer '><FaPiggyBank size={25} /><p>Payments</p></Link>
        <Link href='/academics/adminPortal/archive' className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer '><FaArchive size={25} /><p>Archived</p></Link>
        
        <button  className='btn btn-ghost hover:bg-green-400 mt-1 cursor-pointer   ' onClick={()=>{
            setBar(true);
            setBarExpanded(false);
            }}><FaCompress size={20}/><p className='lowercase p-1 '>minimize</p></button>
        </div>}
      
    </div>
  )
}

export default SideBar
