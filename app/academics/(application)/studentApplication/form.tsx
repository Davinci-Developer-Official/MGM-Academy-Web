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
import axios from "axios";
import Link from "next/link";


interface User {
    avatar: any;
    first_name: any;
    middle_name: any;
    last_name: any;
    username: any;
    email: any;
    gender: any;
    nationality: any;
    residence: any;
    phone_number: any;
    date_of_birth: any;
    exposure: any;
    password: any;
};

export default function Form({setNavigation,navigation}:any){
    const[valueNo,setValueNo]=useState(0);
    const[slide1,setSlide1]=useState(true);//true
    const[slide2,setSlide2]=useState(false);
    const[slide3,setSlide3]=useState(false);
    const[slide4,setSlide4]=useState(false);
    const[slide5,setSlide5]=useState(false);
    const[addPassword,setAddPassword]=useState(false)
    const[uploading,setUploading]=useState(false)//false

    //user data
    const [user, setUser] = useState<User>({
        avatar: sessionStorage.getItem("s-avatar"),
        first_name: sessionStorage.getItem("s-fname"),
        middle_name: sessionStorage.getItem("s-mname"),
        last_name: sessionStorage.getItem("s-lname"),
        username: sessionStorage.getItem("s-uname"),
        email: sessionStorage.getItem("s-email"),
        gender: sessionStorage.getItem("s-gender"),
        nationality: sessionStorage.getItem("s-nationality"),
        residence: sessionStorage.getItem("s-residence"),
        phone_number: sessionStorage.getItem("s-pnumber"),
        date_of_birth: sessionStorage.getItem("s-dob"),
        exposure:sessionStorage.getItem("s-exposure"),
        password: sessionStorage.getItem("s-pass")
      });
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
    },[valueNo,slide1,slide2,slide3,slide4,slide5,user]);

    async function upload(){
        try {
            axios.post('/api/add_student',{
                body:{
                avatar: sessionStorage.getItem("s-avatar"),
                first_name: sessionStorage.getItem("s-fname"),
                middle_name: sessionStorage.getItem("s-mname"),
                last_name: sessionStorage.getItem("s-lname"),
                username: sessionStorage.getItem("s-uname"),
                email: sessionStorage.getItem("s-email"),
                gender: sessionStorage.getItem("s-gender"),
                nationality: sessionStorage.getItem("s-nationality"),
                residence: sessionStorage.getItem("s-residence"),
                phone_number: sessionStorage.getItem("s-pnumber"),
                date_of_birth: sessionStorage.getItem("s-dob"),
                exposure:sessionStorage.getItem("s-exposure"),
                password: sessionStorage.getItem("s-pass")
              }}).then((response)=>{
                //alert(JSON.stringify(response))
               // sessionStorage.clear();
              }).catch((error)=>{
                //alert("error it failed"+error)
                console.error(error)
              })

            // Handle success
        } catch(error){
        alert(error)
        console.error(error)
    }
    }
    return(
        <>
    <div className='flex flex-row w-full justify-between p-4 ' >
      {!navigation&&<button className='btn btn-ghost flex flex-col ' onClick={()=>{
        setNavigation(true)
      }} >show menu<FaChevronCircleDown size={20} /></button>}
      {navigation&&<button className='btn btn-ghost flex flex-col ' onClick={()=>{
        setNavigation(false);
      }} ><FaChevronCircleUp size={20} />hide menu</button>}
      <div className=" normal-case text-xl  ml-4 p-2 font-mono "> student application  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaFile size={20} /></button>
    </div>
        <Progress valueNo={valueNo} />
        {slide1&&(<div className="overflow-y-scroll h-screen " ><Details setSlide1={setSlide1} setSlide2={setSlide2} user={user} setUser={setUser}  /></div>)}
        {slide2&&(<div className="h-screen" ><Terms setSlide1={setSlide1} setSlide2={setSlide2} setSlide3={setSlide3} /></div>)}
        {slide3&&(<div className="h-screen " ><Exposure user={user} setUser={setUser} setSlide2={setSlide2} setSlide3={setSlide3} setSlide4={setSlide4}  /></div>)}
        {slide4&&(<div className="h-screen " ><Sendcode setSlide3={setSlide3} setSlide4={setSlide4} setSlide5={setSlide5} /></div>)}
        {slide5&&(<div className="h-screen " ><Verify setSlide4={setSlide4} setSlide5={setSlide5} setAddPassword={setAddPassword} /></div>)}
        {addPassword&&<div className="h-screen " ><Password setUploading={setUploading} setSlide5={setSlide5} setAddPassword={setAddPassword} user={user} setUser={setUser}  /></div>}
        {uploading&&<div className="h-screen bg-red-400 w-full pt-20 " >
           <div className="Card bg-blue-500 w-[60%] mx-auto h-[300px]   " >
           <p className="card-item" >Welcome: {user.first_name} to MGM</p>
           <Link href="/academics/studentPortal/auth" className="btn btn-sucesss w-[60%] ml-[20%] " onClick={upload} >proceed</Link>
           </div>
            </div>}
        </>
    );
}