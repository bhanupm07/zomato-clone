import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  handleCheckboxChange,
  handleCostRadioChange,
  //   handleFilter,
  handleRatingRadioChange,
  handleSortRadioChange,
  handleFilter,
  handleFilterCount,
  fetchAllDelivery,
  handleClearAllAppliedFilters,
} from "../store";
import { useThunk } from "../customHooks/useThunk";
import { cuisines } from "../utils/cuisinesArray";

const FilterModal = ({ isFilterOpen, setIsFilterOpen }) => {
  const [activeFilterCategory, setActiveFilterCategory] = useState("Sort By");
  const { sortBy, cuisineSelected, rating, cost } = useSelector(
    (state) => state.filters
  );
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleFilterCategoryClick = (e) => {
    if (e.target.id === "sort") {
      setActiveFilterCategory("Sort By");
    } else {
      setActiveFilterCategory(e.target.textContent);
    }
  };

  // const cuisines = [
  //   "Pizza",
  //   "North Indian",
  //   "South Indian",
  //   "Chinese",
  //   "Burger",
  //   "Fast Food",
  //   "Italian",
  //   "Bakery",
  //   "Desserts",
  //   "Biryani",
  //   "Rolls",
  //   "Wraps",
  //   "Street Food",
  //   "Mexican",
  //   "Hyderabadi",
  //   "Sandwich",
  //   "American",
  //   "Cake",
  //   "Chicken",
  //   "Cafe",
  //   "Beverages",
  //   "Healthy Food",
  //   "Asian",
  //   "Continental",
  //   "Thai",
  // ];

  const [runFetchAllDeliveryThunk, deliveryThunkData] =
    useThunk(fetchAllDelivery);

  const handleClearAllButton = () => {
    setIsFilterOpen(!isFilterOpen);
    dispatch(clearAll());
    dispatch(handleClearAllAppliedFilters());
    runFetchAllDeliveryThunk();
  };

  const handleApplyButtonClick = () => {
    setIsFilterOpen(!isFilterOpen);
    dispatch(handleFilter(filters));
    dispatch(handleFilterCount());
  };

  return (
    <main className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white w-[50%] rounded-lg h-[90%]">
        <header className="flex justify-between items-center text-2xl font-medium border-b p-4">
          <span className="">Filters</span>
          <RxCross2
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="cursor-pointer"
          />
        </header>

        <div className="flex border-b h-[74%]">
          <section className="bg-gray-100">
            <div onClick={handleFilterCategoryClick} className="flex flex-col">
              <div
                id="sort"
                className={`flex flex-col p-4 pr-20 cursor-pointer border-l-4 border-transparent ${
                  activeFilterCategory === "Sort By" &&
                  "bg-white border-primary/70"
                }`}
              >
                <span id="sort" className={`text-xl font-medium`}>
                  Sort By
                </span>
                <span id="sort" className="text-sm text-primary">
                  Popularity
                </span>
              </div>
              <span
                id="cuisine"
                className={`p-4 py-6 pr-20 text-xl font-medium cursor-pointer border-l-4 border-transparent ${
                  activeFilterCategory === "Cuisines" &&
                  "bg-white border-primary/70"
                }`}
              >
                Cuisines
              </span>
              <span
                id="rating"
                className={`p-4 py-6 pr-20 text-xl font-medium cursor-pointer border-l-4 border-transparent ${
                  activeFilterCategory === "Rating" &&
                  "bg-white border-primary/70"
                }`}
              >
                Rating
              </span>
              <span
                id="cost"
                className={`p-4 py-6 pr-20 text-xl font-medium cursor-pointer border-l-4 border-transparent ${
                  activeFilterCategory === "Cost" &&
                  "bg-white border-primary/70"
                }`}
              >
                Cost
              </span>
            </div>
          </section>

          {activeFilterCategory === "Sort By" ? (
            <section className="p-4 py-6 flex flex-col gap-4">
              {/* <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="sortBy"
                  value="Popularity"
                  checked={sortBy === "Popularity"}
                  onChange={(e) =>
                    dispatch(handleSortRadioChange(e.target.value))
                  }
                  className="w-4 h-4 accent-primary"
                />
                Popularity
              </label> */}
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="sortBy"
                  value="Rating: High to Low"
                  checked={sortBy === "Rating: High to Low"}
                  onChange={(e) =>
                    dispatch(handleSortRadioChange(e.target.value))
                  }
                  className="w-4 h-4 accent-primary"
                />
                Rating: High to Low
              </label>
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="sortBy"
                  value="Delivery Time"
                  checked={sortBy === "Delivery Time"}
                  onChange={(e) =>
                    dispatch(handleSortRadioChange(e.target.value))
                  }
                  className="w-4 h-4 accent-primary"
                />
                Delivery Time
              </label>
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="sortBy"
                  value="Cost: Low to High"
                  checked={sortBy === "Cost: Low to High"}
                  onChange={(e) =>
                    dispatch(handleSortRadioChange(e.target.value))
                  }
                  className="w-4 h-4 accent-primary"
                />
                Cost: Low to High
              </label>
            </section>
          ) : activeFilterCategory === "Cuisines" ? (
            <section className="p-4 py-6 h-full">
              <p className="text-xl mb-4">Select Cuisines</p>
              <div className="flex flex-col flex-wrap h-72 gap-2">
                {cuisines.map((cuisine) => {
                  return (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={cuisine}
                        checked={cuisineSelected.includes(cuisine) || false}
                        onChange={(e) =>
                          dispatch(handleCheckboxChange(cuisine))
                        }
                        className="w-4 h-4 cursor-pointer accent-primary"
                      />
                      {cuisine}
                    </label>
                  );
                })}
              </div>
            </section>
          ) : activeFilterCategory === "Rating" ? (
            <section className="p-4 py-6">
              <p className="text-xl mb-4">Rating</p>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    value="Ratings < 4"
                    checked={rating === "Ratings < 4"}
                    onChange={(e) =>
                      dispatch(handleRatingRadioChange(e.target.value))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  Less than 4
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    value="Ratings: 4+"
                    checked={rating === "Ratings: 4+"}
                    onChange={(e) =>
                      dispatch(handleRatingRadioChange(e.target.value))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  More than 4
                </label>
              </div>
            </section>
          ) : (
            <section className="p-4 py-6">
              <p className="text-xl mb-4">Cost</p>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="cost"
                    value="Cost: ₹100-200"
                    checked={cost === "Cost: ₹100-200"}
                    onChange={(e) =>
                      dispatch(handleCostRadioChange(e.target.value))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  ₹100-200
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="cost"
                    value="Cost: ₹200-300"
                    checked={cost === "Cost: ₹200-300"}
                    onChange={(e) =>
                      dispatch(handleCostRadioChange(e.target.value))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  ₹200-300
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="cost"
                    value="Cost: ₹300-400"
                    checked={cost === "Cost: ₹300-400"}
                    onChange={(e) =>
                      dispatch(handleCostRadioChange(e.target.value))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  ₹300-400
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="cost"
                    value="Cost: ₹400+"
                    checked={cost === "Cost: ₹400+"}
                    onChange={(e) =>
                      dispatch(handleCostRadioChange(e.target.value))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  ₹400 +
                </label>
              </div>
            </section>
          )}
        </div>

        <footer className="flex gap-2 justify-end p-4">
          <span onClick={handleClearAllButton} className="p-2 cursor-pointer">
            Clear all
          </span>
          <button
            onClick={handleApplyButtonClick}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Apply
          </button>
        </footer>
      </div>
    </main>
  );
};

export default FilterModal;
