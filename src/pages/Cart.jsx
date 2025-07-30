import React, { useContext } from "react";
import { StoreContextData } from "../context/StoreContext";

import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, getTotalPrice, removeFromCart } =
    useContext(StoreContextData);
  const navigate = useNavigate();

  return (
    <div className="container containerL px-[2rem] xl:px-[14rem] 2xl:px-0 relative">
      <div className="pt-8 sm:pt-10 lg:pt-13 xl:pt-16">

        <ul
          className="
                grid
                grid-cols-5
                place-items-center
                border-y-[0.2rem]
                text-[1.1rem] sm:text-[1.1rem] lg:text-[1.8rem]
                py-[0.4rem] sm:py-[0.9rem] lg:py-[1.3rem] 2xl:py-[2rem]
                text-black font-semibold bg-purple-200
                "
        >
          <li>Item</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
      </div>
      {food_list.map((foodItem, idx) => {
        if (cartItems[foodItem._id] > 0) {
          return (
            <CartItems
              key={idx}
              foodItem={foodItem}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          );
        }
      })}

      <div
        className="
                cartBottom 
                grid 
                md:grid-cols-2
                gap-[1.8rem] sm:gap-[3rem] md:gap-[12rem] lg:gap-[22rem]  2xl:gap-[40rem]
                my-[7rem] lg:my-[10rem]
                px-[6rem] md:px-0
                "
      >
        <div
          className="
              cartTotal
              bg-[#f4e8ff]
              p-[2rem] sm:p-[3rem] md:p-[4rem] lg:p-[4rem] 2xl:p-[5rem]
              rounded-[0.7rem] sm:rounded-[1.2rem] lg:rounded-[3rem]
              order-2 md:order-none
              "
        >
          <h1
            className="
                    text-[2rem] sm:text-[2.5rem] lg:text-[3rem]
                    mb-[0.7rem] sm:mb-[1.2rem]
                    font-semibold
                    "
          >
            Cart Totals
          </h1>
          <div
            className="
                    flex
                    flex-col
                    gap-[1.2rem] sm:gap-[1.7rem] lg:gap-[1.8rem]
                    "
          >
            <div
              className="
                      flex
                      justify-between
                      border-b-[0.1rem] md:border-b-[0.3rem]
                      
                      pb-[0.1rem] sm:pb-[0.3rem] lg:pb-[0.8rem]
                      text-[1rem] sm:text-[1.2rem] lg:text-[1.7rem] 2xl:text-[1.9rem]
                      border-zinc-400
                      "
            >
              <p>Subtotal</p>
              <p>₹ {getTotalPrice()}</p>
            </div>
            <div
              className="
                      flex
                      justify-between
                      border-b-[0.1rem] md:border-b-[0.3rem]
                      pb-[0.1rem] sm:pb-[0.3rem] lg:pb-[0.8rem]
                      text-[1rem] sm:text-[1.2rem] lg:text-[1.7rem] 2xl:text-[1.9rem]
                      border-zinc-400
                      "
            >
              <p>Delivery Fee</p>
              <p>₹ {15}</p>
            </div>
            <div
              className="
                      flex
                      justify-between
                      border-b-[0.1rem] md:border-b-[0.3rem]
                      pb-[0.1rem] sm:pb-[0.3rem] lg:pb-[0.8rem]
                      text-[1rem] sm:text-[1.2rem] lg:text-[1.7rem] 2xl:text-[1.9rem]
                      border-zinc-400
                      "
            >
              <p>Total</p>
              <p>₹ {getTotalPrice() + 15}</p>
            </div>
            <button
              className="
                      text-[0.8rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]
                      uppercase
                      rounded-[0.3rem] sm:rounded-[0.5rem] lg:rounded-2xl
                      bg-black
                      border-zinc-400
                      text-white
                      w-[13rem] sm:w-[19rem] lg:w-[22rem] xl:w-[26rem]
                      mt-2 xl:mt-5
                      py-[0.6rem] sm:py-[0.8rem] lg:py-[1.25rem]
                      "
              onClick={() => navigate("/order")}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
        <div>
          <p className="text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]">
            If you have a promo code, Enter it here
          </p>
          <div
            className="
                      grid
                      grid-cols-[70%_30%]
                      text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]
                      mt-[0.3rem] sm:mt-[0.7rem]
                      "
          >
            <input
              type="text"
              placeholder="coupan code"
              className="px-[1rem] bg-zinc-200 outline-none py-[0.3rem] sm:py-[0.6rem]"
            />
            <button
              className="
                      text-[0.8rem] sm:text-[1rem] lg:text-[1.6rem]
                      uppercase
                      rounded-[0.3rem] sm:rounded-[0.6rem] lg:rounded-2xl
                      bg-black
                      border-zinc-400
                      text-white
                      sm:py-[0.7rem] lg:py-[0.9rem] 2xl:py-[1.25rem]
                      "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
