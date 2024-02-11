import React from 'react';
import { FaBookOpen, FaCaretRight, FaTimes } from 'react-icons/fa';

const ChaptersDrawer: React.FC = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className=" fixed btn btn-ghost drawer-button lg:hidden top-[63px] left-2 text-[#e1b382] background hover:border-[#e1b382] "><FaBookOpen size={20} />chapters</label>
  
  </div> 
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    {/*w-[280px]*/}
    <ul className="menu p-4 w-[280px] min-h-full bg-base-100 text-base-content overflow-y-scroll z-100 ">
      {/*Close drawer*/}
      <label htmlFor="my-drawer-2" className=" btn btn-ghost text-[#e1b382] hover:border-[#e1b382] w-fit lg:hidden ml-[130px] background ">close<FaTimes size={20}  /> </label>

      {/* Sidebar content here */}
      <li className='mt-8 ' ><a>Chapter 1: Code Editors</a></li>
      <li className='mt-4' ><a>Sidebar Item 2</a></li>
    </ul> 
   
  
  </div>
</div>
  );
};

export default ChaptersDrawer;
