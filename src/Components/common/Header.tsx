import { FaChevronDown } from "react-icons/fa6"
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuHeart } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
  return (
    <div className='w-full h-[100px] bg-white flex justify-center items-center px-2' >
        <div className='font-bold text-[30px] w-[500px]'> Mix Fashion</div>
        <div className="hidden phone:flex">
        <AiOutlineMenu/>
        </div>
       <div className="flex gap-10 font-[15px] phone:hidden">
       <div className="flex justify-center gap-2 items-center">  Home  <FaChevronDown /></div> 
       <div className="flex justify-center gap-2 items-center">  Shop  <FaChevronDown /></div> 
       <div className="flex justify-center gap-2 items-center">  Fashion  <FaChevronDown /></div> 
       <div className="flex justify-center gap-2 items-center">  Blog <FaChevronDown /></div> 
       <div className="flex justify-center gap-2 items-center">  Contact  <FaChevronDown /></div> 
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