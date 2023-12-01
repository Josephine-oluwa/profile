import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { SiTypescript } from "react-icons/si";


const Skills = () => {
  return (
    <div className='w-full h-[100vh]  flex items-center justify-center'>
       <div className='w-[55vw]  flex items-center '>
       <div className='w-1/2 h-[100vh] '> 
      <div className='flex flex-col '>
      <span className='text-[30px] font-semibold'>Skills and Experience</span>
      <span className='text-[20px] mt-10 '>As a frontend developer, my passion and <br/>
       attention to detail are dedicated  <br/>
        to crafting visually appealing and<br/>
         highly functional web applications.</span>
      </div>
     <div className='flex justify-center'>
     <div className='w-full h-[400px] mt-20 flex gap-5 '>
<div>
<div className='w-[100px] h-[100px] bg-pink-100 text-[30px] flex justify-center items-center rounded-[2px]'><SiTypescript /></div>
    <div className='w-[100px] h-[100px] bg-pink-100 text-[30px] flex justify-center items-center rounded-[2px]'><SiTypescript /></div>
    <div className='w-[100px] h-[100px] bg-pink-100 text-[30px] flex justify-center items-center rounded-[2px]'><SiTypescript /></div> 
</div>
    
    
   
   
      </div>
     </div>
       </div>




        <div className='w-1/2 h-[100vh] '> 
        <span className='text-[20px] font-bold'>Experience</span>
        
       
    <div className='w-full h-[100px] border-[2px] border-black flex justify-between items-center mt-20'>
   
       <center className='px-2 py-2 w-[200px] bg-slate-100  h-10 rounded-[20px] ml-3'> 2021 - Present</center>
       <span>SoftWare Engineer</span>
       <span className='mr-3'>Codelab</span>
    
    </div>
    <div className='w-full h-[100px] border-[2px] border-black flex justify-between items-center mt-2'>
   
       <center className='px-2 py-2 w-[200px] bg-slate-100  h-10 rounded-[20px] ml-3'> 2021 - Present</center>
       <span>SoftWare Engineer</span>
       <span className='mr-3'>Codelab</span>
    
    </div>
    <div className='w-full h-[100px] border-[2px] border-black flex justify-between items-center mt-2'>
   
       <center className='px-2 py-2 w-[200px] bg-slate-100  h-10 rounded-[20px] ml-3'> 2021 - Present</center>
       <span>SoftWare Engineer</span>
       <span className='mr-3'>Codelab</span>
    
    </div>

  
      
        </div>
       </div>
       
    </div>
  )
}

export default Skills