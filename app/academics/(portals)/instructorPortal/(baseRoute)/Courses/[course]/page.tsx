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
  }, []);

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
      setUploadingFile(true);
      const result = await put(file.name, file, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz',
      });
      return result.url;
    } catch (error: any) {
      alert('Error uploading file: ' + error.message);
      return null;
    } finally {
      setUploadingFile(false);
    }
  };

  const uploadVideo = async (file: File | null) => {
    if (!file) return;
    try {
      setUploadingVideo(true);
      const result = await put(file.name, file, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz',
      });
      setUploadedVideoURL(result.url);
      alert('File uploaded: ' + result.url);
    } catch (error: any) {
      alert('Error uploading video: ' + error.message);
    } finally {
      setUploadingVideo(false);
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
    <div className="p-6 w-[90%] mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-end">
        <button
          className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          onClick={toggleModal}
        >
          + Add Chapter
        </button>
      </div>

      {/* Chapters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentChapters.map((item) => (
          <div
            key={item.chapter_id}
            className="bg-white shadow hover:shadow-lg rounded-lg p-5 transition duration-300"
          >
            <h3 className="font-bold text-blue-700 mb-2">Chapter {item.chapter_order}</h3>
            <p className="text-xl font-semibold text-gray-800">{item.chapter_title}</p>
            <p className="text-gray-600 mt-1">{item.chapter_description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button
          className="btn bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-gray-800 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
