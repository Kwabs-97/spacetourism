/** @format */

import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import imgLaunch from "../assets/technology/image-launch-vehicle-landscape.jpg";
import imgLaunchLg from "../assets/technology/image-launch-vehicle-portrait.jpg";

import Navbar from "../Navbar";
const Technology = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });

  return (
    <div className="bg-techBgMobile md:bg-techBgTablet lg:bg-techBgDesktop bg-center bg-no-repeat bg-cover min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex flex-col items-center  lg:py-2">
        {" "}
        <section className="lg:px-20 flex flex-col md:w-full py-3">
          <div className="py-2 md:self-start ">
            <h3 className=" font-BarlowCondensed text-[#D0D6F9] md:text-xl text-lg tracking-[2.7px]  ">
              <span className=" opacity-[25%] px-2  ">03</span> SPACE LAUNCH 101
            </h3>
          </div>
        </section>
        <div className="flex flex-col items-center lg:grid grid-cols-3">
          <section className=" py-3">
            <div className=" border-[#383B4B] self-center md:border-none md:">
              {isTabletOrMobile ? (
                <img src={imgLaunch} alt={"Below Medium"} className=" min-h-full min-w-full" />
              ) : (
                <img src={imgLaunchLg} alt={"Below Medium"} className=" min-h-full min-w-full" />
              )}
            </div>
          </section>
          <section className="flex flex-col items-center col-start-1 row-start-1">
            <div className="py-4 px-2 flex lg:flex-col lg:my-3">
              <NavLink className="px-4 py-2 m-3  text-center rounded-full border-2 border-white border-opacity-[25%] font-Bellefair tech text-[#D0D6F9] md:text-lg  ">
                1
              </NavLink>
              <NavLink className=" px-4 py-2 m-3 text-center rounded-full border-2 border-white border-opacity-[25%] font-Bellefair tech text-[#D0D6F9] md:text-lg ">
                2
              </NavLink>

              <NavLink className=" px-4 py-2 m-3 text-center rounded-full border-2 border-white border-opacity-[25%] font-Bellefair tech text-[#D0D6F9] md:text-lg">
                3
              </NavLink>
            </div>
          </section>
          <section className="px-6 py-4 lg:py-0 lg:px-0 row-start-1">
            <div className="">
              <h3 className="font-Bellefair text-white text-lg leading-5 text-opacity-[0.5] text-center pb-2 md:text-3xl md:py-4">
                THE TERMINOLOGY
              </h3>
              <h1 className="font-Bellefair text-white leading-7 text-2xl  text-center md:text-5xl md:leading-[45.84px] md:py-4">
                LAUNCH VEHICLE
              </h1>
            </div>

            <h3 className="text-center font-Barlow text-[15px] leading-[25px] text-[#D0D6F9]  sm:text-[15px] sm:py-4 sm:leading-7 md:text-[16px] md:leading-7 lg:text-lg lg:tracking-tighter md:px-20 lg:px-4 lg:text-justify">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
              payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite
              an awe-inspiring sight on the launch pad!
            </h3>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Technology;
