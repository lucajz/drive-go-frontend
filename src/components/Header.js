import React, { useState } from "react";
import logo from "../assets/logodrive.png";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary fixed h-[10vh] w-full top-0 left-0 z-20">
      <div className="md:w-11/12 px-2 lg:w-10/12 md:mx-auto flex items-center justify-between">
        <HashLink to="/#hero" smooth="true">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </HashLink>
        <div className="flex space-x-10">
          <ul className="hidden md:flex text-secondary font-light space-x-8 items-center ">
            <HashLink
              to="/#hero"
              smooth="true"
              className="cursor-pointer hover:scale-105 transition-all"
            >
              ACASA
            </HashLink>
            <NavLink
              to="/cars"
              smooth="true"
              className="cursor-pointer hover:scale-105 transition-all"
            >
              MASINI
            </NavLink>
            <HashLink
              to="/#despre"
              smooth="true"
              className="cursor-pointer hover:scale-105 transition-all"
            >
              DESPRE
            </HashLink>
          </ul>
        </div>
        <div className="text-secondary md:hidden items-center">
          <MenuIcon sx={{ fontSize: 50 }} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div
        className={`${
          open ? "h-[90vh] w-full transition-all duration-300" : "h-0"
        } bg-primary fixed md:hidden w-full left-0 top-0 mt-[10vh] z-20`}
      >
        <ul
          className={`h-full  pb-10 text-secondary font-thin text-3xl items-center flex-col justify-evenly ${
            open ? "flex" : "hidden"
          }`}
        >
          <HashLink
            to="/#hero"
            smooth="true"
            className="cursor-pointer hover:scale-105 transition-all"
            onClick={() => setOpen(false)}
          >
            ACASA
          </HashLink>
          <HashLink
            to="/cars#"
            smooth="true"
            className="cursor-pointer hover:scale-105 transition-all"
            onClick={() => setOpen(false)}
          >
            MASINI
          </HashLink>
          <HashLink
            to="/#despre"
            smooth="true"
            className="cursor-pointer hover:scale-105 transition-all"
            onClick={() => setOpen(false)}
          >
            DESPRE
          </HashLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
