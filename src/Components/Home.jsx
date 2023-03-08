import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Main_One from '../assets/pexels-amine-8086053.jpg';
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ArrowForwardIosRoundedIcon />
              </span>
            </Link >
          </div>
        </div>
        <div>
          <img src={Main_One} alt="Main_One"
          className="rounded-2xl h-64 mx-auto w-2/3 md:w-96 md:h-96"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
