import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"



const Header = () => {


  return (
<div className="w-[100%] h-[100px]  fixed ">
{/* <div className='w-full h-[100px] bg-white flex justify-center items-center px-2 fixed border-y-1 ' >
        <div className='font-bold text-[30px] '> J.O</div>
        <div className="hidden phone:flex">
        <AiOutlineMenu/>
        </div>
       <div className="flex gap-10 bg-pink-300 font-[15px] phone:hidden">
       <div className="flex justify-center gap-2 items-center">
       <Link to="/"
       
       >
        <nav className="hover:cursor-pointer hover:underline    transition-all duration-300">Home</nav>
                </Link>
        </div> 

       <Link to="about"
          
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">About</nav>
                </Link>
      

      
       <Link to="service"
         
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Services</nav>
                </Link>
      

   
       <Link to="skills"
      
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Skills</nav>
                </Link>
   
       <Link to="latest"
      
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Projects</nav>
                </Link>
      
      
       <Link to="blogs"
       
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Blogs</nav>
                </Link>
      

       <Link to="footer"
        
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Contact</nav>
                </Link>
      
 
       </div>

      <div className="flex justify-between gap-10 text-[20px] m-[200px] tablet:hidden " >
        

      <a href="https://www.instagram.com/josephine_oluwafemi/" target="_blank" rel="noopener noreferrer"> 
   <button className="w-[100px] h-8 flex justify-center items-center mt-5 text-white  bg-[#d166b6] before:bg-[#ff7e20]
   relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
   overflow-hidden before:transition-transform rounded
   before:duration-[1s] ease-in-out   before:absolute
   before:top-0 before:left-0 before:w-full before:h-full text-[15px]
   transition-colors duration-[1s] before:z-[-1] z-[1]
   hover:text-black border-[1px]
   border-[] 
   px-2  font-medium max-sm:hidden
   " > 
   Let's talk!</button>
      </a>
      </div>

        <div></div>
    </div> */}














    <div className="flex justify-center items-center bg-white">
    <div className="w-[90%] h-full flex justify-between items-center" >
    <div className='font-bold text-[30px] '> J.O</div>

    <div className="hidden phone:flex">
        <AiOutlineMenu/>
        </div>
    <div className="w-[40%] h-full flex items-center justify-between phone:hidden tablet:hidden">
    <Link to="/"
       
       >
        <nav className="hover:cursor-pointer hover:underline    transition-all duration-300">Home</nav>
                </Link>
      

       <Link to="about"
          
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">About</nav>
                </Link>
      

      
       <Link to="service"
         
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Services</nav>
                </Link>
      

   
       <Link to="skills"
      
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Skills</nav>
                </Link>
   
       <Link to="latest"
      
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Projects</nav>
                </Link>
      
      
       <Link to="blogs"
       
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Blogs</nav>
                </Link>
      

       <Link to="footer"
        
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Contact</nav>
                </Link>
      






    </div>



    <button className="px-3 py-3 phone:hidden">
    <a href="https://www.instagram.com/josephine_oluwafemi/" target="_blank" rel="noopener noreferrer"> 
   <button className="w-[100px] h-8 flex justify-center items-center mt-5 text-white  bg-[#d166b6] before:bg-[#ff7e20]
   relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
   overflow-hidden before:transition-transform rounded
   before:duration-[1s] ease-in-out   before:absolute
   before:top-0 before:left-0 before:w-full before:h-full text-[15px]
   transition-colors duration-[1s] before:z-[-1] z-[1]
   hover:text-black border-[1px]
   border-[] 
   px-2  font-medium max-sm:hidden
   " > 
   Let's talk!</button>
      </a>
    </button>
    </div>
    </div>
</div>
  )
}

export default Header







