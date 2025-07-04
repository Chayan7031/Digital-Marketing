import React from 'react'
import WorkCard from './WorkCard';
import { MdKeyboardArrowRight } from "react-icons/md";

function Works() {
    return (
        <div className='w-full py-20 px-10 md:px-44 bg-black text-green-400'>
            <div className='flex items-center gap-4'>
                <img className='text-green-400 h-[15px] w-[50px]' src="https://vdigtech.com/wp-content/uploads/2024/03/Vector-1.png" alt="" />
                <h2 className='capitalize text-2xl'>How we works</h2>
            </div>
            <div className='flex flex-wrap justify-center md:justify-between items-center'>
                <WorkCard num={"01"} head={"Web Inspection"} para={"Proper inspection of a website with the best tools for the next stage"} />
                <MdKeyboardArrowRight className='text-gray-400 text-4xl hidden md:flex' />
                <div className='w-[300px] bg-green-400 p-4 mt-4 text-center flex justify-center items-center flex-col'>
                    <h4 className='text-xl mt-5 mb-3 text-zinc-900'>Step 02</h4>
                    <h5 className='text-2xl text-zinc-900 font-bold'>Deep Optimization</h5>
                    <div className='h-[1px] w-[200px] bg-zinc-600 my-6'></div>
                    <p className='pb-7 text-zinc-900'>Optimizing the website with special strategies by covering all its needs.</p>
                </div>
                <MdKeyboardArrowRight className='text-gray-400 text-4xl hidden md:flex' />
                <WorkCard num={"03"} head={"Analyze Growth"} para={"Expert analysis of website data for deploying a strategy for further growth."} />

            </div>

            
            <div className='text-amber-50 mt-18'>
                <div className='flex gap-2 items-center'>
                    <img className='text-green-400 h-[15px] w-[50px]' src="https://vdigtech.com/wp-content/uploads/2024/03/Vector-1.png" alt="" />
                    <h2 className='capitalize text-2xl text-green-400'>What we do</h2>
                </div>
                <p className='max-w-xl text-xl md:text-2xl'>As a website designer we provide affordable website design services to our clients all over the world with best services. Our services include; small business website design services. </p>
            </div>
        </div >
    )
}

export default Works;