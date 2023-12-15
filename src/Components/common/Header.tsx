import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-scroll/modules";

import {useState} from "react"


const Header = () => {
        // const [show, setShow] = useState<boolean>(false);

        // const onShow = () => {
        //         if (window.scrollY >= 50) {
        //                 setShow(true);
        //         } else {
        //                 setShow(false);
        //         }
        // };

        // window.addEventListener("scroll" , onShow);

  return (
    <div className='w-full h-[100px] bg-white flex justify-center items-center px-2 fixed border-y-1 ' >
        <div className='font-bold text-[30px] w-[500px]'> J.O</div>
        <div className="hidden phone:flex">
        <AiOutlineMenu/>
        </div>
       <div className="flex gap-10 font-[15px] phone:hidden">
       <div className="flex justify-center gap-2 items-center">
       <Link to="home"
       smooth={true}
       offset={200}
       duration={500}
       >
        <nav className="hover:cursor-pointer hover:underline    transition-all duration-300">Home</nav>
                </Link>
        </div> 

       <Link to="about"
        smooth={true}
        offset={200}
        duration={500}
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">About</nav>
                </Link>
      

      
       <Link to="service"
        smooth={true}
        offset={200}
        duration={500}
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Services</nav>
                </Link>
      

   
       <Link to="skills"
          smooth={true}
          offset={200}
          duration={500}
       >
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Skills</nav>
                </Link>
   
       <Link to="latest">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Projects</nav>
                </Link>
      
      
       <Link to="blogs">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Blogs</nav>
                </Link>
      

       <Link to="footer">
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
    </div>
  )
}

export default Header







