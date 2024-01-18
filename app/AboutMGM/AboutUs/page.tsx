import Image from 'next/image'
import React from 'react'
import bg1 from '../../../public/empowerment/13.jpeg'
import Info from './Info'
import Construction from '@/app/components/Construction'


function page() {
  {/*
    <div className='h-[100%] flex flex-col ' >
     
        <div className=' transparent lg:h-[350px] md:h-[400px] sm:h-[300px]  w-[80%] mx-auto  rounded-md '>
        <Image src={bg1} alt="holder" className='h-full rounded-md w-[98%] mx-auto '  />
      </div>
      <Info/> 
    </div>
  */}
  return (
   <>
   <Construction/>
   </>
  )
}

export default page