import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = ({ dataArray }) => {
  const [pointers, setPointers] = useState({ left: 0, right: 5 });

  const renderedCarousel = dataArray.map((food, index) => {
    if (index >= pointers.left && index <= pointers.right) {
      return (
        <div key={index} className="flex flex-col items-center gap-2 w-60 ">
          <div>
            <img src={food.img} alt={food.name} className="rounded-full w-60" />
          </div>
          <span className="text-xl text-center font-medium">{food.name}</span>
        </div>
      );
    }
  });

  const handleBackArrow = () => {
    setPointers((prevPointers) => ({
      left: prevPointers.left - 1,
      right: prevPointers.right - 1,
    }));
  };

  const handleForwardArrow = () => {
    setPointers((prevPointers) => ({
      left: prevPointers.left + 1,
      right: prevPointers.right + 1,
    }));
  };

  return (
    <div className="flex gap-10 relative">
      {renderedCarousel}
      {pointers.left > 0 && (
        <IoIosArrowBack
          onClick={handleBackArrow}
          className="absolute -left-4 top-[60px] bg-white p-2 text-4xl rounded-full shadow-xl hover:bg-gray-100 cursor-pointer"
        />
      )}
      {pointers.right < dataArray.length - 1 && (
        <IoIosArrowForward
          onClick={handleForwardArrow}
          className="absolute -right-4 top-[60px] bg-white p-2 text-4xl rounded-full shadow-xl hover:bg-gray-100 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Carousel;
