import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchbarAsn() {
  return (
    <div className=' h-[80px] w-[80%] mx-auto ' >
        <div className='w-[70%] mt-5  flex flex-row mx-auto bg-base rounded-md border border-green-600 ' >
            <input className=' w-[90%] rounded-tl-md rounded-bl-md p-3 placeholder-green-700 ' autoFocus={true} placeholder='  search assignment' />
            <button className='btn text-green-700 bg-base rounded-bl-none rounded-tl-none ' ><FaSearch /></button>
        </div>
      </div>
  )
}

export default SearchbarAsn