import { FiMessageSquare } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineHandRaised } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className='w-full h-[70vh]  flex justify-center'>
        <div className='w-[60vw] flex justify-between flex-col'>
            <span className='text-[30px] font-semibold mt-10'>Text us let us get to work</span>
           <div className="flex ">
           <div>
            <div className='w-[500px] h-[150px] border-y-2 border-black flex items-center '>
                <div className="text-[30px] px-3 py-3 rounded-full bg-blue-200">
                <FiMessageSquare /></div>
                <div className=" flex flex-col ml-5">
                <span>Email</span>
                <span>Oluwafemijosephine4@gmail.com</span>
                </div>
            </div>
            <div className='w-[500px] h-[150px] border-black flex items-center '>
                <div className="text-[30px] px-3 py-3 rounded-full bg-blue-200">
                <FiMessageSquare /></div>
                <div className=" flex flex-col ml-5">
                <span>Email</span>
                <span>Oluwafemijosephine4@gmail.com</span>
                </div>
            </div>
            </div>
           <div className="flex flex-col  ml-[30%]  items-center ">
           <div className="w-[230px] h-[230px]  flex  items-center justify-center text-[50px] bg-blue-200 rounded-full "><CiLocationArrow1 /></div>
            <span className="mt-5 text-[20px] flex "> <div className="text-[25px] mr-1"><HiOutlineHandRaised  /></div>Say Hi! </span>
            </div>
           </div>
            <div className='w-full h-[150px] border-y-2 mb-10 border-black flex items-center '>
                <div className="text-[30px] px-3 py-3 rounded-full bg-blue-200">
                <FiMessageSquare /></div>
                <div className=" flex flex-col ml-5">
                <span>Email</span>
                <span>Oluwafemijosephine4@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
