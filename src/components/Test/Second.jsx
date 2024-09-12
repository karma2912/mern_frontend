import React, { useContext, useEffect, useState } from "react";
import TimeSubmit from "./TimeSubmit";
import Questions from "./Questions";
import Progress from "./Progress";
import QuizContext from "../context/QuizContext";

const Second = (props) => {
  const context = useContext(QuizContext);
  const {qno} = context
  const { attr,type } = props;
  const {
    question,
    answer_a,
    answer_b,
    answer_c,
    answer_d,
    correctAnswer,
    delayedFunction,
    qid,
  } = context;
  useEffect(()=>{
    delayedFunction(attr,type)
  },[])
  return (
    <>
    <div className='md:min-h-5/6 min-h-screen md:w-11/12 w-full bg-red-500 rounded-2xl shadow-2xl'>
    <TimeSubmit/>
    <Questions question={question} answer_a={answer_a} answer_b={answer_b} answer_c={answer_c} answer_d={answer_d} correctAnswer={correctAnswer} qid={qid} delayedFunction={delayedFunction} attr={attr} type={type} qno={qno}/>
    <Progress/>
    </div>
    </>
  )}
;
;

export default Second;
