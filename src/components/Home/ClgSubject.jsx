import React from "react";
import clgf from "./clgf.webp";
import { Link } from "react-router-dom";
const ClgSubject = () => {
  return (
    <div className="md:h-full sm:h-[82rem] h-[75rem] md:w-11/12 lg:w-5/6 w-full flex md:flex-row flex-col justify-between items-center rounded-2xl">
      <div className="md:text-5xl text-4xl font-extrabold lg:w-[40rem] md:w-[55rem] w-11/12 bg-yellow-300 md:font-bold md:p-16 p-10 rounded-2xl border-2 border-yellow-500 shadow-2xl">
        Institutional Subjects
        <div className="md:text-lg text-base pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dicta voluptatum pariatur illum odio nisi iste ipsa fuga aliquid
          quibusdam harum placeat fugiat omnis facilis minus ex laudantium,
          laboriosam dolorem.
        </div>
        <div className="md:text-lg text-base pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, hic
          natus? Saepe ex velit explicabo mollitia placeat voluptatibus commodi,
          inventore aspernatur! Perferendis nisi sed vitae neque at eligendi
          corporis ea.
        </div>
        <Link
          className="text-xl font-normal border-2 border-black bg-green-400 p-2 rounded-xl"
          to="/subjects"
        >
          <i className="fa-regular fa-circle-play mr-2"></i>View Subjects
        </Link>
      </div>
      <i className="fa-solid fa-arrow-left md:fa-arrow-up  ml-3 text-8xl"></i>
      <img src={clgf} className="lg:w-auto w-[25rem]"></img>
    </div>
  );
};

export default ClgSubject;
