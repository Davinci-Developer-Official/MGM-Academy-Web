'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Instructor {
  avatar: string;
  names: string;
  email: string;
  phonenumber: string;
  gender: string;
  password: string;
}

function Page() {
  const [formData, setFormData] = useState<Instructor>({
    avatar: 'default_avatar_url',
    names: '',
    email: '',
    phonenumber: '',
    gender: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [exists, setExists] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setExists('');

    try {
      const response = await fetch('/api/remodelled/instructors/add_instructor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setMessage('Instructor profile created successfully!');
      setFormData({
        avatar: 'default_avatar_url',
        names: '',
        email: '',
        phonenumber: '',
        gender: '',
        password: '',
      });

      setTimeout(() => {
        router.push('/academics/signin');
      }, 1500);
    } catch (error) {
      setMessage('');
      setExists('A user with this email already exists.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create Instructor Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-orange-600 font-medium mb-1">Name:</label>
            <input
              type="text"
              name="names"
              value={formData.names}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-orange-600 font-medium mb-1">
              Email:
              {exists && <span className="ml-2 text-red-500 text-sm">{exists}</span>}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-orange-600 font-medium mb-1">Phone Number:</label>
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block text-orange-600 font-medium mb-1">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-orange-600 font-medium mb-1">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-2 text-orange-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-500 transition disabled:bg-gray-400"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Message Display */}
        {message && (
          <div className="mt-4 text-center text-green-600 font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
