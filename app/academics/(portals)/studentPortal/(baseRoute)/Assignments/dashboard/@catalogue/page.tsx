import React from 'react'

function page() {
  const chapters=['chapter 1','chapter 2','chapter 3','chapter 4','chapter 5','chapter 6','chapter 7','chapter 8','chapter 9','chapter 10']
  return (
    <div className='pt-[35px] overflow-y-scroll h-full background  ' >
      {chapters.map((chapter,index)=>(
         <div className='mt-2 btn btn-ghost   ' key={index} >
          <p>{chapter}</p>
         </div>
      ))}
    </div>
  )
}

export default page