import React, { useState } from "react";
import Filter from "./FilterPart/Filter";
import FoodCarousel from "./FoodCarousel/FoodCarousel";
import BrandCarousel from "./BrandCarousel/BrandCarousel";
import DeliveryData from "./DeliveryData/DeliveryData";
import FilterModal from "../../modals/FilterModal";
import { useSelector } from "react-redux";

const DeliveryPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { filterCount } = useSelector((state) => state.filters);

  return (
    <div>
      <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
      {filterCount === 0 && <FoodCarousel />}
      {filterCount === 0 && <BrandCarousel />}
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
