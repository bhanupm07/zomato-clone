import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filterCount: 0,
    sortBy: "",
    cuisineSelected: [],
    rating: "",
    cost: "",
  },
  reducers: {
    handleSortRadioChange(state, action) {
      state.sortBy = action.payload;
    },
    handleCheckboxChange(state, action) {
      const { payload } = action;
      const index = state.cuisineSelected.indexOf(payload);

      if (index !== -1) {
        // console.log("nikal diya");
        state.cuisineSelected = state.cuisineSelected.filter(
          (item) => item !== payload
        );
      } else {
        // console.log("daal diya");
        state.cuisineSelected = [...state.cuisineSelected, payload];
      }
      console.log("cuisineSelected", state.cuisineSelected);
    },
    handleRatingRadioChange(state, action) {
      state.rating = action.payload;
    },
    handleCostRadioChange(state, action) {
      state.cost = action.payload;
    },
    clearAll(state, action) {
      return {
        filterCount: 0,
        sortBy: "",
        cuisineSelected: [],
        rating: "",
        cost: "",
      };
    },
    handleFilterCount(state, action) {
      state.filterCount = 0;
      if (state.sortBy) state.filterCount++;
      if (state.cuisineSelected.length > 0) {
        state.cuisineSelected.forEach((_) => state.filterCount++);
      }
      if (state.rating) state.filterCount++;
      if (state.cost) state.filterCount++;
    },
    handleFilterCrossClick(state, action) {
      const { payload } = action;

      if (state.cuisineSelected.includes(payload)) {
        state.cuisineSelected = state.cuisineSelected.filter(
          (cuisine) => cuisine !== payload
        );
      } else if (state.sortBy === payload) {
        state.sortBy = "";
      } else if (state.rating === payload) {
        state.rating = "";
      } else if (state.cost === payload) {
        state.cost = "";
      }
    },
  },
});

export const {
  handleSortRadioChange,
  handleCheckboxChange,
  handleRatingRadioChange,
  handleCostRadioChange,
  clearAll,
  handleFilterCount,
  handleFilterCrossClick,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
