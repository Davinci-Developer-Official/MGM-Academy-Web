"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import placeholder from '@/public/categories/business-studies-FO8nWoT6OnZ7DXO6xYA2TnRK4kzhwt.jpg';
import Image from 'next/image';
import data from './data.json';

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

type AllData = {
  type: string;
  data: Courses | Students | Instructors | Payments;
}

const Page = () => {
  const [searchParams, setSearchParams] = useState<boolean>(false);
  const [searchParamData, setSearchParamData] = useState<AllData[]>([]);
  const [filterOption, setFilterOption] = useState<string>('ALL');

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

  return (
    <div className='overflow-y-scroll h-screen'>
      <div className='card bg-gray-200 w-[80%] p-2 mx-auto h-[540px] my-auto'>
        <div className='h-[400px] w-[99%] mx-auto rounded-md'>
          <p className='absolute pt-5 bg-gray-100 p-2 rounded-tl-md rounded-br-md'>Information desk</p>
          <Image src={placeholder} alt='card image' className='rounded-md w-full h-full object-fit' />
        </div>

        <div className='bg-white w-[99%] mx-auto h-fit flex flex-col p-1 mt-1'>
          <div className='w-[90%] mx-auto bg-white mt-1'>
            <div>
              <input
                className='input w-[80%] mx-auto input-bordered join-item'
                placeholder='Search'
                onClick={() => {
                  setSearchParams(true);
                }}
              />
            </div>
            <select
              className='select select-bordered join-item hover:bg-green-400'
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value='ALL'>ALL</option>
              <option value='STUDENTS'>students</option>
              <option value='COURSES'>courses</option>
              <option value='INSTRUCTORS'>instructors</option>
              <option value='PAYMENTS'>payments</option>
            </select>
            <div className='indicator'>
              <button className='btn text-black hover:bg-green-400 join-item'>
                <FaSearch size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {searchParams && (
        <div className='w-[80%] mx-auto mb-1 mt-1 bg-gray-200 h-[400px] card overflow-y-scroll p-2'>
          {searchParamData.map((item, index) => (
            <div key={index}>
              <h3>{item.type}</h3>
              <pre>{JSON.stringify(item.data, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
