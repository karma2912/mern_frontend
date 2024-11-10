import React from 'react'
import face1 from "./yashPfp.jpg"
import face2 from "./random2.jpg"
import face3 from "./random3.jpg"
import face4 from "./faces.jpg"
const About = () => {
  return (
   <>
   <div className='lg:h-[85vh] sm:h-[185vh] h-[320vh] xl:w-[65vw] w-full  flex lg:flex-row flex-col  sm:justify-between justify-center overflow-y-hidden'>
    <div className='lg:h-full sm:h-[70vh] h-[50vh]  lg:w-1/3 w-full flex flex-col justify-around items-start xl:pl-0 sm:pl-10 pl-2 lg:mb-0 sm:mb-10 mb-0'>
      <div className='lg:text-6xl text-5xl font-semibold leading-snug lg:p-0 p-2'>
        Meet <br className='lg:block hidden'/> Our Team
      </div>
      <div className='sm:h-1/4 h-[10vh] flex flex-col justify-around opacity-60'>
     <p className='lg:p-0 p-2'> We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
     <p className='lg:p-0 p-2 sm:block hidden'> Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
      </div>
      <div className='h-1/3  flex flex-col justify-around lg:p-0 p-2'>
      <button className="md:h-20 h-16 lg:w-[12vw] md:w-[20vw] w-[50vw] rounded-[10vw] bg-yellow-300 flex justify-center items-center  text-black">Read More<i className="fa-solid fa-arrow-right ml-5 md:text-3xl text-xl text-black"></i></button>
     <p className='lg:text-3xl text-2xl font-semibold'><span className='font-extralight'>We</span> delivering <br className='lg:block hidden'/> <span className='font-extralight'>exceptional</span> results</p>
      </div>
    </div>
    <div className='lg:h-full sm:h-[120vh] h-[240vh] lg:w-1/2 w-full flex sm:flex-row flex-col '>
      <div className='h-full sm:w-1/2 w-full flex flex-col lg:justify-start justify-between items-center'>
         <img src={face1} className='lg:w-[266.7px] w-[465.68px] lg:h-[346.7px] h-[605.37px]  p-2'></img>
         <img src={face2} className='lg:w-[266.7px] w-[465.68px] lg:h-[346.7px] h-[605.37px]  p-2'></img>
      </div>
      <div className='sm:min-h-full h-full sm:w-1/2 w-full flex flex-col justify-between items-center'>
      <div className='w-full  pl-6 lg:block hidden'><span className='text-yellow-300 '>* </span><span className='opacity-50'>Creators of our website</span></div>
      <img src={face3} className='lg:w-[266.7px] w-[465.68px] lg:h-[346.7px] h-[605.37px] p-2'></img>
      <img src={face4} className='lg:w-[266.7px] w-[465.68px] lg:h-[346.7px] h-[605.37px]  p-2'></img>
      </div>
    </div>
   </div>
   </>
  )
}

export default About
