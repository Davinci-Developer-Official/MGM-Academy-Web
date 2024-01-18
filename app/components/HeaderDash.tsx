'use client';
import React, { useEffect, useState } from 'react'
import FindCourse from './FindCourse'
import { FaBackspace, FaEraser, FaHome, FaSearch } from 'react-icons/fa'
import { Course } from '../academics/(portals)/studentPortal/(baseRoute)/courses/list';

function HeaderDash() {
  const url = "https://65644addceac41c0761dd04d.mockapi.io/users/api/profile";
 
  const[data,setData]=useState<Course[]>([]); 
  //Dealing with api Data;
  async function DataSorting(){
    const response = await fetch(url,{
        method:"GET",
        cache:"no-cache",
    })
    const courses:Course[] = await response.json();
    setData(courses);
};
const [inputString, setInputString] = useState<string>('');
const [filteredStrings, setFilteredStrings] = useState<Course[]>([]);
const[value,setValue]=useState<string>("")


const filterAndCheck = (searchValue:any) => {
  setInputString(searchValue)
  const filteredArray = data.filter((str:any) => {
    // Case-insensitive comparison for string closeness
    return Object.values(str).join().toLowerCase().includes(inputString.toLowerCase());
  });

  setFilteredStrings(filteredArray);
  //alert(JSON.stringify(filteredStrings))
};
 
  useEffect(()=>{
    DataSorting()
  },[filteredStrings,data])
  return (
    <div className=' flex flex-col  ' >
      
    {/*<div className='flex flex-row  justify-evenly w-full pt-5   ' >*/}
      {/* <button className=" sm:w-[20%] lg:w-[10%] rounded-md border border-[#e1b382] flex flex-row p-[5px] text-[#e1b382] bg-gradient-to-r from-[#2d545e] normal-case text-xl sm:text-base justify-around "  >  
       <FaHome size={20} className="mt-[5px]" />
        <p className=' p-[5px] ' >Dashboard</p>
       </button>*/}
       <div className='w-[80%] mx-auto border-none border-0  justify-around flex flex-row rounded-tl-md rounded-bl-md mt-5 ' >
        <input placeholder=' Search courses ' value={value} className=' w-full h-full border-solid border border-t-0 border-l-0 border-r-0  border-b-[#e1b382] text-[#2d545e] bg-white p-2 rounded-tl-md rounded-bl-md  ' onChange={e=>filterAndCheck(e.target.value)}   />
      <button className='p-2 text-[#2d545e] hover:text-[#e1b382] bg-white hover:bg-[#2d545e] rounded-tr-md rounded-br-md w-[40px] ' onClick={()=>{
        setValue("")
      }} >
        <FaBackspace size={20} />
      </button>
       
       </div>
      {/*</div> */}
       {inputString.length !== 0 && (
        <div className=' rounded-md top-4 h-[400px]  bg-[#2d545e] w-[80%] mx-auto overflow-y-scroll  ' style={{
          zIndex:100
        }}  >
          {filteredStrings.map(item=>(
            <div key={item.id} className='bg-[#e1b382] text-[#2d545e] btn w-[96%] mx-auto h-[30px] mt-1 mb-1 rounded-md flex flex-row  justify-evenly ' onClick={()=>{
              setValue(item.coursename)
              setInputString("")
            }} >
              <p>{item.coursename}</p>
              <p>{item.courseinstructor}</p>
            </div>
          ))}
          
        </div>
       )}
       </div>
  )
}

export default HeaderDash