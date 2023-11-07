import Image from "next/image"
import ba from "../../../../../public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import bb from "../../../../../public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import bc from "../../../../../public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import { FaCartPlus, FaTrash } from "react-icons/fa"

export default function page (){

    return(
        <div className="h-screen w-full bg-[#e1b382] flex flex-col " >
        <p className="text-center h-[50px] text-[#2d545e]  pt-5 font-bold text-xl " >Cart</p>
        
        <ProductList/>
        <C2P/>
        </div>
    )
}

const C2P=()=>{
    return(
        <div className="flex flex-row  justify-end w-[70%] mx-auto pt-3 pb-2 h-[50px]   " >
            <div className="flex flex-row text-[#2d545e] mr-4 " > <p className="w-[300px] text-center pt-4 " >Total : $123,652</p> <button className="btn text-[#2d545e] bg-[#e1b382]  " > <FaCartPlus size={30} /> Buy Course(s) </button></div>
            <button className="btn mr-2 bg-[#e1b382] text-red-600   " > <FaTrash/> clear all </button>
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
        <div className=" h-[660px] w-[90%] lg:w-[60%] lg:mx-auto mt-4 mx-auto bg-[#e1b382]  overflow-y-auto    " >
          
          {placeholder.map(item=>(
            <div key={item.id} className="flex flex-row  mx-auto lg:w-[700px] sm:w-[500px] mb-4 mt-4 rounded-md border border-[#2d545e] " >
             
             <span className="w-[200px] h-[200px] rounded-tl-md rounded-bl-md " ><Image src={item.productImage} alt="course Image" style={{
              width:"100%",
              height:"100%",
              objectFit:"cover",
              backgroundColor:"grey",         
            }} className='rounded-tl-md rounded-bl-md '  /></span>
             <div className="  lg:w-[400px] sm:w-[200px] text-center text-[#e1b382] bg-[#2d545e] " >
             <p className="text-xl font-bold h-[50px] pt-[20px] " >{item.productName}</p>
             <p className="text-xl font-bold h-[100px] pt-[30px] " >{item.productPrice}</p>
             <p className="text-base " > Instructed by: {item.instructor}</p>
            
             </div>
           <div className="h-[200px] w-[100px] pt-[80px]  bg-[#2d545e] pl-[20px] rounded-br-md rounded-tr-md " >
           <button className="btn bg-[#e1b382] text-[#2d545e] " > <FaTrash/></button>
           </div>

            </div>
          ))}
        </div>
    )
}