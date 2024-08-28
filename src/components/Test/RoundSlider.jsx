import React, { useContext, useEffect, useState } from 'react';
import QuizContext from '../context/QuizContext';

const RoundSlider = () => {
    const context = useContext(QuizContext)
    const {qno} = context
    const [range,setRange] = useState(100)
    useEffect(()=>{
       setRange(range-10)
    },[qno])
    
 return (
    <>
<div className="relative size-100">
  <svg className="size-full h-full w-[17rem] -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset={`${range}`}strokeLinecap="round"></circle>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">{`${qno}`}</span>
  </div>
</div>
    </>
  );
};

export default RoundSlider;