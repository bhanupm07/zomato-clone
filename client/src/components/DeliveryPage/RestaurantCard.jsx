import React from "react";
import { FaStar } from "react-icons/fa";
import {
  getTruncatedString,
  getTruncatedStringFromArray,
} from "../../utils/utils";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  const {
    _id,
    imageUrl,
    discountText,
    name,
    rating,
    cuisine,
    cost,
    deliveryTime,
    safeDelivery,
  } = data;

  return (
    <Link
      to={`/explore/${_id}`}
      className="p-2 w-[350px] max-[500px]:w-full cursor-pointer rounded-2xl border border-transparent max-[500px]:shadow-lg hover:border-inherit hover:shadow-lg"
    >
      <div className="relative w-full h-64">
        <img
          src={imageUrl}
          alt=""
          className="rounded-2xl w-full h-full object-cover"
        />
        <span className="absolute bottom-5 left-0 bg-[#256FEF] text-white px-2 font-medium">
          {discountText}
        </span>
      </div>

      <section className="flex items-center justify-between mt-3">
        <span className="text-xl font-semibold">
          {getTruncatedString(name, 20)}
        </span>
        <div className="flex gap-1 items-center text-white bg-green-700 rounded-md px-1">
          <span className="text-sm">{rating}</span>
          <FaStar className="text-[8px]" />
        </div>
      </section>

      <section className="flex items-center font-light justify-between text-gray-500">
        <div>{getTruncatedStringFromArray(cuisine, 25)}</div>
        <span>₹{cost} for one</span>
      </section>

      <p className="flex justify-end py-3">{deliveryTime} min</p>

      {safeDelivery && (
        <div className="flex items-center gap-2 pt-2 border-t text-sm text-gray-500">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"
            alt=""
            className="w-12"
          />
          <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
      )}
    </Link>
  );
};

export default RestaurantCard;
