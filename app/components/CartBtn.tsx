import Link from 'next/link'
import React from 'react'

function CartBtn() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e1b382] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm  bg-[#e1b382] text-[#2d545e] indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 text-[#e1b382] bg-[#2d545e] border border-[#e1b382]  shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link href="/academics/studentPortal/Checkout" className="btn bg-[#e1b382] text-[#2d545e] hover:text-[#e1b382] hover:bg-[#2d545e] hover:border hover:border-[#e1b382] btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartBtn