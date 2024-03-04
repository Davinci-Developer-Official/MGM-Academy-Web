"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import profile from "@/public/profile/user.png";
import { FaEdit, FaPen, FaTrash } from "react-icons/fa";

export default function App() {
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
      //alert(JSON.stringify(image));
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
          <div className="upload__image-wrapper">
             {image==null&&(
                 <div className="image-item flex flex-col justify-evenly ">
                <div className='  mx-auto p-4 '  >
                <p className=' p-4 font-mono font-bold ' >Profile picture</p>
                <div className='h-[250px] w-[250px]  bg-red-400  rounded-full border-[#e97902] border ' >
                    <Image src={profile} alt='profile image' className='object-fit h-full w-full rounded-full ' />
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
            {/*<button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>*/}
            &nbsp;
           {/* <button onClick={onImageRemoveAll}>Remove image</button> */}
            
            {imageList.map((image:any, index) => (
              <div key={index} className="image-item flex flex-col justify-evenly ">
                    <div className='  mx-auto p-4 '  >
                        <p className=' p-4 font-mono font-bold ' >Profile picture</p>
                            <div className='h-[250px] w-[250px]  bg-red-400  rounded-full border-[#e97902] border ' >
                              <Image src={image.dataURL} alt='profile image' className='object-fit h-full w-full rounded-full ' width="200" height="200" />
                            </div>
                    </div>
                <div className="image-item__btn-wrapper my-auto mx-auto  w-[400px] flex flex-row  justify-evenly ">
                  <button className="btn btn-ghost " onClick={() => onImageUpdate(index)}><FaPen size={30} className="text-[#e97902]" />Change</button>
                  <button className="btn btn-ghost " onClick={() => onImageRemove(index)}><FaTrash size={30} className="text-[#e97902]"  />remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
