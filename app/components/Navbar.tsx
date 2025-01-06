'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaHome, FaSchool, FaMoon, FaSun, FaUser } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { useTheme } from '../themeContext';
import logo from "@/public/logo/icon.png"
import Image from 'next/image';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [user, setUser] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [aboutUsMenuOpen, setAboutUsMenuOpen] = useState(false);

  useEffect(() => {
    const student = Cookies.get('s-user') || '';
    const instructor = Cookies.get('i-user');

    if (student) {
      setLoggedIn(true);
      setUserType('student');
      setUser(student);
    } else if (instructor) {
      setLoggedIn(true);
      setUserType('instructor');
      setUser(JSON.parse(instructor));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('s-user');
    Cookies.remove('i-user');
    setLoggedIn(false);
    setUser('');
    setUserType('');
    setProfileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#2d545e] dark:bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex flex-row justify-between items-center px-4 py-2">
        {/* Logo Section */}
        <div className="flex flex-row  h-fit  w-fit p-1   ">
          <div className='h-[50px] w-[70px] rounded-full bg-gray-100 ' ><Image src={logo} alt="" className='w-full h-full object-fit ' /></div>
          <p className='text-lg font-bold pt-3 pl-1 '> Empower yourself </p>
        </div>

        {/* Bars Button for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-[#e97902] focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col lg:flex-row w-full lg:w-auto items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-8 absolute lg:relative bg-[#2d545e] dark:bg-gray-800 lg:bg-transparent ${
            menuOpen ? 'top-12 left-0 p-4 z-10 shadow-lg' : 'hidden lg:flex'
          }`}
        >
          <li>
            <Link href="/" className="flex items-center hover:text-[#e97902]">
              <FaHome size={20} className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/academics/Courses" className="flex items-center hover:text-[#e97902]">
              <FaSchool size={20} className="mr-2" />
              Offered Courses
            </Link>
          </li>
          <li className="relative">
            <span
              className="flex items-center cursor-pointer hover:text-[#e97902]"
              onClick={() => setAboutUsMenuOpen(!aboutUsMenuOpen)}
            >
              About Us
            </span>
            {aboutUsMenuOpen && (
              <div className="absolute bg-[#2d545e] text-orange-600 dark:bg-gray-800 shadow-lg rounded-lg py-2 mt-2 w-48">
                <Link href="/AboutMGM" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  About Us Page
                </Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Our Team
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Contact Us
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-white hover:text-[#e97902] focus:outline-none mr-4"
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        {/* Profile Section */}
        <div className="relative">
          <button
            className="flex items-center hover:text-[#e97902] focus:outline-none"
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          >
            {user ? (
              <>
                <img
                  src={'/profile-pic.jpg'} // Replace with dynamic user profile picture URL
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-white mr-2"
                />
                <span className="hidden lg:block text-sm">
                  Welcome, {JSON.parse(user)}
                </span>
              </>
            ) : (
              <FaUser size={24} />
            )}
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#2d545e] text-orange-600 dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
              {loggedIn ? (
                <>
                  <Link href={userType === 'student' ? "/academics/studentPortal/Profile":"/academics/instructorPortal/Profile"} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Profile Settings
                  </Link>
                  <Link
                    href={userType === 'student' ? '/academics/studentPortal/Dashboard' : '/academics/instructorPortal/Dashboard'}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {userType === 'student' ? 'Student Portal' : 'Instructor Portal'}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/academics/signin" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Sign In
                  </Link>
                  <Link href="/academics/apply" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
