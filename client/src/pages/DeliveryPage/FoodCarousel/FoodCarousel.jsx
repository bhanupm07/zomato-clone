import React from "react";
import Carousel from "../../../components/DeliveryPage/Carousel";
import { useDispatch } from "react-redux";
import { handleCarouselClickThunk } from "../../../store/thunks/handleCarouselClickThunk";

const FoodCarousel = () => {
  const dispatch = useDispatch();
  const foodArray = [
    {
      img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      type: "food",
      name: "Pizza",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      type: "food",
      name: "Biryani",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      type: "food",
      name: "Burger",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      type: "food",
      name: "Thali",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      type: "food",
      name: "Cake",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      type: "food",
      name: "Chicken",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      type: "food",
      name: "Rolls",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
      type: "food",
      name: "North Indian",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
      type: "food",
      name: "Chole Bhature",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
      type: "food",
      name: "Sandwich",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      type: "food",
      name: "Dosa",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
      type: "food",
      name: "Noodles",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] px-20 max-[500px]:px-7 py-8">
      <h2 className="text-3xl max-[500px]:text-2xl mb-8">
        Inspiration for your first order
      </h2>
      <Carousel dataArray={foodArray} />
      <div className="hidden max-[500px]:flex items-center overflow-x-auto max-[500px]:gap-5">
        {foodArray.map((food, index) => {
          return (
            <div
              key={index}
              id={food.name}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => dispatch(handleCarouselClickThunk(food.name))}
            >
              <div className="rounded-full max-[500px]:w-24">
                <img
                  src={food.img}
                  alt={food.name}
                  className="rounded-full w-full shadow-md"
                />
              </div>
              <span className="text-xl max-[500px]:text-sm text-center font-medium">
                {food.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCarousel;
