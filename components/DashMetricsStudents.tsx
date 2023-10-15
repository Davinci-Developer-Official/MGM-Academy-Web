import React from 'react'

function DashMetricsStudents() {
  return (
    <div className='h-[450px] bg-base rounded-md border border-black flex flex-col  ' >
        <p className='text-center  text-base h-[50px] pt-[10px] ' > Progress Tracker </p>
        {/*Row 1*/}
        <div className='h-[200px] w-full flex flex-row bg-base justify-evenly  ' >
        <label className='w-[200px] bg-base h-[80%]  my-auto rounded-md border border-black '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Courses Taken
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-base  ' >
            10
          </div>
        </label>
        <label className='w-[200px] bg-base h-[80%] my-auto rounded-md border border-black '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Courses Completed
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-base  ' >
            0
          </div>
        </label>
        </div>
        {/*Row 2*/}
        <div className='h-[200px] w-full flex flex-row bg-base justify-evenly rounded-bl-md rounded-br-md ' >
        <label className='w-[200px] bg-base h-[80%] my-auto rounded-md border border-black '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Certificates Earned
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-base  ' >
            10
          </div>
        </label>
        <label className='w-[200px] bg-base h-[80%] my-auto rounded-md border border-black  '  >
          <div className='w-full h-[20%] bg-base text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Hours Spent
          </div>
          <div className='h-[80%] bg-base w-full text-center  pt-[20%] rounded-br-md rounded-bl-md text-base  ' >
            10
          </div>
        </label>
        </div>
    </div>
  )
}

export default DashMetricsStudents