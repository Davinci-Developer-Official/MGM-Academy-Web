import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar() {
  return (
   
        <span className='w-[350px] flex flex-row  mx-auto border rounded-md border-base ' >
          <input className=' h-10 w-[90%] bg-white  pl-1 rounded-tl-md rounded-bl-md text-black ' placeholder='  Search Courses  '   />
          <button className=' text-green-600 bg-white w-[10%] rounded-tr-md rounded-br-md  ' >
            <FaSearch size={20} className="pl-1 text-green-900 "  />
          </button>
        </span>
   
  )
}

export default Searchbar