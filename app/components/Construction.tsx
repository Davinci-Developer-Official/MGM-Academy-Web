import React from 'react'
import pushing from '@/public/construction/construction.jpg'
import Image from 'next/image'

function Construction() {
  return (
    <div className=' h-[550px] w-full    ' style={{
        background:"require(../../public/construction/push.gif)"
    }} > 
        <div className=' card  border-solid  border-[#2d545e] w-[98%] glass h-[98%] mx-auto mt-[1%] flex flex-col ' >
            <Image src={pushing} alt="working" className='w-full h-full  rounded-md  ' />
           
        </div>
        
    </div>
  )
}

export default Construction