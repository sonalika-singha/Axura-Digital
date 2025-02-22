import React from 'react'
import  "./css/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar flex justify-between px-3'>
      <div className="logo flex text-center items-center">
        <div className="logo-img items-center flex justify-center">
          <img src="" alt="Logo" />
        </div>
        <div className="logo-text ms-3 text-xl">
          <p>AXURA DIGITAL</p>
        </div>
      </div>
      <div className="nav-items items-center flex">
        <ul className='flex gap-4 items-center'>
          <li className='px-4 py-2'>About</li>
          <li className='px-4 py-2'>Service</li>
          <li className='px-4 py-2'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar