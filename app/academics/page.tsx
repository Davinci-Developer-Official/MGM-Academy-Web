import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import StudentPortalGuide from '@/app/components/StudentPortalGuide'
import React from 'react'

function page() {
  return (
    <div className='bg-[#e1b382] text-[#2d545e]' >
    <Navbar/>
    <StudentPortalGuide/>
    <Footer/>
    </div>
  )
}

export default page