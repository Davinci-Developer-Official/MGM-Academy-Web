//import AsContent from '@/app/components/AsContent'
import AssignmentsContent from '@/app/components/AssignmentsContent'
import DrawerStudent from '@/app/components/DrawerStudents'
import NotificationStudents from '@/app/components/NotificationStudents'
import React from 'react'

import List from './list'

function page() {
  return (
    <div className='lg:flex lg:flex-row'>
    {/*<AsContent/>*/}
    <List/>
    <div className="lg:w-70 bg-green-700 " ><NotificationStudents /></div>
    </div>
  )
}

export default page