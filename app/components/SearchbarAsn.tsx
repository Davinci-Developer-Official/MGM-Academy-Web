import React from 'react'
import { FaSearch } from 'react-icons/fa'
import FilterSelectorCourses from './FilterSelectorCourses'

function SearchbarAsn() {
  return (
    <div className=' lg:h-[80px] w-[90%] mx-auto  sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row  mb-5  ' >
        <FilterSelectorCourses/>
        <div className='w-[70%]  mt-5  flex flex-row mx-auto bg-base rounded-md border  border-[#2d545e]  ' >
            <input className=' w-[100%] rounded-tl-md rounded-bl-md p-3 placeholder-[#2d545e] bg-[#e1b382] text-[#2d545e] ' autoFocus={true} placeholder='  search assignment' />
            <button className='btn text-[#e1b382] bg-[#2d545e] rounded-bl-none rounded-tl-none h-[60px] ' ><FaSearch /></button>
        </div>
        
      </div>
  )
}

export default SearchbarAsn