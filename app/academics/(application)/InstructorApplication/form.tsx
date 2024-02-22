"use client"
import { useEffect, useState } from "react";
import Upload from "./Upload" //../studentApplication/Uploader
import Details from "./details";
import Progress from "./Progress";
import Exposure from "./Exposure"

export default function Form(){
    const[valueNo,setValueNo]=useState(0);
    const[slide1,setSlide1]=useState(true);
    const[slide2,setSlide2]=useState(false);
    const[slide3,setSlide3]=useState(false);
    const[slide4,setSlide4]=useState(false);
    const[slide5,setSlide5]=useState(false);

    //useEffect hook
    useEffect(()=>{
        //switching between slides
        function slideSwitcher(){
            if(slide1==true){
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
        slideSwitcher()//calling the slide switcher function;
    },[valueNo,slide1,slide2,slide3,slide4,slide5])

    return(
        <>
        <Progress valueNo={valueNo} />
        {slide1&&(<div className="overflow-y-scroll h-screen " ><Details setSlide1={setSlide1} setSlide2={setSlide2} /></div>)}
        {slide2&&(<div className=" " ><Upload  /></div>)}
        {slide3&&(<div>slide3</div>)}
        {slide4&&(<div>slide4</div>)}
        {slide5&&(<div><Exposure/></div>)}
        </>
    );
}