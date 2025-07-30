import React, { useContext, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import SignUp from "../Auth/SignUp";
import { StoreContextData } from "../context/StoreContext";

function NavBar() {
  // const [showMenu, setShowMenu] = useState(false);
  // const handleToggleMenu = () => {
  //   setShowMenu(!showMenu);
  // }

  const [showLogin, setShowLogin] = useState(false);
  const { getTotalPrice } = useContext(StoreContextData);

  return (
    <>
      {showLogin ? <SignUp setShowLogin={setShowLogin} /> : <></>}
      <nav
        className="
            navbar
            container 
            p-[1rem_2rem] sm:p-[1.2rem_2rem] md:p-[1.5rem_3rem] lg:p-[1.6rem_2.8rem]  xl:p-[1.3rem_14rem] 2xl:p-[1.7rem_0]
            grid grid-cols-2 md:grid-cols-3
            gap-[1rem] md:gap-0
            justify-center items-center
      "
      >
        <div
          className="
            relative
            navLogo 
            text-[3.2rem] sm:text-[3.6rem] md:text-[3.9rem] lg:text-[4rem] xl:text-[4.3rem] 2xl:text-[4.8rem]
            text-primary"
        >
          <NavLink to="/">
            {/* <img src={assets.logo} alt="" /> */}
            <div className="flex items-center md:gap-[0.3rem] leading-none">
              <span className="font-bold">foodie</span> <img src="/images/logo2.png" alt="" className="
                      absolute
                      w-[2.1rem] sm:w-[2.7rem] md:w-[2.9rem] lg:w-[3.1rem] xl:w-[3.2rem] 2xl:w-[3.5rem]
                      h-[3.3rem] sm:h-[3.9rem] md:h-[4.2rem] lg:h-[4.6rem] xl:h-[4.7rem] 2xl:h-[5rem]
                      top-[-0.5rem] sm:top-[-0.7rem] md:top-[-0.8rem] lg:top-[-0.9rem] 2xl:top-[-0.7rem]
                      left-[10.1rem] sm:left-[11.3rem] md:left-[12.2rem] lg:left-[12.5rem] xl:left-[13.4rem] 2xl:left-[15rem]
                      " />
            </div>
          </NavLink>
        </div>
        <div
          className="
                  col-span-full
                  justify-items-center
                  md:col-auto
                  order-2
                  md:order-none
                  "
        >
          <ul
            className="
              navList
              flex
              gap-[3rem] sm:gap-[4.5rem] md:gap-[1.3rem] lg:gap-[2rem] xl:gap-[2.5rem] 2xl:gap-[4rem]
              text-[1.3rem] sm:text-[1.7rem] md:text-[1.55rem] lg:text-[1.9rem] xl:text-[2rem] 2xl:text-[2.2rem]
              sm:text-nowrap
              font-semibold
              text-stone-900
            "
          >
            <li className="hover:text-[#483AA0] hover:scale-115 hover:font-semibold ease duration-200">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="hover:text-[#483AA0] hover:scale-108 hover:font-semibold ease duration-200">
              <NavLink to="/menu">menu</NavLink>
            </li>
            <li className="hover:text-[#483AA0] hover:scale-115 hover:font-semibold ease duration-200">
              <NavLink to="/mobile-app">mobile-app</NavLink>
            </li>
            <li className="hover:text-[#483AA0] hover:scale-115 hover:font-semibold ease duration-200">
              <NavLink to="/contact">contact us</NavLink>
            </li>
          </ul>
        </div>
        <div
          className="
                text-[1.7rem] sm:text-[1.9rem] md:text-[2.2rem] lg:text-[2.6rem] 2xl:text-[3rem] 
                flex justify-end items-center
                gap-[1.5rem] sm:gap-[1.6rem] lg:gap-[3rem]
                cursor-pointer
            "
        >
          {/* <IoSearch /> */}
          <div className="relative">
            <NavLink to="/cart">
              <PiShoppingCartSimpleBold />
              {getTotalPrice() != 0 ? (
                <FaArrowDown
                  className="
                              absolute
                              top-[-0.4rem] sm:top-[-0.5rem] md:top-[-0.6rem] 
                              left-[0.5rem] sm:left-[0.6rem] md:left-[0.7rem] lg:left-[0.9rem]  2xl:left-[1.1rem]
                              text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] 2xl:text-[1.1rem]
                              text-[#9929EA]"
                />
              ) : null}
            </NavLink>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="
                    text-[1.3rem] md:text-[1.5rem] xl:text-[1.65rem] 2xl:text-[1.9rem]
                    p-[0.3rem_1.2rem] sm:p-[0.5rem_2rem] md:p-[0.5rem_2rem] xl:p-[0.6rem_2.4rem] 2xl:p-[0.9rem_3rem] 
                    md:font-semibold
                    md:tracking-wide
                    rounded-full 
                    text-white 
                    bg-[#9929EA]
                    cursor-pointer
                    hover:bg-[#471396]
                    ease duration-190
            "
          >
            sign in
          </button>
        </div>

        {/* <div className="flex items-center md:hidden text-[2.8rem] text-orange-500">
        <button onClick={handleToggleMenu}>
          <FaHamburger />
        </button>
      </div> */}
      </nav>
    </>
  );
}

export default NavBar;
