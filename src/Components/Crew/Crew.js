/** @format */

import React from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Douglas from "../assets/crew/image-douglas-hurley.png";

export default function Crew() {
  return (
    <div className="bg-crewBgMobile md:bg-crewBgTablet lg:bg-crewBgDesktop bg-center bg-no-repeat bg-cover min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex flex-col items-center px-4 lg:pt-14 lg:grid grid-cols-2 grid-rows-1  ">
        {" "}
        <header className="lg:px-20 flex flex-col md:w-full md:order-1">
          <div className="py-2 md:self-start ">
            <h3 className=" font-BarlowCondensed text-[#D0D6F9] md:text-xl text-lg tracking-[2.7px] ">
              <span className=" opacity-[25%] px-2  ">02</span> MEET YOUR CREW
            </h3>
          </div>
        </header>
        <section className=" md:order-3  lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="px-24 pt-4 border-b-2 border-[#383B4B] self-center md:border-none md:">
            <img
              src={Douglas}
              alt="moon"
              className="w-[177px] h-[222px] md:h-[527px] md:w-[460px]"
            />
          </div>
        </section>
        <aside className="flex flex-col items-center md:order-2 lg:col-start-1">
          <div className="md:py-4 lg:py-4 md:order-3">
            <Link className=" font-BarlowCondensed text-[#D0D6F9] md:text-lg  rounded-full border-2"></Link>
            <Link className=" px-4 font-BarlowCondensed text-[#D0D6F9] md:text-lg md:px-6">
              MARS
            </Link>

            <Link className=" px-4 font-BarlowCondensed text-[#D0D6F9] md:text-lg md:px-6">
              EUROPA
            </Link>
            <Link className=" px-4 font-BarlowCondensed text-[#D0D6F9] md:text-lg md:px-6">
              TITAN
            </Link>
          </div>

          <div className=" md:order-1">
            <h3 className="font-Bellefair text-white text-lg leading-5 opacity-[0.5] text-center pb-2 md:text-3xl md:py-4">
              COMMANDER
            </h3>
            <h1 className="font-Bellefair text-white leading-7 text-2xl  text-center md:text-5xl md:py-4">
              DOUGLAS HURLEY
            </h1>
          </div>

          <div className="px-6 py-4 md:py-0 lg:py-0 lg:px-0 md:order-2">
            <h3 className="text-center font-Barlow text-[15px] leading-[25px] text-[#D0D6F9]  sm:text-[15px] sm:py-4 sm:leading-7 md:text-[16px] md:leading-7 lg:text-lg lg:tracking-tighter md:px-20 lg:px-4 lg:text-justify">
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former
              NASA astronaut. He launched into space for the third time as commander of Crew Dragon
              Demo-2.
            </h3>
          </div>
        </aside>
      </main>
    </div>
  );
}
