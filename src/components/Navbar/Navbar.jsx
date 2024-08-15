import React, { useEffect, useRef, useState } from "react";
import img from "./qlogo.jpg"
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate()
  const NavRef = useRef(null)
  const NavRef2 = useRef(null)
  const optRef = useRef(null)
  const [modal,setModal] = useState(false)
  const toggleButton =()=>{
    setModal(!modal)
  }
  useEffect(()=>{
    gsap.from(NavRef.current,{
    y:-30,
    opacity:0,
    duration:1,
    delay:1
   })
   gsap.from(optRef.current,{
    y:-10,
    opacity:0,
    duration:1,
    delay:1,
   }) 
   gsap.from(NavRef2.current,{
    y:-10,
    opacity:0,
    duration:1,
    delay:1
   })
  },[])
  const handleLogout=()=>{
    localStorage.removeItem("Token")
    navigate('/')
  }
  return (
    <>
      <header className={`text-black w-full body-font ${props.color} font-serif position sticky top-0 z-40 md:h-[5rem] h-[4rem]`}>
        <div className="container w-full mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex justify-between title-font font-medium items-center md:w-auto w-full  text-gray-900 md:mb-0">
            <div ref={NavRef} className="flex justify-center md:p-5 p-3 items-center">
            <img src={img}
              className="w-9 h-9 text-white rounded-full"
            />            
            <span className="ml-3 text-xl">QuizQuest</span>
            </div>
            <i ref={NavRef2} className="fa-solid fa-bars text-xl p-4 md:hidden relative" onClick={toggleButton}></i>
         </a>
         {modal && 
           <div className={`text-black w-full body-font ${props.color} position sticky top-0 z-40 h-[14.5rem] `}>
            <nav className="flex flex-col text-lg font-serif items-start p-3 w-full">
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 flex justify-between items-center" to="/" onClick={toggleButton}>Home<i className="fa-solid fa-house"></i></Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 flex justify-between items-center"to="/subjects" onClick={toggleButton}>Subjects<i className="fa-solid fa-book-open-reader"></i></Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 flex justify-between items-center" to="/results" onClick={toggleButton}>Results<i className="fa-solid fa-square-poll-horizontal"></i></Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 flex justify-between items-center" onClick={toggleButton}>Help<i className="fa-solid fa-handshake-angle"></i></Link>
            <Link className="pb-1 mb-2 pl-2 border-l-2 border-b-2 border-black w-full hover:text-gray-900 flex justify-between items-center" to='/' onClick={toggleButton}>LogOut<i className="fa-solid fa-right-from-bracket"></i></Link>
          </nav>
          </div>}
          <nav ref={optRef} className="md:ml-auto md:mr-auto md:flex hidden flex-wrap items-center text-base justify-center font-bold">
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/subjects" >Subjects</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900" to="/results">Results</Link>
            <Link className="mr-10 ml-10 hover:text-gray-900">Help</Link>
          </nav>
          <button className="md:inline-flex hidden items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0" onClick={handleLogout}> 
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
