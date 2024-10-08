'use client';

import { useState } from 'react';
import { put, del } from '@vercel/blob';

const CourseForm = () => {
  const [coverUrl, setCoverUrl] = useState<string>(''); // Holds the uploaded Vercel image URL
  const [localImageFile, setLocalImageFile] = useState<File | null>(null); // Holds the selected image file locally
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [instructor, setInstructor] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLocalImageFile(file); // Set the selected image file locally
  };

  const handleImageUpload = async () => {
    if (!localImageFile) {
      setError('Please select an image before uploading.');
      return;
    }

    try {
      const blob = await uploadImage(localImageFile);
      if (blob) {
        setCoverUrl(blob.url); // Store only the Vercel image URL after successful upload
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

  const handleImageDelete =  () => {
    if (!coverUrl) {
      setError('No uploaded image to delete.');
      return;
    }

    try {
       deleteImage(coverUrl); // Delete the image from Vercel
      setCoverUrl(''); // Clear the uploaded image URL
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
        // Reset form
        setCoverUrl(''); // Reset the uploaded cover URL
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
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz', // Use your access token
      });
      console.log('Uploaded image:', blob);
      return blob; // Return the blob object containing the URL
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const deleteImage = async (url: string) => {
    try {
      await del(url, {
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz', // Use your access token
      });
      console.log('Deleted image:', url);
    } catch (error) {
      console.error('Error deleting image:', error);
      throw new Error('Failed to delete image.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Create a New Course</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Course Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button
            type="button"
            onClick={handleImageUpload}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
          >
            Upload Image
          </button>

          {coverUrl ? (
            <div className="mt-4">
              <img
                src={coverUrl} // Display uploaded image
                alt="Uploaded Cover"
                className="w-32 h-32 object-cover"
              />
              {/*<p>{coverUrl}</p>*/}
              <button
                type="button"
                onClick={handleImageDelete}
                className="mt-2 bg-red-500 hover:bg-red-700 text-white p-2 rounded"
              >
                Delete Image
              </button>
            </div>
          ) : (
            <p>No image uploaded</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter course title"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Course Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter course description"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Instructor ID</label>
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter instructor ID"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-2 text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} rounded`}
        >
          {isSubmitting ? 'Submitting...' : 'Create Course'}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
