'use client';
import React, { useEffect, useState } from 'react'
import placeholder from "@/public/profile/user.png"
import Image from 'next/image';

function ElearningStudentNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen(!isOpen);
  };
  const[spContent,showSPConctent]=useState(false)
  const[financeContent,showFinanceContent]=useState(false)
  const[academicContent,showAcademicContent]=useState(false)
  const[moreContent,showMoreContent]=useState(false)
  useEffect(()=>{},[spContent,financeContent,academicContent,moreContent,dropdownOpen,isOpen])
    return (
      <div className="navbar justify-between bg-white">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content mt-3  p-2 shadow bg-white z-10 text-2xl font-serif font-semibold rounded-box w-52"
              >
                <li><p>Home</p></li>
                <li><p>Dashboard</p></li>
                <li><p>My Courses</p></li>
                <li><p>Support</p></li>
                <li>
                  <button onClick={()=>{
                    showSPConctent(true)
                  }} >Student Portal</button>
                  {spContent&&<ul className="p-2">
                    <li><p>TimeTable</p></li>
                    <li>
                      <button onClick={()=>{
                        showFinanceContent(true)
                      }} >Finance</button>
                      {financeContent&&<ul className="p-2">
                        <li><a>Purchases</a></li>
                        <li><a>Offers/Discounts</a></li>
                        <li><p>Payment Plan</p></li>
                        <li><p>Payment Methods</p></li>
                      </ul>}
                    </li>
                    <li>
                      <button onClick={()=>{
                        showAcademicContent(true)
                      }} >Academic</button>
                      {academicContent&&<ul className="p-2">
                        <li><a>Units/Curriculum</a></li>
                        <li><a>ResultSlip/Transcripts</a></li>
                        <li><p>Passlist</p></li>
                      </ul>}
                    </li>
                  </ul>}
                </li>
                <li>
                  <button onClick={()=>{
                    showMoreContent(true)
                  }} >More</button>
                  {moreContent&&<ul className="p-2">
                    <li><p>Contact Us</p></li>
                    <li><p>FAQS</p></li>
                  </ul>}
                </li>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-xl lowercase">MGM e-learning</a>
        </div>
        <div className=" hidden lg:flex text-xl font-serif font-bold">
          <ul className="menu menu-horizontal px-1">
            <li><p>Home</p></li>
            <li><p>Dashboard</p></li>
            <li><p>My Courses</p></li>
            <li><p>Support</p></li>
            <li>
              <details>
                <summary>Student Portal</summary>
                <ul className="p-2 bg-white z-10 ">
                  <li><p>TimeTable</p></li>
                  <li>
                    <details>
                      <summary>Finance</summary>
                      <ul className="p-2">
                        <li><a>Purchases</a></li>
                        <li><a>Offers/Discounts</a></li>
                        <li><p>Payment Plan</p></li>
                        <li><p>Payment Methods</p></li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Academic</summary>
                      <ul className="p-2  ">
                        <li><a>Units/Curriculum</a></li>
                        <li><a>ResultSlip/Transcripts</a></li>
                        <li><p>Passlist</p></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 bg-white z-10 ">
                  <li><p>Contact Us</p></li>
                  <li><p>FAQS</p></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>

    <div className="dropdown dropdown-end">  
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
        onClick={toggleDropdown1}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown1();
          }
        }}
      >
        <div className="w-10 rounded-full">
          <Image src={placeholder} alt='avatar' />
        </div>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="mt-3 z-10 bg-red-400 p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      )}
    </div>
      </div>
    );
}

export default ElearningStudentNavbar