import AssignmentsContent from '@/components/AssignmentsContent'
import DrawerStudent from '@/components/DrawerStudents'
import React from 'react'

function page() {
  return (
    <div className='lg:flex lg:flex-row lg:justify-evenly' >
       
        <DrawerStudent/> 
       
        <AssignmentsContent/>
        
    </div>
  )
}

export default page