'use client';
import Image from 'next/image'
import data from './data.json'
import img from '@/public/empowerment/1.jpeg';
import { FaArrowAltCircleLeft, FaBars, FaCaretDown, FaCartPlus,FaChevronDown,FaChevronUp,FaEraser,FaFemale,FaGraduationCap,FaStar,FaStarHalfAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';



interface Data {
    id:number,
    category:string,
}


export default function Section({setHideMenu,hideMenu}:any){

    const[category,showCategory]=useState([
        {
            id:1,
            category:"gender studies",
        },
        {
            id:2,
            category:"information Technology"
        },{
            id:1,
            category:"law studies",
        },
        {
            id:2,
            category:"journalism studies"
        }
    ]);
    const[renderCategory,setRenderCategory]=useState(false);
    const[selectedCategory,setSelectedCategory]=useState("");
    const[filteredData,setFilteredData]=useState([])

    
    return(
        //rendered courses;
        <div className='flex flex-col h-screen ' >
            {/*filter course category*/}
        <div className='flex flex-row h-fit  w-full justify-between p-4 ' >
            {hideMenu&&<button onClick={()=>{setHideMenu(false)}} ><FaChevronUp size={20} /></button>}
            {!hideMenu&&<button onClick={()=>{setHideMenu(true)}} ><FaChevronDown size={20} /></button>}
            
            <p className='btn btn-ghost font-bold lg:text-xl md:text-lg sm:text-sm ' >MGM Courses</p>
            <div className='flex flex-col' >
            <button className='btn btn-ghost h-fit  ' onClick={()=>{
                setRenderCategory(true);
            }} >
                {selectedCategory!==""&&<p className='sm:text-sm' >{selectedCategory}</p>}
                {selectedCategory==""&&<p>ALL</p>}
                 <FaCaretDown size={20} />
            </button>
        {renderCategory&&<ul className=' h-[400px] rounded-md background border-[#e1b382] border overflow-y-scroll absolute mt-10 ' >
                {category.map((items)=>(<div key={items.id} >
                    <button className='btn btn-ghost  w-[90%] ml-[5%] mt-2 outset  ' onClick={()=>{
                        setSelectedCategory(items.category);
                        setRenderCategory(false);
                    }} > {items.category} </button>
                </div>))}</ul>}</div>
        <button className='cursor-none '  ><FaGraduationCap size={30} /></button>
        </div>
        {/*mapping courses*/}
        <div className='  overflow-y-scroll  mb-2 ' >
            {/*mapped courses*/}
            <div className='w-[80%]  mx-auto grid lg:grid-cols-4  md:grid-cols-2 grid-col-1  gap-4 ' >
            {data.courses.map((item)=>(
            <Link href='/academics/Courses/content' key={item.id} className=' w-[300px] h-[300px] bg-white border-2  hover:border-2 hover:border-[#e2c5a6] hover:cursor-pointer rounded-md ' >
            <div className='  w-full  ' >
            <Image src={img} alt={`${item.course_name}cover image`} className='w-full object-fit h-full ' />
            </div>
            <p className='h-fit  p-[6px]  ' >{item.course_name}</p>
            <p className='h-[30px]  p-[5px]  ' >{item.course_instructors}</p>
            <p className='h-[30px]  p-1 ' >$200</p>
            </Link>
            ))}
            </div>
        </div>
        </div>
    )
}