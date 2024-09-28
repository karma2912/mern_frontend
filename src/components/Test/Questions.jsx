import React, { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";
import RoundSlider from "./RoundSlider";

const Questions = (props) => {
  const context = useContext(QuizContext)
  const {qno,increaseQno,qid} = context

  const {question,answer_a,answer_b,answer_c,answer_d,correctAnswer,delayedFunction,attr,type} = props
  const [Acolor,setAColor] = useState("lightblue")
  const [Bcolor,setBColor] = useState("lightblue")
  const [Ccolor,setCColor] = useState("lightblue")
  const [Dcolor,setDColor] = useState("lightblue")
 
  useEffect(()=>{
   setAColor("lightblue")
   setBColor("lightblue")
   setCColor("lightblue")
   setDColor("lightblue")
  },[qno])
  const handleA = () => {
    setBColor("lightblue")
    setCColor("lightblue")
    setDColor("lightblue")
    setAColor(Acolor === 'lightblue' ? 'lightgreen' : 'lightblue');
    localStorage.setItem("Option selected","answer_a")
  };
  const handleB=()=>{
    setAColor("lightblue")
    setCColor("lightblue")
    setDColor("lightblue")
    setBColor(Bcolor === 'lightblue' ? 'lightgreen' : 'lightblue');
    localStorage.setItem("Option selected","answer_b")
  };

  const handleC = () => {
    setDColor('lightblue')
    setBColor('lightblue')
    setAColor('lightblue')
    setCColor(Ccolor === 'lightblue' ? 'lightgreen' : 'lightblue');
    localStorage.setItem("Option selected","answer_c")
  };

  const handleD=()=>{
    setAColor('lightblue')
    setBColor('lightblue')
    setCColor('lightblue')
    setDColor(Dcolor === 'lightblue' ? 'lightgreen' : 'lightblue');
    localStorage.setItem("Option selected","answer_d")
  }
  ;
  return (
    <>
      <div className="flex justify-around m-12 md:flex-row flex-col">
        <RoundSlider/>
          <div className="question md:min-h-96 h-full md:w-[60vw] w-full bg-white rounded-2xl">
            <div className="p-3 font-medium text-xl flex justify-between"><div>{`Question ${qno} of 10`}</div>
            <div className="text-lg">{`Level: ${attr}`}</div>
            </div>
            <div className="mt-4 p-2 font-semibold">{question}</div>
            <div className="options mt-12 font-semibold">
              <div className="flex md:flex-row flex-col justify-around items-center p-2">
                <button
                  className={`md:w-[18rem] w-full border-2 p-2 mb-4 md:rounded-2xl rounded-lg text-wrap border-black`} style={{backgroundColor: Acolor}}
                  onClick={handleA}
                >
                  {answer_a}
                </button>
                <button
                  className={`md:w-[18rem] w-full border-2 p-2 mb-4 md:rounded-2xl rounded-lg text-wrap border-black`} style={{backgroundColor: Bcolor}}
                  onClick={handleB}
                >
                  {answer_b}
                </button>
              </div>
              <div className="flex md:flex-row flex-col justify-around p-2">
                <button
                  className={`md:w-[18rem] w-full border-2 p-2 mb-4 md:rounded-2xl rounded-lg text-wrap border-black`} style={{backgroundColor: Ccolor}}
                  onClick={handleC}
                >
                  {answer_c}
                </button>
                <button
                  className={`md:w-[18rem] w-full border-2 p-2 mb-4 md:rounded-2xl rounded-lg text-wrap border-black`} style={{backgroundColor: Dcolor}}
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
