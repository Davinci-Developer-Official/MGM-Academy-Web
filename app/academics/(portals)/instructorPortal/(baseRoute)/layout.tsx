"use client"
import DrawerInstructor from "@/app/components/DrawerInstructor"
import SideBar from "./SideBar"
import { useState } from "react"
import placeholder from "@/public/categories/health-studies-f0bmY3nrL0NMvN5DhZLr2K6zeCX6py.jpg"
import Image from "next/image"
import Link from "next/link"

export default function NewLayout({ children }:{children:React.ReactNode}) {
  //const[userStatus,setUserStatus]=useState(true);
  const[openDrawer,setOpenDrawer]=useState(false)

  return (
    <div className="flex flex-row    h-screen w-full   " style={{
      msOverflowStyle:'none',
      overflow:'hidden'
     }} >
       <div className="flex flex-col  " >
        <div className="flex flex-col p-1 ml-2 " >
          <div className="w-[60px] h-[60px] rounded-full cursor-pointer " onClick={(e:any)=>{
            e.preventDefault();
            setOpenDrawer(true);
          }} onDoubleClick={(e:any)=>{
            e.preventDefault();
            setOpenDrawer(false);
          }} >
            <Image src={placeholder} alt="user image" className="w-full h-full object-fit rounded-full" />
          </div>
          {openDrawer&&<div className="h-[170px] rounded-md mt-1 w-[200px] bg-gray-100 p-1 " >
            <Link href="/academics/instructorPortal/Profile" className="btn w-[98%] mx-auto  " >profile</Link>
            <Link href="#" className="btn w-[98%] mx-auto mt-1  " >settings</Link>
            <Link href='/academics/signin' className="btn w-[98%] mx-auto mt-1 " >logout</Link>
            
            </div>}
        </div>
        <SideBar/></div>
       <main className="w-full  bg-gray-100 dark:bg-gray-800  ">
       {children}
         
         
       </main>
         
     </div>
  )
}