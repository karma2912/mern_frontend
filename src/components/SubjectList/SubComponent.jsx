import React from "react";
import { Link } from "react-router-dom";

const SubComponent = (props) => {
  const {name,img} = props
  const handleEasy=()=>{
    localStorage.setItem("Type","Easy")
    localStorage.setItem("Subject",name)
    localStorage.setItem("Img",img)
  }
  const handleModerate=()=>{
    localStorage.setItem("Type","Moderate")
    localStorage.setItem("Subject",name)
    localStorage.setItem("Img",img)
  }
  const handleHard=()=>{
    localStorage.setItem("Type","Hard")
    localStorage.setItem("Subject",name)
    localStorage.setItem("Img",img)
  }
  const handleUltimate=()=>{
    localStorage.setItem("Type","Ultimate")
    localStorage.setItem("Subject",name)
    localStorage.setItem("Img",img)
  }
  return (
    <>
      <div className="component h-90 w-5/6 text-black p-3 m-5 flex flex-col justify-around sm:flex-row  border-2 bg-indigo-400 border-black rounded-2xl hover:w-11/12 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-black">
        <div>
          <img src={props.img} className="h-72 lg:w-80 md:w-48 w-full rounded-full "></img>
        </div>
        <div className="lg:w-[22rem] md:w-[17rem] font-bold lg:p-3 p-1 text-2xl flex flex-col">
          {props.name}
          <div className="font-normal text-xl pt-3 pb-3">
            by-<span className="font-medium ml-2">{props.teacher}</span>
          </div>
          <div className="p-1">
            Tests
            <div className="pt-2">
              <div className="w-full font-semibold text-lg  pb-4 flex justify-evenly items-center">
                <div>Easy</div> <i className="fa-solid fa-arrow-right md:ml-0 ml-2"></i>
                <Link
                  className="bg-white p-1 border-2 rounded-xl border-black text-green-500 hover:bg-slate-300" onClick={handleEasy}
                  to={`${props.to}etest`}
                >
                  <i className="fa-regular fa-circle-play mr-3"></i>Click Here
                </Link>
              </div>
              <div className="w-full font-semibold text-lg pb-4 flex justify-evenly items-center">
               <div>Moderate</div> 
                <i className="fa-solid fa-arrow-right md:ml-1 ml-2"></i>
                <Link
                  className="bg-white p-1 border-2 border-black rounded-xl text-green-500 hover:bg-slate-300" onClick={handleModerate}
                  to={`${props.to}mtest`}
                >
                  <i className="fa-regular fa-circle-play mr-2"></i>Click Here
                </Link>
              </div>
              <div className="w-full font-semibold text-lg pb-4 flex justify-evenly items-center">
                <div>Hard</div> <i className="fa-solid fa-arrow-right md:ml-3 ml-1"></i>
                <Link
                  className="bg-white p-1 border-2 border-black rounded-xl text-green-500 hover:bg-slate-300" onClick={handleHard}
                  to={`${props.to}htest`}
                >
                  <i className="fa-regular fa-circle-play mr-2"></i>Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[22rem] md:w-[17rem]">
          <div className="font-bold p-3 text-2xl flex flex-col">
            Ultimate Test
            <span className="font-normal text-lg">
              In this test the questions will be auto updated <br /> as per your
              weakness while you will get extra marks <br />
              for Harder levels
            </span>
          </div>
          <div className="w-[20rem] font-semibold text-lg pb-4 flex justify-evenly items-center">
           <div>Master</div><i className="fa-solid fa-arrow-right md:ml-3 ml-1"></i>
            <Link
              className="bg-white p-1 border-2 rounded-xl border-black text-green-500 hover:bg-slate-300" onClick={handleUltimate}
              to={`${props.to}utest`}
            >
              <i className="fa-regular fa-circle-play mr-2"></i>Click Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubComponent;
