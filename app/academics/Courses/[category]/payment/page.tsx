"use client"
import React, { useState } from "react";

interface Info{
    type : string
    price : string
    course_name :string
    instructor :string
    student : string
    purchase_method:string
}

function page() {
    const [info,setInfo]=useState()
    const data = {
        type : "course",
        price : "$400",
        course_name :"philosophy",
        instructor :"mike chege",
        student : "titus mwangi",
        purchase_method:"stripe"
    }
    async function confirmPurchase(props:Info) {
        try {
            const response = await fetch('/api/remodelled/courses/purchase_course',{
                method:'POST',
                //body : data

            })
        } catch (error) {
            alert(error)
        }
    }
    
  return (
    <div className="h-screen w-full p-2 " >
    
    <table className="w-[400px] bg-red-200 mx-auto text-center   " >
        <thead className="w-full  " >
            <tr className="  w-full text-lg text-bold text-blue-600  " > purchase info </tr>
            <tr className="underline text-xl " >
            <th>Description</th>
            <th>info</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>purchase type : </td>
                <td> {data.type} </td>
            </tr>
            <tr>
                <td> price: </td>
                <td> {data.price} </td>
            </tr>
            <tr>
                <td>course name : </td>
                <td> {data.course_name} </td>
            </tr>
            <tr>
                <td> instructor : </td>
                <td> {data.instructor} </td>
            </tr>
            <tr>
                <td>student : </td>
                <td> {data.student} </td>
            </tr>
            <tr>
                <td>purchase method :</td>
                <td>{data.purchase_method}</td>
            </tr>
        </tbody>
        <tfoot>
            <button className="btn mb-2 mt-1 " onClick={()=>confirmPurchase(data)} > confirm purchase </button>
        </tfoot>
    </table>
    </div>
  )
};

export default page;

{/*
    <form className="flex flex-col w-[80%] mx-auto bg-gray-100 h-[400px]  ">
    <div className="flex flex-row  w-[90%] mx-auto bg-green-200 h-[60px] p-2 pt-5 justify-between  " ><p>course name</p> <p>philosophy</p> </div>
    <button className="btn   " >confirm</button>
    </form>
    */}