import CoursesContent from '@/components/CoursesContent'
import DrawerStudent from '@/components/DrawerStudents'
import React from 'react'

function page() {
  return (
    <div className='lg:flex lg:flex-row lg:justify-evenly '>
        <DrawerStudent/>
        <CoursesContent/>
    </div>
  )
}

export default page