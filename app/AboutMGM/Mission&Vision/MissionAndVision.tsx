import React from 'react'
import banner from '@/public/empowerment/12.jpeg'
import Image from 'next/image';
import { FaChevronCircleDown, FaChevronCircleUp, FaCompress, FaExpand, FaInfoCircle } from 'react-icons/fa';

function MissionAndVision({setNavigation,navigation}:any) {
  return (
    <div className='h-screen ' >
      <div  >
      <div className='flex flex-row w-full justify-between p-4 ' >
      {!navigation&&<button className='btn btn-ghost flex flex-col ' onClick={()=>{
        setNavigation(true)
      }} ><FaExpand size={15} /></button>}
      {navigation&&<button className='btn btn-ghost flex flex-col ' onClick={()=>{
        setNavigation(false);
      }} ><FaCompress size={15} /></button>}
      <div className=" normal-case text-xl  ml-4 p-2 font-mono "> About Us  </div>
      <button className='btn btn-ghost hover:cursor-none ' ><FaInfoCircle size={20} /></button>
    </div>
    <div className='   background  font-mono ' >{/*mb-5*/}
       <div className=' transparent h-[200px] lg:h-[200px]    rounded-md '>
        <Image src={banner} alt="holder" className='h-full rounded-md w-[90%] lg:w-[90%] mx-auto '  />
      </div>
     <div className='h-[500px] pt-5 mt-2 overflow-y-scroll w-[90%] mx-auto ' >
     <div className="collapse collapse-plus  " style={{
        marginTop:20,
      }}>
        <input type="radio" name="my-accordion-3" checked={true} />
        <div className="collapse-title text-xl font-bold">
          Our Vision
        </div>
        <div className="collapse-content">
          <p>The institute's vision is a world where gender-based discrimination and inequality are eradicated, and women have equal opportunities and access to resources across all spheres of life.</p>
        </div>
      </div>
      <div className="collapse collapse-plus   ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          Our Mission
        </div>
        <div className="collapse-content h-fit  ">
        <p className='lg:text-xl' style={{
        marginTop:10,
      }} >
        To achieve this vision, its mission is multifaceted:
      </p>

      <ol>
        <li className='lg:text-xl'>
          <strong>Education and Research:</strong> The institute is committed
          to generating knowledge through rigorous research and education. It
          offers a comprehensive curriculum that focuses on gender studies,
          feminism, women's history, and the intersectionality of gender with
          other social factors such as race, class, and sexuality. The research
          conducted here informs policies and initiatives aimed at addressing
          gender disparities.
        </li>
        <li className='lg:text-xl'>
          <strong>Advocacy and Awareness:</strong> MGM Institute actively
          engages in advocacy and awareness campaigns to highlight the
          importance of gender equality. Through seminars, workshops,
          conferences, and community outreach programs, it strives to change
          mindsets and promote gender-sensitive thinking.
        </li>
        <li className='lg:text-xl'>
          <strong>Capacity Building:</strong> Empowering women involves
          enhancing their skills and capabilities. The institute provides
          training and skill development programs that equip women with the
          tools they need to succeed in various fields, from entrepreneurship to
          leadership positions in both public and private sectors.
        </li>
        <li className='lg:text-xl'>
          <strong>Policy Development:</strong> MGM Institute collaborates with
          governmental bodies and non-governmental organizations to develop
          policies that promote gender equality and women's empowerment. These
          policies range from workplace inclusivity to legal reforms that
          protect women's rights.
        </li>
      </ol>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          Our Key initiatives
        </div>
        <div className="collapse-content">
        <ul>
        <li className='lg:text-xl'>
          <strong>Gender Resource Center:</strong> MGM Institute houses a
          state-of-the-art Gender Resource Center, which serves as a hub for
          research, information dissemination, and networking. It provides
          resources and support for scholars, activists, and policymakers
          working in the field of gender studies.
        </li>
        <li className='lg:text-xl'>
          <strong>Women's Leadership Program:</strong> This program identifies
          and nurtures emerging women leaders through mentorship, leadership
          training, and networking opportunities. It aims to bridge the gender
          gap in leadership positions across various sectors.
        </li>
        <li className='lg:text-xl'>
          <strong>Gender-Responsive Business Practices:</strong> MGM Institute
          collaborates with corporations to develop gender-inclusive workplace
          policies, fostering an environment where women can thrive
          professionally.
        </li>
        <li className='lg:text-xl'>
          <strong>Community Outreach:</strong> The institute reaches out to
          marginalized communities, providing education, healthcare, and
          vocational training to empower women at the grassroots level.
        </li>
      </ul>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          Our Expected Impact
        </div>
        <div className="collapse-content">
        <p className='lg:text-xl'>
        Since its inception, MGM Institute has made significant strides in
        advancing gender equality and women's empowerment. It has contributed
        to shifting societal norms and attitudes towards a more inclusive and
        equitable future.
      </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          Our Future Direction
        </div>
        <div className="collapse-content">
        <p className='lg:text-xl'>
        Looking ahead, the institute plans to expand its reach, collaborating
        with international organizations, universities, and governments to
        create a global network of institutions dedicated to gender equality. It
        envisions a world where gender is no longer a barrier to anyone's full
        potential, where women and marginalized genders can participate fully
        in all aspects of society, and where the principles of equality and
        empowerment are upheld as fundamental human rights.
      </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          Our Final Say
        </div>
        <div className="collapse-content">
        <p className='lg:text-xl'>
        In conclusion, the MGM Institute of Gender and Women Empowerment is a
        vanguard in the ongoing fight for gender equality and women's
        empowerment. Its dedication to education, research, advocacy, and policy
        development is instrumental in reshaping societies for a brighter, more
        equitable future.
      </p>
        </div>
      </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default MissionAndVision;