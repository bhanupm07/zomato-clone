import React, { useEffect, useState } from "react";
import veg from "../../assets/veg.svg";
import nonVeg from "../../assets/non-veg.svg";
import { FaStar } from "react-icons/fa6";
import { TruncateText } from "../../utils/utils";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useThunk } from "../../customHooks/useThunk";
import { addToCartThunk } from "../../store";
import { Spinner, useToast } from "@chakra-ui/react";
import { BsCartCheckFill } from "react-icons/bs";

const FoodCard = ({ food }) => {
  const { userId, cart } = useSelector((state) => state.user);
  const {
    _id,
    imageUrl,
    name,
    rating,
    votes,
    price,
    vegOrNonVeg,
    description,
  } = food;
  const [runAddToCartThunk, _, isLoading] = useThunk(addToCartThunk);
  const toast = useToast();
  const [isOnCart, setIsOnCart] = useState(false);

  useEffect(() => {
    const isItemInCart = cart?.some((cartItem) => cartItem.foodId._id === _id);
    setIsOnCart(isItemInCart);
  }, [cart, _id]); // Only re-run the effect if cart or _id changes

  const handleAddToCart = (e) => {
    if (localStorage.getItem("token") && !isOnCart) {
      console.log("here");
      const detailsObject = {
        userId,
        foodId: _id,
        quantity: 1,
        token: localStorage.getItem("token"),
      };
      runAddToCartThunk(detailsObject);
    } else if (!localStorage.getItem("token")) {
      toast({
        title: "You must be logged in to add items to cart",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Food already added to cart",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <main className="flex gap-4">
      <div className="flex-grow relative w-40 h-44 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full" />
        <img
          src={vegOrNonVeg === "veg" ? veg : nonVeg}
          alt={vegOrNonVeg}
          className="absolute top-2 right-2 bg-white rounded-sm"
        />
      </div>

      <div className="flex flex-col justify-between items-start gap-1 w-[80%]">
        <span className="text-lg font-medium text-black">{name}</span>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center">
            <span>{rating}</span>
            <FaStar className="text-yellow-400" />
          </p>
          <p>{votes} votes</p>
        </div>
        <span>₹ {price}</span>
        <p className="text-sm">{TruncateText({ text: description })}</p>
        <button
          onClick={handleAddToCart}
          className={`flex items-center gap-2 hover:scale-105 ${
            isOnCart ? "bg-green-500" : "bg-primary"
          } text-white px-4 py-1 rounded-lg`}
        >
          {isLoading ? (
            <Spinner size="xs" />
          ) : isOnCart ? (
            <BsCartCheckFill />
          ) : (
            <FaCartPlus />
          )}
          <span>{isOnCart ? "Added to cart" : "Add to cart"}</span>
        </button>
      </div>
    </main>
  );
};

export default FoodCard;
