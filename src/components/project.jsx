import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Project() {
  return (
    <div className='w-full text-center bg-[#01000c] text-amber-50 pb-24'>
        <div className='text-8xl md:text-[12rem] tracking-tight leading-44 text-zinc-400 opacity-9 absolute'>Let's Work Together</div>
        <div className='p-10 flex flex-col justify-center items-center m-auto'>
            <h2 className='text-green-400'>Work with us</h2>
            <h1 className='max-w-2xl text-5xl my-3'>Have Any Projects On Minds! Feel Free to Contact Us</h1>
            <div className='h-[150px] w-[150px] bg-green-300 hover:bg-white  rounded-full flex flex-col justify-center items-center text-zinc-900 mt-10 cursor-pointer transition-colors duration-300 '>
                <FaArrowUp className='text-2xl' />
                <h4 className='font-bold text-lg pt-3'>Let's talk</h4>
                <h4 className='font-bold text-lg'>with us</h4>
            </div>
        </div>
    </div>
  )
}

export default Project