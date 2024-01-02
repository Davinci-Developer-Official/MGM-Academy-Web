import DrawerInstructor from "@/app/components/DrawerInstructor"
export default function NewLayout({ children }:{children:React.ReactNode}) {
  return (
    <div className="lg:flex lg:flex-row   sm:flex-none h-screen w-full   " style={{
      msOverflowStyle:'none',
      overflow:'hidden'
     }} >
       <div className="lg:w-60    " ><DrawerInstructor/></div>
       <main className=" sm:w-full md:w-full h-screen bg-[#e1b382]  ">
       {children}
         
         
       </main>
         
     </div>
  )
}