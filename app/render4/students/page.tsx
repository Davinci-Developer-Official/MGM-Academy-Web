'use client'

import { useEffect, useState } from "react"

export default function Page(){
    const[loading,setLoading]=useState(true);

    setTimeout(()=>{
        setLoading(false)
    },1000);
    useEffect(()=>{
        async function getStudents(){
            try {
                const response= await fetch(`/api/remodelled/students/get_student`);
                if(!response.ok){
                    alert('sorry it failed')
                }
                const info = await response.json();
                setData(info);
                //alert(JSON.stringify(data))

            } catch (error) {
                alert(error);
            }
        }
        getStudents();
    },[data])
    

    return(
        <div>
            {!loading?(
                <form className="w-[350px] p-2 mx-auto   " >{/*backdrop-blur-lg bg-white/30*/}
                    <div>
                        <label className="">
                            email
                            <input type="text"
                            required
                            />
                        </label>
                        <label className="">
                            password
                            <input type="password"
                            required
                            />
                        </label>
                    </div>
                    <button className="btn  " > sign in </button>
                </form>
            ):<div>Loading.....</div>}
        </div>
    )
}