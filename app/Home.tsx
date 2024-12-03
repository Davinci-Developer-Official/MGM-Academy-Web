import React from 'react';
import Carousel from './Carousel';
import { FaCompress, FaExpand, FaGraduationCap, FaHome } from 'react-icons/fa';
import Link from 'next/link';

function Home({ navigation, setNavigation }: any) {
  const Label = "MGM Academy: Empowering Education for All";
  const statement =
    "Welcome to the MGM Institute of Gender and Women Empowerment: Pioneers of Equality and Empowerment. As a dynamic learning platform for all, we offer a diverse range of courses. Join us in reshaping norms, advancing rights, and fostering inclusivity and justice. Together, let's champion progress and empowerment for all.";

  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-900">
      {/* Navbar Section */}
      <div className="flex items-center justify-between p-5 bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-b-lg shadow-xl">
        <button
          onClick={() => setNavigation(!navigation)}
          className="text-white p-3 rounded-full hover:bg-indigo-400 transition duration-200"
        >
          {navigation ? <FaExpand size={20} /> : <FaCompress size={20} />}
        </button>
        <div className="text-white font-bold text-xl sm:text-2xl mx-4">{Label}</div>
        <button className="text-white p-3 rounded-full hover:bg-indigo-400 transition duration-200">
          <FaHome size={20} />
        </button>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-12">
        <p className="text-center text-gray-800 dark:text-gray-300 text-sm sm:text-lg font-medium leading-relaxed">
          {statement}
        </p>
        <Link
          href="/academics/Courses"
          className="flex items-center justify-center mt-8 py-3 px-6 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          <p className="mr-3">Start Learning</p>
          <FaGraduationCap size={20} />
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="mt-12">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
