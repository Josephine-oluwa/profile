import hashnodee from "../../assets/hashnodee.png"
import linkedin from "../../assets/Linkedin Logo.jpeg"
import Medium from "../../assets/Medium.png"


const Blogs = () => {

 
  return (
  //   <div className='w-full h-[80vh]bg-slate-100  flex justify-center items-center'>
    
  //   <div className="w-[60vw] h-[80vh]  ">
  //   <div className='text-[30px]  font-semibold '>Blogs</div>
  //   <div className='border-b border-solid border-black mt-5 '></div>

  // <div className="flex justify-center items-center mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  // <div className='w-[350px] h-[500px] flex flex-col justify-between rounded-[10px]  '>
  //     <img className='w-full h-[300px] bg-pink-300 rounded-[10px] object-contain ' src={hashnodee}/>
  //           <span className='text-[20px] font-medium'>Click on the button to view all blogs that are written and published on hashnode</span>
  //           <span className='text-[15px] '> HashNode</span>
        
  //           <a href="https://hashnode.com/@josephine10" target="_blank" rel="noopener noreferrer"> 
  //           <button className=' px-3 py-3 w-[300px] rounded
  //           flex justify-center items-center mt-5 text-white  bg-[#ff7e20] before:bg-[#d166b6]
  //           relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
  //           overflow-hidden before:transition-transform
  //           before:duration-[1s] ease-in-out   before:absolute
  //           before:top-0 before:left-0 before:w-full before:h-full
  //           transition-colors duration-[1s] before:z-[-1] z-[1]
  //           hover:text-black border-[1px]
  //           border-[] 
  //           font-medium max-sm:hidden
  //           ' > Check HashNode Blogs</button>
  //  </a>
  //       </div>
    
  //     <div className='w-[350px] h-[500px]  ml-10 flex flex-col justify-between rounded-[10px]  '>
  //     <img className='w-full h-[300px] bg-pink-300 rounded-[10px]  border border-black' src={Medium}/>
  //           <span className='text-[20px] font-medium'>Click on the button to view all blogs that are written and published on Medium </span>
  //           <span className='text-[15px] '> Medium </span>
        
  //           <a href="https://medium.com/@oluwafemijosephine4" target="_blank" rel="noopener noreferrer"> 
  //           <button className=' px-3 py-3 w-[300px] rounded
  //        flex justify-center items-center mt-5 text-white  bg-[#1385d0] before:bg-black
  //           relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
  //           overflow-hidden before:transition-transform
  //           before:duration-[1s] ease-in-out   before:absolute
  //           before:top-0 before:left-0 before:w-full before:h-full
  //           transition-colors duration-[1s] before:z-[-1] z-[1]
  //           hover:text-black border-[1px]
  //           border-[] 
  //           font-medium max-sm:hidden
  //           ' > Check Medium Blogs</button>
  //  </a>
  //       </div>
  //     <div className='w-[350px] h-[500px]  ml-10 flex flex-col justify-between rounded-[10px]  '>
  //     <img className='w-full h-[300px] bg-pink-300 rounded-[10px] object-cover ' src={linkedin}/>
  //           <span className='text-[20px] font-medium'>Click on the button to view all blogs that are written and published on linkedin </span>
  //           <span className='text-[15px] '> Linkedin </span>
        
  //           <a href="https://www.linkedin.com/in/josephine-oluwafemi-3ab088218" target="_blank" rel="noopener noreferrer"> 
  //           <button className=' px-3 py-3 w-[300px] rounded
  //         flex justify-center items-center mt-5 text-white  bg-[#d166b6] before:bg-[#1385d0]
  //           relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
  //           overflow-hidden before:transition-transform
  //           before:duration-[1s] ease-in-out   before:absolute
  //           before:top-0 before:left-0 before:w-full before:h-full
  //           transition-colors duration-[1s] before:z-[-1] z-[1]
  //           hover:text-black border-[1px]
  //           border-[] 
  //           font-medium max-sm:hidden
  //           ' > Check Linkedin Blogs</button>
  //  </a>
  //       </div>
  // </div>
  //   </div>
    
  
    
  //   </div>

  <div className='w-full h-[80vh]    flex justify-center items-center'>
  <div className="w-[100%] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-full">
    <center className='text-[30px] font-semibold'>Blogs</center>
  

    <div className="flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Blog 1 */}
      <div className='w-full sm:w-[350px] h-[500px] flex flex-col justify-between rounded-[10px]'>
      <img className='w-full h-[300px] bg-pink-300 rounded-[10px] object-contain ' src={hashnodee}/>
            <span className='text-[20px] font-medium'>Click on the button to view all blogs that are written and published on hashnode</span>
            <span className='text-[15px] '> HashNode</span>
        
            <a href="https://hashnode.com/@josephine10" target="_blank" rel="noopener noreferrer"> 
            <button className=' px-3 py-3 w-[300px] rounded
            flex justify-center items-center mt-5 text-white  bg-[#ff7e20] before:bg-[#d166b6]
            relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out   before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black border-[1px]
            border-[] 
            font-medium max-sm:hidden
            ' > Check HashNode Blogs</button>
   </a>
      </div>

      {/* Blog 2 */}
      <div className='w-full sm:w-[350px] h-[500px] ml-5 sm:ml-10 flex flex-col justify-between rounded-[10px] '>
      <img className='w-full h-[300px] bg-pink-300 rounded-[10px]  border border-black' src={Medium}/>
            <span className='text-[20px] font-medium'>Click on the button to view all blogs that are written and published on Medium </span>
            <span className='text-[15px] '> Medium </span>
        
            <a href="https://medium.com/@oluwafemijosephine4" target="_blank" rel="noopener noreferrer"> 
            <button className=' px-3 py-3 w-[300px] rounded
         flex justify-center items-center mt-5 text-white  bg-[#1385d0] before:bg-black
            relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out   before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black border-[1px]
            border-[] 
            font-medium max-sm:hidden
            ' > Check Medium Blogs</button>
   </a>
      </div>

      {/* Blog 3 */}
      <div className='w-full sm:w-[350px] h-[500px] ml-5 sm:ml-10 flex flex-col justify-between rounded-[10px]'>
      <img className='w-full h-[300px] bg-pink-300 rounded-[10px] object-cover ' src={linkedin}/>
            <span className='text-[20px] font-medium'>Click on the button to view all blogs that are written and published on linkedin </span>
            <span className='text-[15px] '> Linkedin </span>
        
            <a href="https://www.linkedin.com/in/josephine-oluwafemi-3ab088218" target="_blank" rel="noopener noreferrer"> 
            <button className=' px-3 py-3 w-[300px] rounded
          flex justify-center items-center mt-5 text-white  bg-[#d166b6] before:bg-[#1385d0]
            relative  gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out   before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black border-[1px]
            border-[] 
            font-medium max-sm:hidden
            ' > Check Linkedin Blogs</button>
   </a>
      </div>
    </div>
  </div>
</div>


  )
}



export default Blogs