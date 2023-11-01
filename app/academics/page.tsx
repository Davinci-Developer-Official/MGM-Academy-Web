import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import StudentPortalGuide from '@/app/components/StudentPortalGuide'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <StudentPortalGuide/>
    <Footer/>
    </>
  )
}

export default page