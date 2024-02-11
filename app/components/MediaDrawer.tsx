import React from 'react'
import { FaCaretLeft, FaFileDownload, FaTimes } from 'react-icons/fa'

function MediaDrawer() {
  return (
    <div className="drawer lg:drawer-open drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button fixed btn btn-ghost lg:hidden top-[63px] right-1 text-[#e1b382] background hover:border-[#e1b382] "><FaFileDownload/>docs</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
      {/*Close drawer*/}
      <label htmlFor="my-drawer-4" className="btn btn-ghost  text-[#e1b382] hover:border-[#e1b382] w-fit lg:hidden background "><FaTimes size={20} className="" /> close </label>

      {/* Sidebar content here */}
      <li><a>media Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
  )
}

export default MediaDrawer