import React, { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";

const Progress = (props) => {
  const [count, setCount] = useState(0);
  const [markArr, setMarkArr] = useState([]);
  const [previousMarks, setPreviousMarks] = useState(0);
  const [ansArr,setAnsArr] = useState([])
  const [marks, setMarks] = useState(0);
  const context = useContext(QuizContext);
  const { attr, type } = props;
  const { qno, increaseQno, decreaseQno, delayedFunction, correctAnswer, qid } =
    context;
  useEffect(() => {
    localStorage.setItem("marksss", marks);
    const currentMarks = localStorage.getItem("marksss");
    if (currentMarks > previousMarks) {
      setMarkArr((prevArr) => [...prevArr, 1]);
    } else {
      setMarkArr((prevArr) => [...prevArr, 0])
    }
  }, [qno]);
 useEffect(()=>{

 },[marks])
  useEffect(() => {
    setPreviousMarks(marks);
  }, [marks]);
  
  useEffect(()=>{
    const newArr = markArr.slice(1)
    setAnsArr(newArr)
    },[markArr])
  const handlePrev = async () => {
    decreaseQno();
    setCount(count - 1);
    delayedFunction(attr, type, count - 1);
    const givenAnswer = localStorage.getItem("Option selected");
    if(ansArr[count-1]===0){
      setMarks(marks)
    }
    else{
      setMarks(marks-1)
    }
  };
  const handleNext = () => {
    const marksss = marks;
    increaseQno();
    setCount(count + 1);
    delayedFunction(attr, type, count + 1);
    const givenAnswer = localStorage.getItem("Option selected");
    if (correctAnswer === givenAnswer) {
      setMarks(marks + 1);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center m-12 h-38">
        <div className="">
          <button
            className="border-2 border-green-400 pt-4 pb-4 pr-10 pl-10 rounded-3xl text-xl bg-green-400"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-arrow-left mr-3"></i>Previous
          </button>
        </div>
        <div className="">
          <button
            className="border-2 border-green-400 pt-4 pb-4 pr-10 pl-10 rounded-3xl text-xl bg-green-400"
            onClick={handleNext}
          >
            Next<i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Progress;
