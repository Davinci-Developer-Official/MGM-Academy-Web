import React from 'react'

function DashMetricsStudents() {
  return (
    <div className='h-[450px] bg-white rounded-md border border-black flex flex-col  ' >
        <p className='text-center text-lg text-black h-[50px] pt-[10px] ' > Progress Tracker </p>
        {/*Row 1*/}
        <div className='h-[200px] w-full flex flex-row bg-white justify-evenly  ' >
        <label className='w-[200px] bg-red-500 h-[80%] my-auto rounded-md border border-black '  >
          <div className='w-full h-[20%] bg-white text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Courses Taken
          </div>
          <div className='h-[80%] bg-white w-full text-center text-xl pt-[20%] rounded-br-md rounded-bl-md text-black  ' >
            10
          </div>
        </label>
        <label className='w-[200px] bg-red-500 h-[80%] my-auto rounded-md border border-black '  >
          <div className='w-full h-[20%] bg-white text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Courses Completed
          </div>
          <div className='h-[80%] bg-white w-full text-center text-xl pt-[20%] rounded-br-md rounded-bl-md text-black  ' >
            0
          </div>
        </label>
        </div>
        {/*Row 2*/}
        <div className='h-[200px] w-full flex flex-row bg-white justify-evenly rounded-bl-md rounded-br-md ' >
        <label className='w-[200px] bg-red-500 h-[80%] my-auto rounded-md border border-black '  >
          <div className='w-full h-[20%] bg-white text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Certificates Earned
          </div>
          <div className='h-[80%] bg-white w-full text-center text-xl pt-[20%] rounded-br-md rounded-bl-md text-black  ' >
            10
          </div>
        </label>
        <label className='w-[200px] bg-red-500 h-[80%] my-auto rounded-md border border-black  '  >
          <div className='w-full h-[20%] bg-white text-center pt-2 rounded-tr-md rounded-tl-md text-green-500 ' >
            Hours Spent
          </div>
          <div className='h-[80%] bg-white w-full text-center text-xl pt-[20%] rounded-br-md rounded-bl-md text-black  ' >
            10
          </div>
        </label>
        </div>
    </div>
  )
}

export default DashMetricsStudents