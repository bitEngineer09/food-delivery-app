import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { LuCircleMinus } from "react-icons/lu";

const Counter = ({ id, cartItems, addToCart, removeFromCart }) => {
  const handleIncreaseCounter = () => addToCart(id);

  const handleDecreaseCounter = () => removeFromCart(id);

  return (
    <div
      className="
          counter
          flex
          items-center
          justify-center
          gap-[0.3rem] md:gap-[0.1rem] lg:gap-[0.5rem]
          absolute 
          right-0
          w-[8rem] md:w-[8rem] lg:w-[10rem]
          py-[0.25rem] sm:py-[0.4rem] md:py-[0.2rem] lg:py-[0.3rem]
          rounded-full 
          bg-white
          border-[0.2rem] border-primary
          "
    >
      <button
        onClick={handleDecreaseCounter}
        className="rounded-full text-red-300 text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
      >
        <LuCircleMinus />
      </button>
      <div className="text-[1.4rem] text-center md:text-[1.6rem] w-[2rem] lg:text-[1.8rem]">
        {cartItems[id]}
      </div>
      <button
        onClick={handleIncreaseCounter}
        className="rounded-full text-green-300 text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
      >
        <FiPlusCircle />
      </button>
    </div>
  );
};

export default Counter;
