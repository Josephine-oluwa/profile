import { FaChevronDown } from "react-icons/fa6"
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuHeart } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";
import {useState} from "react"
import { NavLink } from "react-router-dom";


const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='w-full h-[100px] bg-white flex justify-center items-center px-2 fixed border-y-1 ' >
        <div className='font-bold text-[30px] w-[500px]'> J.O</div>
        <div className="hidden phone:flex">
        <AiOutlineMenu/>
        </div>
       <div className="flex gap-10 font-[15px] phone:hidden">
       <div className="flex justify-center gap-2 items-center">
       <Link to="home">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Home</nav>
                </Link>
        </div> 

       <div className="flex justify-center gap-2 items-center">
       <Link to="about">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">About</nav>
                </Link>
        </div> 

       <div className="flex justify-center gap-2 items-center">
       <Link to="service">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Services</nav>
                </Link>
        </div> 

       <div className="flex justify-center gap-2 items-center">
       <Link to="skills">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Skills</nav>
                </Link>
        </div> 
       <div className="flex justify-center gap-2 items-center">
       <Link to="latest">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Projects</nav>
                </Link>
        </div> 
       <div className="flex justify-center gap-2 items-center">
       <Link to="footer">
        <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Contact</nav>
                </Link>
        </div> 
 
       </div>

      <div className="flex justify-between gap-10 text-[20px] m-[200px] tablet:hidden " >
        

      <BsSearch />
      <CgProfile />
      <LuHeart />
      <BsCart3 />
      </div>

        <div></div>
    </div>
  )
}

export default Header