// layout.tsx

import DrawerStudent from "@/app/components/DrawerStudents";
import NotificationStudents from "@/app/components/NotificationStudents";
import { NodeNextRequest } from "next/dist/server/base-http/node";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:flex-row   sm:flex-none h-screen w-full   " style={{
     msOverflowStyle:'none',
     overflow:'hidden'
    }} >
      <div className="lg:w-60    " ><DrawerStudent /></div>
      <main className=" sm:w-full md:w-full h-screen bg-[#e1b382]  ">
      {children}
        
        
      </main>
        
    </div>
  );
}