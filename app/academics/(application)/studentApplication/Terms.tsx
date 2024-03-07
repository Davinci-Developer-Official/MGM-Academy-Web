'use client';
import React, { useState } from 'react'
import TOA from "./terms.json"
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

function Terms({setSlide2,setSlide3,setSlide1}:any) {
  
    const [accepted, setAccepted] = useState(false);

    const handleAcceptance = () => {
      setAccepted(true);
      // You can implement further actions upon acceptance here
    };
  
    return (
      <div className='w-[70%] mx-auto mt-10 font-mono  ' >
        <button className='flex flex-row btn btn-ghost ' onClick={()=>{
          setSlide2(false);
          setSlide1(true);
        }} > <FaCaretLeft size={20} /> back</button>
        <h2 className='text-[#e97902] text-center font-bold ' >Terms of Agreement</h2>
        <div>
          <p className='font-semibold text-[18px] ' >
          MGM Institute champions gender equality and women's empowerment through inclusivity, equity, and social justice. Join us in reshaping norms and advancing women's rights.
          </p>
          <div className='overflow-y-scroll h-[400px] mt-3 w-[90%] mx-auto ' >
            {TOA.map((term)=>(
              <div key={term.id} >
                <p className='font-bold  ' >{term.term}</p>
                <p className=' ' >{term.term_description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-2' >
          <input type="checkbox" id="accept" onChange={handleAcceptance} />
          <label htmlFor="accept" className='font-bold' >I accept the Terms of Agreement</label>
        </div>
        {accepted && (
          <div>
            <p>Thank you for accepting the Terms of Agreement.</p>
            {/* You can render further content here upon acceptance */}
            <button className='btn btn-success w-[80%] mx-auto mt-5 flex flex-row ' onClick={()=>{
              setSlide2(false);
              setSlide3(true);
            }} >
              continue <FaCaretRight size={20} />
            </button>
          </div>
        )}
      </div>
    );
  
}

export default Terms;