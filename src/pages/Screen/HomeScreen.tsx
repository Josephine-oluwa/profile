import { BsArrowUpRight } from "react-icons/bs";
import Typewriter from 'typewriter-effect'
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import { CiLocationArrow1 } from "react-icons/ci";
import mine1 from "../../assets/Mine1.jpg"

const HomeScreen = () => {
  return (

      <div className='w-full h-[100vh] font-bold bg-slate-200 font-inter'>
       <div className='flex justify-center items-center  flex-col'>
   <div className="w-[60vw] h-[80vh] flex items-center justify-center flex-col mt-20 ">
   <span className='text-[40px]'>OLUWAFEMI JOSEPHINE TAIWO</span>
       <div className='text-[30px] text-blue-500 flex mt-3'> 
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
  <div className="flex mr-4"> INSTAGRAM <CiLocationArrow1 /></div>
   <div className="flex mr-4">X <CiLocationArrow1 /></div>
  <div className="flex mr-4"> LINKEDIN <CiLocationArrow1 /></div>
  <div className="flex mr-4"> DISCORD<CiLocationArrow1 /></div>
   <div className="flex mr-4">FACEBOOK<CiLocationArrow1 /></div>
   <div className="flex mr-4">BEHANCE <CiLocationArrow1 /></div>
  <div className="flex mr-4"> GITHUB <CiLocationArrow1 /></div>
    </div>

   <div className=" w-full flex justify-center">
    <div className="w-[250px] h-[200px] mt-[10%]  mr-[50px] selection:text-10 font-normal">
    hi. farza from buildspace here.
    no matter what you're working on, 
    it helps to find people with resources to help support your idea.
   <div className="w-[130px] h-10 flex justify-center items-center mt-5 text-white bg-red-500">Hire me!<CiLocationArrow1 /></div>

   <div className=" text-[40px] mt-[200px] ">5</div>
   <div className="font-normal">Work Experience </div>
   
    </div>

   <div className="h-[500px] w-[500px] bg-blue-100 mt-20 rounded-full border border-red-500 ">
   <img/>
   </div>
  <div className="ml-[150px] mt-[12%]">
  <div className=" text-[40px] ">3728 </div>
   <div className="font-normal">Completed Project</div>
  <div className=" text-[40px] mt-5 ">98%</div>
   <div className="font-normal">Client Rating</div>
  <div className=" text-[40px] mt-5 ">5</div>
   <div className="font-normal">Work Experience</div>
  </div>
   </div>
   </div>

  
       </div>
       
      </div>
   
  )
}

export default HomeScreen