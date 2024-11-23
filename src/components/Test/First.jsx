import React, { useContext, useEffect, useState } from "react";
import Second from "./Second";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/QuizContext";
const First = (props) => {
  const context = useContext(QuizContext);
  const { attr, type } = props;
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
        <div
        className="relative z-10 w-full"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full  items-center w-full justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg md:w-screen w-full bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <i className="fa-solid fa-question"></i>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Start Test
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{`This test is a ${attr} level test which means the questions will not be auto updated as per answers given by you. On every Correct answer you will get 1 marks and on every wrong answer you will get 0 marks. The test will be of 15 marks and time will also be 15 minutes. The questions will be on MCQ's basis.`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={handleNext}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={handleback}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {modal && <Second attr={attr} type={type} />}
    </>
  );
};

export default First;
