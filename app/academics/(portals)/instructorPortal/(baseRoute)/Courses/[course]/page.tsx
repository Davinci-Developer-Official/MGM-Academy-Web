'use client';
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { put } from '@vercel/blob'; // for file upload

interface ChapterProps {
  chapter_id: string;
  course_id: string;
  chapter_title: string;
  chapter_description?: string;
  chapter_order: number;
  created_at: string;
}

export default function Page() {
  const [chapters, setChapters] = useState<ChapterProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [newChapter, setNewChapter] = useState({
    id: "",
    title: "",
    description: "",
    order: 1,
    file: null as File | null,
    video: null as File | null,
  });
  const [uploadedFileURL, setUploadedFileURL] = useState<string>("");
  const [uploadedVideoURL, setUploadedVideoURL] = useState<string>("");
  const[videoLink,setVideoLink]=useState("")
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);

  const chaptersPerPage = 6;

  useEffect(() => {
    async function getCourseChapters() {
      try {
        const data = Cookies.get("current-course") || "";
        if (data && data !== "") {
          const res = await axios(`/api/remodelled/courses/get_chapter_by_id?id=${data}`);
          if (chapters.length === 0) {
            setChapters(res.data);
            const maxOrder = Math.max(0, ...res.data.map((chapter: ChapterProps) => chapter.chapter_order));
            setNewChapter(prev => ({ ...prev, chapter_order: maxOrder + 1 }));
          }
        }
      } catch (error) {
        alert('Error occurred: ' + error);
      }
    }
    getCourseChapters();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewChapter(prev => ({ ...prev, file }));
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = e.target.files?.[0] || null;
    setUploadedVideo(video);
  };

  const uploadFile = async (file: File | null) => {
    if (!file) return null;
    if (file.size > 25 * 1024 * 1024) { // 25 MB limit for videos
      alert('Video size exceeds 25 MB limit');
      return;
    }
    try {
      const result = await put(file.name, file, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz', // Your access token
      });
      return result.url; // Return the uploaded file URL
    } catch (error:any) {
      alert('Error uploading file: ' + error.message);
      return null;
    }
  };
  async function uploadVideo(file: File | null) {
    if (!file) {
      alert('No file selected');
      return;
    }
    try {
      const result = await put(file.name, file,{
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz', // Use your access token
      });
      alert('File uploaded: ' + result.url); // result.url will give you the file URL
      {videoLink==""&&setVideoLink(result.url)};
    } catch (error: any) {
      alert('Error uploading file: ' + error.message);
    }
  }

  const handleUploadFile = async () => {
    if (newChapter.file) {
      const fileUrl = await uploadFile(newChapter.file);
      setUploadedFileURL(fileUrl || ""); // Set the uploaded file URL
    }
  };

  {/*const handleUploadVideo = async () => {
    if (newChapter.video) {
      const videoUrl = await uploadVideo(newChapter.video);
      setUploadedVideo(videoUrl); // Set the uploaded video URL
    }
  };*/}
    const[chapterUploaded,setChapterUploaded]=useState(false);
    const[docsUploaded,setDocsUploaded]=useState(false)
  // Function to handle form submission
  const handleAddChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    const courseId = Cookies.get("current-course") || "";

    if (courseId) {
      try {
        // Post new chapter
        const response = await fetch('/api/remodelled/courses/add_chapter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: courseId,
            title: newChapter.title,
            description: newChapter.description,
            order: newChapter.order,
            file: uploadedFileURL, // Use the uploaded file URL
            video: uploadedVideoURL, // Use the uploaded video URL
          }),
        });
        if (response.ok) {
          console.log("Chapter added successfully");
          setChapterUploaded(true)
        }
        if(chapterUploaded){
          const response1= await fetch(`/api/remodelled/courses/add_chapter_docs`);

        }
        // Clear form and update chapters
        toggleModal(); // Close modal
      } catch (error) {
        alert('Error adding chapter: ' + error);
      }
    }
  };

  // Pagination logic
  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chapters.slice(indexOfFirstChapter, indexOfLastChapter);

  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-6 w-[90%] mx-auto">
      <div className="flex justify-end mb-4">
        <button
          className="btn bg-blue-500 text-white py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Add Chapter
        </button>
      </div>

      <div className="h-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentChapters.map((item) => (
            <div key={item.chapter_id} className="bg-white shadow-md p-6 rounded-md">
              <p className="font-bold text-lg">Chapter {item.chapter_order}</p>
              <p className="text-xl mt-2">{item.chapter_title}</p>
              <p className="text-sm mt-2 text-gray-600">{item.chapter_description}</p>
              <button className="btn">Open</button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          className={`btn py-2 px-4 rounded bg-blue-500 text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Back
        </button>

        <p className="text-lg">
          Page {currentPage} of {totalPages}
        </p>

        <button
          className={`btn py-2 px-4 rounded bg-blue-500 text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[60%] lg:w-[40%]">
            <h2 className="text-2xl font-bold mb-4">Add New Chapter</h2>
            <form onSubmit={handleAddChapter}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Chapter Title</label>
                <input
                  type="text"
                  value={newChapter.title}
                  onChange={(e) => setNewChapter({ ...newChapter, title: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Chapter Description</label>
                <textarea
                  value={newChapter.description}
                  onChange={(e) => setNewChapter({ ...newChapter, description: e.target.value })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Chapter Order</label>
                <input
                  type="number"
                  value={newChapter.order}
                  onChange={(e) => setNewChapter({ ...newChapter, order: parseInt(e.target.value) })}
                  className="w-full p-2 border rounded-md"
                  disabled
                />
              </div>

              {/* File upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload File</label>
                <div className="flex items-center">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleUploadFile}
                    className="bg-blue-500 text-white py-2 px-4 rounded ml-4"
                  >
                    Upload
                  </button>
                </div>
                {uploadedFileURL && (
                  <p className="text-sm text-green-600 mt-2">File uploaded: {uploadedFileURL}</p>
                )}
              </div>

              {/* Video upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload Video</label>
                <div className="flex items-center">
                  <input
                    type="file"
                    onChange={handleVideoChange}
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    type="button"
                    onClick={()=>uploadVideo(uploadedVideo)}
                    className="bg-blue-500 text-white py-2 px-4 rounded ml-4"
                  >
                    Upload
                  </button>
                </div>
                {videoLink && (
                  <p className="text-sm text-green-600 mt-2">Video uploaded: {videoLink}</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded ml-4"
                >
                  Add Chapter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
