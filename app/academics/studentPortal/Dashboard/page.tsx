import DarkModeButton from '@/components/DarkModeButton'
import DashboardContent from '@/components/DashboardContent'
import DrawerStudent from '@/components/DrawerStudents'
import NotificationStudents from '@/components/NotificationStudents'
import React from 'react'

function page() {
  return (
    <div className='lg:flex lg:flex-row lg:justify-evenly' >
       
        <DrawerStudent/> 
       
        <DashboardContent/>
        
    </div>
  )
}

export default page