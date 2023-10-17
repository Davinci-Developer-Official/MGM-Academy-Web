import React from 'react'
import ba from "../public/profile/vlcsnap-2022-06-29-14h22m30s920.png";
import bb from "../public/profile/vlcsnap-2022-06-29-14h23m45s921.png";
import bc from "../public/profile/vlcsnap-2022-06-29-14h24m31s848.png"
import SearchbarAsn from './SearchbarAsn';
import FilterAsn from './FilterAsn';

function AsContent() {
    const items = [
        {
          "id":1,
          "courseName":"Sub-poena drafting ",
          "courseInstructor":"John Lenon",
          "coverImage":ba
      },{
          "id":2,
          "courseName":"Litigation drafting ",
          "courseInstructor":"Grace Lenon",
          "coverImage":bb
      },{
          "id":3,
          "courseName":"Ui Design drafting ",
          "courseInstructor":"Thomas Mithamo",
          "coverImage":bc
      },{
          "id":4,
          "courseName":"Mental Health ",
          "courseInstructor":"Grace williams",
          "coverImage":ba
      },{
          "id":5,
          "courseName":"Mistrial ",
          "courseInstructor":"Miss Kim",
          "coverImage":bb
      }
      ];
  return (
    <div className='lg:w-4/5 sm:w-full flex flex-col '>
    <SearchbarAsn/>
    <div> <FilterAsn/> </div>
    </div>
  )
}

export default AsContent