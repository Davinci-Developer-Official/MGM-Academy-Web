import HomeInfo from '@/app/components/Home'
//import AboutMGMSection from '@/components/AboutMGMSection'
import DarkModeButton from '@/app/components/DarkModeButton'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
//import Vision from '@/components/Vision'
import Image from 'next/image'
import Link from 'next/link'
import Home from "./Home"

export default function Page() {
  return (
  <div  className=' background w-full ' >
  <Navbar/>
  <Home/>
  <Footer/>
  
  
  </div>
  )
}
