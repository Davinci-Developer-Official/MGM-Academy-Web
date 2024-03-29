'use client';
import React, { useEffect, useState } from 'react'
import { FaCaretRight, FaPlus, FaTimes } from 'react-icons/fa'
import dummyPic from "@/public/empowerment/1.jpeg"
import axios from 'axios';
import Image from 'next/image';
import { put ,del } from "@vercel/blob";


function CreateCourse({setcreatecourse,showEditor}:any) {
  const[courseInfo,setCourseInfo]=useState({
    coverimage:"",
    covervideo:"",
    coursename:"",
    coursecategory:"",
    unitcode:"",
    coursedescription:"",
    courseinstructor:"",
    courserequirements:""
  })
  //image change event;
  const [imageUrl, setImageUrl] =useState<string>("")

  const handleImageChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    try {
      // Create a URL for the selected file
      const url = URL.createObjectURL(file);
      const data = await file.arrayBuffer();
      
        // Upload the file data using put
        const imageBlob = await put(file.name, data, {
            access: 'public',
            token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
        });

      // Set the URL in state to display the image
      setImageUrl(imageBlob.url);
      setCourseInfo(prevUser => ({ ...prevUser, coverimage: imageBlob.url }));
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  const handleDeleteImage = async (e:any) => {
    e.preventDefault();
    try {
        await del(imageUrl).then(()=>{
          setImageUrl("")
        })
        // Optionally, update your state or UI to reflect the deletion
    } catch (error) {
        // Handle errors
    }
  };

  //video change event;
  const [videoUrl, setVideoUrl] = useState<string>("");
  //const [files, setFiles] = useState<ArrayBuffer | null>(null); // Assuming files will be stored as a string
  const [courseInfos, setCourseInfos] = useState<{ covervideo: string }>({ covervideo: "" });
  const handleVideoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    try {
        // Read the file data
        const url = URL.createObjectURL(file);
        const data = await file.arrayBuffer();
        //setFiles(data);
      
      
      // Upload the file data using put
        const videoBlob = await put(file.name, data, {
            access: 'public',
            token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
        });
  
        // Check if videoBlob is not empty
        if (videoBlob && videoBlob.url) {
            // Set the URL in state to display the video
            setVideoUrl(videoBlob.url);
            setCourseInfo(prevUser => ({ ...prevUser, covervideo: videoBlob.url }));
        } else {
            console.error('VideoBlob is empty or does not have a URL');
        }
    
    } catch (error) {
        console.error('Error reading file:', error);
    }
};

// If you still want uploadVideo function
const handleDeleteVideo = async (event:any) => {
  event.preventDefault(); // Prevents the default behavior (page reload)

  try {
    await del(videoUrl,{token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106"});
    setVideoUrl("");
    // Optionally, update your state or UI to reflect the deletion
  } catch (error) {
    // Handle errors
    alert(error)
  }
};
  //uploading course data;
  async function createCourse(e:any){
    e.preventDefault()
    if(courseInfo.covervideo){
      await axios.post("/api/add_course",{
        cover_image:courseInfo.coverimage,
        cover_video:courseInfo.covervideo,
        course_name:courseInfo.coursename,
        course_category:courseInfo.coursecategory,
        unit_code:courseInfo.unitcode,
        course_description:courseInfo.coursedescription,
        course_instructor:courseInfo.courseinstructor,
        course_requirements:courseInfo.courserequirements,
        course_rating:"4"
      }).then(()=>{
          setcreatecourse(false);
          showEditor(true)
          alert("nooo")
      })
    }else{
      alert("zii")
    }
  }
  useEffect(()=>{},[videoUrl])
  return (
    <div>
      <form className='background p-10 overflow-y-scroll h-screen flex flex-col ' >
        <p className='w-[90%] mx-auto text-center font-bold  ' >CREATE A NEW COURSE</p>
      {/*-----course details-----*/}
      {/*----cover photo----*/}
      <div>
      <div className='h-fit flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >cover image</p>
        </div>
        <div className='w-[80%] sm:w-[70%] p-6 flex flex-col ' >
        {!imageUrl&&<input  type='file' accept="image/*" placeholder='eg basic computer knowledge ' onChange={handleImageChange} />}
        <div className='p-2' >
          {imageUrl&&<button className='bg-red-500 h-[30px] w-[100px]  ' >delete</button>}
        </div>
        <div  >
        {imageUrl && (
         <div className='h-[200px]' >
           {imageUrl&&<Image className='object-fit ' width={500} height={200} src={courseInfo.coverimage} alt="Uploaded Image" style={{ maxWidth: '100%' }} />}
         </div>
        )}
        </div>
        </div>
      </div>
      
     
      </div>
       {/*----cover photo----*/}
       <div>
      <div className='h-fit flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >cover video</p>
        </div>
        <div className='w-[80%] sm:w-[70%] p-6 flex flex-col '>
        {!videoUrl&&<input  type='file'  accept="video/*" placeholder='eg basic computer knowledge 'onChange={handleVideoChange}/>}
        <div className='p-2' >
          {videoUrl && <button className='bg-red-500 h-[30px] w-[100px]  ' onClick={handleDeleteVideo} >delete</button>}
        </div>
        <div >
        {videoUrl && (<video controls height={200} width={400} src={courseInfo.covervideo} />)}
      </div>
        </div>
      </div>
      
     
      </div>
      {/*---course name / Title ---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >course name</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Project Managment ' onChange={(e:any)=>{
      const value = e.target.value;
      sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursename: value }));
    }} />
      </div>
      {/*---course category---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className=' h-[98%] my-auto lg:p-6 sm:p-4  ' >course category</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Information Technology ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursecategory: value }));
    }} />
      </div>
      {/*---course code---*/}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >unit code</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg IT245 ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, unitcode: value }));
    }} />
      </div>
      {/*course description */}
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >course description</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg Learn to manage projects ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursedescription: value }));
    }} />
      </div>
      {/*---course instructor(s)---*/}
      <div className='mt-4 ' >
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5 ' >
        <div className='w-[20%] sm:w-[30%] text-center ' >
          <p className='  h-[98%] my-auto lg:p-6 sm:p-4  ' >course Instructors</p>
        </div>
        <input className='w-[80%] sm:w-[70%] pl-3 ' type='text' placeholder='eg basic computer knowledge ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courseinstructor: value }));
    }} />
      </div>
     
      </div>
      {/*course requirements*/}
      <div>
      <div className='h-[70px] flex flex-row w-[90%] mx-auto background mt-5'>
        <div className='w-[20%] sm:w-[30%] text-center'>
          <p className='h-[98%] my-auto lg:p-6 sm:p-4'>course requirements</p>
        </div>
        <textarea className='w-[80%] sm:w-[70%] pl-3 p-2 re h-[100px] ' placeholder='eg basic computer knowledge' onChange={(e:any)=>{
      const value = e.target.value;
      sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courserequirements: value }));
    }} />
        </div>

      
      </div>
      

      {/*----create course button----*/}
      <div className='mt-10 justify-between flex flex-row' >
      <button className='btn flex flex-row btn-error  ' onClick={()=>{
        setcreatecourse(false);
      }} ><p>close</p><FaTimes size={15} /></button>
      {/*if(courseInfo.covervideo){
          alert(JSON.stringify(courseInfo)+`${imageUrl}`+`${videoUrl}`)
        }*/}
      <button className='btn btn-success flex flex-row ' onClick={createCourse} ><p>Create Course</p><FaPlus size={15} /></button>
      </div>

    </form>
    </div>
  )
}

export default CreateCourse