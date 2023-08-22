import React from "react";
import youtube from "../assets/portfolio/youtube-logo-hd-wallpaper-1280x720.jpg";
import FoodCorner from "../assets/portfolio/pngwing.com.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: youtube,
      githubLink: "https://github.com/sachingour007/youtube_clone",
      liveLink: "https://magical-alpaca-b072d5.netlify.app",
    },
    {
      id: 2,
      src: FoodCorner,
      githubLink: "https://github.com/sachingour007/React_Namaste.git",
      liveLink: "https://tourmaline-squirrel-d04153.netlify.app/",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, githubLink, liveLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-48 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    {" "}
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
