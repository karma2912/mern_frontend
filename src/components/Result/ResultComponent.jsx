import React from 'react'
const ResultComponent = (props) => {
    const {results} = props
    const hour = (Number(results.date.slice(14,16))+30)<=60 ? Number(results.date.slice(11,13))+5 : Number(results.date.slice(11,13))+6
    let min = (Number(results.date.slice(14,16))+30)<=60 ? Number(results.date.slice(14,16))+30 : Number(results.date.slice(14,16))-30
    const sec = Number(results.date.slice(17,19)) 
    const finalTime = `${hour}:${min}:${sec}`
    const day = results.date.slice(8,10)
    const month = results.date.slice(5,7)
    const year = results.date.slice(0,4)
    const finalDate = `${day}-${month}-${year}`
 return (
   <>
   <div className='component h-90 w-5/6 text-black p-3 m-5 flex flex-col justify-around sm:flex-row border-2 bg-orange-400 border-orange-500 rounded-2xl hover:w-11/12 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-indigo-50'>
   <div className='text-center text-2xl font-bold flex flex-col justify-around '>
    {results.subject_name}
    <img className="h-[15rem] rounded-2xl mt-4" src={`${results.image}`}/>
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
        Date
        <div className='font-normal'>
           {`${finalDate}`}
        </div>
    </div>
    <div className='text-center font-bold text-2xl flex flex-col justify-evenly'>
        Time
        <div className='font-normal'>
           {`${finalTime}`}
        </div>
    </div>
   </div>
   </>
  )
}

export default ResultComponent
