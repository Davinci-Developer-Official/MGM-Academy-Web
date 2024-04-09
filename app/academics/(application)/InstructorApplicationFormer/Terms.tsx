import React from 'react'
import TOA from "./terms.json"
import { FaCaretRight } from 'react-icons/fa'

function Terms({setSlide2,setSlide3}:any) {
  return (
    <div className='w-[60%] mx-auto  h-[700px] font-mono ' >
    <div>
        <p className='text-center font-bold text-xl text-[#e97902] ' >Terms of agreement</p>
        {/*Terms of Agreements*/}
        <div className='overflow-y-scroll h-[640px] w-full p-4 border inset ' >
            <p>{TOA.terms_statement}</p>
        </div>
        {/*Agree to terms*/}
        <div className='flex flex-row w-[90%] mx-auto mt-1 ' ><input type="checkbox" className='h-[20px] w-[20px]   ' /><p className='text-center pl-2 text-[#e97902] font-bold ' > I agree to the terms </p></div>
    </div>
    {/*continue*/}
    <button className='w-[80%] ml-[10%] btn btn-success mt-4 justify-between ' onClick={()=>{
        setSlide2(false);
        setSlide3(true);
    }}  >continue <FaCaretRight size={20} /> </button>
    </div>
  )
}

export default Terms