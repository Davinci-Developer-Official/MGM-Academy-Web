"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import profile from '@/public/profile/user.png'
import { FaEraser, FaMarker, FaPen, FaSave, FaTrash } from "react-icons/fa";
import { put } from "@vercel/blob";

export default function App({ initials , user,setUser }: any) {
  const [image, setImage] = useState(null); // Change to single image state
  const maxNumber = 1; // Limit to a single image

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    if (imageList.length > 0) {
      setImage(imageList[0] as never); // Set only the first image

    } else {
      setImage(null); // Reset image if no image is selected
    }
  };

  async function uploadImage(imageFile: any) {
    try {
      const blob = await put(imageFile.name, imageFile, {
        access: 'public',
        token: "vercel_blob_rw_SWkzW6EvztKyfVAE_ckiMkh9Y1t1EB3k3VAF7VZ8ZKhG106"// Pass the access token
      });
      console.log('Uploaded image:', blob);
      //alert("booo")
     // alert(JSON.stringify(blob.url))
      //sessionStorage.setItem("s-avatar",blob.url);
      // Remove revalidatePath('/') from client-side code
     
      //alert(user.avatar)
      if(user.avatar==""){
        //alert("boo")
        setUser((prevData:any)=>({...prevData,avatar: blob.url}));//(prevData:any)=>({...prevData,blob.url})
      }
      return blob;
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error as needed
      //alert(error); 
    }
  }
  //const avatarSrc = sessionStorage.getItem("s-avatar") || profile;
 // alert(avatarSrc)
  return (
    <div className="App">
      <ImageUploading
        value={image ? [image] : []} // Pass single image as array or empty array if no image
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper w-[55%] mx-auto ">
            {image == null && (
              <div className="image-item flex flex-col justify-evenly ">
                <div className='  justify-start p-4 '  >
                  <p className=' p-4 font-mono font-bold ' > Profile picture</p>
                  <div className='h-[200px] w-[200px]  bg-red-400  rounded-full border-[#e97902] border ' >
                    <Image src={profile} alt='profile image' className='object-fit h-full w-full rounded-lg' width={200} height={200} />
                    {/*<p className="mt-[70px] text-center text-[40px] font-bold absolute bg-blue-400 " >{initials}</p>*/}
                  </div>
                  <button className="mt-4 text-center "
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                </div>
              </div>
            )}
            &nbsp;
            {imageList.map((image: any, index) => (
              <div key={index} className="image-item flex flex-col justify-evenly ">
                <div className='  justify-start p-4 '  >
                  <p className=' p-4 font-mono font-bold ' >  Profile picture</p>
                  <div className='h-[200px] w-[200px]  bg-red-400  rounded-lg border-[#e97902] border ' >
                    <Image src={image.dataURL} alt='profile image' className='object-fit h-full w-full rounded-lg ' width="200" height="200" />
                  </div>
                </div>
               {user.avatar!==""?<p className="text-green-500 " >saved successfully </p>:<p className="text-red-500" >you have not saved the image</p>}
                <div className="image-item__btn-wrapper my-auto mx-auto w-full flex flex-row  justify-start ">
                  
                  <button className="btn btn-ghost " onClick={() => onImageRemove(index)}><FaTrash size={20} className="text-[#e92502]" /></button>
                  {user.avatar==""?<button className="btn btn-ghost " onClick={() => uploadImage(image.file)}><FaSave size={20} className="text-[#42b626]" /></button>:<button className="btn btn-ghost " onClick={() => onImageUpdate(index)}><FaMarker size={20} className="" /></button>}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
