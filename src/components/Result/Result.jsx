
import React from 'react'
import ResultComponent from './ResultComponent'

const Result = (props) => {
  const marks = localStorage.getItem("marks")
  return (
    <div className='flex w-full max-w-full flex-col items-center'>
      <ResultComponent marks={marks}/>
    </div>
  )
}

export default Result
