import React, { useContext, useEffect } from 'react'
import QuizContext from '../context/QuizContext'
import ResultComponent from './ResultComponent'
import Footer from '../Footer/Footer'

const Result = () => {
  const context = useContext(QuizContext)
  const {getResult,results} = context
  useEffect(()=>{
    getResult()
  },[])
  return (
    <>
    <div className='h-screen w-full'>
    <div>
    {results.length===0 && "No Results Saved Yet!"}
    </div>
    {results.map((results,index)=>{
      return (
        <div
          className="flex flex-col justify-center items-center"
          key={index}
        >
          <ResultComponent results={results} />
        </div>
      );
    })}
    <Footer/>
    </div>
    </>
    
  )}

export default Result
