import Link from 'next/link';
import React from 'react';
import ba from "../public/profile/vlcsnap-2022-06-29-14h23m45s921.png"
import Image from 'next/image';
import { FaBars, FaBook, FaCaretRight, FaCog, FaEllipsisV, FaGraduationCap, FaHome } from 'react-icons/fa';

const DrawerStudent: React.FC = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-left justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden fixed mt-20 ml-2 "> <FaBars size={20} /> </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"  >
      {/* Sidebar content here */}
      <a className="btn btn-ghost normal-case text-xl mt-2 "> MGM Institute </a>
      <li style={{
        marginTop:"20%"
      }} ><Link href=""><FaHome size={20} /> Dashboard </Link></li>
      <li style={{
        marginTop:"5%"
      }} ><Link href=""><FaBook size={20} /> Assignments</Link></li>
      <li style={{
        marginTop:"5%"
      }} ><Link href=""><FaGraduationCap size={20} /> Courses</Link></li>
      <li style={{
        marginTop:"5%"
      }} ><Link href=""><FaCog size={20} /> settings</Link></li>


      <div style={{
      height:"60px",
      width:"90%",
      //backgroundColor:"red",
      display:"flex",
      flexDirection:"row",
      marginTop:"40%",
      marginLeft:"5%",
      borderRadius:20,
      borderWidth:1.0,
      borderStyle:"outset",
      boxShadow:"inherit"
    }} >
    <span style={{
              height:"50px",
              width:"50px",
              borderRadius:20,
              marginLeft:"5px",
              marginTop:"5px",
              borderStyle:"inset",
              boxShadow:"inherit"
          }} ><Image src={ba} alt="img" style={{
              width:"100%",
              height:"100%",
              objectFit:"cover",
              borderRadius:20,
              
          }}  /></span>
    <div style={{
      width:"70%",
      textAlign:"center"
    }} >
    <p style={{
      fontSize:20,
      paddingTop:"20px"
    }} >temp</p>
    </div>
    <button className='hover:bg-red-200' style={{
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      borderColor:"purple",
      //borderWidth:1.0
    }}  >
      <FaEllipsisV size={30} />
    </button>
    </div>
    </ul>
    
  
  </div>
</div>
  );
};

export default DrawerStudent;
