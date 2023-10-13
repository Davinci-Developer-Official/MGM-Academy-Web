import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar() {
  return (
    <div className='w-full ' >
        <span className='w-[80%] ml-[10%] flex flex-row  pt-5 ' >
          <input className='w-[90%]  ' style={{
            borderRadius:10,
            borderWidth:2,                      
            borderStyle:"inset"
          }} placeholder='  Search Courses  ' />
          <button className='btn btn-ghost w-[10%] rounded '><FaSearch/></button>
        </span>
    </div>
  )
}

export default Searchbar