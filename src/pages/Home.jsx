import React, { useState } from "react";
import HeroSection from "../UI/HeroSection";
import Menu from "./Menu";
import ScrollVelocity from "/ReactBits/ScrollVelocity/ScrollVelocity";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HeroSection />
      <div className="menuSection mt-[1.8rem] md:mt-[3rem]">
        <Menu category={category} setCategory={setCategory} />
      </div>
      <div className="mb-[6rem] sm:mb-[7rem] md:mb-[9rem] lg:mb-[10rem] xl:mb-[12rem] 2xl:mb-[14rem]">
        <ScrollVelocity
        texts={["Foodie Just Eats", "Eats on Repeat"]}
        velocity={160}
        className="custom-scroll-text p-[0.8rem] sm:p-[1rem] md:p-[1.2rem] lg:p-[1.4rem] xl:p-[1.6rem] 2xl:p-[1.8rem] text-slate-600"
      />
      </div>
    </>
  );
};

export default Home;
