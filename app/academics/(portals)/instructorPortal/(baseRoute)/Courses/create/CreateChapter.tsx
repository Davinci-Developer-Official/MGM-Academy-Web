'use client';
import React, { useEffect, useState } from 'react'
import { FaCaretRight, FaCheckCircle, FaCheckDouble, FaFile, FaFilePdf, FaFileWord, FaInfoCircle, FaPen, FaPlus, FaTicketAlt, FaTimes, FaTimesCircle, FaTrash, FaUpload } from 'react-icons/fa'
import dummyPic from "@/public/empowerment/1.jpeg"
import axios from 'axios';
import Image from 'next/image';
import { put, del } from "@vercel/blob";
import { revalidatePath } from 'next/cache';


function CreateChapter({ setCreateChapter, setSuccessfulUpload, setFailedUpload }: any) {
    const [chapterInfo, setChapterInfo] = useState<{
        course_id: string;
        chapter_cover: string;
        chapter_title: string;
        chapter_description: string;
        chapter_content: string;
        chapter_video: string;
        fileData: string[]; // Specify the correct type for fileData
    }>({
        course_id: "6df323g344dsas34344d4r73gd37gd239ha3byd384bj344323",
        chapter_cover: "",
        chapter_title: "",
        chapter_description: "",
        chapter_content: "",
        chapter_video: "",
        fileData: []
    });
    
    //image change event;
    const [imageUrl, setImageUrl] = useState<string>("")

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to hold the selected file
    const [loadingImage, setImageLoading] = useState<boolean>(false);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        //@ts-ignore
        setSelectedFile(file);
    };
    const handleImageUpload = async (e: any) => {
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
            if (imageBlob) {
                setImageLoading(false)
            }

            // Set the URL in state to display the image
            setImageUrl(imageBlob.url);
            setChapterInfo(prevUser => ({ ...prevUser, chapter_cover: imageBlob.url }));
        } catch (error) {
            console.error('Error reading file:', error);
            // alert(error)
        }
    };


    const [videoUrl, setVideoUrl] = useState<string>("");
    const [loadingVideo, setVideoLoading] = useState<boolean>(false);
    //const [courseInfo, setCourseInfo] = useState<{ covervideo: string }>({ covervideo: "" });
    const [selectedFile1, setSelectedFile1] = useState<File | null>(null); // State to hold the selected file
    
    //video change event;
    //const [videoUrl, setVideoUrl] = useState<string>("");
    //const [files, setFiles] = useState<ArrayBuffer | null>(null); // Assuming files will be stored as a string
    const [courseInfos, setCourseInfos] = useState<{ covervideo: string }>({ covervideo: "" });
    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        //@ts-ignore
        setSelectedFile1(file);
    };

    const handleVideoUpload = async (e: any) => {
        e.preventDefault();
        if (!selectedFile1) return;
        setVideoLoading(true)//loading when image uploads
        try {
            // Read the file data
            const data = await selectedFile1.arrayBuffer();

            // Upload the file data using put
            const videoBlob = await put(selectedFile1.name, data, {
                access: 'public',
                token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
            });

            // Check if videoBlob is not empty
            if (videoBlob && videoBlob.url) {
                // Set the URL in state to display the video
                setVideoUrl(videoBlob.url);
                setChapterInfo(prevInfo => ({ ...prevInfo, chapter_video: videoBlob.url }));
                setVideoLoading(true);
            } else {
                console.error('VideoBlob is empty or does not have a URL');
            }

        } catch (error) {
            console.error('Error reading file:', error);
            // alert(error)
        }
    };

   
       
    const [msg, setMsg] = useState("")
    //uploading course data;
    async function createCourse(e: any) {
        e.preventDefault()
        alert(JSON.stringify(chapterInfo))
        //Todo(22/04/2024): remake the chapter upload to be simpler
        if (chapterInfo.chapter_video || chapterInfo.chapter_cover) {
            await axios.post("/api/add_chapter", {
                chapter_cover:chapterInfo.chapter_cover,
                chapter_video: chapterInfo.chapter_video,
                chapter_title: chapterInfo.chapter_title,
                chapter_description: chapterInfo.chapter_description,
                chapter_content: chapterInfo.chapter_content,
                course_id: chapterInfo.course_id,
                fileData: chapterInfo.fileData,
                
            }).then(() => {
                setCreateChapter(false);
                setSuccessfulUpload(true);
                // //showEditor(true)
                //alert("nooo")
                console.log("uploaded sucessfully")
                setMsg("uploaded sucessfully")
            })
        } else {
            //alert("zii")
            console.log("error uploading")
            setMsg("cover image or cover video is empty unable to upload")
            if (msg == "cover image or cover video is empty unable to upload") {
                setFailedUpload(false)
                alert("boo")
            } else {
                setCreateChapter(false)
                setFailedUpload(true)
            }

        }
    }
    const [fileData, setFileData] = useState([]);
    const[fileDetails,setFileDetails]=useState(false)
    const [selectedFile2, setSelectedFile2] = useState<File | null>(null); // State to hold the selected file
    const[newFile,setNewFile]=useState(false)
    const[indexing,setIndexing]=useState(0)
    const [uploadedFiles, setUploadedFiles] = useState(Array(fileData.length).fill(false));
    const [loadingFile, setLoadingFile] = useState(false);
    function handleChangeFile(e: any) {
        e.preventDefault();
        const files = e.target.files[0];
        //alert(files)
        if (!files || files.length === 0) {
            console.error('No files selected.');
            return;
        }else{
            //files to be uploaded
            setSelectedFile2(files);
        }
        //@ts-ignore
        const newFiles = Array.from(files).map((file:any) => file.name);
        const format = Array.from(files).map((file:any) => file.type)
        const uploadTime = Array.from(files).map((file:any) => file.lastModified)
        const size = Array.from(files).map((file:any) => file.size)
        
        // Select the first file from the list of files
        //const selectedFilez = newFiles[indexing];
        if(fileData.length==0){
            //@ts-ignore
        setFileData(prevFiles => [...prevFiles, files.name]);
        //alert(JSON.stringify(fileData))
        //alert(JSON.stringify(newFiles))
        //alert("null")
        }else if (fileData.length!==0) {
             //@ts-ignore
        setFileData(prevFiles => [...prevFiles, files.name]);
        setNewFile(true)
            //@ts-ignore
            //setSelectedFile2(selectedFilez); // Set the first file as the selected file
           // alert(JSON.stringify(fileData))
        } else {
            console.error('No files selected.');
        }
    }
    
    
    async function uploadFile(file: File) {
        try {
            setLoadingFile(true);
            // Read the file data
            const data = await file.arrayBuffer();
            
            // Upload the file data using @vercel/storage
            const response = await put(file.name, data, {
                access: 'public',
                token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
            });
    
            // Check if response is not empty and contains a URL
            if (response && response.url) {
                // Set the URL in state to display the video
                setNewFile(false);
               // alert("ziii")
                setChapterInfo(prev => ({
                    ...prev,
                    fileData: [...prev.fileData, response.url]
                }));
            } else {
                console.error('Uploaded file is empty or does not have a URL');
            }
    
            return response; // Return the uploaded file data
        } catch (error) {
            console.error('Error uploading file:', error);
            return null; // Return null in case of error
        }
    }
    
    
   {/* // Example usage
    async function handleFileUpload(files) {
        try {
            const uploadedFiles = await uploadFiles(files);
            console.log('Uploaded files:', uploadedFiles);
            // Do something with the uploaded files
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    }*/}
    
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
    useEffect(() => { }, [info,selectedFile2,uploadedFiles,fileData,chapterInfo,indexing,newFile,selectedFile2,fileData,videoUrl, imageUrl, loadingImage, loadingVideo,  msg])
    return (
        <div>
            {/*overflow-y-scroll*/}
            <form className='background p-10 w-full h-fit flex flex-col ' >
                <p className='w-[90%] mx-auto text-center font-bold  ' >CREATE A NEW CHAPTER</p>
                {/*-----course details-----*/}
                {/*----cover photo----*/}
                <div>
                    <div className='h-fit w-full flex flex-col  mx-auto background mt-5 ' >{/*w-[90%]*/}
                        <div className='font-mono ' >
                            <p className='  italic  ' >chapter cover </p>
                        </div>
                        <div className=' p-6 flex flex-col ' >{/*w-[80%] sm:w-[70%]*/}
                            {!imageUrl && <input type='file' accept="image/*" placeholder='eg basic computer knowledge ' onChange={handleImageChange} />}
                            <div className='p-2' >
                                {imageUrl && <button className='text-red-500 h-[30px] w-[100px]  ' onClick={async (e: any) => {
                                    e.preventDefault();
                                    //alert(courseInfo.coverimage)
                                    setImageUrl("")
                                    await del(chapterInfo.chapter_cover, {
                                        // access: 'public',
                                        token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
                                    })
                                }} ><FaTrash size={20} /></button>}
                            </div>
                            <div  >
                                {imageUrl && (
                                    <div className='h-[200px]' >
                                        {imageUrl && <Image className='object-fit mb-5  ' width={500} height={200} src={chapterInfo.chapter_cover} alt="Uploaded Image" style={{ maxWidth: '100%' }} />}

                                    </div>
                                )}
                                {loadingImage && <span className="loading loading-bars loading-lg text-[#e97902] "></span>}
                                {!imageUrl && <button className={`btn btn-ghost  h-[30px] w-[100px] mt-2`} onClick={handleImageUpload}><FaUpload size={20} /></button>}

                            </div>
                        </div>
                    </div>

                    {/*course description */}
                    {/*<div className=' flex flex-col w-full justify-between mx-auto background mt-5 ' >
                        <div className='font-mono' >
                            <p className=' italic' > chapter title</p>
                        </div>
                        <input className='w-[90%] h-[70px]  pl-3 ' type='text' placeholder='eg Learn to manage projects ' onChange={(e: any) => {
                            const value = e.target.value;
                            //sessionStorage.setItem("s-fname",value);
                            //@ts-ignore
                            setChapterInfo(prevUser => ({ ...prevUser, chapter_title: value }));
                        }} />
                    </div>*/}

                    <label className="form-control  ">
  <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl "> chapter title </span>
    <span className="label-text-alt text-black font-mono font-semibold text-[14px] ">{info.courseName?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > eg Introduction </p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>}</span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black  " placeholder="enter chapter title " onChange={(e: any) => {
                            const value = e.target.value;
                            //sessionStorage.setItem("s-fname",value);
                            //@ts-ignore
                            setChapterInfo(prevUser => ({ ...prevUser, chapter_title: value }));
                        }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 100 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>

                    {/*---course instructor(s)---*/}
                   {/*
                    <div className='mt-4 ' >
                        <div className=' flex flex-col w-full mx-auto background mt-5 ' >
                            <div className='font-mono ' >
                                <p className=' italic  ' >chapter description</p>
                            </div>
                            <textarea className='w-[90%] mx-auto pl-3 p-2 re h-[100px] ' placeholder='eg basic computer knowledge' onChange={(e: any) => {
                                const value = e.target.value;
                                //sessionStorage.setItem("s-fname",value);
                                //@ts-ignore
                                setChapterInfo(prevUser => ({ ...prevUser, chapter_description: value }));
                            }} />
                        </div>

                    </div>
                   */}

                    <label className="form-control  ">
  <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl "> description </span>
    <span className="label-text-alt text-black font-mono font-semibold text-[14px] ">{info.courseName?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > eg Introduction </p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>}</span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black  " placeholder="enter chapter title " onChange={(e: any) => {
                                const value = e.target.value;
                                //sessionStorage.setItem("s-fname",value);
                                //@ts-ignore
                                setChapterInfo(prevUser => ({ ...prevUser, chapter_description: value }));
                            }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 100 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>
                    {/*course requirements*/}
                    {/* 
                    <div>
                        <div className='h-fit flex flex-col w-full mx-auto background mt-5'>
                            <div className='font-mono  '>
                                <p className='italic'>chapter content</p>
                            </div>
                            <textarea className='w-[90%] mx-auto pl-3 p-2 re h-[500px] ' placeholder='eg basic computer knowledge' onChange={(e: any) => {
                                const value = e.target.value;
                                //sessionStorage.setItem("s-fname",value);
                                //@ts-ignore
                                setChapterInfo(prevUser => ({ ...prevUser, chapter_content: value }));
                            }} />
                        </div>


                    </div>
                    */}

                    <label className="form-control  ">
  <div className="label">
    <span className="label-text text-[#e97902] font-mono font-bold text-xl "> content  </span>
    <span className="label-text-alt text-black font-mono font-semibold text-[14px] ">{info.courseName?<div className='flex flex-row justify-between  ' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:false})
    }} ><p className='pt-4 text-center text-sm  pl-[7.5px]' > eg Introduction </p><button className='btn btn-ghost' ><FaTimesCircle size={15} /></button>  </div>:<button className='btn btn-ghost' onClick={(e:any)=>{
      e.preventDefault();
      //@ts-ignore
      setInfo({courseName:true})
    }}  ><FaInfoCircle className=' text-black ' size={20} /></button>}</span>
  </div>
  <textarea className="textarea textarea-bordered h-24 bg-slate-200 placeholder-black  " placeholder="enter chapter title " onChange={(e: any) => {
                                const value = e.target.value;
                                //sessionStorage.setItem("s-fname",value);
                                //@ts-ignore
                                setChapterInfo(prevUser => ({ ...prevUser, chapter_content: value }));
                            }} ></textarea>
  <div className="label  ">
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">max length 2,000 words</span>
    <span className="label-text-alt text-black font-mono font-bold text-[12px] ">Expand</span>
  </div>
