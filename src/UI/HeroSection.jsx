import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import TextType from "/ReactBits/TextType/TextType";

function HeroSection() {
  return (
    <div
      className="
            hero-section
            container
            HeroImage 
            flex 
            items-center 
            min-h-[28rem] sm:min-h-[35rem] md:min-h-[40rem] lg:min-h-[45rem] xl:min-h-[48rem] 2xl:min-h-[58rem] 
            2xl:rounded-[3rem]
            "
    >
      <div className="px-[2rem] sm:px-[3.2rem] md:px-[7rem] xl:px-[14rem] 2xl:px-[10rem]">
        <h1
          className="
              heroHeading
              text-[2.8rem] sm:text-[3.3rem] md:text-[4rem] lg:text-[5rem] 2xl:text-[6rem]
              h-[9rem] lg:h-[15rem]
              mb-[3rem] sm:mb-[3.5rem] md:mb-[2.5rem] lg:mb-[6rem]
              leading-[3.2rem] sm:leading-[3.7rem] md:leading-[5rem] lg:leading-[6rem]
              font-semibold 
              text-white
              "
        >
          <TextType
            text={[
              "Eat, Click, Repeat—Deliciousness at Your Doorstep!",
              "Flavor at Your Fingertips—Order. Enjoy. Repeat.",
              "Hungry for More? We Deliver Happiness!",
              "Bringing Great Taste Home—One Order at a Time.",
              "Fast. Fresh. Flavorful—That’s Our Promise!",
              "From Our Kitchen to Your Couch—Just a Click Away!",
              "Crave. Order. Savor—Let Us Handle the Rest.",
              "Good Food, Great Mood—Delivered Instantly!",
              "Your Favorite Food, Just a Tap Away!",
              "Where Hunger Meets Happiness—Order Now!",
            ]}
            typingSpeed={80}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p
          className="
                    heroPara 
                    hidden md:block md:text-[1.3rem] lg:text-[1.6rem] 2xl:text-[1.8rem]
                    sm:mb-[1rem] md:mb-[1.8rem] lg:mb-[2.5rem]
                    text-white 
                    md:leading-[2rem] lg:leading-[2.5rem]
                    tracking-wide md:tracking-wider
          "
        >
          Craving something delicious? Satisfy your taste buds with just a few
          clicks! <br />
          Explore mouthwatering cuisines from your favorite local restaurants
          and enjoy hot,
          <br />
          fresh meals delivered right to your doorstep.
        </p>
        <button
          className="
                    p-[0.7rem_1.4rem] sm:p-[0.8rem_1.8rem] md:p-[1rem_2rem] lg:p-[1rem_2.3rem] 2xl:p-[1.3rem_3rem]  
                    text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                    font-semibold 
                    tracking-wide 
                    rounded-full 
                    bg-white 
                    text-[#747474]
                    hover:bg-[#C68EFD]
                    hover:text-white
                    duration-190
                    ease-in
                    "
        >
          <NavLink to="/menu">View Menu</NavLink>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
