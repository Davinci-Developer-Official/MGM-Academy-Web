'use client';
import React, { ReactNode } from 'react';
import Link from "next/link"

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col w-full h-full'     >
        <Link href="/academics/instructorPortal/Notification/Create" >Add Notification</Link>
    <div className='overflow-y-auto  ' >
        {children}
    </div>
    </div>
  )
}

export default layout