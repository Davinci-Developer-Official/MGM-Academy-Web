import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import StudentPortalGuide from '@/app/components/StudentPortalGuide'
import React from 'react'

function page() {
  return (
    <div className='text-[#e1b382] bg-gradient-to-r from-[#2d545e]' >
    <Navbar/>
    <StudentPortalGuide/>
    <Footer/>
    </div>
  )
}

export default page