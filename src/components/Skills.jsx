import React from "react";
import skillsData from "../skillsData";
import SkillC from "./SkillC";

const Skills = () => {
  const skillsArr = skillsData.map((item) => {
    return <SkillC key={item.id} {...item} />;
  });

  return (
    <div name="skills" className="section">
      {/* Container */}
      <div className="my-container">
        <div>
          <p className="h-primary">Skills</p>
          <p className="my-4">
            // These are the technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center mt-8">
          {skillsArr}
        </div>
      </div>
    </div>
  );
};

export default Skills;
