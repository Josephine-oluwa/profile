
import hackcare from "../../assets/hackcare.jpg"
import EasyHR from "../../assets/EasyHR.png"
import EcoFunds from "../../assets/EcoFunds.jpg"
import cloud from "../../assets/cloud.jpg"
import plastic from "../../assets/plastic.jpeg"
import EcoBin from "../../assets/EcoBin.jpeg"

const Latest = () => {
  return (




<div>
  
<center>**********************</center>
<div className='w-full  mt-10 flex justify-center items-center'>
  <div className='w-full sm:w-[60vw] h-full'>
    <div className='text-[30px] font-semibold'>Latest Projects</div>
    <div className='border-b border-solid border-black mt-5'></div>
    <div className='flex flex-col sm:flex-row gap-10 flex-wrap mt-20'>
      {/* Project 1 */}
      <div className='w-full sm:w-[350px] h-[450px] flex flex-col justify-between rounded'>
        <div className='w-full h-[300px] rounded'>
          <img className='h-full object-cover rounded' src={hackcare} alt="HackCare" />
        </div>
        <span className='text-[20px] font-bold'>LyfeCare</span>
        <span className='text-[20px] '>An Innovative health tech solution that help you save for unexpected health expenses. </span>
        <a href="https://lyfecare.netlify.app/" target="_blank" rel="noopener noreferrer">
          <button className='px-2 py-2 w-[100px] bg-[#e5d7bd] rounded'>Details</button>
        </a>
      </div>

      {/* Project 2 */}
      <div className='w-full sm:w-[350px] h-[450px] flex flex-col justify-between rounded '>
      <div className='w-full h-[300px] rounded bg-pink-400 '>
                <img className='h-full object-cover' src={cloud}/> </div>
            <span className='text-[20px] font-bold'>Eco-Data</span>
            <span className='text-[20px] '>Real-Time and Historical
World Weather Data API</span>
            <a href=" https://plp-ecodata.web.app/
/" target="_blank" rel="noopener noreferrer"> 
            <button className=' px-2 py-2 w-[100px] bg-[#d7e8fc] rounded' > Details</button>
   </a>
      </div>

      {/* Project 3 */}
      <div className='w-full sm:w-[350px] h-[450px] flex flex-col justify-between rounded'>
      <div className='w-full h-[300px] rounded bg-pink-400 '>
                <img className='h-full object-cover rounded'  src={EcoFunds}/> </div>
            <span className='text-[20px] font-bold'>Eco-Funds</span>
            <span className='text-[20px] '>A Fundraising platform that encourage Building Sustainable Products for our solar Eco System</span>
            <a href="https://eco-funds-new.web.app//" target="_blank" rel="noopener noreferrer"> 
            <button className=' px-2 py-2 w-[100px] bg-pink-400 first-letter:rounded' > Details</button>
   </a>
      </div>

      {/* Project 4 */}
      <div className='w-full sm:w-[350px] h-[450px] flex flex-col justify-between'>
      <div className='w-full h-[300px] rounded '>
                <img className='h-full object-cover rounded' src={EasyHR}/> </div>
            <span className='text-[20px] font-bold'>Easy HR</span>
            <span className='text-[20px] '> An Innovative platform that helps you manage your employee performance  without stress</span>
            <a href="https://eazyhr.vercel.app/" target="_blank" rel="noopener noreferrer"> 
            <button className=' px-2 py-2 w-[100px] bg-[#356492] text-white rounded' > Details</button>
   </a>
      </div>

      {/* Project 5 */}
      <div className='w-full sm:w-[350px] h-[450px] flex flex-col justify-between '>
      <div className='w-full h-[300px] rounded  '>
                <img className='h-full object-cover' src={plastic}/> </div>
            <span className='text-[20px] font-bold'>Dirt2School</span>
            <span className='text-[20px] '>An innovative green solution that tackles environmental pollution and active participation of children and also offers 
            a sustainable solution to fund the education of these children </span>
            <a href=" https://power-learn.web.app/ " target="_blank" rel="noopener noreferrer"> 
            <button className=' px-2 py-2 w-[100px]  bg-green-500 rounded' > Details</button>
   </a>
      </div>

      {/* Project 6 */}
      <div className='w-full sm:w-[350px] h-[450px] flex flex-col justify-between '>
      <div className='w-full h-[300px] rounded bg-pink-400 '>
                <img className='h-full object-cover' src={EcoBin}/> </div>
            <span className='text-[20px] font-bold'>Eco Bin</span>
            <span className='text-[20px] '> Dispose Waste Properly & Promote Recycling, For A Greener Future!</span>
            <a href=" https://ecobin.pages.dev/ " target="_blank" rel="noopener noreferrer"> 
            <button className=' px-2 py-2 w-[100px]  bg-red-500 text-white rounded' > Details</button>
   </a>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default Latest