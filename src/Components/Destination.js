/** @format */

import React from "react";
import Navbar from "./Navbar";
import Moon from "./assets/destination/image-moon.png";
import { Link } from "react-router-dom";

export default function Destination() {
  return (
    <div className=" bg-destBgMobile md:bg-destBgTablet lg:bg-destBgDesktop bg-center bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center px-4 lg:grid grid-cols-2 lg:py-2">
        <header className=" w-full lg:px-20 flex flex-col lg:py-16 items-center ">
          <div className="mb-6 md:mb-20 text-center self-center lg:mr-28">
            <h3 className=" font-BarlowCondensed text-[#D0D6F9] md:text-xl text-lg ">
              <span className=" opacity-[25%] px-2 ">01</span> PICK YOUR DESTINATION
            </h3>
          </div>

          <div className="lg:py-4 self-center">
            <img src={Moon} alt="moon" className="w-[170px] h-[170px] md:w-[300px] md:h-[300px]" />
          </div>
        </header>
        <aside className="flex flex-col items-center md:py-4 lg:py-6">
          <div className="py-2 md:py-2">
            <Link className=" px-4 font-BarlowCondensed text-[#D0D6F9] md:text-lg md:px-6">
              MOON
            </Link>
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

          <div className="">
            <h1 className="font-Bellefair text-white text-[56px] text-center md:text-[80px] lg:text-[100px] lg:leading-[114.6px]">
              MOON
            </h1>
          </div>

          <div className="px-6 lg:px-0 md:py-4">
            <h3 className="text-center font-Barlow text-[15px] leading-[25px] text-[#D0D6F9]  sm:text-[15px] sm:py-4 sm:leading-7 md:text-[16px] lg:text-lg lg:tracking-tighter md:px-20 lg:px-4 lg:text-justify">
              See our planet as you’ve never seen it before. A perfect relaxing trip away to help
              regain perspective and come back refreshed. While you’re there, take in some history
              by visiting the Luna 2 and Apollo 11 landing sites.
            </h3>
          </div>
          <footer className="flex flex-col items-center  p-1 md:p-4 md:p4">
            <div className="border-t-2 border-[#383B4B] px-14 md:grid grid-cols-2">
              <div className=" md:p-4 flex flex-col items-center">
                <h3 className=" font-BarlowCondensed text-base text-[#D0D6F9] leading-4 p-2">
                  AVG. DISTANCE
                </h3>
                <h2 className=" font-Bellefair text-xl md:text-3xl leading-8 text-white md:p-2">
                  384,400 KM
                </h2>
              </div>
              <div className=" flex flex-col items-center p-1 md:p-4">
                <h3 className=" font-BarlowCondensed text-base text-[#D0D6F9] leading-4 p-2">
                  EST. TRAVEL TIME
                </h3>
                <h2 className=" font-Bellefair text-xl md:text-3xl leading-8 text-white p-2">
                  3 DAYS
                </h2>
              </div>
            </div>
          </footer>
        </aside>
      </main>
    </div>
  );
}
