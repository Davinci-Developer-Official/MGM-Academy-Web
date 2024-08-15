'use client';
import { put } from '@vercel/blob';
import React, { useState } from 'react';
import { CourseCover, CourseCoverResult } from './CourseCover';

interface Courses {
  course_id: string;
  course_instructors: string;
  course_name: string;
  course_category: string;
  course_introduction_statement: string;
  course_overview: string;
  course_content: string;
  purchase_status: string;
  course_price: string;
  avatar: string;
  instructor_id: string;
}

function CreateCourse() {
  const [course, setCourse] = useState<Courses>({
    course_id: '',
    course_instructors: '',
    course_name: '',
    course_category: '',
    course_introduction_statement: '',
    course_overview: '',
    course_content: '',
    purchase_status: 'not purchased',
    course_price: '',
    avatar: '',
    instructor_id: '223ds345e55673sxs432xe4'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };
  const[uploadedFile,setUploadFile]=useState<string>("")
  function changeFile(e:any){
    const files = e.target.files[0];
    const name = Array.from(files).map((file:any)=>file.name);
    const format = Array.from(files).map((file:any)=>file.type);
    const uploadTime = Array.from(files).map((file:any) => file.lastModified)
    const size = Array.from(files).map((file:any) => file.size)

    if(files&&files.length!==0){
      setUploadFile(files.name)
    }else{alert('failed t upload file')}
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/add_course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });
      if (!response.ok) throw new Error('Error creating course');
      const data = await response.json();
      console.log('Course created successfully:', data);
      // Clear the form or redirect to another page if needed
    } catch (error: any) {
      console.error('Error creating course:', error.message);
    }
  };
  async function uploadFile(file:File){
    try {
      const data = await file.arrayBuffer(); //read file data
      const response = await put(file.name,data,{
        access:'public',
        token:process.env.BLOB_READ_WRITE_TOKEN
      });
      //check if there is a response and response url
      if(response&&response.url){
        alert(response.url);
      }else{
        alert('failed');
      }
    } catch (error) {
      alert('issue uploading file' + error)
    }
  }
  const [result, setResult] = useState<string>('');
  return (
    <div className='h-[600px] my-auto  bg-white p-2 w-[80%] mx-auto mb-5 '>
      <div className='overflow-y-scroll w-[90%]  h-[90%] rounded-md bg-blue-200 mx-auto mt-1'>
        <h1 className='text-center bg-white rounded-tl-lg rounded-tr-lg p-2 h-fit my-auto w-full font-bold text-2xl font-serif'>
          Create a New Course
        </h1>
        <form className='flex flex-col p-4' onSubmit={handleSubmit}>
        <label className='mb-2'>
            Instructor ID:
            <input
              readOnly
              type='text'
              name='instructor_id'
            //  value={course.instructor_id}
              //onChange={handleChange}
              className='input input-bordered w-full bg-gray-200 '
              required
            />
          </label>

          <label className='mb-2'>
            Course Name:
            <textarea className="textarea textarea-bordered w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter course title "
             // type='text'
              //name='course_name'
             // value={course.course_name}
              onChange={handleChange}
             // className='input input-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 100 words</span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
          </label>
          <label className='mb-2'>
            Course Instructors:
            <textarea className="textarea textarea-bordered w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter course instructor(s) "
             // type='text'
              name='course_instructors'
             // value={course.course_instructors}
              onChange={handleChange}
             // className='input input-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">The authors of the course</span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
          </label>
          <label className='mb-2'>
            Course Category:
            <textarea className="textarea textarea-bordered w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter course category "
              //type='text'
              name='course_category'
              //value={course.course_category}
              onChange={handleChange}
              //className='input input-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 1,000 words</span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
          </label>
          <label className='mb-2'>
            Introduction Statement:
            <textarea className="textarea textarea-bordered  w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter introduction statement "
              //name='course_introduction_statement'
              //value={course.course_introduction_statement}
              onChange={handleChange}
              //className='textarea textarea-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 2,000 words</span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
            <label className="">
          Course introduction video from device:
            <input type='file' accept="video/mp4, video/avi, video/mov, video/mkv, video/webm" />
          </label>
          </label>
          <label className='mb-2'>
            Course Overview:
            <textarea className="textarea textarea-bordered w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter course overview "
             // name='course_overview'
              //value={course.course_overview}
              onChange={handleChange}
             // className='textarea textarea-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 2,000 words</span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
          </label>
          <label className='mb-2'>
            Course Content:
            <textarea className="textarea textarea-bordered w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter course content "
              //name='course_content'
             // value={course.course_content}
              onChange={handleChange}
              //className='textarea textarea-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">file link </span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
            <label className="">
          Course file from device:
            <input type='file' accept="application/pdf, application/vnd.ms-excel, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
          </label>
          </label>
          <label className='mb-2'>
            Course Price:
            <textarea className="textarea textarea-bordered w-[98%] mx-auto bg-slate-200 placeholder-black  " placeholder="enter course price "
              //type='text'
              //name='course_price'
              //value={course.course_price}
              onChange={handleChange}
             // className='input input-bordered w-full'
              required
            />
            <div className="label  ">
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">This are the displayed price</span>
              <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
            </div>
          </label>

          <div>
            <p className='p-2 '>course cover</p>
            <input type='file' onChange={async(e:any)=>{
            const files = e.target.files[0];
            const data = await files.arrayBuffer();
            //alert(JSON.stringify(data))
            //uploadFile(files)
            CourseCover({ file: files, data, action: 'upload', setResult });
            }}/>
          <CourseCoverResult result={result} />
            
            
          </div>

          <button type='submit' className='btn btn-primary mt-4'>
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCourse;
