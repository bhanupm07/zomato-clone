import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDelivery } from "../thunks/fetchAllDelivery";
import { useSelector } from "react-redux";

const deliverySlice = createSlice({
  initialState: {
    allDeliveryRestaurants: [],
    filteredRestaurants: [],
    appliedFiltersArray: [],
  },
  name: "delivery",
  reducers: {
    handleFilter(state, action) {
      let { sortBy, cuisineSelected, rating, cost } = action.payload;
      let filteredData = [...state.allDeliveryRestaurants];
      console.log("cuisineSelected inside handleFilter-", cuisineSelected);

      // filtering data according to cuisines
      if (cuisineSelected.length > 0) {
        cuisineSelected.forEach((cuisine, i) => {
          if (i === 0) {
            filteredData = [
              ...state.allDeliveryRestaurants.filter((data) =>
                data.cuisine.includes(cuisine)
              ),
            ];
          } else {
            filteredData = [
              ...filteredData,
              ...state.allDeliveryRestaurants.filter((data) =>
                data.cuisine.includes(cuisine)
              ),
            ];
          }
        });

        // removing duplicate restaurants from the filteredData array
        filteredData = filteredData.filter(
          (obj, index, self) =>
            index ===
            self.findIndex((t) => t._id === obj._id && t.name === obj.name)
        );

        state.appliedFiltersArray = [...cuisineSelected];
      }

      // filtering data according to rating
      if (rating) {
        if (rating === "Ratings < 4") {
          filteredData = filteredData.filter((data) => data.rating < 4);
        } else if (rating === "Ratings: 4+") {
          filteredData = filteredData.filter((data) => data.rating >= 4);
        }

        if (state.appliedFiltersArray.length > 0) {
          if (!state.appliedFiltersArray.includes(rating)) {
            state.appliedFiltersArray = [...state.appliedFiltersArray, rating];
          }
        } else {
          state.appliedFiltersArray = [rating];
        }
      }

      //filtering data according to cost
      if (cost) {
        if (cost === "Cost: ₹100-200") {
          filteredData = filteredData.filter(
            (data) => data.cost >= 100 && data.cost < 200
          );
        } else if (cost === "Cost: ₹200-300") {
          filteredData = filteredData.filter(
            (data) => data.cost >= 200 && data.cost < 300
          );
        } else if (cost === "Cost: ₹300-400") {
          filteredData = filteredData.filter(
            (data) => data.cost >= 300 && data.cost < 400
          );
        } else if (cost === "Cost: ₹400+") {
          filteredData = filteredData.filter((data) => data.cost >= 400);
        }

        if (state.appliedFiltersArray.length > 0) {
          if (!state.appliedFiltersArray.includes(cost)) {
            state.appliedFiltersArray = [...state.appliedFiltersArray, cost];
          }
        } else {
          state.appliedFiltersArray = [cost];
        }
      }

      // sorting the filteredData array
      if (sortBy) {
        if (sortBy === "Rating: High to Low") {
          filteredData.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "Delivery Time") {
          filteredData.sort((a, b) => a.deliveryTime - b.deliveryTime);
        } else if (sortBy === "Cost: Low to High") {
          filteredData.sort((a, b) => a.cost - b.cost);
        }

        if (state.appliedFiltersArray.length > 0) {
          if (!state.appliedFiltersArray.includes(sortBy)) {
            state.appliedFiltersArray = [...state.appliedFiltersArray, sortBy];
          }
        } else {
          state.appliedFiltersArray = [sortBy];
        }
      }

      // checking if no filter is applied that is the filteredData array is same as the original
      if (filteredData.length === state.allDeliveryRestaurants.length) {
        let isFilteredDataSameAsOriginal = true;
        for (let i = 0; i < filteredData.length; i++) {
          if (filteredData[i].name !== state.allDeliveryRestaurants[i].name) {
            isFilteredDataSameAsOriginal = false;
          }
        }
        if (isFilteredDataSameAsOriginal) {
          // console.log("I'm here");
          state.filteredRestaurants = [];
        } else if (!isFilteredDataSameAsOriginal) {
          state.filteredRestaurants = filteredData;
        }
      } else {
        state.filteredRestaurants = filteredData;
      }
    },
    handleCrossClick(state, action) {
      state.appliedFiltersArray = state.appliedFiltersArray.filter(
        (item) => item !== action.payload
      );
    },
    handleClearAllAppliedFilters(state, action) {
      state.appliedFiltersArray = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllDelivery.fulfilled, (state, action) => {
      console.log(action.payload);
      state.allDeliveryRestaurants = [...action.payload];
      state.filteredRestaurants = [];
    });
  },
});

export const { handleFilter, handleCrossClick, handleClearAllAppliedFilters } =
  deliverySlice.actions;
export const deliveryReducer = deliverySlice.reducer;
