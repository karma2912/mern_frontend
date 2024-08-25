import React from 'react'
const ResultComponent = (props) => {
    const {results} = props
 return (
   <>
   <div className='component h-90 w-5/6 text-black p-3 m-5 flex flex-col justify-around sm:flex-row  border-2 bg-orange-400 border-orange-500 rounded-2xl hover:w-11/12 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-indigo-50'>
   <div className='text-center text-2xl font-bold flex flex-col justify-around '>
    {results.subject_name}
    <img className="h-[15rem] rounded-2xl mt-4" src={localStorage.getItem("Img")}/>
   </div>
    <div className='text-center font-bold text-2xl flex flex-col justify-evenly'>
        Marks
        <div className='font-normal'>
           {`${results.marks} /10`}
        </div>
    </div>
    <div className='text-center font-bold text-2xl flex flex-col justify-evenly'>
        Type
        <div className='font-normal'>
           {`${results.subject_type} Test`}
        </div>
    </div>
    <div className='text-center font-bold text-2xl flex flex-col justify-evenly'>
        Time
        <div className='font-normal'>
           13 wednesday
        </div>
    </div>
   </div>
   </>
  )
}

export default ResultComponent
