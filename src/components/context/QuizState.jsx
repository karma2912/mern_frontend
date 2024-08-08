import React, { useState } from 'react'
import QuizContext from './QuizContext'

const QuestState = (props) => {
    const [question,setQuestion] = useState(null)
    const [answer_a,setAnswer_a] = useState(null)
    const [answer_b,setAnswer_b] = useState(null)
    const [answer_c,setAnswer_c] = useState(null)
    const [answer_d,setAnswer_d] = useState(null)
    const [qid,setQid] = useState(null)
    const [correctAnswer,setCorrectAnswer] = useState(null)
    const func = async (i)=>{
        const response = await fetch(`http://localhost:5000/getquestion`)
        const json = await response.json()
        setQuestion(json[i].Question)
        setCorrectAnswer(json[i].correct_answer)
        const Answers = await json[i].Answers
        setAnswer_a(json[i].Answers.answer_a)
        setAnswer_b(json[i].Answers.answer_b)
        setAnswer_c(json[i].Answers.answer_c)
        setAnswer_d(json[i].Answers.answer_d)
        setQid(json[i].Qid)
    }

    const delayedFunction = (i) => {
      func(i)
    };

    const stopFunction = () =>{
      
    }
  return (
    <QuizContext.Provider
    value={{func,question,answer_a,answer_b,answer_c,answer_d,correctAnswer,delayedFunction,stopFunction,qid}}
  >
    {props.children}
  </QuizContext.Provider>
  )
}

export default QuestState
