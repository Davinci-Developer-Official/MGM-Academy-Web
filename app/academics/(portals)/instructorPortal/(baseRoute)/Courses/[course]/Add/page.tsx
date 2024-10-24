'use client';
import React, { useState } from 'react';
import { put } from '@vercel/blob';

interface Props {
  datas: any; // Adjust this type according to your actual data structure
}

function Page({ datas }: Props) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [newLink,setNewLink]=useState("")
  const[videoLink,setVideoLink]=useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUploadedFile(file); // Set the selected image file locally
  };

  async function uploadFile(file: File | null) {
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
      {newLink==""&&setNewLink(result.url)};
    } catch (error: any) {
      alert('Error uploading file: ' + error.message);
    }
  }

  

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUploadedVideo(file); // Set the selected image file locally
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

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => uploadFile(uploadedFile)} className='btn ' >Upload</button>
      {newLink}

      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={() => uploadVideo(uploadedVideo)} className='btn ' >Upload</button>
      {videoLink}
    </div>
  );
}

export default Page;
