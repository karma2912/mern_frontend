
import React, { useEffect, useRef } from 'react'
import quiz from "./coinf.webp"
import fpawn from "./fpawn.webp"
import fking from "./fking.webp"
import frook from "./frook.webp"
import { Link, useNavigate } from 'react-router-dom'
import GeneralKnowledge from './GeneralKnowledge'
import ClgSubject from './ClgSubject'
import { useGSAP } from '@gsap/react'
import RoundSlider from '../Test/RoundSlider'

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("Token")){
      navigate('/login')
    }
  },[])
  useGSAP(()=>{
   gsap.from(".quiz-head",{
    x:-1050,
    duration:1.5,
    delay:1
   })
   gsap.from(".text-part",{
    x:-1050,
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
  })

  return (
    <>
      <div className="md:h-fit h-[95rem]">
        <div className="black-curve h-[40rem] w-full bg-black flex justify-around items-center rounded-b-[15rem] shadow-xl text-yellow-400">
          <div className="md:text-7xl text-5xl font-bold md:p-16 p-8 flex flex-col justify-start md:items-start items-center">
            <span className="quiz-head ">
              Daily Quiz, Daily
              <br />
              Improve. Play Today!
            </span>
            <div className="text-part md:text-xl text-lg font-normal md:pt-16 pt-6">
              QuizQuest is a quiz app which provides a variety of questions
              related to the College Subjects!
              <br />
              It Tracks the weakness of users and provide them that level
              questions
            </div>
            <Link
              className="button text-xl font-normal border-2 mt-5 border-black bg-green-400 p-2 rounded-xl text-black"
              to="/test"
            >
              <i className="fa-regular fa-circle-play mr-2"></i>PLAY NOW
            </Link>
          </div>
          <img src={quiz} className="image md:h-2/3 h-0 " />
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
      </div>
    </>
  );
};

export default Home;
