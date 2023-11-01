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
        <label htmlFor="my-drawer-4" className="btn drawer-button lg:hidden fixed  top-16 mr-2 btn-ghost" style={{ marginTop: "" }}>
          <FaChevronCircleLeft size={20} className="text-green-600"  />
          
        </label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full  bg-base-200 text-base-content">
          
          {/* Notifications Segment */}
          <div  className='h-[400px] w-full  ' >
          <div className=" normal-case text-white bg-green-500 text-xl flex flex-row justify-evenly rounded-md "> 
            <p className='p-[10px] ' > Notifications</p>
            <button className='btn btn-ghost' > <FaRedo className="text-black" /></button> 
          </div>
          <li >
          
            <ul>
              {notifications.map((notification, index) => (
                <li><NotificationCard key={notification.id} notification={notification}  /></li>
              ))}
            </ul>
          </li>
          </div>
          {/* Upcoming Assignments Segment */}
          <div className='h-[400px] w-full  ' >
          <div className=" normal-case text-white  bg-green-500 text-lg flex flex-row justify-evenly rounded-md "> 
            <p className='p-[10px]' > Upcomming Assignments</p>
            <button className='btn btn-ghost' > <FaCalendarWeek className="text-black"  /></button> 
          </div> 
          <li className='h-[400px] w-full ' >
          
            <ul>
              {upcomingAssignments.map((assignment, index) => (
                <li key={assignment.id}>{assignment.name}</li>
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