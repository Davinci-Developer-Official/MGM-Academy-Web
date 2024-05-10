import Image from 'next/image'
import React from 'react'
import img from '@/public/empowerment/1.jpeg'
import { FaDownload } from 'react-icons/fa'

function page() {
  return (
    <div className='w-full h-full background overflow-y-scroll ' >
     <div className='text-center  p-5 font-bold font-serif  ' >
     <p  >Gender Studies 101 </p>
     <p>E-404 </p>
     <p>Gender Studies</p>
     <p>MGM Academy </p>
     </div>
      <div  >
      <figure className='avatar w-[30px] ml-4 ' >
        <Image src={img} alt="" className='ob'    />
      </figure>
     <div className='w-full flex flex-row  justify-between  ' >
       <p className='pb-4 pl-2 font-semibold font-serif ' >by Emily Mwangi</p> 
       <button className='btn btn-ghost pb-4 pr-2 flex flex-row ' ><FaDownload size={20} /><p className='label  ' >4</p></button>
      </div>
      </div>
      <figure className='w-[80%] mx-auto  bg-red-500 h-[200px] ' >
        <Image src={img} alt='cover image ' className='object-fit h-full w-full  ' />
      </figure>
      <div className='p-5  ' >
        <p className='text-center font-semibold font-serif  ' >course description</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates est praesentium tempore. Beatae excepturi expedita, odit architecto soluta, quo quod dolorem laboriosam, suscipit assumenda cupiditate. Voluptatum aperiam tempora reiciendis. </p>
      </div>
      <div className='w-full flex flex-row h-[40px]   justify-between  mt-2 ' >
        <button className='btn btn-ghost  ' >prev</button>

        <button className='btn btn-ghost  ' >next</button>
      </div>
    </div>
  )
}

export default page