</label>

                    {/*----cover video----*/}
                    <div>
                        <div className='h-fit flex flex-col w-[90%] mx-auto background mt-5'>
                            <div className='font-mono'>
                                <p className='italic'>cover video</p>
                            </div>
                            <div className='w-[80%] sm:w-[70%] p-6 flex flex-col'>
                                {!videoUrl && (
                                    <>
                                        <input type='file' accept="video/*" placeholder='eg basic computer knowledge' onChange={handleVideoChange} />
                                        {loadingVideo ? <span className="loading loading-bars loading-lg text-[#e97902] "></span> : null}
                                        {!videoUrl && <button className='btn btn-ghost  h-[30px] w-[100px] mt-2 flex flex-row' onClick={handleVideoUpload}><FaUpload size={20} /><p></p></button>}
                                    </>
                                )}
                                <div className='p-2'>
                                    {videoUrl && <button className='text-red-500 h-[30px] w-[100px]' onClick={async (e: any) => {
                                        e.preventDefault();

                                        //alert(courseInfo.covervideo)
                                        setVideoUrl("")
                                        await del(chapterInfo.chapter_video, {
                                            // access: 'public',
                                            token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
                                        })
                                        setVideoLoading(false)
                                    }}><FaTrash size={20} /></button>}
                                </div>

                                <div>
                                    {videoUrl && <video controls height={200} width={400} src={chapterInfo.chapter_video} />}
                                </div>
                            </div>
                        </div>
                        {/*files*/}
                        <div>
    {selectedFile2==null?<input onChange={handleChangeFile} type='file' accept='.pdf,.zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' multiple={false} />:
    <button className='btn ' onClick={()=>{
        if (selectedFile2 !== null) {
                
            setSelectedFile2(null); // Clear selectedFile2 if it's not empty
        }
    }} >add file </button>}
    {indexing==0?<p className='text-xs text-red-600'>no file uploaded</p>:
    <p className='font-mono text-sm  p-2 ' >{indexing} file uploaded</p>}
        <div className='h-[150px] w-full overflow-y-auto'>
            {fileData.map((file, index) => (
                <div className='flex flex-row justify-between w-full '  key={index}>
                    <div className='w-[50px] p-4 h-[50px] bg-red-500 mt-2 mb-2 rounded'>
                        <FaFilePdf size={20} className='mx-auto' />
                    </div>
                    <div className='text-xs font-mono pt-6 pl-2 '>{file}</div>
                    {uploadedFiles[index] ? (
                        <p className='text-xs font-mono pt-6 pl-2 text-green-600 ' ><FaCheckCircle size={15} /></p>
                    ) : (
                        <button className='btn btn-ghost text-xs' onClick={async(e) => {
                        e.preventDefault();                            
                        if(selectedFile2!==null){
                        await uploadFile(selectedFile2)
                        .then(()=>{
                            const newUploadedFiles = [...uploadedFiles];
                            newUploadedFiles[index] = true;
                            setUploadedFiles(newUploadedFiles);
                            //alert("yes")                            
                            let newIndex= index+1
                            setIndexing(newIndex)
                            //alert(indexing)                            
                        })                         
                        };
                        }}>
                            <FaUpload size={15} /> Upload
                        </button>
                    )}
                    {uploadedFiles[index] && (
    <button
        className='text-red-500 h-[10px] btn btn-ghost btn-circle bg-[#f1ede8] w-[20px]  mt-2 ml-5'
        onClick={async (e: any) => {
            e.preventDefault();

            const indexToRemove = index;

            // Create a new array without the item at indexToRemove
            const updatedFileData = chapterInfo.fileData.filter((_, index) => index !== indexToRemove);
            const updatedFileDatas = fileData.filter((_, index) => index !== indexToRemove);
            const newRemovedFiles = uploadedFiles.filter((_, i) => i !== index);
            // Update the state with the new array
            setChapterInfo(prev => ({
                ...prev,
                fileData: updatedFileData
            }));
                 //@ts-ignore
            setFileData(updatedFileDatas);
            const x = indexing-1
            setIndexing(x)
            
            setUploadedFiles(newRemovedFiles);
            //alert(chapterInfo.fileData)

            // You may want to uncomment and use this code to delete the file from storage
            
            await del(chapterInfo.fileData[index], {
                token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106" // Pass the access token
            })

            

            console.log(updatedFileData);
        }}
    >
        <FaTrash size={15} />
    </button>
)}

                </div>
            ))}
        </div>
    </div>

                    </div>
                </div>

                {/*{fileDetails && <div className='text-xs'>
                    
                    <div>Name: {file.name}</div>
                    
                    <div>Type: {file.type}</div>
                    
                    <div>Size: {file.size}</div>
                   
                    <div>Last Modified: {file.lastModified}</div>
                   
                </div>}*/}
                {/*----create course button----*/}


                {/*if(courseInfo.covervideo){
          alert(JSON.stringify(courseInfo)+`${imageUrl}`+`${videoUrl}`)
        }*/}
                <button className='btn btn-success flex flex-row ' onClick={createCourse} > <p>Create Chapter</p> <FaUpload size={15} /></button>

                <p>{msg}</p>
               
            </form>
        </div>
    )
}

export default CreateChapter