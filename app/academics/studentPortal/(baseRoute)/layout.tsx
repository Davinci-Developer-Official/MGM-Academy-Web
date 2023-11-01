// layout.tsx

import DrawerStudent from "@/app/components/DrawerStudents";
import NotificationStudents from "@/app/components/NotificationStudents";
import { NodeNextRequest } from "next/dist/server/base-http/node";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:flex-row  sm:flex-none h-screen w-screen   " style={{
     msOverflowStyle:'none',
     overflow:'hidden'
    }} >
      <div className="lg:w-[15%] bg-blue-400 " ><DrawerStudent /></div>
      <main className="lg:w-[80%] sm:w-full md:w-full h-screen   ">
      {children}
        
        
      </main>
        
    </div>
  );
}