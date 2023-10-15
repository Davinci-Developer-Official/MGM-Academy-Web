import AboutDashBoard from '@/components/AboutDashBoard'
//import AboutMGMSection from '@/components/AboutMGMSection'
import DarkModeButton from '@/components/DarkModeButton'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
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
