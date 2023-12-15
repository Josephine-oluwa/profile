import { FiMessageSquare } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='w-full h-[70vh]  flex justify-center'>
        <div className='w-[60vw] flex justify-between flex-col'>
            <span className='text-[30px] font-semibold mt-10'>Text Me, let's talk </span>
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
                <LuPhoneCall /></div>
                <div className=" flex flex-col ml-5">
                <span>Call or Text </span>
                <span>+234 703 070 9482 </span>
                </div>
            </div>
            </div>
           <div className="flex flex-col  ml-[30%]  items-center ">
        

           <a href="https://www.instagram.com/josephine_oluwafemi/" target="_blank" rel="noopener noreferrer"> 
           <button className="w-[230px] h-[230px]  flex  items-center justify-center text-[50px] bg-blue-200 rounded-full "><CiLocationArrow1 /></button>
   </a>
            <span className="mt-5 text-[20px] flex "> <div className="text-[25px] mr-1"><HiOutlineHandRaised  /></div>Say Hi! </span>
            </div>
           </div>
            <div className='w-full h-[150px] border-y-2 mb-10 border-black flex items-center '>
            
                <div className=" flex flex-col ml-5">
                <span>c 2023 - Developed by Josephine Oluwafemi</span>
                
                </div>
            </div>
        </div>
    </div>









// {/* <div className='w-full min-h-screen flex justify-center'>
//     <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 flex flex-col justify-between'>
//         <span className='text-4xl font-semibold mt-10 text-center'>Let's Connect</span>
//         <div className="flex flex-wrap justify-center mt-5 space-y-5 md:space-y-0 md:space-x-5">
//             <div className='w-full md:w-1/2 p-3'>
//                 <div className='w-full h-40 border-2 border-black flex items-center'>
//                     <div className="text-4xl px-3 py-3 rounded-full bg-blue-200">
//                         <FiMessageSquare />
//                     </div>
//                     <div className="flex flex-col ml-5">
//                         <span className="font-semibold">Email</span>
//                         <span>Oluwafemijosephine4@gmail.com</span>
//                     </div>
//                 </div>
//             </div>
//             <div className='w-full md:w-1/2 p-3'>
//                 <div className='w-full h-40 border-2 border-black flex items-center'>
//                     <div className="text-4xl px-3 py-3 rounded-full bg-blue-200">
//                         <LuPhoneCall />
//                     </div>
//                     <div className="flex flex-col ml-5">
//                         <span className="font-semibold">Call or Text</span>
//                         <span>+234 703 070 9482</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="flex flex-col items-center">
//             <a href="https://www.instagram.com/josephine_oluwafemi/" target="_blank" rel="noopener noreferrer">
//                 <button className="w-20 h-20 flex items-center justify-center text-2xl bg-blue-200 rounded-full mb-5">
//                     <CiLocationArrow1 />
//                 </button>
//             </a>
//             <span className="text-lg flex items-center">
//                 <div className="text-2xl mr-1"><HiOutlineHandRaised /></div>
//                 Say Hi!
//             </span>
//         </div>
//         <div className='w-full h-20 border-2 mt-5 border-black flex items-center'>
//             <div className="flex flex-col ml-5">
//                 <span>&copy; 2023 - Developed by Josephine Oluwafemi</span>
//             </div>
//         </div>
//     </div>
// </div> */}


  )
}

export default Footer
