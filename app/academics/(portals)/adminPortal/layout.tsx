import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function NewLayout({ children }:{children:React.ReactNode}) {
  return (
    <>
      <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
    </>
  )
}