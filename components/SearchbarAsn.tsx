import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchbarAsn() {
  return (
    <span className='w-[350px] flex flex-row fixex mx-auto pt-5  ' >
    <input className=' h-10 w-[90%] bg-white  pl-1 rounded-tl-md rounded-bl-md  ' placeholder='  Search Courses  '   />
    <button className=' bg-white  w-[10%] rounded-tr-md rounded-br-md  ' >
      <FaSearch size={20} className="pl-1 text-green-500 "  />
    </button>
  </span>
  )
}

export default SearchbarAsn