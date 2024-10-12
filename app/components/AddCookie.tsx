"use server";
import { cookies } from "next/headers";

interface Cookie{
    label: string;
    content: string;
  }
export default  async function CurrentItem ({label,content}:Cookie){
    const cookie =  cookies();
    if(content!==""){
      await cookie.set(label,content);
    }
  
  }