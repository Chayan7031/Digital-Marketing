import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ResponsiveDropdown from './dropdown';

function Navbar() {
  return (
    <div className='h-28 w-full bg-zinc-900 flex items-center justify-between px-10 md:px-52 z-100 '>
      <div>
        <img className='h-[40px] md:h-[54px]' src="https://vdigtech.com/wp-content/uploads/2024/03/cropped-vd-logo-copy.png" alt="" />
      </div>
      <div className='text-white hidden md:flex gap-16 text-lg items-center' >
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Products</h4>
        <h4>Contact us</h4>
        <h4 className='bg-green-300 hover:bg-white transition-colors duration-500 ease-out text-black py-3 px-6 flex items-center gap-1'>Let's talk <FaArrowUp /></h4>
      </div>
      {/* <FaBars className='text-white flex md:hidden ' /> */}
      <ResponsiveDropdown/>
    </div>
  )
}

export default Navbar;