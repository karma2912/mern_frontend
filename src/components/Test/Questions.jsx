import React, { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";
import RoundSlider from "./RoundSlider";

const Questions = (props) => {
  const context = useContext(QuizContext)
  const {qno,increaseQno} = context
  
  const [marks,setMarks] = useState(0)
  const {question,answer_a,answer_b,answer_c,answer_d,correctAnswer,qid,delayedFunction,attr,type} = props
  const [Acolor,setAColor] = useState("red")
  const [Bcolor,setBColor] = useState("red")
  const [Ccolor,setCColor] = useState("red")
  const [Dcolor,setDColor] = useState("red")
  useEffect(()=>{
   setAColor("red")
   setBColor("red")
   setCColor("red")
   setDColor("red")
  },[qid])
  const handleA = () => {
    increaseQno()
    if (correctAnswer === "answer_a") {
      setMarks(marks + 1)
      setAColor("green");
    } else {
      setAColor("red-500 ");
    }
    setTimeout(() => {
      delayedFunction(attr,type);
    }, 100);
  };
  const handleB=()=>{
    increaseQno()
    if (correctAnswer === "answer_b") {
      setMarks(marks + 1);
      setAColor("green");
    } else {
      setAColor("red-500 ");
    }
    setTimeout(() => {
      delayedFunction(attr,type);
    }, 100);
  };

  const handleC = () => {
    increaseQno()
    if (correctAnswer === "answer_c") {
      setMarks(marks + 1);
      setCColor("green");
    } else {
      setCColor("red-500 ");
    }
    setTimeout(() => {
      delayedFunction(attr,type);
    }, 100);
  };

  const handleD=()=>{
    increaseQno()
    if(correctAnswer==="answer_d"){
      setMarks(marks+1)
      setDColor("green")
    }
    else{
      setDColor("red-500 ")
    }
    setTimeout(() => {
      delayedFunction(attr,type);
    }, 100);
  }
  localStorage.setItem("marks",marks)
  ;
  return (
    <>
      <div className="flex justify-around m-12 md:flex-row flex-col">
        <RoundSlider/>
          <div className="question md:min-h-96 h-full mt-8 md:w-[60vw] w-full bg-white rounded-2xl">
            <div className="p-1 font-medium text-xl">{`Question ${qno} of 10`}</div>
            <div className="mt-4 p-2 font-semibold">{question}</div>
            <div className="options mt-12 font-semibold">
              <div className="flex md:flex-row flex-col justify-around p-2">
                <button
                  className={`md:w-[18rem] w-full border-2 bg-${Acolor}-300 p-2 mb-4 bg-red-300 md:rounded-2xl rounded-lg text-wrap border-black`}
                  onClick={handleA}
                >
                  {answer_a}
                </button>
                <button
                  className={`md:w-[18rem] w-full border-2 bg-${Bcolor}-300 p-2 md:rounded-2xl rounded-lg text-wrap border-black`}
                  onClick={handleB}
                >
                  {answer_b}
                </button>
              </div>
              <div className="flex md:flex-row flex-col justify-around p-2">
                <button
                  className={`md:w-[18rem] w-full border-2 bg-${Ccolor}-300 p-2 mb-4 md:rounded-2xl rounded-lg text-wrap border-black`}
                  onClick={handleC}
                >
                  {answer_c}
                </button>
                <button
                  className={`md:w-[18rem] w-full border-2 bg-${Dcolor}-300 p-2 md:rounded-2xl rounded-lg text-wrap border-black`}
                  onClick={handleD}
                >
                  {answer_d}
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
  

export default Questions;
