import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import mine2 from "../../assets/Mine2.jpg"

const AboutMe = () => {
  return (
    <div className='w-full h-[180vh]  '>
       <div className='flex justify-center '>
       <div className='w-[55vw] h-[100vh]  flex items-center flex-col mt-20'>
    <div className=''>
        <div className='text-[30px] font-semibold '>About Josephine</div>
      <div className='flex justify-center items-center  mt-10'>
        <div className='w-1/2 '>
            <img className='w-[400px] h-full mt-5 rounded-[5px] object-cover ' 
            src={mine2}
            />
        </div>
        <div className='w-1/2  h-full  flex  justify-center items-center'>
        <span className='text-[20px]  font-normal mt-7'>

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown
printer took a galley of type and scrambled it to make a type specimen book.
</span>
        </div>
      </div>
    </div>






    <div className='w-full mt-20 flex '>
       <div className='w-1/2 flex flex-col'>
        <span className='text-[30px] mt-10 font-semibold '>Services She Offer</span>
        <span className='mt-5'>What is Lorem Ipsum?
Lorem Ipsum is simply dummy <br/> text of
 the printing and typesetting industry. <br/>
Lorem Ipsum has been the industry's standard<br/>
 dummy text ever since the 1500s, </span>
       <img className='h-[400px] w-[300px] mt-10 object-cover' src={mine2} />
       </div>
       <div className='w-1/2  h-[100vh]'>
       <div className="w-full h-[200px] border-black border mt-10  flex justify-center items-center">
       <div className='flex w-[450px] justify-between '>
        <div className='text-[25px]'>01/ </div>
        <div className='text-[25px]'>Software Development</div>
       <div className='flex flex-col  justify-between  w-[50px]'>
       <div className= ' px-4 py-4 rounded-full bg-yellow-500 '><BsArrowUpRight/></div>
        <div className='mt-2 text-[12px]'>Explore</div>
       </div>
       </div>
         </div>
       <div className="w-full h-[200px] border-black border mt-5 flex justify-center items-center">
       <div className='flex w-[450px] justify-between '>
        <div className='text-[25px]'>01/ </div>
        <div className='text-[25px]'>Software Development</div>
       <div className='flex flex-col  justify-between  w-[50px]'>
       <div className= ' px-4 py-4 rounded-full bg-yellow-500 '><BsArrowUpRight/></div>
        <div className='mt-2 text-[12px]'>Explore</div>
       </div>
       </div>
         </div>
       <div className="w-full h-[200px] border-black border mt-5 flex justify-center items-center">
       <div className='flex w-[450px] justify-between '>
        <div className='text-[25px]'>01/ </div>
        <div className='text-[25px]'>Software Development</div>
       <div className='flex flex-col  justify-between  w-[50px]'>
       <div className= ' px-4 py-4 rounded-full bg-yellow-500 '><BsArrowUpRight/></div>
        <div className='mt-2 text-[12px]'>Explore</div>
       </div>
       </div>
         </div>
       
    
      
   
    </div>
    </div>
</div> 
       </div>
    </div>
  )
}

export default AboutMe