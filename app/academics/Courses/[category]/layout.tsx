import Navbar from "@/app/components/Navbar";
import { ReactNode } from "react";

interface components{
    children : React.ReactNode;
}

export default function layout(props:components){
    return (
        <>
        <Navbar/>
        {props.children}
        </>
    )
}