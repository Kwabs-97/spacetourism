/** @format */

import React from "react";

export default function HeroSection() {
  return (
    <main className=" px-4 flex flex-col place-items-center lg:grid grid-cols-2 lg:py-24">
      <div className="pt-10 sm:p-20  sm:px-30 lg:p-2">
        <h2 className="text-[#D0D6F9] text-center font-BarlowCondensed leading-5 tracking-[2.7px] text-base font-normal py-2 sm:text-xl sm:py-4 lg:text-[28px] lg:leading-8">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-white text-[80px] font-normal leading-[100px] font-Bellefair text-center tracking-widest py-2 sm:text-[150px] sm:py-10 lg:tracking-tighter">
          SPACE
        </h1>
        <h3 className="text-center font-Barlow text-[15px] leading-[25px] text-[#D0D6F9] pb-20 sm:text-[15px] sm:py-4 md:py-0 sm:leading-7 lg:text-lg lg:tracking-tighter md:px-20 lg:px-32">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </h3>
      </div>
      <section className="pt-18 py-8 lg:py-18 lg:self-end lg:p-2 md:pt-28">
        <div className="rounded-full w-40 h-40 bg-white content-center flex flex-col items-center justify-center sm:w-60 sm:h-60 sm:text-4xl">
          <p className="text-center font-Bellefair text-[#0B0D17]">EXPLORE</p>
        </div>
      </section>
    </main>
  );
}
