import React from 'react'
import gkf from "./gkf.webp"
import { Link } from 'react-router-dom'
const GeneralKnowledge = () => {
  return (
    <div className='md:h-full sm:h-[82rem] h-[75rem] md:w-11/12 lg:w-5/6 w-full flex md:flex-row flex-col justify-between items-center rounded-2xl'>
      <img src={gkf} className='lg:w-auto w-[25rem]'></img>
      <i className="fa-solid fa-arrow-right md:fa-arrow-down text-8xl just"></i>
      <div className='md:text-5xl text-4xl lg:w-[40rem] md:w-[55rem] w-11/12 bg-yellow-300 md:font-bold font-extrabold md:p-16 p-10 rounded-2xl border-2 border-yellow-500 shadow-2xl'>General Knowledge
        <div className='md:text-lg text-base pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta voluptatum pariatur illum odio nisi iste ipsa fuga aliquid quibusdam harum placeat fugiat omnis facilis minus ex laudantium, laboriosam dolorem.</div>
        <div className='md:text-lg text-base pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, hic natus? Saepe ex velit explicabo mollitia placeat voluptatibus commodi, inventore aspernatur! Perferendis nisi sed vitae neque at eligendi corporis ea.</div>
        <Link className='text-xl font-normal border-2 border-black bg-green-400 p-2 rounded-xl' to="/test"><i className="fa-regular fa-circle-play mr-2"></i>PLAY NOW</Link>
      </div>
    </div>
  )
}

export default GeneralKnowledge

