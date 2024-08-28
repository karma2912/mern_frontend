import React, { useContext } from 'react'
import QuizContext from '../context/QuizContext'

const Progress = () => {
  const context = useContext(QuizContext)
  const {qno} = context
return (
    <div className='m-12 hidden bg-red-500 h-48 md:flex justify-around items-center text-xl rounded-2xl'>
      <div className={qno===1 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>1</div>
      <div className={qno===2 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>2</div>
      <div className={qno===3 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>3</div>
      <div className={qno===4 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>4</div>
      <div className={qno===5 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>5</div>
      <div className={qno===6 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>6</div>
      <div className={qno===7 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>7</div>
      <div className={qno===8 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>8</div>
      <div className={qno===9 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>9</div>
      <div className={qno===10 ? `h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl`:`h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl`}>10</div>
    </div>
  )
}

export default Progress
