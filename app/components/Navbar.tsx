'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaHome, FaSchool, FaMoon, FaSun, FaUser, FaFacebookMessenger } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { useTheme } from '../themeContext';
import logo from "@/public/logo/icon.png";
import Image from 'next/image';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [user, setUser] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [aboutUsMenuOpen, setAboutUsMenuOpen] = useState(false);
  const [cacheLock,setCacheLock]=useState(false);


  useEffect(() => {
    const student = Cookies.get('s-user');
    const instructor = Cookies.get('i-user');
    if(userType=="student" || userType=="instructor"){
      setCacheLock(true)
      setLoggedIn(true)
      alert("logged in");
    }
    if (student) {
      //setLoggedIn(true);
      setUserType('student');
      setUser(student);
    } 
     if (instructor) {
      //setLoggedIn(true);
      setUserType('instructor');
      try {
        setUser(JSON.parse(instructor).name || 'Instructor');
      } catch {
        setUser('Instructor');
      }
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
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className='h-12 w-12 rounded-full bg-gray-100 overflow-hidden'>
            <Image src={logo} alt="Logo" className='w-full h-full object-cover' />
          </div>
          <p className='text-lg font-bold'>Empower Yourself</p>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white hover:text-[#e97902]">
          <FaBars size={24} />
        </button>

        {/* Navigation Links */}
        <ul className={`lg:flex space-x-6 ${menuOpen ? 'block' : 'hidden lg:flex'}`}>
          <li><Link href="/" className="hover:text-[#e97902] flex items-center"><FaHome className="mr-2" /> Home</Link></li>
          {!loggedIn && <li><Link href="/academics/Courses" className="hover:text-[#e97902] flex items-center"><FaSchool className="mr-2" /> Offered Courses</Link></li>}
          <li className="relative">
            <span className="cursor-pointer hover:text-[#e97902]" onClick={() => setAboutUsMenuOpen(!aboutUsMenuOpen)}>About Us</span>
            {aboutUsMenuOpen && (
              <div className="absolute bg-[#2d545e] dark:bg-gray-800 text-orange-600 shadow-md rounded-md py-2 w-48 mt-2">
                <Link href="/AboutMGM" className="block px-4 py-2 hover:bg-gray-700">About Us</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-gray-700">Our Team</Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact Us</Link>
              </div>
            )}
          </li>
        </ul>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="text-white hover:text-[#e97902] mr-4">
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        {/* Notifications */}
        {loggedIn && (
          <div className='relative flex items-center cursor-pointer'>
            <FaFacebookMessenger size={20} className='mr-2' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2'>4</span>
          </div>
        )}

        {/* Profile Section */}
        <div className="relative">
          <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="flex items-center hover:text-[#e97902]">
            {loggedIn ? (
              <>
                <div className="w-8 h-8 rounded-full border border-white bg-gray-300 flex items-center justify-center text-sm">
                  {user.charAt(0).toUpperCase()}
                </div>
                <span className="ml-2 hidden lg:block text-sm">Welcome, {user}</span>
              </>
            ) : (
              <FaUser size={24} />
            )}
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#2d545e] dark:bg-gray-800 text-orange-600 shadow-md rounded-md py-2">
              {loggedIn ? (
                <>
                  <Link href={userType === 'student' ? "/academics/studentPortal/Profile" : "/academics/instructorPortal/Profile"} className="block px-4 py-2 hover:bg-gray-700">Profile Settings</Link>
                  <Link href={userType === 'student' ? "/academics/studentPortal/Dashboard" : "/academics/instructorPortal/Dashboard"} className="block px-4 py-2 hover:bg-gray-700">{userType === 'student' ? 'Student Portal' : 'Instructor Portal'}</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-700">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/academics/signin"  className="block px-4 py-2 hover:bg-gray-700">Sign In</Link>
                  <Link href="/academics/apply" className="block px-4 py-2 hover:bg-gray-700">Sign Up</Link>
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
 