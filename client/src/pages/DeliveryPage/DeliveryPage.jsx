import React, { useState } from "react";
import Filter from "./FilterPart/Filter";
import FoodCarousel from "./FoodCarousel/FoodCarousel";
import BrandCarousel from "./BrandCarousel/BrandCarousel";
import DeliveryData from "./DeliveryData/DeliveryData";
import FilterModal from "../../modals/FilterModal";

const DeliveryPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div>
      <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
      <FoodCarousel />
      <BrandCarousel />
      <DeliveryData />
      {isFilterOpen && (
        <FilterModal
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      )}
    </div>
  );
};

export default DeliveryPage;
