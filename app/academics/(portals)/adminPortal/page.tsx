"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg';
import Image from 'next/image';
import data from './data.json';
import Rating from './Rating';

export interface Courses {
  id: number;
  course_id: string;
  course_name: string;
  course_instructor: string;
  price: string;
}

export interface Students {
  id: number;
  student_id: string;
  student_name: string;
}

export interface Instructors {
  id: number;
  instructor_id: string;
  instructor_name: string;
  instructor_rating: string;
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
  const [instructors, setInstructors] = useState<Instructors[]>([]);
  const [students, setStudents] = useState<Students[]>([]);
  const [payments, setPayments] = useState<Payments[]>([]);

  useEffect(() => {
    // Load all data initially
    setCourses(data.courses);
    setInstructors(data.instructors);
    setPayments(data.payments);
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch('/api/get_students', { // Ensure this matches your API route
          method: 'GET',
          cache: 'no-cache',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch students');
        } else {
          const data = await response.json();
          setStudents(data); // Assuming the API returns an array of students
        }
      } catch (error) {
        console.error('Error fetching students:', error); // Use console.error for error logging
      }
    };

    getStudents();
  }, []);

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
              <option value='STUDENTS' className='cursor-pointer '>Students</option>
              <option value='COURSES' className='cursor-pointer '>Courses</option>
              <option value='INSTRUCTORS' className='cursor-pointer '>Instructors</option>
              <option value='PAYMENTS' className='cursor-pointer '>Payments</option>
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
          {filteredData().map((item: any) => (
            <div key={item.id || item.course_id || item.student_id || item.instructor_id}>
              {item.course_name && (
                <div className='flex flex-row p-2 bg-green-200 w-[90%] mx-auto mt-1 justify-evenly rounded-md'>
                  <p>{item.course_name}</p>
                </div>
              )}
              {item.course_instructor && (
                <div className='flex flex-row p-2 bg-green-200 w-[90%] mx-auto mt-1 justify-evenly rounded-md'>
                  <p>{item.course_instructor}</p>
                </div>
              )}
              {item.student_name && (
                <div className='flex flex-row p-2 bg-green-200 w-[90%] mx-auto mt-1 justify-evenly rounded-md'>
                  <p>{item.student_name}</p>
                </div>
              )}
              {item.instructor_name && (
                <div className='flex flex-row p-2 bg-green-200 w-[90%] mx-auto mt-1 justify-evenly rounded-md'>
                  <p>{item.instructor_name}</p>
                  <p><Rating rating={item.instructor_rating} /></p>
                </div>
              )}
              {item.payer && (
                <div className='flex flex-row p-2 bg-green-200 w-[90%] mx-auto mt-1 justify-evenly rounded-md'>
                  <p>{item.payer}</p>
                </div>
              )}
            </div>
          ))}
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