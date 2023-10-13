import React from 'react'
import ba from "../public/profile/vlcsnap-2022-06-29-14h22m30s920.png"
import Image from 'next/image'

function ProfileBtn() {
  return (
    <div className="dropdown dropdown-end mt-[50%]">
      <div className='flex flex-row' >
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src={ba} alt="image"  />
        </div>
      </label>
      <span  ><p className='mt-4 ml-4' >Thomas Mithamo</p></span>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  )
}

export default ProfileBtn