import React, { useEffect, useState } from "react";
import filterSvg from "../../../assets/filter.svg";
import FilterComponent from "../../../components/DeliveryPage/FilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  handleCrossClick,
  handleFilter,
  handleFilterCount,
  handleFilterCrossClick,
} from "../../../store";
import { handleFilterCrossThunk } from "../../../store/thunks/handleFilterCrossThunk";

const Filter = ({ isFilterOpen, setIsFilterOpen }) => {
  const filters = useSelector((state) => state.filters);
  const { appliedFiltersArray } = useSelector((state) => state.delivery);
  const dispatch = useDispatch();

  return (
    <div className="px-20 max-[500px]:px-5 py-6 max-[500px]:py-2 max-[500px]:pt-0 flex items-center flex-wrap gap-4 max-[500px]:gap-2">
      <div
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex gap-2 max-[500px]:text-sm border border-gray-300 text-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100/50"
      >
        {filters.filterCount ? (
          <span className="bg-primary text-white px-2 rounded-md">
            {filters.filterCount}
          </span>
        ) : (
          <img src={filterSvg} alt="filter icon" />
        )}
        <span>Filters</span>
      </div>
      {appliedFiltersArray?.map((filter, i) => {
        return (
          <div
            key={i}
            className="bg-primary text-white max-[500px]:text-sm flex gap-2 items-center px-2 py-1 rounded-lg"
          >
            <span>{filter}</span>
            <RxCross2
              className="cursor-pointer"
              onClick={() => dispatch(handleFilterCrossThunk(filter))}
            />
          </div>
        );
      })}
      {/* <FilterComponent text="Rating: 4.0+" />
      <FilterComponent text="Pure Veg" /> */}
    </div>
  );
};

export default Filter;
