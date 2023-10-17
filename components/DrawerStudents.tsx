"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ba from "../public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import Image from 'next/image';
import { FaBars, FaBook, FaCaretRight, FaChevronCircleRight, FaCog, FaEllipsisV, FaGraduationCap, FaHome, FaSave, FaWrench } from 'react-icons/fa';
import DarkModeButton from './DarkModeButton';
import CartBtn from './CartBtn';
import ProfileBtn from './ProfileBtn';

const DrawerStudent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Initialize with the default selected item

  // Define a function to handle item selection
  const handleItemClick = (itemName:any) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="drawer lg:drawer-open lg:w-1/5  ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-left justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden fixed mt-40 ml-2 text-green-600 "> <FaChevronCircleRight size={20} /> </label>
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu  p-4 w-80 min-h-full text-white bg-green-600"  >
      {/* Sidebar content here */}
      <a className="btn btn-ghost normal-case text-xl mt-2 "> MGM Institute </a>
      <DarkModeButton/>
      
      <li style={{
        marginTop:"20%"
      }} className={` rounded-xl h-10 pt-1 ${selectedItem === "Dashboard" && "bg-white text-black" }`} ><Link href="/academics/studentPortal/Dashboard" onClick={() => handleItemClick('Dashboard')} className='text-base' ><FaHome size={20} /> Dashboard </Link></li>
      <li style={{
        marginTop:"5%"
      }} className={` rounded-xl h-10 pt-1 ${selectedItem === "Assignments" && "bg-white text-black" }`} ><Link href="/academics/studentPortal/Assignments" onClick={() => handleItemClick('Assignments')} className='text-base' ><FaBook size={20} /> Assignments</Link></li>
      <li style={{
        marginTop:"5%"
      }} className={` rounded-xl h-10 pt-1 ${selectedItem === "Courses" && "bg-white text-black" }`} ><Link href="" onClick={() => handleItemClick('Courses')} className='text-base' ><FaGraduationCap size={20} /> Courses</Link></li>
      <li style={{
        marginTop:"5%"
      }} className={` rounded-xl h-10 pt-1 ${selectedItem === "Settings" && "bg-white text-black" }`} ><Link href="" onClick={() => handleItemClick('Settings')} className='text-base' ><FaWrench size={20} /> Settings</Link></li>
      

  
    <CartBtn/>
    <ProfileBtn/>
    </ul>
    
    
  
  </div>
</div>
  );
};

export default DrawerStudent;
