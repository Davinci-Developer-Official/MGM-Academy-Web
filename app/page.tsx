import AboutDashBoard from '@/app/components/AboutDashBoard'
//import AboutMGMSection from '@/components/AboutMGMSection'
import DarkModeButton from '@/app/components/DarkModeButton'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
//import Vision from '@/components/Vision'
import Image from 'next/image'

export default function Home() {
  return (
  <div style={{
    width:"100%",
  }} >
  <DarkModeButton/>
  <Navbar/>
  <AboutDashBoard/>
  <Footer/>
  
  
  </div>
  )
}
