import React from 'react'

function Footer() {
  return (
  
  <footer className="footer p-8  background h-fit relative border-t-2 border-t-[#e97902] "  >
  <nav>
    <header className="footer-title border-b-2 border-b-[#e97902] ">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title border-b-2 border-b-[#e97902] ">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn background absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
   
  )
}

export default Footer