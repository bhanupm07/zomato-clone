import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getOpeningStatus, getStringFromArray } from "../../utils/utils";
import { useThunk } from "../../customHooks/useThunk";
import {
  fetchAllDelivery,
  fetchAllFoods,
  getBookmarksThunk,
  removeFromBookmarksThunk,
} from "../../store";
import { BsBookmarkPlus, BsBookmarkCheckFill } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";
import FoodCard from "../../components/DeliveryRestaurant/FoodCard";
import { addToBookmarksThunk } from "../../store/thunks/addToBookmarksThunk";

const DeliveryRestaurantPage = () => {
  const { cafeId } = useParams();
  const { allDeliveryRestaurants } = useSelector((state) => state.delivery);
  const allFoodsArray = useSelector((state) => state.food);
  const { userId, bookmarks } = useSelector((state) => state.user);
  const [runFetchAllDeliveryThunk] = useThunk(fetchAllDelivery);
  const [runFetchAllFoodsThunk] = useThunk(fetchAllFoods);
  const [runAddToBookmarkThunk, _, addingLoader] =
    useThunk(addToBookmarksThunk);
  const [runGetBookmarksThunk] = useThunk(getBookmarksThunk);
  const [runRemoveBookmarkThunk, __, removingLoader] = useThunk(
    removeFromBookmarksThunk
  );
  const [restaurantData, setRestaurantData] = useState();
  const [foodData, setFoodData] = useState([]);
  const location = useSelector((state) => state.location);
  const hasFetchedRef = useRef(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!hasFetchedRef.current) {
      runFetchAllDeliveryThunk();
      runFetchAllFoodsThunk();
      hasFetchedRef.current = true;
    }

    if (allDeliveryRestaurants) {
      const foundRestaurant = allDeliveryRestaurants.find(
        (item) => item._id === cafeId
      );
      setRestaurantData(foundRestaurant);

      if (allFoodsArray && foundRestaurant?.cuisine) {
        const filteredFoods = allFoodsArray.filter((food) =>
          foundRestaurant.cuisine.includes(food.cuisine)
        );
        setFoodData(filteredFoods);
      }
    }

    const isRestaurantBookmarked = bookmarks?.some(
      (restaurant) => restaurant?.restaurantId?._id === restaurantData?._id
    );
    setIsBookmarked(isRestaurantBookmarked);

    runGetBookmarksThunk({ userId, token: localStorage.getItem("token") });
  }, [
    cafeId,
    allDeliveryRestaurants,
    allFoodsArray,
    runFetchAllDeliveryThunk,
    runFetchAllFoodsThunk,
    bookmarks,
    runGetBookmarksThunk,
  ]);

  console.log(allFoodsArray);

  // console.log(restaurantData);
  let foodJsx;
  if (!foodData.length) {
    foodJsx = (
      <Spinner
        size="xl"
        color="red.400"
        thickness="5px"
        emptyColor="gray.200"
      />
    );
  } else if (foodData.length) {
    foodJsx = foodData.map((food) => {
      return <FoodCard food={food} key={food._id} />;
    });
  }

  if (!restaurantData) {
    return (
      <main className="flex justify-center items-center h-80">
        <Spinner
          size="xl"
          color="red.400"
          thickness="5px"
          emptyColor="gray.200"
        />
      </main>
    );
  }

  const handleBookmarkButton = () => {
    if (isBookmarked) {
      console.log("removing...");
      const argument = {
        userId,
        restaurantId: restaurantData._id,
        token: localStorage.getItem("token"),
      };
      runRemoveBookmarkThunk(argument);
    } else {
      const argument = {
        userId,
        restaurantId: restaurantData._id,
        token: localStorage.getItem("token"),
      };
      runAddToBookmarkThunk(argument);
    }
  };

  return (
    <main className="px-20 flex flex-col text-gray-500">
      <hr className="h[0.5px] bg-gray-300 my-2" />

      <div className="flex items-start justify-between">
        <h2 className="text-4xl text-black font-semibold">
          {restaurantData?.name}
        </h2>
        <div className="flex gap-4 font-semibold text-white items-start">
          <div className="flex flex-col items-end">
            <span className="flex items-center bg-green-600 gap-1 p-1 rounded-lg">
              {restaurantData?.rating} <FaStar className="text-xs" />
            </span>
            <span className="text-black text-[10px]">Delivery Ratings</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="flex items-center bg-green-600 gap-1 p-1 rounded-lg">
              {restaurantData?.diningRating} <FaStar className="text-xs" />
            </span>
            <span className="text-black text-[10px]">Dining Ratings</span>
          </div>
        </div>
      </div>

      <div className="text-lg">
        <p>{getStringFromArray(restaurantData?.cuisine)}</p>
        <p className="text-gray-400 capitalize">{location}</p>
      </div>

      <div className="flex gap-1 text-sm">
        <p
          className={
            getOpeningStatus() === "Open now"
              ? "text-orange-400"
              : "text-red-500"
          }
        >
          {getOpeningStatus()}
        </p>
        <p> - 10am - 11pm (Today)</p>
      </div>

      <div
        onClick={handleBookmarkButton}
        className={`flex items-center p-2 rounded-lg border border-gray-500 gap-2 self-start text-sm cursor-pointer ${
          isBookmarked ? "bg-primary text-white" : "hover:bg-gray-100"
        } my-4`}
      >
        {addingLoader ? (
          <Spinner size="xs" color="red.500" emptyColor="gray.100" />
        ) : removingLoader ? (
          <Spinner size="xs" />
        ) : isBookmarked ? (
          <BsBookmarkCheckFill />
        ) : (
          <BsBookmarkPlus className="text-primary" />
        )}
        {/* {isBookmarked ? (
          <BsBookmarkCheckFill />
        ) : (
          <BsBookmarkPlus className="text-primary" />
        )} */}
        <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
      </div>

      <p className="text-black text-2xl font-medium mb-2">Order Online</p>
      <hr className="h-[0.5px] bg-gray-300" />

      <div className="flex flex-col gap-6 my-6">{foodJsx}</div>
    </main>
  );
};

export default DeliveryRestaurantPage;
