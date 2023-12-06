import React from 'react'

const Latest = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='w-[60vw] h-full bg-slate-200'>
    <div className='text-[30px]  font-semibold'>Latest Projects</div>
    <div className='flex gap-10'>
        <div className='w-[350px] h-[450px] flex flex-col justify-between mt-10'>
            <div className='w-full h-[300px] bg-pink-300 rounded '> </div>
            <span className='text-[20px] font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span className='text-[15px] '> What is  Lorem Ipsum?</span>
            <button className=' px-2 py-2 w-[100px] bg-pink-400 rounded' > Details</button>
        </div>
        <div className='w-[350px] h-[450px] flex flex-col justify-between mt-10'>
            <div className='w-full h-[300px] bg-pink-300 rounded '> </div>
            <span className='text-[20px] font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span className='text-[15px] '> What is  Lorem Ipsum?</span>
            <button className=' px-2 py-2 w-[100px] bg-pink-400 rounded' > Details</button>
        </div>
        <div className='w-[350px] h-[450px] flex flex-col justify-between mt-10'>
            <div className='w-full h-[300px] bg-pink-300 rounded '> </div>
            <span className='text-[20px] font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span className='text-[15px] '> What is  Lorem Ipsum?</span>
            <button className=' px-2 py-2 w-[100px] bg-pink-400 rounded' > Details</button>
        </div>
    </div>
        </div>
    </div> 
  )
}

export default Latest