import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import Counter from "../Counter";

import { FaPlus } from "react-icons/fa6";
import { StoreContextData } from "../../context/StoreContext";

const FoodCards = ({ id, name, image, price, description, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContextData);

  return (
    <div
      className="
            foodCards
            flex
            flex-col
            gap-[1.4rem] md:gap-[1.5rem] lg:gap-[1.6rem]
            w-[21rem]  lg:w-[23rem] xl:w-[24rem] 2xl:w-[28rem]
            rounded-[2rem]
            bg-[#f4e8ff]
            h-[30.5rem] md:h-[32rem] lg:h-[35rem] xl:h-[37rem] 2xl:h-[39rem]
        "
    >
      <div className="relative">
        <img src={image} alt={name} className="rounded-t-[2rem]" />
        <div
          className="
                absolute
                right-8
                bottom-8
                flex 
                items-center
                justify-center
                size-[2.8rem] sm:size-[3.2rem] md:size-[3.3rem] lg:size-[3.8rem]
                rounded-full 
                bg-white
                "
        >
          {!cartItems[id] ? (
            <FaPlus
              onClick={() => addToCart(id)}
              className="
                  text-[1.5rem] md:text-[1.6rem]  lg:text-[1.8rem]
                  text-[#471396]
              "
            />
          ) : (
            <Counter
              id={id}
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between items-center px-[1.7rem] md:px-[2rem]">
        <span className="text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem] 2xl:text-[1.8rem] font-semibold">
          {name}
        </span>
        <img
          src={assets.rating_starts}
          alt=""
          className="w-[6.5rem] sm:w-[6.7rem] md:w-[6.8rem] xl:w-[8rem]"
        />
      </div>
      <div className="px-[1.7rem] md:px-[1.85rem] lg:px-[2rem] pb-[2.5rem] ">
        <p className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem]">
          {description}
        </p>
        <span className="text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] xl:text-[2.2rem] text-[#471396] sm:font-semibold">
          ₹ {price}
        </span>
      </div>
    </div>
  );
};

export default FoodCards;
