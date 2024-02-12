import mine6 from "../../assets/mine6.jpg"

import Typewriter from 'typewriter-effect'
import { CiLocationArrow1 } from "react-icons/ci";


const HomeScreen= () => {
  return (

<div className="w-full h-[200px] bg-slate-500 flex justify-center items-center">
<div className='w-full h-[95vh] font-bold flex justify-center items-center font-poppins'>
  <div className='flex justify-center items-center flex-col max-sm:flex-col-reverse'>

    <div className="w-full sm:w-[55vw] h-[80vh] flex items-center justify-center phone:mt-20 flex-col mt-20">
      <span className='text-[40px]'>OLUWAFEMI JOSEPHINE TAIWO</span>
      {/* <div className='text-[30px] text-[#ff7e20] flex '>
        <br/>
        <span className='static '> I am a  <br/> </span>
        <span className="ml-2 static"> </span>

        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter: any) => {
            typewriter
              .typeString("Believer...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Software Engineer...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Designer...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Technical Writter...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("AI/Web3 Enthusiast...")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      </div> */}

      <div className="flex flex-wrap mt-4 text-[12px]">
         <a href="https://www.linkedin.com/in/josephine-oluwafemi-3ab088218" target="_blank" rel="noopener noreferrer"> 
            <button className="flex mr-4 mb-2 sm:mb-0"> LINKEDIN <CiLocationArrow1 className=" text-[#ff7e20]" /></button>
         </a>
         <a href="https://github.com/Josephine-oluwa" target="_blank" rel="noopener noreferrer"> 
            <button className="flex mr-4 mb-2 sm:mb-0"> GITHUB <CiLocationArrow1 className=" text-[#ff7e20]" /></button>
         </a>
         <a href="https://www.instagram.com/josephine_oluwafemi/" target="_blank" rel="noopener noreferrer"> 
            <button className="flex mr-4 mb-2 sm:mb-0"> INSTAGRAM <CiLocationArrow1 className=" text-[#ff7e20]" /></button>
         </a>
         <a href="https://https://twitter.com/Oluwafe18792028" target="_blank" rel="noopener noreferrer"> 
            <button className="flex mr-4 mb-2 sm:mb-0"> X <CiLocationArrow1 className=" text-[#ff7e20]" /></button>
         </a>
         <a href="https://www.behance.net/Josephine1988" target="_blank" rel="noopener noreferrer"> 
            <button className="flex mr-4 mb-2 sm:mb-0"> BEHANCE <CiLocationArrow1 className=" text-[#ff7e20]" /></button>
         </a>
         <a href="https://web.facebook.com/favour.akande.319" target="_blank" rel="noopener noreferrer"> 
            <button className="flex mr-4 mb-2 sm:mb-0"> FACEBOOK <CiLocationArrow1 className=" text-[#ff7e20]" /></button>
         </a>
      </div>

      <div className="w-full sm:w-[100%] h-[500px] mt-20 flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-1/4 phone:hidden tablet:hidden">
          <div className="w-[250px] h-[200px] mt-[10%] text-[20px] font-normal">
            Hi, I am Josephine. <br/>
            I write, I speak, I code<br/>
            I impact the World one day at a time.

            <a href="https://www.linkedin.com/in/josephine-oluwafemi-3ab088218" target="_blank" rel="noopener noreferrer">
              <button className="w-[130px] h-10 flex justify-center items-center mt-5 text-white  bg-[#d166b6] before:bg-[#ff7e20]
                relative gap-1 hover:text-[black)] hover:before:translate-x-[105%]
                overflow-hidden before:transition-transform
                before:duration-[1s] ease-in-out before:absolute
                before:top-0 before:left-0 before:w-full before:h-full
                transition-colors duration-[1s] before:z-[-1] z-[1]
                hover:text-black border-[1px]
                border-[]
                px-2 font-medium max-sm:hidden">
                Hire me!<CiLocationArrow1 />
              </button>
            </a>

            <div className="text-[40px] mt-[150px] ">90%</div>
            <div className="font-normal text-[#ff7e20]">Self Rating </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="h-[520px] w-[520px] phone:rounded-md phone:mt-5 tablet:h-[300px] tablet:w-[300px] rounded-full border border-[#ff7e20] flex justify-center items-center">
            <img src={mine6} className="h-[480px] w-[480px] bg-black  rounded-full object-cover"></img>
          </div>
        </div>

        <div className="w-full sm:w-1/4 flex justify-end items-center phone:hidden tablet:hidden">
          <div className="mt-[10%]">
            <div className="text-[40px] ">10+</div>
            <div className="font-normal text-[#ff7e20]">Completed Project</div>
            <div className="text-[40px] mt-7 ">98%</div>
            <div className="font-normal text-[#ff7e20]">Client Rating</div>
            <div className="text-[40px] mt-7 ">5</div>
            <div className="font-normal text-[#ff7e20]">Work Experience</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


  <div className="w-[80%] h-full ">
 

<div className="w-full h-[200px] bg-yellow-300 flex justify-center items-center">
Josephine
</div>
  </div>

</div>









  )
}

export default HomeScreen