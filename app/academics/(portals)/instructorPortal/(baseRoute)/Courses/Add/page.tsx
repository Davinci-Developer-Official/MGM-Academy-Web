'use client';

import { useState } from 'react';
import { put, del } from '@vercel/blob';

const CourseForm = () => {
  const [coverUrl, setCoverUrl] = useState<string>('');
  const [localImageFile, setLocalImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [instructor, setInstructor] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLocalImageFile(file);
  };

  const handleImageUpload = async () => {
    if (!localImageFile) {
      setError('Please select an image before uploading.');
      return;
    }

    try {
      const blob = await uploadImage(localImageFile);
      if (blob) {
        setCoverUrl(blob.url);
        setError(null);
        console.log('Image uploaded successfully!');
      } else {
        setError('Failed to upload image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again.');
    }
  };

  const handleImageDelete = () => {
    if (!coverUrl) {
      setError('No uploaded image to delete.');
      return;
    }

    try {
      deleteImage(coverUrl);
      setCoverUrl('');
      console.log('Image deleted successfully!');
    } catch (error) {
      console.error('Error deleting image:', error);
      setError('Error deleting image. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!coverUrl) {
      setError('Please upload a cover image before submitting.');
      setIsSubmitting(false);
      return;
    }

    const courseData = { cover: coverUrl, title, description, instructor };

    try {
      const response = await fetch('/api/remodelled/courses/add_course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Course created successfully!');
        setCoverUrl('');
        setTitle('');
        setDescription('');
        setInstructor('');
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err: any) {
      setError('An error occurred: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadImage = async (imageFile: File) => {
    try {
      const blob = await put(imageFile.name, imageFile, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz',
      });
      console.log('Uploaded image:', blob);
      return blob;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const deleteImage = async (url: string) => {
    try {
      await del(url, {
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz',
      });
      console.log('Deleted image:', url);
    } catch (error) {
      console.error('Error deleting image:', error);
      throw new Error('Failed to delete image.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create a New Course</h2>
      {error && <p className="text-red-500 bg-red-100 p-3 rounded mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="button"
            onClick={handleImageUpload}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Upload Image
          </button>
          {coverUrl && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={coverUrl}
                alt="Uploaded Cover"
                className="w-40 h-40 object-cover rounded-lg border border-gray-200"
              />
              <button
                type="button"
                onClick={handleImageDelete}
                className="mt-3 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Image
              </button>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Enter course title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Enter course description"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instructor ID
          </label>
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Enter instructor ID"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isSubmitting ? 'Submitting...' : 'Create Course'}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
