import Construction from '@/app/components/Construction'
import React from 'react'
import Form from './form'

function Page() {
  return (
    <div className='h-screen w-full flex flex-col  ' >
      <p className=' text-center text-xl p-4 text-[#e97902] font-bold font-mono ' >Student Application</p>
      <Form/>
    </div>
  )
}

export default Page;