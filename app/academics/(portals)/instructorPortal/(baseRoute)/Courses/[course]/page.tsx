'use client';
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { put } from '@vercel/blob';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const [videoLink, setVideoLink] = useState("");
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
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
  }, ['checked', 'email', 'password', 'secure', 'username']);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5 MB limit");
      return;
    }
    setNewChapter(prev => ({ ...prev, file }));
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = e.target.files?.[0] || null;
    if (video && video.size > 25 * 1024 * 1024) {
      alert("Video size exceeds 25 MB limit");
      return;
    }
    setUploadedVideo(video);
  };

  const uploadFile = async (file: File | null) => {
    if (!file) return null;
    try {
      setUploadingFile(true); // Start animation
      const result = await put(file.name, file, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz',
      });
      return result.url;
    } catch (error: any) {
      alert('Error uploading file: ' + error.message);
      return null;
    } finally {
      setUploadingFile(false); // Stop animation
    }
  };

  const uploadVideo = async (file: File | null) => {
    if (!file) return;
    try {
      setUploadingVideo(true); // Start animation
      const result = await put(file.name, file, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz',
      });
      alert('File uploaded: ' + result.url);
      if (videoLink === "") setVideoLink(result.url);
    } catch (error: any) {
      alert('Error uploading video: ' + error.message);
    } finally {
      setUploadingVideo(false); // Stop animation
    }
  };

  const handleUploadFile = async () => {
    if (newChapter.file && !uploadingFile) {
      const fileUrl = await uploadFile(newChapter.file);
      setUploadedFileURL(fileUrl || "");
    }
  };

  const handleAddChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    const courseId = Cookies.get("current-course") || "";

    if (courseId) {
      try {
        const response = await fetch('/api/remodelled/courses/add_chapter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: courseId,
            title: newChapter.title,
            description: newChapter.description,
            order: newChapter.order,
            file: uploadedFileURL,
            video: uploadedVideoURL,
          }),
        });
        if (response.ok) {
          console.log("Chapter added successfully");
        }
        toggleModal();
      } catch (error) {
        alert('Error adding chapter: ' + error);
      }
    }
  };

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
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">File Upload (Max 5MB)</label>
                <input type="file" onChange={handleFileChange} />
                {uploadingFile && <p className="text-blue-500">Uploading...</p>}
                <button type="button" onClick={handleUploadFile} disabled={uploadingFile}>Upload File</button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Video Upload (Max 25MB)</label>
                <input type="file" onChange={handleVideoChange} />
                {uploadingVideo && <p className="text-blue-500">Uploading...</p>}
                <button type="button" onClick={() => uploadVideo(uploadedVideo)} disabled={uploadingVideo}>Upload Video</button>
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={toggleModal} className="mr-2">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded" disabled={uploadingFile || uploadingVideo}>
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
