import {BsArrowUpRight} from "react-icons/bs"
import mine5 from "../../assets/mine5.jpg"
import code from "../../assets/code.jpg"
import uxdesign from "../../assets/uxdesign.webp"
import brand from "../../assets/Brand.jpg"

const Services = () => {
  return (
    <div>
        {/* <div className='w-full h-[100vh] items-center flex justify-center '>
    <div className="w-[60vw] h-[70vh] flex justify-center  ">
    <div className='w-1/2 flex flex-col h-full justify-center '>
 <span className='text-[30px]  font-semibold '>Services I've Offered</span>
 <span className='mt-5'>What is Lorem Ipsum?
Lorem Ipsum is simply dummy <br/> text of
the printing and typesetting industry. <br/>
Lorem Ipsum has been the industry's standard<br/>
dummy text ever since the 1500s, </span>
<img className='h-[300px] w-[300px] mt-10 object-cover' src={mine2} />
</div>
<div className='w-1/2  h-[100vh]'>
<div className="w-full h-[200px] border-black  mt-10   border-y-2 flex  p-10 justify-between items-center">

<img className='h-[100px] w-[130px]   rounded object-cover' src={code} />
 <div className='text-[23px]'>Software Development</div>
<div className='flex flex-col  justify-between  w-[50px]'>
<a href="https://github.com/Josephine-oluwa" target="_blank" rel="noopener noreferrer"> 
 <button className= ' px-4 py-4 rounded-full bg-[#ff7e20] '><BsArrowUpRight/></button>
 <div className='mt-2 text-[12px]'>Explore</div>
   </a>
</div>

  </div>
<div className="w-full h-[200px]   flex  p-10 justify-between items-center">

<img className='h-[100px] w-[130px]   rounded object-cover' src={uxdesign} />
 <div className='text-[23px]'>Designs</div>
<div className='flex flex-col  justify-between  w-[50px]'>

 <a href="https://www.behance.net/Josephine1988" target="_blank" rel="noopener noreferrer"> 
 <button className= ' px-4 py-4 rounded-full bg-[#ff7e20] '><BsArrowUpRight/></button>
 <div className='mt-2 text-[12px]'>Explore</div>
   </a>
</div>

  </div>
<div className="w-full h-[200px] border-black    border-y-2 flex  p-10 justify-between items-center">

<img className='h-[100px] w-[130px]   rounded object-cover' src={code} />
 <div className='text-[23px]'>Software Development</div>
<div className='flex flex-col  justify-between  w-[50px]'>
<div className= ' px-4 py-4 rounded-full bg-[#ff7e20] '><BsArrowUpRight/></div>
 <div className='mt-2 text-[12px]'>Explore</div>
</div>

  </div>




</div>
    </div>
</div> */}



<div className='w-full items-center flex justify-center '>

  <div className="w-full sm:w-[60vw] mt-20 flex flex-col sm:flex-row justify-center">
    <div className='w-full sm:w-1/2 flex flex-col h-full justify-center'>
      <span className='text-[30px] font-semibold'>Services I've Offered</span>
      <span className='mt-5 text-[20px] w-[450px]'>
      
      As a passionate and multi talented Lady, 
      I have worked for companies, individuals, for corporate
       and religious organizations as a freelancer, as an employee and as a volunteer.

I have worked as a software engineer, website designer,
 ui/ux designer, graphic designer, photographer, social media manager, writer, content creator and many more. 


      </span>
      <img className='h-[300px] w-full border border-[#c569ce] rounded sm:w-[300px] mt-10 object-cover' src={mine5} />
    </div>
    <div className='w-full sm:w-1/2 h-full'>
      <div className="w-full h-[200px] border-[#c569ce] mt-10 border-y-2 flex p-10 justify-between items-center">
        <img className='h-[100px] w-[130px] rounded object-cover' src={code} />
        <div className='text-[23px]'>Software Development</div>
        <div className='flex flex-col justify-between w-[50px]'>
          <a href="https://github.com/Josephine-oluwa" target="_blank" rel="noopener noreferrer">
            <button className='px-4 py-4 rounded-full bg-[#ff7e20]'><BsArrowUpRight /></button>
            <div className='mt-2 text-[12px]'>Explore</div>
          </a>
        </div>
      </div>
      <div className="w-full h-[200px] flex p-10 justify-between items-center">
        <img className='h-[100px] w-[130px] rounded object-cover' src={uxdesign} />
        <div className='text-[23px]'>Designs</div>
        <div className='flex flex-col justify-between w-[50px]'>
          <a href="https://www.behance.net/Josephine1988" target="_blank" rel="noopener noreferrer">
            <button className='px-4 py-4 rounded-full bg-[#ff7e20]'><BsArrowUpRight /></button>
            <div className='mt-2 text-[12px]'>Explore</div>
          </a>
        </div>
      </div>
      <div className="w-full h-[200px] border-[#c569ce] border-y-2 flex p-10 justify-between items-center">
        <img className='h-[100px] w-[130px] rounded object-cover' src={brand} />
        <div className='text-[23px]'>Brand Visibility</div>
        <div className='flex flex-col justify-between w-[50px]'>
         
          <a href="https://www.instagram.com/uniquecreatives1/" target="_blank" rel="noopener noreferrer">
            <button className='px-4 py-4 rounded-full bg-[#ff7e20]'><BsArrowUpRight /></button>
            <div className='mt-2 text-[12px]'>Explore</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Services

