import React, { useContext, useEffect } from "react";
import TimeSubmit from "./TimeSubmit";
import Questions from "./Questions";
import Progress from "./Progress";
import QuizContext from "../context/QuizContext";

const Second = (props) => {
  const context = useContext(QuizContext);
  const { attr } = props;
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
  const i = 0;
  useEffect(() => {
    delayedFunction(i, attr);
  }, []);
  return (
    <>
      <div className="min-h-0 md:w-11/12 w-full bg-red-400 rounded-2xl">
        <TimeSubmit />
        <Questions
          question={question}
          answer_a={answer_a}
          answer_b={answer_b}
          answer_c={answer_c}
          answer_d={answer_d}
          correctAnswer={correctAnswer}
          qid={qid}
          delayedFunction={delayedFunction}
          attr={attr}
        />
        <Progress qid={qid} />
      </div>
    </>
  );
};

export default Second;
