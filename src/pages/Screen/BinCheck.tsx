import React from 'react'

const BinCheck = () => {
  return (
    <div className='w-full h-[100vh] bg-pink-300 flex justify-center items-center'>
        <div className='w-[45vw] h-[50vh] bg-white rounded-[10px] flex justify-center items-center flex-col'>
    <span className='text-[40px] font-bold text-red-500'>BIN Checker</span>
    <center className='text-[20px] text-gray-500'>Our Commitement to user safety reaches new heights <br/> as we implement this cuuting edge <br/> to verify user validity</center>
    <span className='text-[20px] font-bold uppercase'>Place the first six digit of your card</span>
    <button className='border w-[300px] h-[50px] rounded-[10px] mt-5'>103460 </button>
    <button className='border px-20 py-4 rounded-[10px] text-white bg-red-500 mt-5'>Check BIN </button>
        </div>
    </div>
  )
}

export default BinCheck