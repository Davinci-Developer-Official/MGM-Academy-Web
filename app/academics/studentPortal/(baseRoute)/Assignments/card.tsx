import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaLock } from 'react-icons/fa'

//{ id: number; courseName: string; courseInstructor: string; coverImage: StaticImageData; locked: boolean; }; }
export interface Prop{
    id:number,   
    courseName:string,
    courseInstructor:string,
    coverImage:string|StaticImageData,
    locked:boolean
}
interface holder{
    items:Prop
}
function card({items}:holder) {
  return (
    <div key={items.id} className='text-[#e1b382] bg-[#2d545e] mt-[10px] w-[90%] mx-auto mb-[10px] rounded-md flex flex-row h-18 border-[2.7px]  border-[#2d545e] ' >
            <span className=' h-18 rounded-tl-md rounded-bl-md   w-[20%] ' >
            {typeof items.coverImage === "string" ? <Image className='rounded-tl-md rounded-bl-md'  src={items.coverImage} alt={`${items.courseName} cover photo` } style={{
                height:"100%",
                width:"100%",
                objectFit:"fill"
            }}  /> : <Image className='rounded-tl-md rounded-bl-md'  src={items.coverImage} alt={`${items.courseName} cover photo` } style={{
              height:"100%",
              width:"100%",
              objectFit:"fill"
          }}  /> }
            </span>
             <div className='flex flex-col text-black sm:pt-3 lg:pt-2 w-[80%] pl-10  p-2 ' >
                <p className='sm:text-[20px] md:text-[25px] lg:text-xl text-[#e1b382]  ' >{items.courseName}</p>
                <p className='sm:text-[15px] md:text-[17px] lg:text-base text-[#e1b382] ' > instructor: {items.courseInstructor}</p>
             </div>
             
             <button className='flex flex-row my-auto mr-2  btn  bg-[#e1b382] text-[#2d545e] hover:text-[#e1b382]  hover:bg-[#2d545e] hover:border hover:border-[#e1b382]' >{items.locked ? <FaLock/> : <p>View</p>}  </button>
            </div>
  )
}

export default card