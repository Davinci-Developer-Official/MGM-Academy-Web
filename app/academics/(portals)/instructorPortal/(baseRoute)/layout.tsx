import DrawerInstructor from "@/app/components/DrawerInstructor"
import SideBar from "./SideBar"
export default function NewLayout({ children }:{children:React.ReactNode}) {
  return (
    <div className="flex flex-row    h-screen w-full   " style={{
      msOverflowStyle:'none',
      overflow:'hidden'
     }} >
       <div className="  " ><SideBar/></div>
       <main className="w-full  bg-[#e1b382]  ">
       {children}
         
         
       </main>
         
     </div>
  )
}