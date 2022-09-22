import React from "react";
import workImg from "../assets/workImg.jpeg";
import realestate from "../assets/realestate.jpg";
import workData from "../workData";
import WorkC from "./WorkC";

const Work = () => {
  const workArr = workData.map((item) => <WorkC id={item.id} {...item} />);

  return (
    <div name="work" id="work" className="section !h-auto">
      <div className="my-container">
        <div>
          <p className="h-primary">Work</p>
          <p className="my-4">// Check out some of my recent works</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {workArr}
        </div>
      </div>
    </div>
  );
};

export default Work;
