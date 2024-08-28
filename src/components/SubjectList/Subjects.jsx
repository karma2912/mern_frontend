import React from 'react'
import SubComponent from './SubComponent'
import amf from "./amf.jpg"
import sef from "./sef.jpg"
import dbmsf from "./dbmsf.jpg"
import wpf from "./wpf.jpg"

const Subjects = () => {

  return (
    <>
    <div className='flex w-full max-w-full flex-col items-center'>
    <SubComponent name="Applied Mathematics" teacher="Sandhya Bhavsar" img={amf} to={'/am'} />
    <SubComponent name="Software Engineering" teacher="Rakhi Gupta" img={sef} to={'/se'} />
    <SubComponent name="Database Management System" teacher="Pragati Thawani" img={dbmsf} to={'/db'} />
    <SubComponent name="Web Programming" teacher="Neha Patel" img={wpf} to={'/wp'} />
    </div>
    </>
  )
}

export default Subjects
