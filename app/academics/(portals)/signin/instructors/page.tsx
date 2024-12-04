'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Cookies from 'js-cookie';

interface Instructor {
  names: string;
  instructor_id: string;
  email: string;
  password: string;
}

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Instructor[]>([]);
  const [details, setDetails] = useState<Instructor>({
    names: '',
    instructor_id: '',
    email: '',
    password: '',
  });
  const [exists, setExists] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function fetchInstructors() {
      try {
        const response = await fetch('/api/remodelled/instructors/get_instructor');
        if (!response.ok) throw new Error('Failed to fetch instructors');
        const instructors: Instructor[] = await response.json();
        setData(instructors);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchInstructors();
  }, []);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!details.email) {
      setStatus('Please provide an email.');
      return;
    }

    const instructor = data.find((inst) => inst.email === details.email);
    if (instructor) {
      setExists(true);
      Cookies.set('i-id', instructor.instructor_id, { expires: 7, path: '/academics/instructorPortal/' });
      Cookies.set('i-name', instructor.names, { expires: 7, path: '/' });
    } else {
      setStatus('No instructor found with the provided email.');
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!details.password) {
      setStatus('Please provide a password.');
      return;
    }

    const instructor = data.find((inst) => inst.password === details.password);
    if (instructor) {
      setVerified(true);
    } else {
      setStatus('Incorrect password.');
    }
  }

  return (
    <div className="min-h-screen flex  justify-center bg-gray-100 dark:bg-gray-900 ">
      {!loading ? (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Instructor Login</h1>
          <form onSubmit={exists ? handleLogin : handleCheck}>
            {!exists ? (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="w-full px-3 dark:bg-gray-700 dark:text-white py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            ) : (
              <p className="mb-4 text-sm text-gray-700">
                Logged in as: <span className="font-medium">{details.email}</span>
              </p>
            )}

            {exists && (
              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={details.password}
                  onChange={(e) => setDetails({ ...details, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            )}

            {status && <p className="text-red-500 text-sm mb-4">{status}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {exists ? 'Verify' : 'Proceed'}
            </button>
          </form>

          {verified && (
            <div className="mt-4 text-center">
              <Link
                href="/academics/instructorPortal/Dashboard"
                className="text-blue-600 hover:underline"
              >
                Go to Dashboard
              </Link>
            </div>
          )}

          {!verified && (
            <div className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/academics/apply" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-700">Loading...</p>
        </div>
      )}
    </div>
  );
}
