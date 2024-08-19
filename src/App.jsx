import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import First from "./components/Test/First";
import Home from "./components/Home/Home";
import Subjects from "./components/SubjectList/Subjects";
import Footer from "./components/Footer/Footer";
import QuizState from "./components/context/QuizState";
import Result from "./components/Result/Result";
import Login from "./components/Home/Login";

const App = () => {

  return (
    <>
      <QuizState>
        <Routes>
          <Route
            path="/"
            key="login"
            element={
              <>
                <div className="md:h-screen h-full w-full max-w-full md:overflow-visible overflow-x-hidden font-serif flex justify-center items-center">
                  <Login />
                </div>
              </>
            }
          />
          <Route
            path="/home"
            key="home"
            element={
              <>
                <Navbar color="bg-yellow-200" />
                <div className="md:h-screen h-full w-full max-w-full md:overflow-visible overflow-x-hidden font-serif">
                  <Home />
                  <Footer />
                </div>
              </>}
            
          />
          <Route
            path="/results"
            key="results"
            element={
              <>
                <Navbar color="bg-red-400" />
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <Result />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/test"
            key="test"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Easy" />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/dbetest"
            key="dbetest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Easy" type="getdb" />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/wpetest"
            key="wpetest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Easy" type="get"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/ametest"
            key="ametest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Easy" type="getam"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/seetest"
            key="seetest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Easy" type="getse"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/dbmtest"
            key="dbmtest"
            element={
              <>
               
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Moderate" type="getdb" />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/wpmtest"
            key="wpmtest"
            element={
              <>
               
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Moderate" type="getwp"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/ammtest"
            key="ammtest"
            element={
              <>
               
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Moderate" type="getam"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/semtest"
            key="semtest"
            element={
              <>
               
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Moderate" type="getse"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/dbhtest"
            key="dbhtest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Hard" type="getdb"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/wphtest"
            key="wphtest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Hard" type="getwp"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/amhtest"
            key="amhtest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Hard" type="getam"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/sehtest"
            key="sehtest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Hard" type="getse"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/dbutest"
            key="dbutest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Ultimate" type="getdb"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/wputest"
            key="wputest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Ultimate" type="getwp"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/amutest"
            key="amutest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Ultimate" type="getam"/>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/seutest"
            key="seutest"
            element={
              <>
                
                <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                  <First attr="Ultimate" type="getse"/>
                </div>
                <Footer />
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
                  <Subjects />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </QuizState>
    </>
  );
};

export default App;
