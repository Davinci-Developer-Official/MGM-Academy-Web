import React from 'react'
import NotificationStudents from './NotificationStudents'
import AsContent from './AsContent'

function AssignmentsContent() {
  return (
    <div className='sm:w-full  lg:flex lg:flex-row lg:w-4/5  ' >
        <NotificationStudents/>
        <AsContent/>
        
    </div>
  )
}

export default AssignmentsContent