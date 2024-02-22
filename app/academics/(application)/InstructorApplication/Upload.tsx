"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import profile from '@/public/profile/user.png'
import { FaEraser, FaPen, FaSave, FaTrash } from "react-icons/fa";

export default function App({initials}:any) {
  const [image, setImage] =useState(null); // Change to single image state
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
          <div className="upload__image-wrapper ">

      {image==null&&(
                 <div className="image-item flex flex-col justify-evenly ">
                <div className='  mx-auto p-4 '  >
                <p className=' p-4 font-mono font-bold ' >Add Profile picture</p>
                <div className='h-[200px] w-[200px]  bg-red-400  rounded-lg border-[#e97902] border ' >
                   {initials==""&& <Image src={profile} alt='profile image' className='object-fit h-full w-full rounded-lg ' />}
                   {initials!==""&&<p className="mt-[70px] text-center text-[40px] font-bold " >{initials}</p>}
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
            <button onClick={onImageRemoveAll}>Remove image</button> {/* Update button label */}
            {imageList.map((image:any, index) => (
              <div key={index} className="image-item flex flex-col justify-evenly ">
                    
                    <div className='  mx-auto p-4 '  >
                        <p className=' p-4 font-mono font-bold ' > Add Profile picture</p>
                            <div className='h-[200px] w-[200px]  bg-red-400  rounded-lg border-[#e97902] border ' >
                              <Image src={image.dataURL} alt='profile image' className='object-fit h-full w-full rounded-lg ' width="200" height="200" />
                            </div>
                    </div>
                    
                <div className="image-item__btn-wrapper my-auto mx-auto  w-[400px] flex flex-row  justify-evenly ">
                  <button className="btn btn-ghost " onClick={() => onImageUpdate(index)}><FaPen size={20} className="text-[#e97902]" />Change</button>
                  <button className="btn btn-ghost " onClick={() => onImageRemove(index)}><FaEraser size={20} className="text-[#e97902]"  />remove</button>
                  <button className="btn btn-ghost " onClick={() => onImageRemove(index)}><FaSave size={20} className="text-[#e97902]"  />save</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
