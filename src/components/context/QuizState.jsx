import React, { useState } from "react";
import QuizContext from "./QuizContext";

const QuestState = (props) => {
  const [question, setQuestion] = useState(null);
  const [answer_a, setAnswer_a] = useState(null);
  const [answer_b, setAnswer_b] = useState(null);
  const [answer_c, setAnswer_c] = useState(null);
  const [answer_d, setAnswer_d] = useState(null);
  const [qid, setQid] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const setfunc = async (i, response) => {
    const json = await response.json();
    setQuestion(json[i].Question);
    setCorrectAnswer(json[i].correct_answer);
    const Answers = await json[i].Answers;
    setAnswer_a(json[i].Answers.answer_a);
    setAnswer_b(json[i].Answers.answer_b);
    setAnswer_c(json[i].Answers.answer_c);
    setAnswer_d(json[i].Answers.answer_d);
    setQid(json[i].Qid);
    
  };
  const func = async (i, attr) => {
    if (attr === "Easy") {
      let response = await fetch(`http://localhost:5000/getquestion`);
      setfunc(i, response);
    } else if (attr === "Moderate") {
      let response = await fetch(`http://localhost:5000/getwpMquestion`);
      setfunc(i, response);
    } else if (attr === "Hard") {
      let response = await fetch(`http://localhost:5000/getwpHquestion`);
      setfunc(i, response);
    } else if (attr === "Ultimate") {
      const marks = localStorage.getItem("marks");
      console.log(marks);
      if (marks <= 2) {
        let response = await fetch(`http://localhost:5000/getquestion`);
        setfunc(i, response);
      }
      if (marks > 2 && marks <= 6) {
        let response = await fetch(`http://localhost:5000/getwpMquestion`);
        setfunc(i, response);
      }
      if (marks > 6 && marks <= 10) {
        let response = await fetch(`http://localhost:5000/getwpHquestion`);
        setfunc(i, response);
      }
    } else {
      console.log("No attribute has been given");
    }
  };

  const delayedFunction = (i, attr) => {
    func(i, attr);
  };

  return (
    <QuizContext.Provider
      value={{
        func,
        question,
        answer_a,
        answer_b,
        answer_c,
        answer_d,
        correctAnswer,
        delayedFunction,
        qid,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuestState;
