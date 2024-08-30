'use client';

import Navbar from "../../../components/Navbar";

export default function Layout({children}:{children:React.ReactNode}){

    return(
        <div className="h-full " >
            <Navbar/>
            {children}
        </div>
    )
}