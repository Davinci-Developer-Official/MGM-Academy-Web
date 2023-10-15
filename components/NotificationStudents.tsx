import React from 'react';
import { FaBell, FaCalendar, FaCaretLeft, FaChevronCircleLeft, FaChevronLeft, FaRedo } from 'react-icons/fa';

function NotificationStudents() {
  // Dummy data for notifications and upcoming assignments
  const notifications = [
    'Notification 1',
    'Notification 2',
    'Notification 3',
  ];

  const upcomingAssignments = [
    'Assignment 1',
    'Assignment 2',
    'Assignment 3',
  ];

  return (
    <div className="drawer drawer-end lg:drawer-open lg:w-1/5 absolute lg:ml-[60%]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center justify-right flex flex-col" style={{ marginLeft: "90%" }}>
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="btn drawer-button lg:hidden fixed mt-14 mr-2 btn-ghost" style={{ marginTop: "" }}>
          <FaChevronCircleLeft size={20}  />
          
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full  bg-base-200 text-base-content">
          
          {/* Notifications Segment */}
          <div  className='h-[400px] w-full  ' >
          <div className=" normal-case  bg-green-500 text-xl flex flex-row justify-evenly rounded-md "> 
            <p className='p-[10px]' > Notifications</p>
            <button className='btn btn-ghost' > <FaRedo/></button> 
          </div>
          <li >
          
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </li>
          </div>
          {/* Upcoming Assignments Segment */}
          <div className='h-[400px] w-full  ' >
          <div className=" normal-case  bg-green-500 text-lg flex flex-row justify-evenly rounded-md "> 
            <p className='p-[10px]' > Upcomming Assignments</p>
            <button className='btn btn-ghost' > <FaCalendar/></button> 
          </div> 
          <li className='h-[400px] w-full ' >
          
            <ul>
              {upcomingAssignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
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
