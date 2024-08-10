import React from 'react'

const Progress = (props) => {
  const {qid} = props
  return (
    <div className='m-12 bg-red-500 h-48 flex justify-around items-center text-xl rounded-2xl'>
      <div className={qid===1 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>1</div>
      <div className={qid===2 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>2</div>
      <div className={qid===3 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>3</div>
      <div className={qid===4 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>4</div>
      <div className={qid===5 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>5</div>
      <div className={qid===6 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>6</div>
      <div className={qid===7 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>7</div>
      <div className={qid===8 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>8</div>
      <div className={qid===9 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>9</div>
      <div className={qid===10 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>10</div>
    </div>
  )
}

export default Progress
