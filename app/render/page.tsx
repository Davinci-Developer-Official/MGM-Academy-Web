// pages/index.tsx
"use client";
import { useState, useEffect } from 'react';

interface Student {
  id: number;
  student_id: string;
  avatar: string;
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
}

const IndexPage = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get_student');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setStudents(data.students);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Students List</h1>
      <ul className='h-fit overflow-y-scroll ' >
        {students.map(student => (
          <li key={student.id} className='bg-red-400 mt-1 w-[96%] mx-auto rounded-md ' >
            <div>ID: {student.id}</div>
            <div>Avatar: {student.avatar}</div>
            <div>Student ID: {student.student_id}</div>
            <div>First Name: {student.first_name}</div>
            <div>middle name: {student.middle_name} </div>
            <div>Last Name: {student.last_name}</div>
            <div>created at: {student.time_created} </div>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
