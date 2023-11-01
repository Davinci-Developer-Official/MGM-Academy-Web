"use client"
import React, { useState } from 'react'
//import FilterAsn from './FilterAsn'
import { FaCompress, FaExpand } from 'react-icons/fa'
import FilterSelectorCourses from './FilterSelectorCourses'

function Choices() {
    const[scrollbar,showScrollbar]=useState(false)
  return (
    <div className='h-[50px] bg-white w-[80%] mx-auto flex flex-row  '>
        <FilterSelectorCourses/>
        {scrollbar?<button className='btn btn-ghost text-green-700 py-auto ' onClick={()=>showScrollbar(false)} ><FaExpand/></button>:<button className='btn btn-ghost py-auto ' onClick={()=>showScrollbar(true)} ><FaCompress/></button>}
    </div>
  )
}

export default Choices