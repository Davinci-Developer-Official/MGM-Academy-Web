import ElearningStudentNavbar from "../components/ElearningStudentNavbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return <>
    <ElearningStudentNavbar/>
    {children}
    </>
}