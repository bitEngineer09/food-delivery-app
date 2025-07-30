import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContextData = createContext(null);

const StoreContext = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // useEffect(() => {
  //     console.log(cartItems)
  // }, [cartItems])
  const getTotalPrice = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let foodInfo = food_list.find((product) => product._id === item);
        total = total + foodInfo.price * cartItems[item];
      }
    }
    return total;
  };

  const contextData = {
    // jo bhi value hume es jsx se bahar files me use karni hai, use es context data me daalna padta hai
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };

  return (
    <StoreContextData.Provider value={contextData}>
      {children}
    </StoreContextData.Provider>
  );
};

export default StoreContext;
