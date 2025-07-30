import React, { useContext } from "react";
import { StoreContextData } from "../../context/StoreContext";
import FoodCards from "./FoodCards";

const DisplayFood = ({ category }) => {
  const { food_list } = useContext(StoreContextData);

  return (
    <div className="container displayFoodSection ">
      {/* <hr className="text-[#6d1ba7] my-[1.2rem] sm:my-[1.6rem] md:my-[2rem] lg:my-[2.5rem] xl:my-[3rem]" /> */}
      <h2
        className="
              text-start 
              text-[2.9rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[4rem]
              font-semibold
              text-[#471396]
        "
      >
        Top dishes near you
      </h2>

      <div
        className="
              foodCardsMain
              grid
              grid-flow-col
              auto-cols-[minmax(250px,_1fr)]
              overflow-x-auto
              items-center
              justify-stretch
              lg:gap-x-[1.8rem] xl:gap-x-[3rem] 2xl:gap-[8rem]
              py-[2rem] 2xl:py-[3rem] md:pb-[3.2rem] lg:pb-[3.4rem] 2xl:pb-[4rem]
    "
      >
        
        {food_list.map((food, idx) => {
          // const { _id, name, image, price, description, category } = food;
          // return <FoodCards key={_id} id={_id} name={name} image={image} price={price} description={description} category={category}/>
          if (category === "All" || category === food.category) {
            return (
              <FoodCards
                key={idx}
                id={food._id}
                name={food.name}
                image={food.image}
                price={food.price}
                description={food.description}
                category={food.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
