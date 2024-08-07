import React, { useEffect, useRef } from 'react'
import quiz from "./coinf.webp"
import fpawn from "./fpawn.webp"
import fking from "./fking.webp"
import frook from "./frook.webp"
import { Link } from 'react-router-dom'
import GeneralKnowledge from './GeneralKnowledge'
import ClgSubject from './ClgSubject'

const Home = () => {
  const textRef = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  const textRef4 = useRef(null)
  const textRef5 = useRef(null)
  const textRef6 = useRef(null)
  const textRef7 = useRef(null)
  const textRef8 = useRef(null)
  const textRef9 = useRef(null)
  useEffect(()=>{
   gsap.from(textRef.current,{
    x:-1050,
    duration:1.5,
    delay:1
   })
   gsap.from(textRef2.current,{
    x:-1050,
    duration:1.5,
    delay:1.5
   })
   gsap.from(textRef3.current,{
    x:-1050,
    duration:1.5,
    delay:1.7
   })
   gsap.from(textRef4.current,{
    y:-2050,
    duration:1.5,
    delay:1.5,
    rotate:360
   })
   gsap.from(textRef5.current,{
    y:-2050,
    duration:2,
    delay:1.7,
   })
   gsap.from(textRef6.current,{
    x:-1050,
    duration:1.5,
    delay:3,
   })
   gsap.from(textRef7.current,{
    y:-2050,
    duration:1.5,
    delay:3,
   })
   gsap.from(textRef8.current,{
    x:1050,
    duration:1.5,
    delay:3,
   })
   gsap.from(textRef9.current,{
    y:-2050,
    duration:1.5,
    delay:1,
   })
  })
  return (
   <>
   <div className='md:h-[55rem] h-[95rem]'>
   <div ref={textRef9} className='h-[40rem] w-full bg-black flex justify-around items-center rounded-b-[15rem] shadow-xl text-yellow-400'>
    <div className='md:text-7xl text-5xl font-bold md:p-16 p-8 flex flex-col justify-start md:items-start items-center'><span ref={textRef}>Daily Quiz, Daily<br/>
    Improve. Play Today!</span>
    <div ref={textRef2} className='md:text-xl text-lg font-normal md:pt-16 pt-6'>
     QuizQuest is a quiz app which provides a variety of questions related to the College Subjects!<br/>
     It Tracks the weakness of users and provide them that level questions
    </div>
    <Link ref={textRef3} className='text-xl font-normal border-2 mt-5 border-black bg-green-400 p-2 rounded-xl text-black' to="/test"><i className="fa-regular fa-circle-play mr-2"></i>PLAY NOW</Link>
    </div>
    <img ref={textRef4} src={quiz} className='md:h-2/3 h-0 '/>
   </div>
   <div ref={textRef5} className='flex justify-center position relative md:-top-20 top-10 z-10'>
   <div className='md:h-72 h-[51rem] w-2/3 bg-white text-center p-2 rounded-2xl shadow-2xl'>
   <span className='font-semibold text-lg p-3'>Choose the option</span>
   <div className='flex md:justify-around pt-4 md:flex-row flex-col'>
    <div ref={textRef6} className='h-56 md:w-80 w-full md:mb-0 mb-8 bg-white border-2 border-yellow-500 rounded-2xl flex flex-col justify-center items-center'><img src={fpawn} className='h-32 w-32 items-center'/><div className='text-xl font-medium pt-2 pb-2'>Play Like a Pawn</div><Link className='text-green-700 pb-2' to="/test">Start Now<i className="fa-solid fa-arrow-right ml-3"></i></Link></div>
    <div ref={textRef7} className='h-56 md:w-80 w-full md:mb-0 mb-8 bg-white border-2 border-yellow-500 rounded-2xl flex flex-col justify-center items-center'><img src={frook} className='h-32 w-32 items-center'/><div className='text-xl font-medium pt-2 pb-2'>Play Like a Rook</div><Link className='text-green-700 pb-2' to="/test">Start Now<i className="fa-solid fa-arrow-right ml-3"></i></Link></div>
    <div ref={textRef8} className='h-56 md:w-80 w-full md:mb-0 mb-8 bg-white border-2 border-yellow-500 rounded-2xl flex flex-col justify-center items-center'><img src={fking} className='h-32 w-32 items-center'/><div className='text-xl font-medium pt-2 pb-2'>Play Like a King</div><Link className='text-green-700 pb-2' to="/test">Start Now<i className="fa-solid fa-arrow-right ml-3"></i></Link></div>
   </div>
   </div>
   </div>
   </div>
   <div className='flex justify-center items-center pb-4 md:mt-10 mt-0'>
   <GeneralKnowledge/>
   </div>
   <div className='flex justify-center items-center pt-4 md:mt-10 mt-0'>
   <ClgSubject/>
   </div>
   </>
  )
}

export default Home
