import { useState } from 'react';

const CourseForm = () => {
  const [cover, setCover] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [instructor, setInstructor] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result as string); // Set the base64 string
      };
      reader.readAsDataURL(file); // Convert to base64
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const courseData = { cover, title, description, instructor };

    try {
      const response = await fetch('/api/remodelled/courses/add_course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });
      const data = await response.json();

      if (response.ok && data !== '') {
        alert('Course created successfully!' + JSON.stringify(data));
        // Reset form
        setCover('');
        setTitle('');
        setDescription('');
        setInstructor('');
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('An error occurred.');
    } finally {
      setIsSubmitting(false);
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
            onChange={handleCoverChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
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
