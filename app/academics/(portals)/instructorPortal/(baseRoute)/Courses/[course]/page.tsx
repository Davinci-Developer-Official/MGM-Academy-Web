'use client';
import GetCookie from "@/app/components/GetCookie"
import axios from "axios";
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import Add from './Add/page'

interface ChapterProps {
    chapter_id: string;          // UUID
    course_id: string;           // UUID, foreign key referencing the courses table
    chapter_title: string;       // Title of the chapter
    chapter_description?: string; // Optional description of the chapter
    chapter_order: number;       // Order of the chapter in the course
    created_at: string;          // Timestamp of chapter creation
  }
  
export default function page(){
    const datas = Cookies.get("current-course")
    const[chapters,setChapter]=useState<ChapterProps[]>([])
    useEffect(()=>{
        async function getCourseChapters(){
            try {
                const data = await Cookies.get("current-course")||"";
                if(data&&data!==""){
                    const res = await axios(`/api/remodelled/courses/get_chapter_by_id?id=${data}`);
                    //const jsonified = await res.json()
                    if(chapters.length==0){
                        setChapter(res.data)
                    }
                    //alert(JSON.stringify(res.data)+data);

                }
            } catch (error) {
                alert(' error occusred '+ error);
            }
        }
        getCourseChapters()
    },[])
    return(<div>
        <div>
            <button className="btn ml-1 mt-1 " >Add</button>
            {/*<Add datas={datas} />*/}
        </div>
        <div className="h-[400px] w-[80%] mx-auto overflow-y-scroll " >
        {chapters.map((items)=>(
            <div key={items.chapter_id} className="bg-red-300 mt-2 mb-2 w-[98%] mx-auto "  >
                <p>{items.chapter_title}</p>
            </div>
        ))}
        </div>
    </div>)
}