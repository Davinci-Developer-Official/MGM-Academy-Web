'use client';

import { useEffect, useState } from 'react';
import Students from './students/page';
import Instructors from './instructors/page';
import Image from 'next/image';
import placeholder from '@/public/remodel/study.jpg';
import placeholder1 from '@/public/remodel/teach.jpg';

export default function Page() {
  const [accountType, setAccountType] = useState('students');

  const handleAccountTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountType(event.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 dark:bg-gray-900 ">
      {/* Header Image */}
      <div className="w-full lg:w-3/5 h-[300px] sm:h-[250px] rounded-bl-lg rounded-br-lg overflow-hidden">
        <Image
          src={accountType === 'students' ? placeholder : placeholder1}
          alt={`${accountType} placeholder`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Dropdown and Info */}
      <div className="w-[90%] lg:w-3/5 flex flex-col items-center py-6">
        <div className="w-full max-w-sm">
          <label className="block text-gray-700 font-medium mb-2 text-center">
            Select Account Type
          </label>
          <select
            value={accountType}
            onChange={handleAccountTypeChange}
            className="w-full px-4 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="students">Students</option>
            <option value="instructors">Instructors</option>
          </select>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Current account type: <span className="font-medium">{accountType}</span>
        </p>
      </div>

      {/* Dynamic Content */}
      <div className="w-full lg:w-3/5 px-4 py-1 bg-white dark:bg-gray-900 shadow-md rounded-lg">
        {accountType === 'students' ? <Students /> : <Instructors />}
      </div>
    </div>
  );
}
