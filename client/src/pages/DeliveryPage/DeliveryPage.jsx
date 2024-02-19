import React from "react";
import Filter from "./FilterPart/Filter";
import FoodCarousel from "./FoodCarousel/FoodCarousel";
import BrandCarousel from "./BrandCarousel/BrandCarousel";
import DeliveryData from "./DeliveryData/DeliveryData";

const DeliveryPage = () => {
  return (
    <div>
      <Filter />
      <FoodCarousel />
      <BrandCarousel />
      <DeliveryData />
    </div>
  );
};

export default DeliveryPage;
