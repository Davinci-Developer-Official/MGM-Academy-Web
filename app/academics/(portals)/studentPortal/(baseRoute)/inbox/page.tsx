import React from 'react'
import ba from "@/public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import bb from "@/public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import bc from "@/public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import Image from 'next/image'
import { FaCaretDown, FaEllipsisV, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'


function page() {
    const history =[
        {
            id:1,
            productName:"Grooming 101",
            productPrice:"$12",
            instructor:"Beth Kim",
            productImage:ba,
            open:false,
            sender:"Bot"
        },{
            id:2,
            productName:"Animation 204",
            productPrice:"$44",
            instructor:"Morty Smith",
            productImage:bb,
            open:false,
            sender:"Admin"
        },{
            id:3,
            productName:"Game Design",
            productPrice:"$34",
            instructor:"Rick Sanchez",
            productImage:bc,
            open:false,
            sender:"Bot"
        },{
            id:4,
            productName:"Mixology 203",
            productPrice:"$77",
            instructor:"Jim Yung",
            productImage:ba,
            open:false,
            sender:"Admin"
        },{
            id:5,
            productName:"Electronics 101",
            productPrice:"$86",
            instructor:"Ferris Beuler",
            productImage:bb,
            open:true,
            sender:"Admin"
        },{
            id:5,
            productName:"Photo Science",
            productPrice:"$89",
            instructor:"Joe Rogan",
            productImage:bc,
            open:true,
            sender:"Bot"
        }
    ]
  return (
    <div className='h-screen w-full background   ' >
    <p className='h-[8%] text-center pt-4 ' >history</p>
    <div className='w-[98%] mx-auto h-[92%]  overflow-y-scroll ' >
        {history.map(item=>(
            <div key={item.id} className={item.open?'justify-between p-1 flex flex-row w-[98%] mx-auto rounded-lg h-[50px] bg-gray-300 mt-2 outset text-sm font-serif ' :'justify-between p-1 flex flex-row w-[98%] mx-auto rounded-lg h-[50px] bg-gray-400 mt-2 outset text-sm font-serif ' }>
                {/*@ts-ignore*/}
            <figure className={item.sender=="Admin"&&'avatar w-10 rounded-full bg-green-500 '|| item.sender=="Bot"&&'avatar w-10 rounded-full bg-blue-500 '|| item.sender=="Instructor"&&'avatar w-10 rounded-full bg-yellow-400 '}>
                {/*<Image src={item.productImage} alt='product image' className='h-full w-full object-fill rounded-full  ' />*/}
                <p className='pt-3 text-center  pl-[15px] text-white font-mono inset  rounded-full font-bold  ' >{item.sender.charAt(0)}</p>
            </figure>
            <p className='p-[10px] ' >You purchased {item.productName} by {item.instructor} for {item.productPrice}</p>
            <button className='' >{item.open==true ? <FaEnvelopeOpen size={20} className='text-red-500 '  /> :<FaEnvelope size={20} className='text-white ' />}</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default page