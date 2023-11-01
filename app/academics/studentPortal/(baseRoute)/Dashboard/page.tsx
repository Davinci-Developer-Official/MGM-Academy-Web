import DarkModeButton from '@/app/components/DarkModeButton'
import DashContents from '@/app/components/DashContents'
import DashboardContent from '@/app/components/DashboardContent'
import DrawerStudent from '@/app/components/DrawerStudents'
import NotificationStudents from '@/app/components/NotificationStudents'
import React from 'react'

function page() {
  return (
    <div className='flex flex-row' >
    <DashContents/>
    <div className="lg:w-[15%] bg-green-700 " ><NotificationStudents /></div>
    </div>
  )
}

export default page