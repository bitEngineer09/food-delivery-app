import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";

const CartItems = ({ foodItem, cartItems, removeFromCart }) => {
  return (
    <div
      className="
                cart-items
                grid
                grid-cols-5
                justify-around
                place-items-center
                text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.8rem]
                py-[0.7rem] sm:py-[1.1rem] md:py-[1.3rem] lg:py-[1.4rem] xl:py-[1.6rem]
                border-b-[0.2rem]
                text-nowrap
                "
    >
      {/* <img src={foodItem.image} alt="" className="lg:size-[3rem]" /> */}
      <p>{foodItem.name}</p>
      <p>₹ {foodItem.price}</p>
      <p>{cartItems[foodItem._id]}</p>
      <p>₹ {cartItems[foodItem._id] * foodItem.price}</p>
      <button onClick={() => removeFromCart(foodItem._id)}>
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default CartItems;
