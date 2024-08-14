import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import First from "./components/Test/First";
import Home from "./components/Home/Home";
import Subjects from "./components/SubjectList/Subjects";
import Footer from "./components/Footer/Footer";
import QuizState from "./components/context/QuizState";
import Result from "./components/Result/Result";
import SignUp from "./components/Home/Signup";
import Login from "./components/Home/Login";


const App = () => {

  return (
    <>
    <QuizState>

    <Routes>

        <Route
          path="/login"
          key="login"
          element={
            <>
              <div className="md:h-screen h-full w-full max-w-full md:overflow-visible overflow-x-hidden font-serif flex justify-center items-center">
                <Login/>
              </div>
            </>
          }
        />
        <Route
          path="/"
          key="home"
          element={
            <>
              <Navbar color="bg-yellow-200"/>
              
              <div className="md:h-screen h-full w-full max-w-full md:overflow-visible overflow-x-hidden font-serif">
                <Home/>
              <Footer/>
              </div>
            </>
          }
        />
        <Route
          path="/results"
          key="results"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <Result/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/test"
          key="test"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <First attr="easy"/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/etest"
          key="etest"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <First attr="easy"/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/mtest"
          key="mtest"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <First attr="moderate"/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/htest"
          key="htest"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <First attr="hard"/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/subjects"
          key="subjects"
          element={
            <>
              <Navbar color="bg-indigo-400" />
              <div className="bg-white h-full w-full max-w-full flex justify-center font-serif">
                <Subjects/>
              </div>
              <Footer/>
            </>
          }
        />
      </Routes>
      </QuizState>
    </>
  );
};

export default App;
