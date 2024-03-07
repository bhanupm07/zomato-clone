import React, { useState } from "react";
import filterSvg from "../../../assets/filter.svg";
import FilterComponent from "../../../components/DeliveryPage/FilterComponent";
import FilterModal from "../../../modals/FilterModal";

const Filter = ({ isFilterOpen, setIsFilterOpen }) => {
  return (
    <div className="px-20 py-6 flex gap-4">
      <div
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex gap-2 border border-gray-300 text-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100/50"
      >
        <img src={filterSvg} alt="filter icon" />
        <span>Filters</span>
      </div>
      <FilterComponent text="Rating: 4.0+" />
      <FilterComponent text="Pure Veg" />
    </div>
  );
};

export default Filter;
