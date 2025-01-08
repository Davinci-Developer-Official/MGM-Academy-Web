import ElearningStudentNavbar from "../../../../components/ElearningStudentNavbar";
import Navbar from "@/app/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return <>
    <Navbar/>
    {children}
    </>
}