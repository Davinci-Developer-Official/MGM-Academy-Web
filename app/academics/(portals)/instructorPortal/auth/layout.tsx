import Navbar from '@/app/components/Navbar'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
       
       {children}
    </div>
  )
}

export default layout