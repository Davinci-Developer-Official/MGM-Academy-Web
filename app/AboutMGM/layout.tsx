import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
    
    {/*
        <div className="text-[#e1b382] bg-gradient-to-r from-[#2d545e] h-screen w- " >
   <Navbar/>
   {children}
   <Footer/>
    </div>
    */}

    return (
    
    <div className="flex flex-col" >
   <Navbar/>
    {children}
    <Footer/>
    </div>
    )
}