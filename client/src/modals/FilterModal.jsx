import React from "react";
import { RxCross2 } from "react-icons/rx";

const FilterModal = ({ isFilterOpen, setIsFilterOpen }) => {
  return (
    <main className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white w-[50%] rounded-lg">
        <header className="flex justify-between items-center text-2xl border-b p-4">
          <span className="">Filters</span>
          <RxCross2
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="cursor-pointer"
          />
        </header>

        <section>
          <div>
            <span>Sort By</span>
            <span>Cuisines</span>
            <span>Rating</span>
            <span>Cost</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FilterModal;
