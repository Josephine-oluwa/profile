import JosephineOluwafemi from "../../assets/JosephineOluwafemi.pdf"
import mine4 from "../../assets/Mine4.jpg"




const AboutMe = () => {

  
  return (
   



<div className='w-full flex justify-center items-center bg-[#f1eeed] '>

<div className='w-full xs:w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] flex items-center justify-center mt-20 phone:flex-col '>

  <div className='w-full '>
    <div className='w-full h-[100%] sm:w-[450px] flex justify-center items-center border border-[#ff7e20] rounded'>
      <img className='w-[90%] h-[90%] mt-5 rounded-[5px] object-cover'
        src={mine4}
      />
    </div>
  </div>
  <div className='w-full  flex flex-col'>
    <div className='text-[30px] font-semibold text-[#ff7e20]'>About Me</div>

  

    <span className='text-[20px] font-normal mt-7'>
      <span className='text-[30px] font-semibold'>Hi, I'm Josephine Oluwafemi</span>
   <br/>
 <br/>
 You can call me Josephine or Taiwo <br/>
 I currently work at CodeLab as a software Engineer where i build web Applications. I have personally and collectively built more than 10 different web Applications. <br/>
 I am currently building a project monitoring Application. 
<br/>
<br/>
I have 2 degrees in Computer Science. One is a National certificate From Lagos State university of Education and the other is a Bachelors degree from Lagos State University.
 <br/>
<br/>
 In tech, I love Networking a lot and I am also a huge fan of great Application experiences driven by AI.
 At a tech event, you'd find me asking a lot of questions about Tech from people or trying to play a game (and possibly failing at it).

 <br/>
 <br/>
Asides from engineering, I’m involved in other commendable activities in the tech ecosystem,  where I’m constantly sharing opportunities, giving mentorship, or volunteering.

<br/>
<br/>
With over 10+ speaking engagements, I spend my time helping people 
get started in tech, build early tech careers.

I do this by hosting 1:1 sessions, masterclasses, and I also 
 dedicate my time to posting contents on social media
    </span>
    <a href={JosephineOluwafemi} download = "Josephine's Resume"> 

    <button className="w-[180px] h-12 flex justify-center items-center mt-5 text-white  bg-[#d166b6] before:bg-[#ff7e20]
                relative gap-1 hover:text-[black)] hover:before:translate-x-[105%]
                overflow-hidden before:transition-transform
                before:duration-[1s] ease-in-out before:absolute
                before:top-0 before:left-0 before:w-full before:h-full
                transition-colors duration-[1s] before:z-[-1] z-[1]
                hover:text-black border-[1px]
                border-[] text-[20px]
                px-2 font-medium max-sm:hidden">
             Download Resume
              </button> 
              </a>



              


  </div>
  </div>
  </div>





 
  )
}

export default AboutMe


