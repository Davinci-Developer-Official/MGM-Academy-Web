// layout.tsx
import DrawerStudent from "../components/DrawerStudents";
import NotificationStudents from "../components/NotificationStudents";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:flex-row  sm:flex-none ">
      <DrawerStudent />
      <main className="lg:w-[80%] sm:w-full h-[600px] bg-red-500">
        <NotificationStudents />
        {children}
      </main>
    </div>
  );
}
