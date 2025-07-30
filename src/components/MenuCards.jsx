import React, { useEffect, useState } from "react";
import { menu_list } from "../assets/assets";

export const MenuCards = ({ name, image, category, setCategory }) => {
  return (
    <div
      onClick={() => {
        setCategory((prev) => (prev === name ? "All" : name));
        console.log(category);
      }}
      className="
            flex
            flex-col
            items-center 
            py-[2rem]
            gap-[0.8rem] md:gap-[1.7rem]
            selection:text-purple-900
            hover:scale-113 ease-in-out duration-180
      "
    >
      <img
        src={image}
        alt=""
        className={`${
          category === name
            ? "ease duration-120"
            : ""
        } md:w-[13rem] lg:w-[14rem] xl:w-[15rem] 2xl:w-[16rem] 
          h-[10rem] md:h-[11rem] lg:h-[12rem] 2xl:h-[13rem]
        `}
      />
      <span
        className="
                text-[1.8rem] sm:text-[2rem] md:text-[2.1rem] lg:text-[2.3rem] 
                text-nowrap
                text-[#747474]
      "
      >
        {name}
      </span>
    </div>
  );
};

export default MenuCards;
