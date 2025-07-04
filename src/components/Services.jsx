import React from 'react'
import Card from './Card'

function Services() {
    return (
        <div className='w-full pt-32 px-6 md:px-48 bg-black text-amber-50 flex flex-col justify-center text-center'>
            <div className='flex gap-3 items-center justify-center'>
                <img className='text-green-400 h-[15px] w-[50px]' src="https://vdigtech.com/wp-content/uploads/2024/03/Vector-1.png" alt="" />
                <h5 className='text-green-400 text-2xl'> All Services</h5>
            </div>
            <h2 className='text-6xl font-semibold py-3'>Our Services</h2>
            <p className='max-w-[600px] m-auto text-lg'>Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.</p>

            <div className='py-20 flex flex-wrap justify-center'>
                <Card name={"Website Development"} logo={"https://vdigtech.com/wp-content/uploads/2024/03/development-1.png"} source={"https://vdigtech.com/wp-content/uploads/2024/03/Image-20.jpg"} backcol={"#1e293b"}/>

                <Card name={"App Development"} logo={"https://vdigtech.com/wp-content/uploads/2024/03/XMLID_1809_.png"} source={"https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg"} backcol={"#1e293b"}/>

                <Card name={"Digital Marketing"} logo={"https://vdigtech.com/wp-content/uploads/2024/03/brainstorming-1.png"} source={"https://vdigtech.com/wp-content/uploads/2024/03/Image-27.jpg"} backcol={"#1e293b"}/>

                <Card name={"Website Maintainance"} logo={"https://vdigtech.com/wp-content/uploads/2024/03/branding-1.png"} source={"https://vdigtech.com/wp-content/uploads/2024/03/Image-24.jpg"} backcol={"#1e293b"}/>

                <Card name={"Graphic Design"} logo={"https://vdigtech.com/wp-content/uploads/2024/03/Group-1-2.png"} source={"https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-1.png"} backcol={"#1e293b"}/>

                <Card name={"Domain & hosting"} logo={"https://vdigtech.com/wp-content/uploads/2024/03/optimization-1.png"} source={"https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-2.png"} backcol={"#1e293b"}/>
            </div>
        </div>
    )
}

export default Services