"use client"
import { useEffect, useState } from 'react';
import { FaBinoculars, FaDotCircle, FaTimes, FaUnlock } from 'react-icons/fa';
import Searchbar from './Searchbar';
import CourseCard from './CourseCard';
import ba from "../public/placeholders/ba.jpeg";
import bb from "../public/placeholders/bb.jpeg";
import bc from "../public/placeholders/bc.jpeg";

const UnlockPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const digits = [
    {
        id:1,
        handle:1,
    },{
        id:2,
        handle:2,
    },{
        id:3,
        handle:3,
    },{
        id:4,
        handle:4,
    },{
        id:5,
        handle:5,
    },{
        id:6,
        handle:6,
    },{
        id:7,
        handle:7,
    },{
        id:8,
        handle:8,
    },{
        id:9,
        handle:9,
    }
  ];

  const [statusData,setStatusData] = useState(false);
  const[entryData,setEntryData]=useState(0);
  const[tapData,setTapData]=useState(0);
  useEffect(()=>{

  },[entryData,tapData])
  function unlock(){
    const placeholder = 8842;

    if(entryData == placeholder || tapData == placeholder){
        setStatusData(true)
    }else{
        setStatusData(false)
    }
  }
 

  return (
    
    <div>
      <button className="btn flex flex-row" onClick={openModal}>
        <FaUnlock/> Unlock 
      </button>
      {modalIsOpen && (
        <dialog
          id="my_modal_3"
          className="modal bg-green-900 w-[99%] mx-auto h-[99%] my-auto rounded-md flex flex-col"
          open
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute text-yellow-300  right-2 top-2"
            onClick={closeModal}
          >
            <FaTimes size={20} />
          </button>
          <div className="mb-2 text-yellow-300 text-xl pt-3 pb-3 text-bold ">Unlock MGM</div>
         
          <div className='mt-20' >
         <div className='flex flex-row h-14 mb-4 bg-white rounded-xl' >
         <input 
            maxLength={8}
            value={JSON.stringify(tapData) || JSON.stringify(entryData) }
             className='h-14  w-[250px] rounded-md bg-white placeholder-black text-black pl-8  ' 
             placeholder='   Enter Pin  '  />
         <div className={statusData===true ? 'bg-yellow-600 btn  w-[40px] mx-auto h-[40px] my-auto  ':'bg-black    w-[20px] mx-auto h-[20px] my-auto rounded-full '} ></div>
         </div>
          <div className="grid  grid-cols-3 gap-1  w-[300px] mx-auto h-[300px] my-auto overflow-y-auto " >
          <button className=' btn text-black btn-error   ' onClick={unlock} >clear</button>
          {digits.map((handler) => (
             <button key={handler.id} className='btn bg-black text-yellow-400 ' onClick={()=>{
                const pan =(handler.handle)}
            }  > {handler.handle}</button>
            ))}
             <button className=' btn text-black btn-success   ' onClick={unlock} >unlock</button>

          </div>
          </div>
         
        </dialog>
      )}
    </div>
  );
};

export default UnlockPage;
