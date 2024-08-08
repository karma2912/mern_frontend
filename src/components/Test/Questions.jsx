import React, { useEffect, useState } from "react";

const Questions = (props) => {
  
  const [marks,setMarks] = useState(0)
  const {question,answer_a,answer_b,answer_c,answer_d,correctAnswer,qid,delayedFunction} = props
  localStorage.setItem("marks",marks)
  console.log(correctAnswer)
  
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
  const handleA=()=>{
    console.log("A is clicked")
    if(correctAnswer==="answer_a"){
      setMarks(marks+1)
      localStorage.setItem("marks",marks)
      console.log(marks)
      console.log("color changed to green")
      setAColor("green")
    }
    else{
      setAColor("red-500 ")
    }
    setTimeout(()=>{
      delayedFunction(qid)
    },250)
  }
  const handleB=()=>{
    console.log("B is clicked")
    if(correctAnswer==="answer_b"){
      setMarks(marks+1)
      localStorage.setItem("marks",marks)
      console.log(marks)
      console.log("color changed to green")
      setBColor("green")
    }
    else{
      setBColor("red-500 ")
    }
    setTimeout(()=>{
      delayedFunction(qid)
    },250)
  }
  const handleC=()=>{
    console.log("C is clicked")
    if(correctAnswer==="answer_c"){
      setMarks(marks+1)
      localStorage.setItem("marks",marks)
      console.log(marks)
      console.log("color changed to green")
      setCColor("green")
    }
    else{
      setCColor("red-500 ")
    }
    setTimeout(()=>{
      delayedFunction(qid)
    },250)
  }
  const handleD=()=>{
    console.log("D is clicked")
    if(correctAnswer==="answer_d"){
      setMarks(marks+1)
      localStorage.setItem("marks",marks)
      console.log(marks)
      console.log("color changed to green")
      setDColor("green")
    }
    else{
      setDColor("red-500 ")
    }
    setTimeout(()=>{
      delayedFunction(qid)
    },250)
  }
  return (
    <>
      <div className="flex justify-between m-12 md:flex-row flex-col">
      <div className="circle md:h-96 h-40 bg-slate-400 md:w-[20rem] w-full flex justify-center items-center rounded-2xl">
          {`Total Marks:${marks}`}
        </div>
        <div className="question-part h-96 md:w-[70rem] w-full bg-white rounded-2xl">
          <div className="question">
            <div className="p-1 font-medium text-xl">{`Question ${qid} of 10`}</div>
            <div className="mt-4 p-2 font-semibold">
              {question}
            </div>
            <div />
            <div className="options mt-12 font-semibold">
              <div className="flex md:flex-row flex-col justify-around ">
                <button className={`w-[18rem] border-2 bg-${Acolor}-300 p-2 mb-2 rounded-2xl text-wrap`} onClick={handleA}>
                  {answer_a}
                </button>
                <button className={`w-[18rem] border-2 bg-${Bcolor}-300 p-2 mb-2 rounded-2xl text-wrap`} onClick={handleB}>
                  {answer_b}
                </button>
              </div>
              <div className="flex md:flex-row flex-col justify-around">
                <button className={`w-[18rem] border-2 bg-${Ccolor}-300 p-2 mb-2 rounded-2xl text-wrap`} onClick={handleC}>
                  {answer_c}
                </button>
                <button className={`w-[18rem] border-2 bg-${Dcolor}-300 p-2 mb-2 rounded-2xl text-wrap`} onClick={handleD}>
                  {answer_d}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
