import HomeInfo from '@/app/components/Home'
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
    
  }} className='  text-[#e1b382]  h-screen ' >
 
  <Navbar/>
  <HomeInfo/>
  <Footer/>
  
  
  </div>
  )
}
