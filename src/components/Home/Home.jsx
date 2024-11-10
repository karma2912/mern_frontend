
import React, { useEffect, useRef } from 'react'
import quiz from "./coinf.webp"
import fpawn from "./fpawn.webp"
import fking from "./fking.webp"
import frook from "./frook.webp"
import { Link, useNavigate } from 'react-router-dom'
import GeneralKnowledge from './GeneralKnowledge'
import ClgSubject from './ClgSubject'
import './Home.css'
import { useGSAP } from '@gsap/react'
import amf from "./amp.png"
import sef from "./sep.png"
import dbmsf from "./dbmsp.png"
import wpf from "./webpp.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './About/About'

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("Token")){
      navigate('/login')
    }
    
  },[])
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
   gsap.from(".quiz-head",{
    x:-1150,
    duration:1.5,
    delay:1
   })
   gsap.from(".text-part",{
    x:-1150,
    duration:1.5,
    delay:1.1
   })
   gsap.from(".button",{
    x:-1050,
    duration:1.5,
    delay:1.2
   })
   gsap.from(".image",{
    y:-2050,
    duration:1.5,
    delay:1.2,
    rotate:360
   })
   gsap.from(".outer-box",{
    y:-2050,
    duration:2,
    delay:1.4,
   })
   gsap.from(".inner-f",{
    x:-1050,
    duration:1.5,
    delay:2,
   })
   gsap.from(".inner-s",{
    x:-2050,
    duration:1.5,
    delay:2,
   })
   gsap.from(".inner-t",{
    x:-1050,
    duration:1.5,
    delay:2,
   })
  const isDesktop = window.innerWidth >= 1024;
   if(isDesktop){
  gsap.fromTo(".seimages",{opacity:1},{
    scale:1.2,
    marginLeft:"7vw",
    marginBottom:"4vw",
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
      
    },
    duration:2
  })
  gsap.fromTo(".setext",{opacity:0},{
    fontSize:"2.6vw",
    delay:2,
    opacity:1,
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
    },
    duration:2
  })
  gsap.fromTo(".amimages",{opacity:1},{
    scale:1.2,
    marginRight:"7vw",
    marginBottom:"4vw",
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
    },
    duration:2
  })
  gsap.fromTo(".amtext",{opacity:0},{
    fontSize:"2.6vw",
    delay:2,
    opacity:1,
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
    },
    duration:2
  })
  gsap.fromTo(".dbmsimages",{opacity:1},{
    scale:1.2,
    marginRight:"7vw",
    marginTop:"4vw",
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1,
    },
    duration:2
  })
  gsap.fromTo(".dbmstext",{opacity:0},{
    fontSize:"2.6vw",
    delay:2,
    opacity:1,
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
    },
    duration:2
  })
  gsap.fromTo(".wpimages",{opacity:1},{
    scale:1.2,
    marginLeft:"7vw",
    marginTop:"4vw",
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
    },
    duration:2
  })
  gsap.fromTo(".wptext",{opacity:0},{
    fontSize:"2.6vw",
    delay:2,
    opacity:1,
    scrollTrigger: {
      trigger: ".images1", 
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1, 
    },
    duration:2
  })
}
  })

  return (
    <>
      <div className="md:h-fit min-h-[95rem] overflow-x-hidden overflow-y-hidden md:-mt-24 -mt-20 z-10">
        <div className="black-curve h-[78vh] z-10 w-full bg-black flex justify-around items-center rounded-b-[15rem] shadow-xl text-yellow-400 ">
          <div className="md:text-[4vw] text-[9vw] font-bold md:p-16 p-8 flex flex-col justify-start md:items-start items-center">
            <span className="quiz-head leading-tight">
              Daily Quiz, Daily
              <br />
              Improve. Play Today!
            </span>
            <div className=" text-part md:text-[1.2vw] text-[3vw] font-normal md:pt-[3vw] pt-6">
              QuizQuest is a quiz app which provides a variety of questions
              related to the College Subjects!
              <br />
              It Tracks the weakness of users and provide them that level
              questions
            </div>
            <Link
              className="button text-xl font-normal border-2 mt-5 border-black bg-green-400 hover:bg-green-600 p-2 rounded-xl text-black"
              to="/test"
            >
              <i className="fa-regular fa-circle-play mr-2"></i>PLAY NOW
            </Link>
          </div>
          <img src={quiz} className="image md:h-[28vw] h-0 " />
        </div>
        <div className="outer-box flex justify-center relative md:-top-20 md:mt-0 mt-10 top-0 z-10">
          <div className="md:h-72 h-[51rem] w-2/3 bg-white text-center p-2 rounded-2xl shadow-2xl">
            <span className="font-semibold text-lg p-3">Check your General Knowledge</span>
            <div className="flex md:justify-around pt-4 md:flex-row flex-col">
              <div className="inner-f h-56 md:w-80 w-full md:mb-0 mb-8 bg-white border-2 border-yellow-500 rounded-2xl flex flex-col justify-center items-center">
                <img src={fpawn} className="h-32 w-32 items-center" />
                <div className="text-xl font-medium pt-2 pb-2">
                  Play Like a Pawn
                </div>
                <Link className="text-green-700 pb-2" to="/test">
                  Start Now<i className="fa-solid fa-arrow-right ml-3"></i>
                </Link>
              </div>
              <div className="inner-s h-56 md:w-80 w-full md:mb-0 mb-8 bg-white border-2 border-yellow-500 rounded-2xl flex flex-col justify-center items-center">
                <img src={frook} className="h-32 w-32 items-center" />
                <div className="text-xl font-medium pt-2 pb-2">
                  Play Like a Rook
                </div>
                <Link className="text-green-700 pb-2" to="/test">
                  Start Now<i className="fa-solid fa-arrow-right ml-3"></i>
                </Link>
              </div>
              <div className="inner-t h-56 md:w-80 w-full md:mb-0 mb-8 bg-white border-2 border-yellow-500 rounded-2xl flex flex-col justify-center items-center">
                <img src={fking} className="h-32 w-32 items-center" />
                <div className="text-xl font-medium pt-2 pb-2">
                  Play Like a King
                </div>
                <Link className="text-green-700 pb-2" to="/test">
                  Start Now<i className="fa-solid fa-arrow-right ml-3"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-4 md:mt-10 mt-10">
        <GeneralKnowledge />
      </div>
      <div className="flex justify-center items-center pt-4 md:mt-10 mt-0">
        <ClgSubject />
      </div>
      <div className='h-[140vh] bg-yellow-50 w-full bg-gradient-radial from-yellow-500 to-black p-6 mt-16 overflow-y-hidden overflow-x-hidden'>
        <div className='h-[25%] w-full  flex justify-center items-center gap-[2vw] mt-[vh]'><span className='dancing-script-400  text-[5vw] p-5 rounded-xl text-yellow-200 border-2 bg-black'>College</span><p className='text-[5vw] text-black '>Subjects</p></div>
        <div className='h-[75%] w-full inside flex flex-col items-center '>
          <div className='h-[45%] w-full flex justify-center items-end images1'>
          <div className='text-center amtext leading-tight'><p className='dancing-script-400 text-yellow-300'>Applied</p>Mathematics</div>
          <img src={amf} className='h-[17vw]  amimages hover:cursor-pointer'/>
          <img src={sef} className='h-[17vw]  seimages hover:cursor-pointer'/>
          <div className='text-center setext  leading-tight'><p className='dancing-script-400 text-yellow-300'>Software</p>Engineering</div>
          </div>
          <div className='h-[45%] w-full flex justify-center items-start images2'>
          <div className='flex flex-col justify-end items-center text-center h-full mr
          -[5vw] wptext leading-tight'><p className='dancing-script-400 text-yellow-300'>Database</p>Management Sys</div>
          <img src={dbmsf} className='h-[17vw]  dbmsimages hover:cursor-pointer'/>
          <img src={wpf} className='h-[17vw]  wpimages hover:cursor-pointer'/>
          <div className=' flex flex-col justify-end items-center h-full ml-[5vw] wptext leading-tight'><p className='dancing-script-400 text-yellow-300'>Website</p>Programming</div>
          </div>
        </div>
      </div>
      <div className='lg:h-[100vh] sm:h-[200vh] h-[320vh] w-full flex justify-center items-center '>
          <About/>
      </div>
      <div className='other h-[100vh] w-full bg-green-400'>
        
      </div>
      </div>
    </>
  );
};

export default Home;
