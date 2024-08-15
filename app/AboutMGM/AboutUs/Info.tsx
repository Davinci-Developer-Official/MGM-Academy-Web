import Image from 'next/image'
import React from 'react'
import banner from '@/public/empowerment/1.jpeg'
import { FaChevronCircleDown, FaChevronCircleUp, FaCompress, FaExpand, FaHome, FaInfo, FaInfoCircle } from 'react-icons/fa'

function Info({setNavigation,navigation}:any) {
  return (
    <div className=' '>
    <div className='flex flex-row w-full justify-between p-4 ' >
    {!navigation&&<button onClick={()=>{setNavigation(true)}} className='btn btn-ghost flex flex-col ' ><FaCompress size={15} /></button>}
            {navigation&&<button onClick={()=>{setNavigation(false)}} className='btn btn-ghost  flex flex-col ' ><FaExpand size={15} /></button>}
      <div className=" normal-case text-xl  ml-4 p-2 font-mono "> About Us  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaInfoCircle size={20} /></button>
    </div>

    <div>    
    <div className=' transparent h-[200px] lg:h-[250px]    rounded-md '>
     <Image src={banner} alt="holder" className='h-full rounded-md w-[90%] lg:w-[90%] mx-auto '  />
   </div>
   <h1 className='text-center pt-2 text-xl font-mono font-bold ' >overview</h1>
  <div className='h-[400px] lg:h-[400px] sm:h-[500px] pt-2 mt-2  overflow-y-scroll' >
         <p className='w-[90%] mx-auto  lg:text-xl font-mono ' >
         The MGM Institute of Gender and Women Empowerment embodies a significant force in the quest for gender equality and the empowerment of women. Established on the foundational principles of inclusivity, equity, and social justice, this institute has emerged as a beacon of progress, challenging societal norms and contributing significantly to the advancement of women's rights. At its core, the institute is committed to creating a conducive environment where individuals of all genders can flourish and make meaningful contributions to society.

Education stands as a cornerstone of the institute's mission, recognized as a potent instrument for social change. The curriculum is meticulously crafted to address gender-based issues comprehensively, equipping students with the requisite understanding and skills to advocate for women's rights and foster gender equality. Through a blend of courses, workshops, and seminars, students are empowered to contribute positively to societal transformation.

Moreover, the institute serves as a pivotal hub for research and activism in the realm of gender studies. Ongoing research initiatives delve into various facets of gender dynamics, providing valuable insights to the academic community and informing policy interventions aimed at advancing gender equality.

Community outreach programs form another crucial aspect of the institute's endeavors. These initiatives aim to raise awareness, offer support to marginalized communities, and empower women through skill-building workshops, mentorship programs, and access to resources. By actively engaging with local communities, the institute extends its impact beyond academia, actively participating in grassroots efforts for gender equality.

Furthermore, the institute collaborates with a diverse array of organizations, governmental bodies, and international agencies dedicated to similar causes. Through strategic partnerships and alliances, the institute amplifies its influence, advocating for policy reforms and contributing to a global movement for gender equality.

In essence, the MGM Institute of Gender and Women Empowerment epitomizes the transformative potential of education and activism in reshaping societal norms. By championing inclusivity, equity, and social justice, this institution plays a pivotal role in the ongoing struggle for gender equality and women's empowerment, leaving an indelible mark on individuals, communities, and society at large.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Info