import React, { useContext, useEffect,useState } from 'react'
import QuizContext from '../context/QuizContext'

const Progress = (props) => {
  const [count,setCount] = useState(0)
  const context = useContext(QuizContext)
  const {attr,type} = props
  localStorage.removeItem("marks")
  const {qno,increaseQno,decreaseQno,delayedFunction,correctAnswer,marks,setMarks} = context
  const handlePrev= async ()=>{
    decreaseQno()
    setCount(count-1)
    delayedFunction(attr,type,count-1)

  }
  const handleNext=()=>{
    increaseQno()
    setCount(count+1)
       delayedFunction(attr,type,count+1)
   if(correctAnswer===givenAnswer){
    setMarks(marks+1)
    localStorage.setItem("marksss",marks)
   }
}
return (
   <>
   <div className='flex justify-between items-center m-12 h-38'>
    <div className=''>
      <button className='border-2 border-green-400 pt-4 pb-4 pr-10 pl-10 rounded-3xl text-xl bg-green-400' onClick={handlePrev}><i className="fa-solid fa-arrow-left mr-3"></i>Previous</button>
    </div>
    <div className=''>
    <button className='border-2 border-green-400 pt-4 pb-4 pr-10 pl-10 rounded-3xl text-xl bg-green-400' onClick={handleNext}>Next<i className="fa-solid fa-arrow-right ml-3"></i></button>
    </div>
   </div>
   </>
  )

}

export default Progress
