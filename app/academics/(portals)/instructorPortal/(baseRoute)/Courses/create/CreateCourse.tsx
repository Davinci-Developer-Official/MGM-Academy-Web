'use client';
import React, { useEffect, useState } from 'react'
import { FaCaretRight, FaInfo, FaInfoCircle, FaPen, FaPlus, FaTimes, FaTimesCircle, FaTrash, FaUpload } from 'react-icons/fa'
import dummyPic from "@/public/empowerment/1.jpeg"
import axios from 'axios';
import Image from 'next/image';
import { put ,del  } from "@vercel/blob";
import { revalidatePath } from 'next/cache';


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

  {/*
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
  */}
  const[loadingImage,setImageLoading]=useState<boolean>(false);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    //@ts-ignore
    setSelectedFile(file);
};
  const handleImageUpload = async (e:any) => {
    e.preventDefault();
      if (!selectedFile) return;
      setImageLoading(true)//loading when image uploads
      try {
        // Create a URL for the selected file
        const url = URL.createObjectURL(selectedFile);
        const data = await selectedFile.arrayBuffer();
        
          // Upload the file data using put
          const imageBlob = await put(selectedFile.name, data, {
              access: 'public',
              token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
          });
          if(imageBlob){
            setImageLoading(false)
          }
  
        // Set the URL in state to display the image
        setImageUrl(imageBlob.url);
        setCourseInfo(prevUser => ({ ...prevUser, coverimage: imageBlob.url }));
      } catch (error) {
          console.error('Error reading file:', error);
         // alert(error)
      }
  };
  

  const [videoUrl, setVideoUrl] = useState<string>("");
  const[loadingVideo,setVideoLoading]=useState<boolean>(false);
  //const [courseInfo, setCourseInfo] = useState<{ covervideo: string }>({ covervideo: "" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to hold the selected file
  const handleDeleteImage = async (e:any) => {
    e.preventDefault();
    try {
        await del(imageUrl).then(()=>{
          setImageUrl("")
        })
        // Optionally, update your state or UI to reflect the deletion
    } catch (error) {
        // Handle errors
        console.error(error)
    }
  };

  //video change event;
//const [videoUrl, setVideoUrl] = useState<string>("");
  //const [files, setFiles] = useState<ArrayBuffer | null>(null); // Assuming files will be stored as a string
  const [courseInfos, setCourseInfos] = useState<{ covervideo: string }>({ covervideo: "" });
  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    //@ts-ignore
    setSelectedFile(file);
};

const handleVideoUpload = async (e:any) => {
  e.preventDefault();
    if (!selectedFile) return;
    setVideoLoading(true)//loading when image uploads
    try {
        // Read the file data
        const data = await selectedFile.arrayBuffer();
      
        // Upload the file data using put
        const videoBlob = await put(selectedFile.name, data, {
            access: 'public',
            token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
        });
  
        // Check if videoBlob is not empty
        if (videoBlob && videoBlob.url) {
            // Set the URL in state to display the video
            setVideoUrl(videoBlob.url);
            setCourseInfo(prevInfo => ({ ...prevInfo, covervideo: videoBlob.url }));
           setVideoLoading(true); 
          } else {
            console.error('VideoBlob is empty or does not have a URL');
        }
    
    } catch (error) {
        console.error('Error reading file:', error);
       // alert(error)
    }
};

