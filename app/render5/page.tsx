'use client';
import { useEffect, useState } from 'react';
import cookie from 'js-cookie';
interface Instructor {
  instructor_id: string;
  name: string;
}

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    course_name: '',
    course_introduction: '',
    course_description: '',
    course_price: '',
    course_rating: '',
    instructor_id: '',
  });

  const [instructors, setInstructors] = useState<Instructor[]>([]);

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Get the user ID from cookies on the client side
    const userIdFromCookie = cookie.get('user')
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
      alert(userIdFromCookie)
    }
  }, [userId]);

  // Fetch the list of instructors when the component loads
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('/api/instructors');
        const data = await response.json();
        setInstructors(data.instructors);
        
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  // Handle form data changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Course added successfully');
        setFormData({
          course_name: '',
          course_introduction: '',
          course_description: '',
          course_price: '',
          course_rating: '',
          instructor_id: '',
        });
      } else {
        alert('Failed to add course');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Course Name</label>
          <input
            type="text"
            name="course_name"
            value={formData.course_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Course Introduction</label>
          <input
            type="text"
            name="course_introduction"
            value={formData.course_introduction}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Course Description</label>
          <textarea
            name="course_description"
            value={formData.course_description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Course Price</label>
          <input
            type="text"
            name="course_price"
            value={formData.course_price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Course Rating</label>
          <input
            type="text"
            name="course_rating"
            value={formData.course_rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Instructor</label>
          <select
            name="instructor_id"
            value={formData.instructor_id}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor.instructor_id} value={instructor.instructor_id}>
                {instructor.name}
                
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Course cover</label>
          <input
            type="file"
            name="cover_image"
            accept=".jpg, .jpeg, .png" // Accept only specific image types
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
