'use server';

import SingleCourse,{Placeholders} from "../components/SingleCourse";
export type SingleCourse = JSX.Element;


export async function fetchData(url:string ){
  const response = await fetch(`${url}`,{
    method:"GET",
    cache:"no-cache",
  });
  //data fetched.
  const data = await response.json()
  //returned when the function is called/invocked
  return data;
}

export async function fetchDataById(url:string , index:number ){
  const response = await fetch(`${url}/${index}`,{
    method:"GET",
    cache:"no-cache",
  });
  //data fetched.
  const data = await response.json()
  //returned when the function is called/invocked
  return data;
}

export async function fetchMappableCourses(url:string  ){
  try {
    const response = await fetch(`${url}`,{
    method:"GET",
    cache:"no-cache",
    
  });
  //data fetched.
  const data = await response.json()
  
  //returned when the function is called/invocked
  return data;
  //data.map((items:placeholders,index:number)=>(<SingleCourse key={items.id}  items={items} index={index} />))
  } catch (error) {
    console.error(error)
    return error;
  }
}