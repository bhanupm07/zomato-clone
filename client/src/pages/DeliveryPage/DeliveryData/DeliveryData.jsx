import React from "react";
import { useSelector } from "react-redux";

const DeliveryData = () => {
  const location = useSelector((state) => state.location);

  return (
    <div className="px-20 py-8">
      <h2 className="text-3xl mb-8">
        Delivery Restaurants {location && `in ${location}`}
      </h2>
    </div>
  );
};

export default DeliveryData;
