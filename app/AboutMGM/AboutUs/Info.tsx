import Image from 'next/image'
import React from 'react'
import banner from '@/public/empowerment/1.jpeg'

function Info() {
  return (
    <div className=' h-screen  text-[#e1b382] mb-5 ' >
    <div className=' transparent h-[200px] lg:h-[250px]    rounded-md '>
     <Image src={banner} alt="holder" className='h-full rounded-md w-[90%] lg:w-[90%] mx-auto '  />
   </div>
   <h1 className='text-center pt-2 text-xl' >About MGM</h1>
  <div className='h-[400px] lg:h-[400px] sm:h-[500px] pt-2 mt-2  overflow-y-scroll' >
         <p className='w-[90%] mx-auto  lg:text-xl ' >
        The MGM Institute of Gender and Women Empowerment represents a pivotal institution in the pursuit of gender equality and the empowerment of women. Founded on the fundamental principles of inclusivity, equity, and social justice, this institute has emerged as a beacon of progress, challenging societal norms and contributing significantly to the advancement of women's rights.

At the core of the institute's mission is the commitment to creating a space where individuals of all genders can thrive and contribute meaningfully to society. By fostering inclusivity, the institution works towards dismantling discriminatory practices and promoting a more diverse and equal world. This commitment is reflected not only in the educational programs offered but also in the overall ethos and culture of the institute.

One key aspect of the MGM Institute is its focus on education as a powerful tool for social change. The curriculum is designed to address gender-based issues, providing students with a comprehensive understanding of the challenges women face and the strategies for promoting gender equality. Through courses, workshops, and seminars, the institute equips its students with the knowledge and skills necessary to advocate for women's rights and contribute to positive societal transformation.

The institute also plays a crucial role in research and activism, serving as a hub for scholars, activists, and experts in the field of gender studies. Ongoing research initiatives explore various aspects of gender dynamics, contributing valuable insights to the broader academic community and informing policies that aim to promote gender equality.

In addition to academic pursuits, the MGM Institute actively engages in community outreach programs. These initiatives aim to create awareness, provide support to marginalized communities, and empower women through skill-building workshops, mentorship programs, and access to resources. By connecting with local communities, the institute extends its impact beyond the academic sphere, actively participating in the ongoing battle for gender equality at the grassroots level.

The commitment to social justice extends beyond the institute's walls, as it collaborates with other organizations, governmental bodies, and international agencies dedicated to similar causes. Through partnerships and alliances, the MGM Institute leverages its resources and expertise to influence policies, advocate for legal reforms, and contribute to a global movement for gender equality.

In essence, the MGM Institute of Gender and Women Empowerment stands as a testament to the transformative power of education and activism in reshaping societal norms. By championing inclusivity, equity, and social justice, this dedicated institution plays a crucial role in the ongoing battle for gender equality and the empowerment of women, leaving a lasting impact on individuals, communities, and society as a whole.
        </p>
      </div>
    </div>
  )
}

export default Info