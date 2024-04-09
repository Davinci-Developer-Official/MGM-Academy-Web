"use client"
import { useEffect, useState } from "react";
import Details from "./details";
import Progress from "./Progress";
import Exposure from "./Exposure"
import Terms from "./Terms";
import Sendcode from "./Sendcode";
import Verify from "./Verify";
import Password from "./PasswordEntry";
import { FaChevronCircleDown, FaChevronCircleUp, FaFile } from "react-icons/fa";

export default function Form({setNavigation,navigation}:any){
    const[valueNo,setValueNo]=useState(0);
    const[slide1,setSlide1]=useState(true);
    const[slide2,setSlide2]=useState(false);
    const[slide3,setSlide3]=useState(false);
    const[slide4,setSlide4]=useState(false);
    const[slide5,setSlide5]=useState(false);
    const[addPassword,setAddPassword]=useState(false)

    //useEffect hook
    useEffect(()=>{
        //switching between slides
        function slideSwitcher(){
            if(slide1){
                setValueNo(20);
            }; 
            if(slide2){
                setValueNo(40);
            };
            if(slide3){
                setValueNo(60);
            };
            if(slide4) {
                setValueNo(80);
            };
            if(slide5) {
                setValueNo(100);
            };
        }//slide switcher function;
        slideSwitcher();//calling the slide switcher function;
    },[valueNo,slide1,slide2,slide3,slide4,slide5]);

    return(
        <>
        <div className='flex flex-row w-full justify-between p-4 ' >
      {!navigation&&<button className='btn btn-ghost flex flex-col ' onClick={()=>{
        setNavigation(true)
      }} >show menu<FaChevronCircleDown size={20} /></button>}
      {navigation&&<button className='btn btn-ghost flex flex-col ' onClick={()=>{
        setNavigation(false);
      }} ><FaChevronCircleUp size={20} />hide menu</button>}
      <div className=" normal-case text-xl  ml-4 p-2 font-mono "> instructor application  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaFile size={20} /></button>
    </div>
        <Progress valueNo={valueNo} />
        {slide1&&(<div className="overflow-y-scroll h-screen " ><Details setSlide1={setSlide1} setSlide2={setSlide2} /></div>)}
        {slide2&&(<div className="h-screen" ><Terms setSlide2={setSlide2} setSlide3={setSlide3} /></div>)}
        {slide3&&(<div className="h-screen " ><Exposure setSlide3={setSlide3} setSlide4={setSlide4}  /></div>)}
        {slide4&&(<div className="h-screen " ><Sendcode setSlide4={setSlide4} setSlide5={setSlide5} /></div>)}
        {slide5&&(<div className="h-screen " ><Verify setSlide5={setSlide5} setAddPassword={setAddPassword} /></div>)}
        {addPassword&&<div className="h-screen " ><Password  /></div>}
        </>
    );
}