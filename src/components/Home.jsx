import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="section">
      {/* Container */}
      <div className="my-container">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Gurkirat Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="group text-white border-2 rounded-md px-6 py-3 my-2 flex items-center gap-x-2 hover:bg-pink-600 hover:border-pink-600">
            <span>View Work</span>
            <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
