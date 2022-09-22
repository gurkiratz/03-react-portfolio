import React from "react";

const About = () => {
  return (
    <div name="about" className="section">
      <div className="my-container">
        <div className="w-full grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right">
            <p className="h-primary">About</p>
          </div>
          <div className="hidden sm:block"></div>
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Gurkirat, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
