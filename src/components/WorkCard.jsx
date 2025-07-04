import React from 'react'

function WorkCard({num, head, para}) {
    return (
        <div className='w-[300px] bg-[#1e293b] p-4 mt-4 text-center flex justify-center items-center flex-col'>
            <h4 className='text-xl mt-5 mb-3'>Step {num}</h4>
            <h5 className='text-2xl text-amber-50 font-bold'>{head}</h5>
            <div className='h-[1px] w-[200px] bg-green-200 my-6'></div>
            <p className='pb-7 text-white'>{para}.</p>
        </div>
    )
}

export default WorkCard