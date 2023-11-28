"use server"
import { useEffect, useState } from "react";


interface keyValue {
   key:String,
   value:string, 
}



export default async  function get({key,value}:keyValue){
  
  var usableLink = "";
  if(key==" profile "){
    usableLink = value
  }


    const res = await fetch(`${usableLink}`,{
    method:"GET",
    cache:"no-cache",
  });
  const profiles = await res.json()
  const stringifiedProfile = JSON.stringify(profiles)

  
}