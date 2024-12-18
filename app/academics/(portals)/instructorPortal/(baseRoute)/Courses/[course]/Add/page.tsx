'use client';

import React, { useState } from 'react';
import { put } from '@vercel/blob';

interface Props {
  datas?: any; // Optional and adjustable based on your actual data structure
}

function Page({ datas }: Props) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [newLink, setNewLink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [uploading, setUploading] = useState(false); // Track upload status
  
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const MAX_VIDEO_SIZE = 25 * 1024 * 1024; // 25MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > MAX_FILE_SIZE) {
      alert('File size exceeds the 5MB limit.');
      return;
    }
    setUploadedFile(file);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > MAX_VIDEO_SIZE) {
      alert('Video size exceeds the 25MB limit.');
      return;
    }
    setUploadedVideo(file);
  };

  async function uploadFile(file: File | null, setLink: React.Dispatch<React.SetStateAction<string>>, type: 'file' | 'video') {
    if (!file) {
      alert(`No ${type} selected`);
      return;
    }

    setUploading(true);
    try {
      const result = await put(file.name, file, {
        access: 'public',
        token: 'vercel_blob_rw_jDNRDIzn5HpnU1jS_mb5wAReKxQIubo7b0VP1ejgTk6ffcz', // Replace with your secure token
      });
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} uploaded: ${result.url}`);
      setLink(result.url);
    } catch (error: any) {
      alert(`Error uploading ${type}: ${error.message}`);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* File Upload */}
      <div className="space-y-2">
        <label className="block font-medium">Upload File (Max: 5MB)</label>
        <input type="file" onChange={handleFileChange} className="block w-full p-2 border rounded" />
        <button
          onClick={() => uploadFile(uploadedFile, setNewLink, 'file')}
          disabled={uploading || !uploadedFile}
          className={`btn ${uploading ? 'opacity-50' : ''}`}
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
        {newLink && <p className="text-green-600">File URL: <a href={newLink} target="_blank" rel="noopener noreferrer">{newLink}</a></p>}
      </div>

      {/* Video Upload */}
      <div className="space-y-2">
        <label className="block font-medium">Upload Video (Max: 25MB)</label>
        <input type="file" accept="video/*" onChange={handleVideoChange} className="block w-full p-2 border rounded" />
        <button
          onClick={() => uploadFile(uploadedVideo, setVideoLink, 'video')}
          disabled={uploading || !uploadedVideo}
          className={`btn ${uploading ? 'opacity-50' : ''}`}
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
        {videoLink && <p className="text-green-600">Video URL: <a href={videoLink} target="_blank" rel="noopener noreferrer">{videoLink}</a></p>}
      </div>
    </div>
  );
}

export default Page;
