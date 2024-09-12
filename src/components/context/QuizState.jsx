import React, { useState } from "react";
import QuizContext from "./QuizContext";

const QuestState = (props) => {
  const [qno,setQno] = useState(1)
  const increaseQno=()=>{
    setQno(qno+1)
  }
  const [question, setQuestion] = useState(null);
  const [answer_a, setAnswer_a] = useState(null);
  const [answer_b, setAnswer_b] = useState(null);
  const [answer_c, setAnswer_c] = useState(null);
  const [answer_d, setAnswer_d] = useState(null);
  const [qid, setQid] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const setfunc = async (response) => {
    const i = Math.floor(Math.random()*50)
    const json = await response.json();
    setQuestion(json[i].Question);
    setCorrectAnswer(json[i].correct_answer);
    const Answers = await json[i].Answers;
    setAnswer_a(json[i].Answers.answer_a);
    setAnswer_b(json[i].Answers.answer_b);
    setAnswer_c(json[i].Answers.answer_c);
    setAnswer_d(json[i].Answers.answer_d);
    setQid(json[i].Qid);
    if (qno === 11) {
      console.log("Question available nhi hai bhai");
      setQno(1)

    }
  };
  const host = "https://mern-backend-ygl7.onrender.com";
  
  const func = async (attr, type) => {
    if (attr === "Easy") {
      let response = await fetch(`${host}/api/${type}Equestion`);
      setfunc(response);
    } else if (attr === "Moderate") {
      let response = await fetch(`${host}/api/${type}Mquestion`);
      setfunc(response);
    } else if (attr === "Hard") {
      let response = await fetch(`${host}/api/${type}Hquestion`);
      setfunc(response);
    } else if (attr === "Ultimate") {
      const marks = localStorage.getItem("marks");
      if (marks <= 2) {
        let response = await fetch(
          `${host}/api/${type}Equestion`
        );
        setfunc(response);
      }
      if (marks > 2 && marks <= 6) {
        let response = await fetch(
          `${host}/api/${type}Mquestion`
        );
        setfunc(response);
      }
      if (marks > 6 && marks <= 10) {
        let response = await fetch(
          `${host}/api/${type}Hquestion`
        );
        setfunc(response);
      }
    } else {
      console.log("No attribute has been given");
    }
  };

  const delayedFunction = (attr, type) => {
    func(attr, type);
  };
  const [results, setResults] = useState([]);

  //Fetching Results
  const getResult = async () => {
    //Fetch API
    const response = await fetch(`${host}/results/getresults`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("Token")}`,
      },
    });
    const json = await response.json();
    setResults(json);
  };

  const addResult = async (subject_name, marks, subject_type,image) => {
    //Fetch API
    const response = await fetch(`${host}/results/addresult`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({ subject_name, marks, subject_type,image })
    });
    const json = await response.json();
    setResults(results.concat(json));
  };

  const delResult = async () =>{
    const response = await fetch(`${host}/results/delresult`)
  }

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
        results,
        getResult,
        addResult,
        qno,
        increaseQno
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuestState;
