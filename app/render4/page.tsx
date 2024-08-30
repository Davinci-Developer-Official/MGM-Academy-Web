'use client'

import { useEffect, useState } from "react";
import Students from './students/page';
import Instructors from './instructors/page';
import Image from "next/image";
import placeholder from '@/public/remodel/study.jpg'
import placeholder1 from '@/public/remodel/teach.jpg'

interface Student{
    email: string;
    password: string;
}

export default function Page(){
    const [accountType, setAccountType] = useState("students");
    const[data,setData]=useState<Student[]>([]);

    const handleAccountTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAccountType(event.target.value);
    };

   

    return (
            <div className="flex flex-col lg:h-screen w-full " >
                {accountType === "students"?<div className="h-[250px]   rounded-bl-md rounded-br-md sm:h-[200px] w-[60%] mx-auto inset " >
                    <Image src={placeholder} alt="" className="object-fit h-full w-full   rounded-bl-md rounded-br-md " />
                </div>:<div className="h-[250px] sm:h-[200px] w-[60%] mx-auto inset " >
                    <Image src={placeholder1} alt="" className="object-fit h-full w-full " />
                </div>}
                <div className="dropdown w-[80%] mx-auto text-center my-4  ">
                <select 
                    value={accountType} 
                    onChange={handleAccountTypeChange} 
                    className="select select-bordered w-full max-w-xs"
                >
                    <option value="students">Students</option>
                    <option value="instructors">Instructors</option>
                </select>
                <p>account type : {accountType}</p>
                </div>
                    <div> {accountType === "students" ? <Students /> : <Instructors />}</div>
            </div>
    );
}
