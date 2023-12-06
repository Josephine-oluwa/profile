import {BsArrowUpRight} from "react-icons/bs"
import mine2 from "../../assets/Mine2.jpg"
import code from "../../assets/code.jpg"

const Services = () => {
  return (
    <div>
        <div className='w-full h-[100vh] items-center flex justify-center '>
    <div className="w-[60vw] h-[70vh] flex justify-center  ">
    <div className='w-1/2 flex flex-col h-full justify-center '>
 <span className='text-[30px]  font-semibold '>Services I Offer</span>
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
<div className= ' px-4 py-4 rounded-full bg-[#ff7e20] '><BsArrowUpRight/></div>
 <div className='mt-2 text-[12px]'>Explore</div>
</div>

  </div>
<div className="w-full h-[200px]   flex  p-10 justify-between items-center">

<img className='h-[100px] w-[130px]   rounded object-cover' src={code} />
 <div className='text-[23px]'>Software Development</div>
<div className='flex flex-col  justify-between  w-[50px]'>
<div className= ' px-4 py-4 rounded-full bg-[#ff7e20] '><BsArrowUpRight/></div>
 <div className='mt-2 text-[12px]'>Explore</div>
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
</div>
    </div>
  )
}

export default Services

