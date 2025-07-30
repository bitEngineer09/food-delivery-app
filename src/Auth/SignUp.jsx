import React, { useState } from "react";
import { LuUtensilsCrossed } from "react-icons/lu";

const SignUp = ({ setShowLogin }) => {
  const [authState, setAuthState] = useState("SignUp");

  return (
    <main className="flex items-center justify-center absolute w-full h-screen z-2 bg-[#00000090]">
      <div
        className="
                  auth-logIn-signIn
                  bg-amber-50
                  p-[3rem_2.5rem] sm:p-[3.2rem_3.1rem] md:p-[4rem_3.7rem]  lg:p-[5.5rem_4rem]
                  w-[25rem] sm:w-[28rem] md:w-[33rem] lg:w-[40rem]
                  h-[31rem] sm:h-[36rem] md:h-[42rem] lg:h-[50rem]
                  rounded-[1.4rem] md:rounded-[2rem] lg:rounded-[2.5rem]
                  "
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[2.8rem] sm:text-[3.1rem] md:text-[3.6rem] lg:text-[4rem] font-semibold text-primary">
            {authState}
          </h1>{" "}
          <LuUtensilsCrossed
            onClick={() => setShowLogin(false)}
            className="text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.8rem]"
          />
        </div>
        <form action="">
          <div
            className="
                      flex
                      flex-col
                      mt-[1.6rem]
                      gap-[1rem]
                      sm:gap-[1.4rem] md:gap-[2rem] lg:gap-[3rem]
                      "
          >
            {authState === "LogIn" ? (
              <></>
            ) : (
              <input
                type="text"
                placeholder="enter your name"
                className="
                      p-[0.5rem_1rem] sm:p-[0.6rem_1.1rem] md:p-[0.7rem_1.2rem] lg:p-[0.8rem_1.3rem]
                      text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] 
                      border-b-[0.1rem] md:border-b-[0.2rem] lg:border-b-[0.23rem]
                      outline-none
                      "
              />
            )}
            {/* <input type="text" placeholder="enter your name" /> */}
            <input
              type="email"
              required
              placeholder="email"
              className="
                      p-[0.5rem_1rem] sm:p-[0.6rem_1.1rem] md:p-[0.7rem_1.2rem] lg:p-[0.8rem_1.3rem]
                      text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] 
                      border-b-[0.1rem] md:border-b-[0.2rem] lg:border-b-[0.23rem]
                      outline-none
                      "
            />
            <input
              type="password"
              required
              name=""
              placeholder="password"
              id=""
              className="
                      p-[0.5rem_1rem] sm:p-[0.6rem_1.1rem] md:p-[0.7rem_1.2rem] lg:p-[0.8rem_1.3rem]
                      text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] 
                      border-b-[0.1rem] md:border-b-[0.2rem] lg:border-b-[0.23rem]
                      outline-none
                      "
            />
            <button
              className="
                      lg:w-full
                      mt-[2rem] md:mt-[2rem]
                      py-[0.4rem] sm:py-[0.6rem] md:py-[0.7rem] lg:py-[0.8rem]
                      text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] text-white
                      bg-primary
                      rounded-[2rem] lg:rounded-xl
                      cursor-pointer
                      "
            >
              {authState === "SignUp" ? "create account" : "LogIn"}
            </button>
            {authState === "SignUp" ? (
              <div className="flex text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] justify-center">
                <p>Already have an account ?</p>
                <button
                  onClick={() => setAuthState("LogIn")}
                  className="lg:text-primary font-semibold ml-2 lg:ml-2"
                >
                  Sign in
                </button>
              </div>
            ) : (
              <>
                <div className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem]">
                  <p className="relative">
                    By continuing, I agree to the terms of use & privacy and
                    policy.
                    <input
                      type="checkbox"
                      name=""
                      className="
                              absolute
                              md:bottom-[0.35rem] lg:bottom-[0.4rem]
                              left-[9.7rem] sm:left-[10.6rem] md:left-[11.7rem] lg:left-[13.5rem]"
                    />
                  </p>
                </div>
                <p className="flex text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem]">
                  create a new account ?{" "}
                  <span
                    onClick={() => setAuthState("SignUp")}
                    className="lg:text-primary font-semibold ml-1 lg:ml-2"
                  >
                    Click here
                  </span>
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
