"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaBell, FaCalendar, FaCalendarAlt, FaCalendarWeek, FaCaretLeft, FaChevronCircleLeft, FaChevronLeft, FaRedo } from 'react-icons/fa';
//import NotificationCard from './NotificationCard';
import CalendarData from "../components/Calendar"

function NotificationInstructors() {
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
 //switch state
 const[showEvent,setShowEvent]=useState(false)
 const[activeNotifiactions,setActiveNotifications]=useState()

 
 //check state
 useEffect(()=>{
  function checkActiveNotifications(){
    var number:number = notifications.length;
    //setActiveNotifications(number)
  }
 });

  return (
    <div className="drawer drawer-end  ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center justify-right flex flex-col" style={{ marginLeft: "90%" }}>
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className=" btn drawer-button   fixed   text-[#e1b382]  top-[68px] right-6 lg:right-8 lg:top-[20px] btn-ghost" ><FaBell size={20}  /> {notifications.length!==0 && <p className="animate-pulse  " >{notifications.length}</p> }   </label>

      </div>
      <div className="drawer-side  ">
        {/*Drawer content*/}
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-82 min-h-full h-screen  border border-[#2d545e]  bg-[#e1b382] text-[#2d545e] ">
          {/*Menu */}
          <div  className='h-[400px] w-full  ' >
           {/*Close drawer*/}
          <label htmlFor="my-drawer-4" className="btn  drawer-button  bg-[#e1b382] hover:bg-[#2d545e] text-[#2d545e] hover:text-[#e1b382]   btn-ghost"><FaCaretLeft size={20} className="" /> Close</label>
          {/*Switching states using buttons*/}
          <div className=" normal-case bg-[#e1b382] text-[#2d545e] text-xl flex flex-row justify-evenly rounded-md "> 
            <button className='p-[10px] btn btn-ghost  ' onClick={()=>{setShowEvent(false);}} > <FaBell size={20} className="text-black" />  Notifications</button>
            <button className='btn btn-ghost' onClick={()=>{setShowEvent(true);}} > Events <FaCalendarAlt size={20} className="text-black" /></button> 
          </div>
          <li className='w-[380px]' >
            {/* Notifications Segment */}
            {!showEvent?(
              <ul className='overflow-y-scroll w-full h-[700px] my-auto ' >
              {notifications.map(notification => (
                <li key={notification.id} className='h-fit pb-2 pt-2 w-[95%] mx-auto   ' >
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
            </ul>):(
              <div className='mx-auto' >
                <CalendarData/>
              </div>
            )}
          </li>
          </div>
      
        </ul>
      </div>
    </div>
  );
}

export default NotificationInstructors;