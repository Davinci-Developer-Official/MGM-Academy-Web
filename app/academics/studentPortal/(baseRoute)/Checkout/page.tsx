import Image from "next/image"
import ba from "../../../../../public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import bb from "../../../../../public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import bc from "../../../../../public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import { FaCartPlus, FaMoneyBill, FaTrash } from "react-icons/fa"

export default function page (){

    return(
        <div className="bg-[#e1b382] " >
        <p className="text-center h-[50px] text-[#2d545e]  pt-5 font-bold text-xl " >Cart</p>

        <div className="h-screen w-full bg-[#e1b382] lg:flex lg:flex-row sm:flex sm:flex-col overflow-y-auto " >                                
        
        <ProductList/>
        <C2P/>
        </div>
        </div>
    )
}

const C2P=()=>{
    return(
        <div className="flex flex-col mt-10  w-80 mx-auto pt-3 pb-2 h-60    border border-[#2d545e]   " >
            <p className="text-center h-20 text-[#2d545e]  pt-5 font-bold text-xl " >Cart Summary </p>

            <div className="flex flex-col text-[#2d545e] mr-4  w-full h-60  " > 
            <div className="flex flex-row justify-between h-40 pt-16 " >
                <p className="pl-10 font-bold text-xl " >Subtotal</p> : <p className=" pr-10  font-semibold  " >$123,652</p>
            </div> 
            <button className="btn bg-[#2d545e] text-[#e1b382] rounded-none " > <FaMoneyBill size={30} />checkout (<p className="   font-semibold  " >$123,652</p>) </button>
            </div>
           
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
        <div className=" h-[660px] w-[90%] lg:w-[70%] lg:mx-auto mt-4 mx-auto bg-[#e1b382]      " >

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