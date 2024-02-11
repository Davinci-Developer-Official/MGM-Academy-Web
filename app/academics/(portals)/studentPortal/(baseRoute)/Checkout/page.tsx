'use client'
import Image from "next/image"
import ba from "@/public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import bb from "@/public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import bc from "@/public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import { FaCartPlus, FaMoneyBill, FaTrash } from "react-icons/fa"
import { useState } from "react"

export default function page (){

    return(
        <div className="background  " >
        <p className="text-center h-[50px] text-[#e1b382]  pt-5 font-bold text-xl " >Cart</p>
        <div className=" w-full background  overflow-y-auto " >                                
        <ProductList/>
        </div>
        <C2P/>
        </div>
    )
}

const C2P=()=>{ 
    const [finalPrice,setFinalPrice]=useState("$400");

    return(
        <div className=" lg:h-[200px] md:h-[200px] h-[150px] flex flex-col w-full justify-evenly " >
            <div className="   h-[50px] ml-[20%] lg:ml-[30%] w-[60%] lg:w-[40%]  flex flex-row justify-between text-[#e1b382] " >
                 <p className="ml-[50px] mt-[15px] text-xl font-bold" >sub total : </p> 
                  <p className="mr-[50px] mt-[15px] text-xl font-bold" > {finalPrice} </p> 
            </div>
            <button className="btn aligh-center border border-[#2d545e] bg-[#e1b382] hover:bg-[#5e572d]  text-[#2d545e] hover:text-[#e1b382] h-[50px] ml-[20%] lg:ml-[30%] w-[60%] lg:w-[40%] text-xl  " > pay now   <FaMoneyBill size={20} />  </button>           
        </div>
    )
}

const ProductList=()=>{
    const placeholder = [
        {
            id:1,
            productName:"Grooming 101",
            productPrice:"$12",
            instructor:"Beth Kim",
            productImage:ba,
        },{
            id:2,
            productName:"Animation 204",
            productPrice:"$44",
            instructor:"Morty Smith",
            productImage:bb,
        },{
            id:3,
            productName:"Game Design",
            productPrice:"$34",
            instructor:"Rick Sanchez",
            productImage:bc,
        },{
            id:4,
            productName:"Mixology 203",
            productPrice:"$77",
            instructor:"Jim Yung",
            productImage:ba,
        },{
            id:5,
            productName:"Electronics 101",
            productPrice:"$86",
            instructor:"Ferris Beuler",
            productImage:bb,
        },{
            id:5,
            productName:"Photo Science",
            productPrice:"$89",
            instructor:"Joe Rogan",
            productImage:bc,
        }
    ]

    return(
        <div className=" lg:h-[500px] md:h-[700px] h-[550px] sm:h-[400px]  w-[90%] lg:w-[60%] lg:mx-auto sm:[416px]  mt-4 mx-auto background overflow-y-scroll     ">
          {placeholder.map(item=>(
            <div key={item.id} className="flex flex-row  mx-auto lg:w-[700px] sm:w-[500px] mb-4 mt-4 rounded-md border border-[#2d545e] ">             
             <span className="w-[200px] lg:h-[200px] md:h-[200px] h-[150px] rounded-tl-md rounded-bl-md " ><Image src={item.productImage} alt="course Image" style={{
              width:"100%",
              height:"100%",
              objectFit:"cover",
              backgroundColor:"grey",         
            }} className='rounded-tl-md rounded-bl-md '/></span>
             <div className="  lg:w-[400px] sm:w-[200px] text-center text-[#e1b382] bg-[#2d545e] lg:h-[200px] md:h-[200px] h-[150px] ">
             <p className="lg:text-xl  text-base  font-bold lg:h-[50px] md:h-[50px] h-[30px] pt-[20px] ">{item.productName}</p>
             <p className="lg:text-xl text-base  font-bold lg:h-[100px] md:h-[100px] h-[50px] pt-[30px] ">{item.productPrice}</p>
             <p className="text-base lg:h-[50px] md:h-[50px] h-[50px]   "> Instructed by: {item.instructor}</p>            
             </div>
           <div className="lg:h-[200px] md:h-[200px] h-[150px] w-[100px] pt-[80px]  bg-[#2d545e] pl-[20px] rounded-br-md rounded-tr-md ">
           <button className="btn bg-[#e1b382] hover:bg-[#2d545e] text-[#2d545e] hover:text-[#e1b382] hover:border hover:border-[#e1b382] "> <FaTrash/></button>
           </div>

            </div>
          ))}
        </div>
    )
}