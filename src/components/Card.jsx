import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Card({ name, logo, source, backcol }) {
    return (
        <div className={`w-[260px]  bg-[${backcol}] p-3 m-3`}>
            <div className='flex justify-between'>
                <img
                    className="pt-7 pl-3 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src={logo}
                    alt="Logo"
                />

                <MdArrowOutward
                    className="text-green-400 bg-black text-6xl p-2 cursor-pointer
             transition-transform duration-300 ease-in-out
             hover:scale-105 hover:translate-x-1 hover:-translate-y-1"
                />

            </div>
            <h1 className="pt-8 pb-10 text-[22px] cursor-pointer font-bold text-white hover:text-green-400 transition-colors duration-300">
                {name}
            </h1>

            <img src={source} alt="" />
        </div>

    )
}

export default Card