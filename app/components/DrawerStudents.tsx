"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ba from "../../public/profile/user.png"
import Image from 'next/image';
import { FaBars, FaBook, FaCaretRight, FaChevronCircleRight, FaCog, FaEllipsisV, FaFemale, FaGraduationCap, FaHome, FaSave, FaWrench } from 'react-icons/fa';
import DarkModeButton from './DarkModeButton';
import CartBtn from './CartBtn';
import ProfileBtn from './ProfileBtn';

const DrawerStudent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(''); // Initialize with the default selected item

  // Define a function to handle item selection
  const handleItemClick = (itemName:any) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="drawer lg:drawer-open lg:w-[20%]  ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-left justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden fixed top-16 ml-2   text-[#e1b382]  "> <FaBars size={20} /> </label>
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu  p-2 w-60 min-h-full  text-white  h-screen flex flex-col overflow-y-scroll "  style={{
      backgroundColor:"#2d545e"
    }}  >
      {/* Sidebar content here */}
      <a className=" w-[90%] h-fit  text-white justify-center pt-[10px]  flex flex-row normal-case text-xl mt-2  font-bold "> <FaFemale size={30} /> MGM Institute</a>
      
      {/*className={` rounded-xl h-10 pt-1 ${selectedItem === "Dashboard" && "bg-white text-black" }`}*/}
      <li style={{
        marginTop:"20%",
        marginBottom:"5%"
      }}  ><Link href="/academics/studentPortal/Dashboard" onClick={() => handleItemClick('Dashboard')} className={` rounded-xl h-10 pt-1 text-xl  ${selectedItem === "Dashboard" && " border border-[#e1b382]" }`} style={{
        color:" #e1b382"
      }} ><FaHome size={30} /> Dashboard </Link></li>
      <li style={{
        marginTop:"5%",
        marginBottom:"5%"
      }}  ><Link href="/academics/studentPortal/Assignments" onClick={() => handleItemClick('Assignments')} className={` rounded-xl h-10 pt-1 text-xl  ${selectedItem === "Assignments" && "border border-[#e1b382]" }`}  style={{
        color:" #e1b382"
      }} ><FaBook size={25} /> Assignments</Link></li>
      <li style={{
        marginTop:"5%",
        marginBottom:"10%"
      }}  ><Link href="/academics/studentPortal/courses" onClick={() => handleItemClick('Courses')} className={` rounded-xl h-10 pt-1 text-xl  ${selectedItem === "Courses" && "border border-[#e1b382]" }`}  style={{
        color:" #e1b382"
      }} ><FaGraduationCap size={30} /> Courses</Link></li>
     {/* <li style={{
        marginTop:"5%"
      }}  ><Link href="" onClick={() => handleItemClick('Settings')} className='text-base' ><FaWrench size={20} /> Settings</Link></li>
      */}

  
    <CartBtn/>
    <ProfileBtn/>
    </ul>
    
    
  
  </div>
</div>
  );
};

export default DrawerStudent;
