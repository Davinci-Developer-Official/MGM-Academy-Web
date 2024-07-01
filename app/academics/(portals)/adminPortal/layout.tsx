import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { ReactNode } from "react";
import SideBar from "./SideBar";


export default function Layout({ children }:{children: React.ReactNode;}) {
  return (
    <>
      <div className="background h-screen " >
        <Navbar/>
        <div className="flex flex-row w-full bg-yellow-400 h-full  ">
        <div className="bg-gray-100 "><SideBar/></div>
        <div className="bg-gray-100 w-full  ">{children}</div>
        
        </div>
        <Footer/>
    </div>
    </>
  )
}