// If you still want uploadVideo function
const[deletingLoading,setDeletingLoading]=useState<boolean>(false)
const handleDeleteVideo = async (video:any) => {
  try {
      // Perform the deletion request to Vercel Blob
     if(video!==""){
      //alert("deleting")
     
      await del(video, {
       // access: 'public',
        token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
    }).catch((error:any)=>{
        console.error(error);
       // alert(error)
      })
       
      revalidatePath("/");
     }

      {/*
    // Reset states
      setVideoUrl("");
      //@ts-ignore
      setCourseInfo({ covervideo: "" });
    */}
  } catch (error) {
      console.error('Error deleting video:', error);
  }
};
const[msg,setMsg]=useState("")
  //uploading course data;
  async function createCourse(e:any){
    e.preventDefault()
    if(courseInfo.covervideo||courseInfo.coverimage){
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
         // //showEditor(true)
          //alert("nooo")
          console.log("uploaded sucessfully")
          setMsg("uploaded sucessfully")
      })
    }else{
      //alert("zii")
      console.log("error uploading")
      setMsg("cover image or cover video is empty unable to upload")
    }
  }
  const[info,setInfo]=useState({
    "coverImage":false,
    "coverVideo":false,
    "courseName":false,
    "courseCategory":false,
    "courseCode":false,
    "courseDescription":false,
    "courseInstructor":false,
    "courseRequirements":false,
  })
  useEffect(()=>{},[info,videoUrl,imageUrl,loadingImage,loadingVideo,deletingLoading])
  return (
    <div>
      {/*overflow-y-scroll*/}
      <form className='background p-10 w-full h-fit flex flex-col ' >
        <p className='w-[90%] mx-auto text-center font-bold  ' >CREATE A NEW COURSE</p>
      {/*-----course details-----*/}
      {/*----cover photo----*/}
      <div>
      <div className='h-fit w-full flex flex-col  mx-auto background mt-5 ' >{/*w-[90%]*/}
        <div className='font-mono ' >
          <p className='  italic  ' >cover image</p>
        </div>
        <div className=' p-6 flex flex-col ' >{/*w-[80%] sm:w-[70%]*/}
        {!imageUrl&&<input  type='file' accept="image/*" placeholder='eg basic computer knowledge ' onChange={handleImageChange} />}
        <div className='p-2' >
          {imageUrl&&<button className='text-red-500 h-[30px] w-[100px]  ' onClick={async(e:any)=>{
            e.preventDefault();
            //alert(courseInfo.coverimage)
            setImageUrl("")
            await del(courseInfo.coverimage,{
              // access: 'public',
               token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
           })
          }} ><FaTrash size={20} /></button>}
        </div>
        <div  >
        {imageUrl && (
         <div className='h-[200px]' >
           {imageUrl&&<Image className='object-fit mb-5  ' width={500} height={200} src={courseInfo.coverimage} alt="Uploaded Image" style={{ maxWidth: '100%' }} />}
           
         </div>
        )}
        {loadingImage&&<span className="loading loading-bars loading-lg text-[#e97902] "></span>}
        {!imageUrl&&<button className={`btn btn-ghost  h-[30px] w-[100px] mt-2`} onClick={handleImageUpload}><FaUpload size={20} /></button>}
        
        </div>
        </div>
      </div>
      
     
      
       {/*----cover photo----*/}
       <div>
       <div className='h-fit flex flex-col w-[90%] mx-auto background mt-5'>
        <div className='font-mono'>
            <p className='italic'>cover video</p>
        </div>
        <div className='w-[80%] sm:w-[70%] p-6 flex flex-col'>
            {!videoUrl && (
                <>
                    <input type="file" id="videoUpload" accept="video/*" placeholder='eg basic computer knowledge' onChange={handleVideoChange} />
                   {loadingVideo?<span className="loading loading-bars loading-lg text-[#e97902] "></span>:null}
                   {!videoUrl&& <button className='btn btn-ghost  h-[30px] w-[100px] mt-2 flex flex-row' onClick={handleVideoUpload}><FaUpload size={20} /><p></p></button>}
                </>
            )}
            <div className='p-2'>
                {videoUrl &&<button className='text-red-500 h-[30px] w-[100px]' onClick={async(e:any)=>{
                  e.preventDefault();
                  
                  //alert(courseInfo.covervideo)
                  setVideoUrl("")
                  await del(courseInfo.covervideo,{
                    // access: 'public',
                     token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
                 })
                 setVideoLoading(false)
                }}><FaTrash size={20} /></button>}
                </div>
            
            <div>
                {videoUrl && <video controls height={200} width={400} src={courseInfo.covervideo} />}
            </div>
        </div>
    </div>
        </div>
      </div>
      
     
      
      {/*---course name / Title ---*/}
      {/*
      <div className=' flex flex-col justify-between mx-auto background w-full ' >
        <div className='font-mono ' >
          <p className='italic' > course  name</p>
        </div>
        <input className='w-[90%] h-[70px] pl-3 ' type='text' placeholder='eg Project Managment ' onChange={(e:any)=>{
      const value = e.target.value;
      sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursename: value }));
    }} />
      </div>
      */}
      <label className="form-control  ">
  <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl ">course name</span>
    <span className="label-text-alt text-black font-mono font-semibold text-[14px] ">{info.courseName?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > eg web development 1</p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>}</span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black  " placeholder="enter course name" onChange={(e:any)=>{
      const value = e.target.value;
      sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursename: value }));
    }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 100 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>
      {/*---course category---*/}
      {/*
      <div className=' flex flex-col justify-evenly w-full mx-auto background mt-5 ' >
        <div className='font-mono ' >
          <p className='italic' > course category</p>
        </div>
        <input className='w-[90%] h-[70px] pl-3 ' type='text' placeholder='eg Information Technology ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursecategory: value }));
    }} />
      </div>
      */}

      <label className="form-control">
      <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl ">category</span>
    <span className="label-text-alt text-black font-mono font-semibold text-[16px] ">{info.courseCategory?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseCategory:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > eg information technology</p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseCategory:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>}</span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black " placeholder=" enter course category " onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursecategory: value }));
    }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 500 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>


      {/*---course code---*/}
      {/*
      <div className=' flex flex-col w-full justify-evenly mx-auto background mt-5 ' >
        <div className='font-mono ' >
          <p className='  italic' > course code</p>
        </div>
        <input className='w-[90%] h-[60px] pl-3 ' type='text' placeholder='eg IT245 ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, unitcode: value }));
    }} />
      </div>
      */}

      <label className="form-control">
      <div className="label">
    <span className="label-text  text-[#e97902] font-mono font-bold text-xl "> course code</span>
    <span className="label-text-alt text-black font-mono font-semibold text-[16px] ">
    {info.courseCode?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseCode:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > eg IT 205</p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseCode:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>}
    </span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black " placeholder=" enter course code " onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, unitcode: value }));
    }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 500 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>

      {/*course description */}
      {/*
      <div className=' flex flex-col w-full justify-between mx-auto background mt-5 ' >
        <div className='font-mono' >
          <p className=' italic' > course description</p>
        </div>
        <input className='w-[90%] h-[70px]  pl-3 ' type='text' placeholder='eg Learn to manage projects ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursedescription: value }));
    }} />
      </div>
      */}

      <label className="form-control">
      <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl"> description</span>
    <span className="label-text-alt text-black font-mono font-semibold text-[16px] ">{info.courseDescription?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseDescription:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > describe your project</p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseDescription:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>} </span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black " placeholder=" describe what your course here "  onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, coursedescription: value }));
    }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 500 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>

      {/*---course instructor(s)---*/}
     {/*
      <div className='mt-4 ' >
      <div className=' flex flex-col w-full mx-auto background mt-5 ' >
        <div className='font-mono ' >
          <p className=' italic  ' >course Instructors</p>
        </div>
        <input className='w-[90%] mx-auto h-[70px] pl-3 ' type='text' placeholder='eg basic computer knowledge ' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courseinstructor: value }));
    }} />
      </div>
     
      </div>
     */}

      <label className="form-control">
      <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl "> Instructor(s)</span>
    <span className="label-text-alt text-black font-mono font-semibold text-[16px] ">{info.courseInstructor?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseInstructor:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > who made the course?</p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseInstructor:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>} </span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black  " placeholder=" add your course instructors eg Joe Mwangi , Brian Morgan "  onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courseinstructor: value }));
    }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 500 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>
      {/*course requirements*/}
     {/*
      <div>
      <div className='h-[170px] flex flex-col w-full mx-auto background mt-5'>
        <div className='font-mono  '>
          <p className='italic'>course requirements</p>
        </div>
        <textarea className='w-[90%] mx-auto pl-3 p-2 re h-[100px] ' placeholder='eg basic computer knowledge' onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courserequirements: value }));
    }} />
        </div>

      
      </div>
     */}
      

      <label className="form-control">
      <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl "> requirements(s)</span>
    <span className="label-text-alt text-black font-mono font-semibold text-[16px] ">{info.courseRequirements?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseRequirements:false})
    }} ><p className='pt-4 text-center text-sm ' > eg basic computer knowledge </p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseRequirements:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>} </span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black " placeholder=" add your course instructors eg Joe Mwangi , Brian Morgan "  onChange={(e:any)=>{
      const value = e.target.value;
      //sessionStorage.setItem("s-fname",value);
      //@ts-ignore
      setCourseInfo(prevUser => ({ ...prevUser, courserequirements: value }));
    }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 500 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>
     {/*----create course button----*/}
     
      
      {/*if(courseInfo.covervideo){
          alert(JSON.stringify(courseInfo)+`${imageUrl}`+`${videoUrl}`)
        }*/}
      <button className='btn btn-success flex flex-row '  onClick={createCourse} > <p>Create Course</p> <FaUpload size={15} /></button>
     
      <p>{msg}</p>

    </form>
    </div>
  )
}

export default CreateCourse