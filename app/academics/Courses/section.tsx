'use client';
import Image from 'next/image'
import data from './data.json'
import img from '@/public/empowerment/1.jpeg';
import { FaCaretDown, FaCartPlus,FaEraser,FaStar,FaStarHalfAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

interface Data {
    id:number,
    category:string,
}


export default function Section(){

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
    const[selectedCategory,setSelectedCategory]=useState("")
    return(
        //rendered courses;
        <div className='flex flex-col' >
            {/*filter course category*/}
        <div className='flex flex-row justify-evenly ' >
            <p className='btn btn-ghost font-bold text-xl ' >MGM Courses</p>
            <div className='flex flex-col' >
            <button className='btn btn-ghost' onClick={()=>{
                setRenderCategory(true);
            }} >Category: 
                {selectedCategory!==""&&<p>{selectedCategory}</p>}
                {selectedCategory==""&&<p>ALL</p>}
                 <FaCaretDown size={20} />
            </button>
            {renderCategory&&<ul className=' h-[100px] rounded-md  border-[#e1b382] border overflow-y-scroll ' >
                {category.map((items)=>(<div key={items.id} >
                    <button className='btn btn-ghost' onClick={()=>{
                        setSelectedCategory(items.category);
                        setRenderCategory(false);
                    }} > <input type='radio'    /> {items.category}</button>
                </div>))}</ul>}</div>
        </div>
        {/*mapping courses*/}
        <div className=' h-screen overflow-y-scroll grid lg:grid-cols-2 md:grid-cols-2 gap-1  ' >
            {/*mapped courses*/}
            {data.courses.map((item)=>(
                //course card;
                <div key={item.id} className='background card text-[#e1b382] border-[1px]  border-solid  rounded-md w-[95%] mx-auto mb-5 mt-5 h-fit ' >
                {/*course card details*/}
                <div className='flex flex-row  w-[100%] h-[300px] rounded-tl-md rounded-tr-md ' >
                {/*cover image*/}
                <div className='w-[70%] border-[2px] rounded-tl-md rounded-br-md  ' >
                <Image src={img} alt='cover image' className='w-full object-fit h-full '  />
                </div>
                {/*Course info*/}
                <div className=' w-[30%]  rounded-tr-md ' >
                {/*course name*/}
                <div className='h-fit p-1 rounded-tr-md flex flex-col ' >
                <p className='text-white' >Course category:</p>
                <p className='h-[20px] p-1  ' >{item.category}</p>
                </div>
                {/*course code*/}
                <div className='flex flex-col p-1 w-full h-[40px]  ' >
                <p className=' text-white ' >Class code:</p>
                <p className='p-1 ' > {item.code}</p>
                </div>
                {/*course rating*/}
                <div className=' p-2 mt-6  ' >
                <p className='text-white  ' >Rating:</p>
                <p className='h-[30px]  p-[5px] flex flex-row ' >
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                </p>
                </div>
                {/*view || purchase course */}
                <div className='w-full p-1  flex flex-col ' >
                <Link href='/academics/Courses/content' className='btn btn-ghost bg-[#e1b382] text-[#2d545e] hover:text-[#e1b382] ' >View course (freemium)</Link>
                {/*Add to cart */}
                <button className='btn btn-ghost justify-between mt-1 ' >
                <FaCartPlus size={20} />
                <p>$50</p>
                </button>            
                </div>
                </div>
                </div>
                {/*course name*/}
                <div className='h-fit p-1 rounded-tr-md flex flex-col ' >
                <p className='text-white' >course name:</p>
                <p className='h-[30px]  p-1 ' >{item.name}</p>
                </div>
                {/*course description*/}
                <div className='p-1 flex flex-col ' >
                <p className='text-white ' >Course description: </p>
                <p className='h-[100px] p-2  ' >{item.description}</p>
                </div>
                {/*Requirements*/}
                <div className='p-1 ' >
                <p className='text-white' >Requirements:</p> 
                <p className='h-[50px] p-2  ' >{item.requirements}</p>
                </div>  
                {/*Requirements*/}
                <div className='p-1 ' >
                <p className='text-white' >Instructor(s):</p> 
                <p className='h-[50px] p-2  ' >JJ Laroche </p>
                </div>               
                </div>
            ))}
        </div>
        </div>
    )
}