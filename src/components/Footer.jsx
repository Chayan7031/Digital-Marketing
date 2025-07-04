import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


function Footer() {
    return (
        <div className='md:px-28 bg-[#0a1019] py-10'>
            <img className='h-[60px]' src="https://vdigtech.com/wp-content/uploads/2024/03/cropped-vd-logo-copy.png" alt="" />
            <div className='flex flex-col md:flex-row pt-5 border-t-1 border-t-zinc-500 justify-between '>
                <div className='text-center md:text-left'>
                    <h1 className='text-[3rem] md:text-8xl text-white'>Get Ready to</h1>
                    <h1 className='text-[3rem] md:text-8xl text-white'>Grow Your Business</h1>
                    <div className='flex items-center flex-wrap my-14 gap-3 justify-center md:justify-start'>
                        <div className='flex text-white cursor-pointer px-5 py-3 text-[25px] border-green-300 rounded-4xl border-1 hover:bg-green-300 hover:text-black transition-all duration-400 ease-out items-center gap-2'>
                            <p>info@vdigtech.com</p>
                            <FaArrowUp className='text-lg'/>

                        </div>
                        <div className='flex text-white cursor-pointer px-5 py-3 text-[25px] border-green-300 rounded-4xl border-1 hover:bg-green-300 hover:text-black transition-all duration-400 ease-out items-center gap-2'>
                            <p>+91 7602631031</p>
                            <FaArrowUp className='text-lg'/>

                        </div>
                    </div>
                </div>

                <div className='text-white flex flex-wrap justify-between p-4  max-w-[400px] border-l-1 border-l-zinc-500 border-b-1 border-b-zinc-500 pl-4'>
                    <div className=' flex flex-col gap-5  text-xl'>
                        <h2 className='text-3xl pb-3'>Quick Links</h2>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>Home</h4>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>About Us</h4>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>Services</h4>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>Contact Us</h4>
                    </div>
                    <div className=' flex flex-col gap-5 text-xl'>
                        <h2 className='text-3xl pb-3'>Services</h2>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>Web Development</h4>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>App Development</h4>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>Website Maintainance</h4>
                        <h4 className='hover:text-green-400 transition-colors duration-200 ease-in-out'>Digital Marketing</h4>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap gap-2 md:gap-10 px-10 my-15 text-amber-50 text-xl'>
                <h4 className='flex items-center gap-1'><FaRegCopyright /> 2024 Vdigtech. All Rights Reserved.</h4>
                <h4 className='hover:text-green-300'>Privacy policy</h4>
                <h4 className='hover:text-green-300'>Terms & Conditions</h4>
                <h4 className='hover:text-green-300'>Made with by Think Web Hub</h4>
            </div>
        </div>
    )
}

export default Footer