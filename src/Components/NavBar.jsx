import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const NavBar = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "exprience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 text-white
     bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Sachin Gour</h1>
      </div>
      <ul className="hidden md:flex">
        {NavBar.map(({ link, id }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium 
                text-gray-500 
                hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <CloseRoundedIcon /> : <TableRowsRoundedIcon />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
        bg-gradient-to-b from-black to bg-gray-800 text-gray-500"
        >
          {NavBar.map(({ link, id }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
