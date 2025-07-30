import React from "react";
import DownloadApp from "../components/DownloadApp";

const MobileApp = () => {
  return (
    <div
      className="container mobile-app-download
                grid 
                md:grid-cols-2 
                gap-[2.6rem] sm:gap-[3rem] md:gap-0
                px-[2rem] md:px-0
                md:pl-[2.8rem] xl:pl-[14rem] 2xl:pl-0
                pt-[3rem] sm:pt-[5rem] md:pt-[7rem] lg:pt-[8rem] xl:pt-[6rem] 2xl:pt-[3rem]
                pb-[5rem] sm:pb-[7rem] md:pb-[10rem] lg:pb-[10rem] xl:pb-[10rem] 2xl:pb-[12rem]
                place-items-center
                "
    >
      <div className="flex flex-col">
        <h1 className="text-[3rem] sm:text-[3.8rem] lg:text-[4.4rem] 2xl:text-[6rem] font-semibold">
          Hungry for more?
          <br />
          Download the Foodie App today!
        </h1>
        <DownloadApp />
      </div>
      <div>
        <img
          src="/images/logo2.png"
          alt=""
          className="w-[15rem] sm:w-[19rem] md:w-[21rem] lg:w-[24rem] xl:w-[26rem] 2xl:w-[31rem] "
        />
      </div>
    </div>
  );
};

export default MobileApp;
