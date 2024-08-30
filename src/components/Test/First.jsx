import React, { useContext, useEffect, useState } from "react";
import Second from "./Second";
import { useNavigate } from "react-router-dom";

const First = (props) => {
  const { attr,type } = props;
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleback = () => {
    navigate("/subjects");
  };
  const handleNext = () => {
    setModal(!modal);
  };
  return (
    <>
      {!modal && (
        <div className="md:h-5/6 min-h-[25rem] md:w-4/5 w-11/12 bg-red-400 md:rounded-[6rem] rounded-lg flex flex-col md:justify-around justify-between items-center md:p-8 p-5">
          <div className="md:text-5xl text-4xl">Start Test</div>
          <div className="md:text-2xl text-lg">{`This test is a ${attr} level test which means the questions will not be auto updated as per answers given by you. On every Correct answer you will get 1 marks and on every wrong answer you will get 0 marks. The test will be of 15 marks and time will also be 15 minutes. The questions will be on MCQ's basis.`}</div>
          <div className="md:text-2xl text-lg md:w-1/3 w-full flex flex-row justify-evenly items-center">
            All the best for the test!
            <i className="fa-regular fa-face-laugh-beam"></i>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <button
              className="md:text-2xl text-lg border-2 border-black md:p-2 p-1 rounded-xl bg-green-500 md:w-32 w-24 flex justify-around items-center hover:bg-green-700"
              onClick={handleback}
            >
              <i className="fa-solid fa-arrow-left"></i>Back
            </button>
            <button
              className="md:text-2xl text-lg border-2 border-black md:p-2 p-1 rounded-xl bg-green-500 md:w-32 w-24 flex justify-around items-center hover:bg-green-700"
              onClick={handleNext}
            >
              Start<i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
      {modal && <Second attr={attr} type={type}/>}
    </>
  );
};

export default First;
