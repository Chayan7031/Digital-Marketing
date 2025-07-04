import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import CollapsibleSection from './para';

function Expertise() {
  return (
    <div className='w-full p-8 md:p-48 bg-[#01000c] flex justify-between text-amber-50 flex-col md:flex-row'>
        <div className='flex flex-col'>
            <h1 className='text-5xl font-semibold mb-3'>Expertise</h1>
            <p className='max-w-xl text-lg'>Digital marketing is a process of promoting and boosting of virtual businesses on the digital world. We understand the importance of it and our experts optimize the website with organic leads that tend to grow the business in all aspects.</p>
            
            <CollapsibleSection topbar={"Improved customer reached"}/>
            <CollapsibleSection topbar={"Complete Brand Control"}/>
            <CollapsibleSection topbar={"Enhanced Customer Trust"}/>

           
        </div>
        <div className='flex justify-center'>
            <img className='w-[370px]' src="https://vdigtech.com/wp-content/uploads/2024/03/faq_services-details-style02-PQBW3XN.jpg" alt="" />
        </div>
    </div>
  ) 
}

export default Expertise