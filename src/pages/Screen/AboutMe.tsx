import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import mine2 from "../../assets/Mine2.jpg"
import { Link } from 'react-router-dom'
import { CiLocationArrow1 } from 'react-icons/ci'

const AboutMe = () => {
  return (
    <div className='w-full h-[100vh]   bg-slate-100 flex justify-center '>
      
       <div className='w-[55vw] h-[70vh]   flex items-center justify-center mt-20'>
  
       
      
        <div className='w-1/2 '>
          <div className='w-[450px] h-[100%]  flex justify-center items-center border border-[#ff7e20] rounded'>
          <img className='w-[400px] h-[90%] mt-5 rounded-[5px] object-cover ' 
            src={mine2} 
            />
          </div>
        </div>
        <div className='w-1/2    flex  flex-col  '>
        <div className='text-[30px] font-semibold  '>About Me</div>
        <span className='text-[20px]  font-normal mt-7'>

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown
printer took a galley of type and scrambled it to make a type specimen book.
</span>
<button className="w-[200px] h-12 flex justify-center  mt-7 items-center rounded text-white text-[18px] bg-[#ff7e20] " > <Link to={"https://www.linkedin.com/in/josephine-oluwafemi-3ab088218/"}></Link> Download Resume <CiLocationArrow1 /></button>

        </div>
  
  






</div> 
   
    </div>
  )
}

export default AboutMe