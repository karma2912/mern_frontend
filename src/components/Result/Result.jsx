
import React from 'react'
import ResultComponent from './ResultComponent'
import amf from '../SubjectList/wpf.jpg'
const Result = (props) => {
  const marks = localStorage.getItem("marks")
  return (
    <div className='flex w-full max-w-full flex-col items-center'>
      <ResultComponent img={amf} marks={marks}/>
    </div>
  )
}

export default Result
