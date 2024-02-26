import HomeInfo from '@/app/components/Home'
//import AboutMGMSection from '@/components/AboutMGMSection'
import DarkModeButton from '@/app/components/DarkModeButton'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
//import Vision from '@/components/Vision'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div style={{
    width:"100%",
    
  }} className=' background  h-screen  ' >
  <Navbar/>
  <HomeInfo/>
  <Footer/>
  
  
  </div>
  )
}
