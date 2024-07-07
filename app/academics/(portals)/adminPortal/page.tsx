"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg';
import Image from 'next/image';
import data from './data.json';
import Rating from './Rating';
import Link from 'next/link';

export interface Courses {
  course_id: string;
  course_name: string; 
}

export interface Students {
  user_id: string;
  user_names: string;
}

export interface Instructors {
  user_id: string;
  user_names: string;
}

export interface Payments {
  id: number;
  payer: string;
  card: string;
  payee: string;
  agent: string;
  amount: string;
  date: string;
}

const Page = () => {
  const [searchParams, setSearchParams] = useState<boolean>(false);
  const [filterOption, setFilterOption] = useState<string>('STUDENTS');

  const [courses, setCourses] = useState<Courses[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [instructors, setInstructors] = useState<Instructors[]>([]);
  const [selectedInstructor, setSelectedInstructor] = useState<string>('');
  const [students, setStudents] = useState<Students[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [payments, setPayments] = useState<Payments[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Load all data initially
    //setCourses(data.courses);
    //setInstructors(data.instructors);
    setPayments(data.payments);
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch('/api/get_students', {
          method: 'GET',
          cache: 'no-cache',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch students');
        } else {
          const data = await response.json();
          setStudents(data); // Assuming the API returns an array of students
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    getStudents();
  }, []);
  useEffect(() => {
    const getInstructors = async () => {
      try {
        const response = await fetch('/api/get_instructors', {
          method: 'GET',
          cache: 'no-cache',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch students');
        } else {
          const data = await response.json();
          setInstructors(data); // Assuming the API returns an array of students
          setLoading(false);
          //alert(data)
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    getInstructors();
  }, [instructors]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch('/api/get_courses', {
          method: 'GET',
          cache: 'no-cache',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch students');
        } else {
          const data = await response.json();
          setCourses(data); // Assuming the API returns an array of students
          setLoading(false);
          //alert(data)
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    getCourses();
  }, [instructors]);
  const filteredData = () => {
    switch (filterOption) {
      case 'STUDENTS':
        return students;
      case 'COURSES':
        return courses;
      case 'INSTRUCTORS':
        return instructors;
      case 'PAYMENTS':
        return payments;
      default:
        return [];
    }
  };

  async function SearchData(){
    
  }
  return (
    <div className='overflow-y-scroll h-screen'>
      <div className='card bg-gray-200 w-[80%] p-2 mx-auto h-[540px] my-auto'>
        <div className='h-[400px] w-[99%] mx-auto rounded-md'>
          <p className='absolute pt-5 bg-gray-100 p-2 rounded-tl-md rounded-br-md'>Information desk</p>
          <Image src={placeholder} alt='card image' className='rounded-md w-full h-full object-cover' />
        </div>

        <div className='bg-white w-[99%] mx-auto h-fit flex flex-col p-1 mt-1'>
          <div className='w-[90%] mx-auto bg-white mt-1'>
            <div>
              <input
                className='input w-[80%] mx-auto input-bordered join-item inset bg-gray-200 '
                placeholder='Search'
                onClick={() => setSearchParams(true)}
              />
            </div>
            <select
              className='select bg-gray-300 select-bordered join-item hover:bg-green-200'
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value='STUDENTS' className='cursor-pointer'>Students</option>
              <option value='COURSES' className='cursor-pointer'>Courses</option>
              <option value='INSTRUCTORS' className='cursor-pointer'>Instructors</option>
              <option value='PAYMENTS' className='cursor-pointer'>Payments</option>
            </select>
            <div className='indicator'>
              <button className='btn btn-ghost text-black hover:bg-green-200 join-item'>
                <FaSearch size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {searchParams && (
        <div className='w-[80%] mx-auto mb-1 mt-1 bg-gray-200 h-[400px] card overflow-y-scroll p-2'>
          <button className='btn btn-circle btn-ghost hover:bg-green-200 cursor-pointer' onClick={() => setSearchParams(false)}>X</button>
          {loading ? (
            <div className='bg-red-500 p-2'>Loading...</div>
          ) : (
            <>
              {filterOption === 'STUDENTS' && (
                <div>
                  <div className='text-center font-bold '>Students</div>
                  {students.map((item: Students) => (
                    <div
                      key={item.user_id}
                      className={`bg-green-200 p-2 mt-2 flex flex-col rounded-md ${selectedStudent === item.user_id ? 'bg-green-300' : ''}`}  
                    >
                      <div className='flex flex-row justify-between  '>
                        <p className='text-black'>{item.user_names}</p>
                        <button className='btn btn-ghost' onClick={() => {
                        setSelectedStudent(selectedStudent === item.user_id ? '' : item.user_id)
                        }}> more </button>
                      </div>
                      {selectedStudent === item.user_id && <div className='p-2   '>
                        <Link href='/' className='cursor-pointer text-blue-600 underline '>view student profile</Link>
                        </div>}
                        
                    </div>
                  ))}
                </div>
              )}
              {filterOption === 'COURSES' && (
                <div>
                  <div className='text-center font-bold '>Courses</div>
                  {courses.map((item:Courses) => (
                     <div
                     key={item.course_id}
                     className={`bg-green-200 p-2 mt-2 flex flex-col rounded-md ${selectedStudent === item.course_id ? 'bg-green-300' : ''}`}  
                   >
                     <div className='flex flex-row justify-between  '>
                       <p className='text-black'>{item.course_name}</p>
                       <button className='btn btn-ghost' onClick={() => {
                       setSelectedCourse(selectedCourse === item.course_id ? '' : item.course_id)
                       }}> more </button>
                     </div>
                     {selectedCourse === item.course_id && <div className='p-2   '>
                       <Link href='/' className='cursor-pointer text-blue-600 underline '>view course details</Link>
                       </div>}
                       
                   </div>
                  ))}
                </div>
              )}
              {filterOption === 'INSTRUCTORS' && (
                <div>
                  <div className='text-center font-bold '>Instructors</div>
                  {instructors.map((item:Instructors) => (
                    <div
                    key={item.user_id}
                    className={`bg-green-200 p-2 mt-2 flex flex-col rounded-md ${selectedStudent === item.user_id ? 'bg-green-300' : ''}`}  
                  >
                    <div className='flex flex-row justify-between  '>
                      <p className='text-black'>{item.user_names}</p>
                      <button className='btn btn-ghost' onClick={() => {
                      setSelectedInstructor(selectedStudent === item.user_id ? '' : item.user_id)
                      }}> more </button>
                    </div>
                    {selectedInstructor === item.user_id && <div className='p-2   '>
                      <Link href='/' className='cursor-pointer text-blue-600 underline '>view instructor profile</Link>
                      </div>}
                      
                  </div>
                  ))}
                </div>
              )}
              {filterOption === 'PAYMENTS' && (
                <div>
                  <div className='text-center font-bold '>Payments</div>
                  {payments.map((item) => (
                    <div key={item.id} className='bg-green-500 p-2 mt-2 rounded-md'>
                      <p>{item.payee}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;







  {/*<option value='ALL'>ALL</option>*/}

  {/*
     useEffect(() => {
    let newData: AllData[] = [];

    if (filterOption.toUpperCase() === 'ALL') {
      newData = [
        ...data.courses.map(course => ({ type: 'course', data: course })),
        ...data.students.map(student => ({ type: 'student', data: student })),
        ...data.instructors.map(instructor => ({ type: 'instructor', data: instructor })),
        ...data.payments.map(payment => ({ type: 'payment', data: payment }))
      ];
    } else if (filterOption.toUpperCase() === 'STUDENTS') {
      newData = data.students.map(student => ({ type: 'student', data: student }));
    } else if (filterOption.toUpperCase() === 'COURSES') {
      newData = data.courses.map(course => ({ type: 'course', data: course }));
    } else if (filterOption.toUpperCase() === 'INSTRUCTORS') {
      newData = data.instructors.map(instructor => ({ type: 'instructor', data: instructor }));
    } else if (filterOption.toUpperCase() === 'PAYMENTS') {
      newData = data.payments.map(payment => ({ type: 'payment', data: payment }));
    } else {
      alert('Error: filter not applied correctly');
    }

    setSearchParamData(newData);
  }, [filterOption]);  
  */}