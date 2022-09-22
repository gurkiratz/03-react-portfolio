import React from "react";

const SkillC = (props) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
      <img
        className="w-20 mx-auto"
        src={`./src/assets/${props.img}`}
        alt={props.alt}
      />
      <p className="my-4">{props.name}</p>
    </div>
  );
};

export default SkillC;
