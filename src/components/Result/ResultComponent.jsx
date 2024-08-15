import React from 'react'

const ResultComponent = (props) => {
  return (
   <>
   <div className='component h-90 w-5/6 text-black p-3 m-5 flex flex-col justify-around sm:flex-row  border-2 bg-indigo-400 border-indigo-500 rounded-2xl hover:w-11/12 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-indigo-50'>
   <div className='text-center text-2xl flex flex-col justify-around '>
    Web Programming
    <img className="h-[15rem]" src={props.img}/>
   </div>
    <div className='text-center text-2xl flex flex-col justify-evenly'>
        Marks
        <div>
           {`${props.marks} /10`}
        </div>
    </div>
    <div className='text-center text-2xl flex flex-col justify-evenly'>
        Type
        <div>
           {`${localStorage.getItem("Type")} Test`}
        </div>
    </div>
    <div className='text-center text-2xl flex flex-col justify-evenly'>
        Time
        <div>
           13 wednesday
        </div>
    </div>
   </div>
   </>
  )
}

export default ResultComponent
