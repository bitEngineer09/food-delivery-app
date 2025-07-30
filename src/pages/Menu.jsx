import React, { useState } from "react";
import { menu_list } from "../assets/assets";
import MenuCards from "../components/MenuCards";
import DisplayFood from "../components/FoodDisplay/DisplayFood";
import RotatingText from "/ReactBits/RotatingText/RotatingText";
import ScrollVelocity from "/ReactBits/ScrollVelocity/ScrollVelocity";


export const Menu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div
      className="
              menu-section
              container  
              px-[2rem] md:px-[3rem] lg:px-[2.8rem] xl:px-[14rem] 2xl:px-0
              pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-[6rem] 2xl:pb-[7rem]
              "
    >
      <h1
        className="
            menu-heading
            text-[2.9rem] sm:text-[3rem] md:text-[3.2rem] lg:text-[4rem]
            mt-[1rem] md:mt-[2rem]
            text-start
            font-semibold
            text-[#471396]
      "
      >
        <div className="flex items-center gap-[1rem]">
          <span>Explore our </span>
          <RotatingText
            texts={["Salad", "Rolls", "Deserts", "Cake", "Pasta", "Noodles"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            className="bg-none"
          />
        </div>
      </h1>
      <p
        className="
              text-[1.25rem] sm:text-[1.45rem] md:text-[1.75rem] lg:text-[2rem]
              mb-[1rem] md:mb-[3rem] lg:mb-[2rem]
              mt-[0.5rem] md:mt-[1.5rem]
              tracking-wide
              text-[#747474]
              selection:text-purple-900
      "
      >
        Hungry for more? Dive into our delicious menu and discover your next
        favorite meal! Every bite is a new adventure—start exploring now!
      </p>
      <div
        className="
              menuCards
              grid
              grid-flow-col
              auto-cols-[minmax(180px,_1fr)]
              items-center 
              justify-stretch
              lg:gap-[2rem]
              overflow-x-auto
              overflow-y-hidden
              py-2
              "
      >
        {menu_list.map((item, idx) => {
          const { menu_name, menu_image } = item;
          return (
            <MenuCards
              key={idx}
              name={menu_name}
              image={menu_image}
              category={category}
              setCategory={setCategory}
            />
          );
        })}
      </div>
      <div className="my-[1.2rem] sm:my-[1.6rem] md:my-[2rem] lg:my-[2.5rem] xl:my-[3rem]">
        <DisplayFood category={category} />
      </div>
    </div>
  );
};

export default Menu;
