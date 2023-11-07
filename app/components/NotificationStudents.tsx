import React from 'react';
import { FaBell, FaCalendar, FaCalendarWeek, FaCaretLeft, FaChevronCircleLeft, FaChevronLeft, FaRedo } from 'react-icons/fa';
import NotificationCard from './NotificationCard';

function NotificationStudents() {
  // Dummy data for notifications and upcoming assignments
  const notifications = [
    {
      id:1,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:2,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:3,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:4,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:5,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    }, {
      id:6,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:7,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:8,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:9,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    },{
      id:10,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    }
  ];

  const upcomingAssignments = [
    {
      id:1,
      name:"Unlocked Assignments",
      message:"Mistrial Chapter 1 Assignment has been unlocked by"
    }
  ];
 

  return (
    <div className="drawer drawer-end lg:drawer-open lg:w-1/5 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center justify-right flex flex-col" style={{ marginLeft: "90%" }}>
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="btn drawer-button lg:hidden  fixed bg-[#e1b382] text-[#2d545e] top-16 right-5 btn-ghost" >
          <FaChevronCircleLeft size={20} className=""  />
          
        </label>

      </div>
      <div className="drawer-side  ">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full h-screen  border border-[#2d545e]  bg-[#e1b382] text-[#2d545e] ">
          
          {/* Notifications Segment */}
          <div  className='h-[400px] w-full  ' >
          <div className=" normal-case bg-[#e1b382] text-[#2d545e] text-xl flex flex-row justify-evenly rounded-md "> 
            <p className='p-[10px] ' > Notifications</p>
            <button className='btn btn-ghost' > <FaRedo className="text-black" /></button> 
          </div>
          <li >
          
            <ul className='overflow-y-scroll w-full h-[700px] my-auto ' >
              {notifications.map(notification => (
                <li key={notification.id} className='h-fit pb-2 pt-2 w-[90%] m-auto   ' >
                 <div className="collapse collapse-plus text-[#e1b382] bg-[#2d545e] hover:bg-[#e1b382] hover:text-[#2d545e] border hover:border-[#2d545e]  " >
                  <input type="radio" name="my-accordion-3" />
                   <div className="collapse-title text-xl font-bold">
                    {notification.name}
                    </div>
                  <div className="collapse-content">
                  <p className='lg:text-xl font-medium text-base '>
                     {notification.message}
                  </p>
                 </div>
                </div>  
                </li>
              ))}
            </ul>
          </li>
          </div>
      
        </ul>
      </div>
    </div>
  );
}

export default NotificationStudents;
