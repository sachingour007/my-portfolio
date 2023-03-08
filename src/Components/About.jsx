import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-2xl mt-14">
          "Passionate Front-End Developer with experience in creating responsive
          and user-friendly web applications. Skilled in HTML, CSS, JavaScript,
          and various front-end frameworks. Proficient in collaborating with
          cross-functional teams to deliver high-quality products. "
        </p>
        <br />

        <p className="text-2xl">
          Dedicated to staying up-to-date with the latest industry trends and
          technologies to continuously improve my skills and deliver innovative
          solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
