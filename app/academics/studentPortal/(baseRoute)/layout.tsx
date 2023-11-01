// layout.tsx

import DrawerStudent from "@/app/components/DrawerStudents";
import NotificationStudents from "@/app/components/NotificationStudents";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:flex-row  sm:flex-none ">
      <div className="lg:w-[16%] bg-blue-400 " ><DrawerStudent /></div>
      <main className="lg:w-[68%] sm:w-full h-screen   ">
      {children}
        
        
      </main>
        <div className="lg:w-[16%] bg-green-700 " ><NotificationStudents /></div>
    </div>
  );
}