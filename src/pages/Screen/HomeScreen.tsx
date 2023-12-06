import { BsArrowUpRight } from "react-icons/bs";
import Typewriter from 'typewriter-effect'
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";


const HomeScreen = () => {
  return (

      <div className='w-full h-[100vh] font-bold  font-poppins'>
       <div className='flex justify-center items-center  flex-col'>
   <div className="w-[55vw] h-[80vh] flex items-center justify-center flex-col mt-20 ">
   <span className='text-[40px]'>OLUWAFEMI JOSEPHINE TAIWO</span>
       <div className='text-[30px] text-[#ff7e20] flex mt-3'> 
       <span className='static '> I am a  <br/> </span>
       <Typewriter 
              

                options={{ loop: true }}
                onInit={(typewriter: any) => {
                  typewriter

                    .typeString("Believer")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("Software Engineer...")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("Content Creator...")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("Designer...")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("Photographer...")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
       </div>

    <div className="flex mt-7 text-[12px]">
  <div className="flex mr-4"> INSTAGRAM <CiLocationArrow1 className=" text-[#ff7e20]"/></div>
   <div className="flex mr-4">X <CiLocationArrow1  className=" text-[#ff7e20]"/></div>
  <div className="flex mr-4"> LINKEDIN <CiLocationArrow1 className=" text-[#ff7e20]" /></div>
  <div className="flex mr-4"> DISCORD<CiLocationArrow1 className=" text-[#ff7e20]"/></div>
   <div className="flex mr-4">FACEBOOK<CiLocationArrow1 className=" text-[#ff7e20]"/></div>
   <div className="flex mr-4">BEHANCE <CiLocationArrow1 className=" text-[#ff7e20]"/></div>
  <div className="flex mr-4"> GITHUB <CiLocationArrow1 className=" text-[#ff7e20]"/></div>
    </div>

   <div className=" w-full h-[500px]   mt-20 flex justify-between">
  <div className="w-1/4 ">
  <div className="w-[250px] h-[200px] mt-[10%] selection:text-10 font-normal">
    hi. farza from buildspace here.
    no matter what you're working on, 
    it helps to find people with resources to help support your idea.
   <button className="w-[130px] h-10 flex justify-center items-center mt-5 text-white bg-[#ff7e20] " > <Link to={"https://www.linkedin.com/in/josephine-oluwafemi-3ab088218/"}></Link>  Hire me!<CiLocationArrow1 /></button>

   <div className=" text-[40px] mt-[150px] ">5</div>
   <div className="font-normal text-[#ff7e20]">Work Experience </div>
   
    </div>
  </div>

                
  <div className="w-1/2 flex justify-center">
  <div className="h-[500px] w-[500px] rounded-full border border-[#ff7e20] flex justify-center items-center">
                <div className="h-[450px] w-[450px]  bg-black rounded-full"></div>
  </div>
  </div>
 
 
 <div className="w-1/4  flex justify-end items-center">
 <div className="mt-[10%]">
  <div className=" text-[40px] ">3728 </div>
   <div className="font-normal text-[#ff7e20]">Completed Project</div>
  <div className=" text-[40px] mt-7 ">98%</div>
   <div className="font-normal text-[#ff7e20]">Client Rating</div>
  <div className=" text-[40px] mt-7 ">5</div>
   <div className="font-normal text-[#ff7e20]">Work Experience</div>
  </div>
 </div>
   </div>
   </div>

  
       </div>
       
      </div>
   
  )
}

export default HomeScreen