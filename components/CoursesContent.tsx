import React from 'react'
import NotificationStudents from './NotificationStudents'
import AsContent from './AsContent'
import Courses from './Courses';

function CoursesContent() {
  return (
    <div className='sm:w-full  lg:flex lg:flex-row lg:w-4/5  ' >
        <NotificationStudents/>
        <Courses/>
        
    </div>
  )
}

export default CoursesContent;