/* eslint-disable react-hooks/exhaustive-deps */
'use client';
// layout.tsx

import DrawerStudent from "@/app/components/DrawerStudents";
import ElearningStudentNavbar from "@/app/components/ElearningStudentNavbar";
import NotificationStudents from "@/app/components/NotificationStudents";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { useEffect, useState } from "react";

interface Student {
  id: number;
  student_id: string;
  Avatar: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  email: string;
  gender: string;
  nationality: string;
  residence: string;
  phone_number: string;
  date_of_birth: string;
  time_created: string;
  exposure:string;
  password:string;
}

export default function Layout({ children }: { children: React.ReactNode }) {

  const [students, setStudents] = useState<Student[]>([]);
  
  const findStudent = async () => {
    // Replace this with your actual login logic (e.g., API call)
    const id =localStorage.getItem("id")
    const userrname = localStorage.getItem("username")
    const findId = students.find(user=>user.student_id == id);
    const findUsername = students.find(user=>user.username == userrname);
    
    if (findId&&findUsername) {
      //setSecure(true)
     // alert(JSON.stringify(students))
     //alert(userrname+" "+"found")
    } else {
      //setError('Email or password is incorrect');
     // alert(userrname+" "+"not found")
    }
  };
  //fetch on each render;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem("username");
        if (!username) {
          throw new Error("Username not found in local storage");
          alert("Username not found in local storage");

        }
        
        const response = await fetch(`/api/get_student_byId?username=${username}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
          alert("Failed to fetch data");
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        setStudents(data.students);
        //alert(JSON.stringify(data))
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error gracefully, e.g., show a message to the user
        alert("Failed to fetch student data. Please try again later.");
      }
    };
  
    fetchData();
  }, []);
  
  {/*<div className="lg:flex lg:flex-row   sm:flex-none h-screen w-full   " style={{
     msOverflowStyle:'none',
     overflow:'hidden'
    }} >
      <div className="lg:w-60    " ><DrawerStudent /></div>
      <main className="background sm:w-full md:w-full h-screen text-[#e1b382]   ">
      {children}
        
        
      </main>
     
        
    </div>*/}


  return (
    <div className="flex flex-col" >
    <ElearningStudentNavbar/>
    <div className="flex flex-col lg:flex-row h-screen w-full bg-white ">
    
  {/*<div className="lg:w-auto z-10 ">
    <DrawerStudent/>
  </div>*/}
  <div className="lg:w-full w-full sm:w-full sm:mx-auto">
    {children}
  </div>
  {/*<div className="lg:w-auto ">
    <NotificationStudents/>
  </div>*/}
</div>
    </div>


    
  );
}

