/** @format */

import React, { useState } from "react";

import logo from "./assets/shared/logo.svg";
import hamburger from "./assets/shared/icon-hamburger.svg";
import close from "./assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toggleOn, setToggleOn] = useState(false);
  const toggleHandler = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <nav className="sm:py-0 sm:pb-8 p-2">
      <div className="nav-items flex max-w-[1240px] justify-between lg:ml-16 items-center lg:py-4 ">
        <div className="nav-item-logo px-4">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div
          className={
            toggleOn
              ? "fixed right-0 top-0 w-[70%] h-full flex flex-col ease-in-out duration-500 backdrop-blur-md bg-opacity-[4%] bg-[#FFFFFF]"
              : "fixed right-[-100%]"
          }
        >
          <div onClick={toggleHandler} className="sm:hidden px-6 p-6 self-end">
            {" "}
            {toggleOn ? <img src={close} alt="" className=" w-[24px] h-[24px]" /> : ""}
          </div>
          <ul className="flex flex-col pl-8 pt-8">
            <NavLink
              to="/"
              className="text-white font-BarlowCondensed text-xl leading-5 tracking-[2.7px] py-4"
            >
              <span className="font-bold">01</span> HOME
            </NavLink>

            <NavLink
              to="/destination"
              className="text-white font-BarlowCondensed text-xl leading-5 tracking-[2.7px] py-4"
            >
              <span className="font-bold">01</span> DESTINATION
            </NavLink>

            <NavLink
              to="/crew"
              className="text-white font-BarlowCondensed text-xl leading-5 tracking-[2.7px] py-4"
            >
              <span className="font-bold">01</span> CREW
            </NavLink>
            <NavLink
              to="/technology"
              className="text-white font-BarlowCondensed text-xl leading-5 tracking-[2.7px] py-4"
            >
              <span className="font-bold">01</span> TECHNOLOGY
            </NavLink>
          </ul>
        </div>
        <div onClick={toggleHandler} className="sm:hidden px-4">
          {" "}
          {!toggleOn ? <img src={hamburger} alt="" /> : ""}
        </div>

        <div className=" bg-opacity-5 bg-white lg:backdrop-blur-3xl  sm:p-4 md:p-0 hidden sm:flex ">
          <ul className="flex lg:px-40">
            <NavLink
              to="/"
              className="text-white md font-BarlowCondensed text-[14px] leading-4 tracking-widest line-clamp-3 py-8 mx-4 "
            >
              HOME
            </NavLink>

            <NavLink
              to="/destination"
              className="text-white md font-BarlowCondensed text-[14px] leading-4 tracking-widest line-clamp-3 py-8 mx-4 "
            >
              DESTINATION
            </NavLink>

            <NavLink
              to="/crew"
              className="text-white md font-BarlowCondensed text-[14px] leading-4 tracking-widest line-clamp-3 py-8 mx-4 "
            >
              CREW
            </NavLink>

            <NavLink
              to="/technology"
              className="text-white md font-BarlowCondensed text-[14px] leading-4 tracking-widest line-clamp-3 py-8 mx-4 "
            >
              TECHNOLOGY
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
