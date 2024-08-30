'use client'

import { useState } from "react"

export default function Page(){
    const[loading,setLoading]=useState(true);

    setTimeout(()=>{
        setLoading(false)
    },1000);

    

    return(
        <div>
            {!loading?<div>aaa</div>:<div>Loading.....</div>}
        </div>
    )
}