import React from "react";

const FilterComponent = ({ text }) => {
  return (
    <span className="border border-gray-300 text-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100/50">
      {text}
    </span>
  );
};

export default FilterComponent;
