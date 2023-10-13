import React from 'react';
import { FaBell } from 'react-icons/fa';

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
        <label htmlFor="my-drawer-4" className="btn drawer-button lg:hidden absolute mt-5 mr-2 btn-ghost" style={{ marginTop: "" }}>
          <FaBell />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full  bg-base-200 text-base-content">
          
          {/* Notifications Segment */}
          <li className='h-[400px] w-full ' >
          <a className="btn btn-ghost normal-case text-xl"> Notifications </a>
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </li>
          {/* Upcoming Assignments Segment */}
          <li className='h-[400px] w-full ' >
          <a className="btn btn-ghost normal-case text-xl"> Upcomming Assignments </a>
            <ul>
              {upcomingAssignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotificationStudents;
