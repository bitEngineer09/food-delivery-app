import React, { useContext } from "react";
import { StoreContextData } from "../context/StoreContext";

const Order = () => {
  const { getTotalPrice } = useContext(StoreContextData);

  return (
    <div
      className="
                order-content
                container containerL
                px-[2rem] xl:px-[14rem] 2xl:px-0
                grid
                md:grid-cols-2
                items-center
                gap-[2rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[17rem] xl:gap-[20rem] 2xl:gap-[35rem]
                py-[5rem] sm:py-[6rem] md:py-[7rem] xl:py-[12rem]
                sm:px-[7rem] md:px-[4rem] lg:px-[3rem]
                "
    >
      <div
        className="
                cartTotal
                bg-bgColor
                p-[2rem] sm:p-[3rem] md:p-[3.2rem] lg:p-[3.4rem]
                rounded-[0.7rem] sm:rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[3rem]
                "
      >
        <h1 className="text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold">
          Delivery Information
        </h1>
        <div className="grid grid-cols-2 gap-[1rem] sm:gap-[1.3rem] md:gap-[1.6rem] lg:gap-[2rem] mt-5 lg:mt-8">
          <input
            type="text"
            placeholder="First Name"
            className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="email"
            placeholder="Email address"
           className="
                  col-span-2
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="Sreet"
            className="
                  col-span-2
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="City"
           className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="State"
            className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="Zip code"
           className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="Country"
           className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
          <input
            type="text"
            placeholder="Phone"
            className="
                  p-[0.6rem_0.6rem] sm:p-[0.4rem_1rem] md:p-[0.5rem_1.2rem] lg:p-[0.6rem_1.6rem]
                  border-b-[0.1rem]  md:border-b-[0.23rem]
                  text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.6rem]
                  border-bdColor 
                  outline-none
                  "
          />
        </div>
      </div>

      <div
        className="
        cartTotal
              bg-[#f4e8ff]
              p-[2rem] sm:p-[3rem] md:p-[4rem] lg:p-[5rem]
              rounded-[0.7rem] sm:rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[3rem]
              order-2 md:order-none
              "
      >
        <h1
          className="
                    text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem]
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
                    gap-[1.6rem] sm:gap-[1.8rem] lg:gap-[1rem] 
                    "
        >
          <div
            className="
                      flex
                      justify-between
                      border-b-[0.1rem] md:border-b-[0.3rem]
                      pb-[0.1rem] sm:pb-[0.3rem] lg:pb-[0.8rem]
                      text-[1.2rem] sm:text-[1.2rem] lg:text-[1.6rem] xl:text-[2rem]
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
                      lg:mt-10
                      pb-[0.1rem] sm:pb-[0.3rem] lg:pb-[0.8rem]
                      text-[1.2rem] sm:text-[1.2rem] lg:text-[1.6rem] xl:text-[2rem]
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
                      lg:mt-10
                      pb-[0.1rem] sm:pb-[0.3rem] lg:pb-[0.8rem]
                      text-[1.2rem] sm:text-[1.2rem] lg:text-[1.6rem] xl:text-[2rem]
                      border-zinc-400
                      "
          >
            <p>Total</p>
            <p>₹ {getTotalPrice() + 15}</p>
          </div>
          <button
            className="
                      xl:mt-10
                      text-[1rem] sm:text-[1.1rem] lg:text-[1.6rem]
                      w-[15rem] sm:w-[19rem] lg:w-[26rem]
                      py-[0.7rem] sm:py-[0.8rem] lg:py-[1.25rem]
                      rounded-[0.3rem] sm:rounded-[0.5rem] lg:rounded-2xl
                      uppercase
                      bg-black
                      border-zinc-400
                      text-white
                      "
            onClick={() => navigate("/order")}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
