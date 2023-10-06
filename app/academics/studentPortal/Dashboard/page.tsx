import DarkModeButton from '@/components/DarkModeButton'
import DrawerStudent from '@/components/DrawerStudents'
import NotificationStudents from '@/components/NotificationStudents'
import React from 'react'

function page() {
  return (
    <div  >
       <NotificationStudents/>
        <DrawerStudent/> 
       
        <DarkModeButton/>
    </div>
  )
}

export default page