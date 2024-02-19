import React, { useState, useEffect } from "react";
import locationSvg from "../assets/location.svg";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdGpsFixed } from "react-icons/md";
import { Spinner } from "@chakra-ui/react";
import { useThunk } from "../customHooks/useThunk";
import { fetchLocation } from "../store/thunks/fetchLocation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);

  const [locationModal, setLocationModal] = useState(false);

  const [runFetchLocationThunk, locationData, isLoading] =
    useThunk(fetchLocation);

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        runFetchLocationThunk(position.coords);
        setLocationModal(false);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex gap-2 items-center bg-white p-4 rounded-lg text-black w-[55%] relative shadow">
      {isLoading ? (
        <Spinner size="sm" color="red.400" />
      ) : (
        <img src={locationSvg} alt="decoration" />
      )}
      <input
        type="text"
        placeholder="Detect Location"
        className="outline-none text-sm capitalize text-gray-400"
        value={location}
        onChange={(e) =>
          dispatch({ type: "location/handleChange", payload: e.target.value })
        }
      />
      {locationModal ? (
        <TiArrowSortedUp
          className="cursor-pointer"
          onClick={() => setLocationModal(!locationModal)}
        />
      ) : (
        <TiArrowSortedDown
          className="cursor-pointer"
          onClick={() => setLocationModal(!locationModal)}
        />
      )}
      <div className="text-gray-400">|</div>
      <CiSearch className="text-2xl text-gray-500" />
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        className="outline-none text-sm flex-grow"
      />
      {locationModal && (
        <div
          onClick={handleDetectLocation}
          className="flex gap-2 bg-white border-gray-400 border-[0.05px] shadow-md text-black p-3 rounded-lg z-50 cursor-pointer absolute -bottom-20 left-0 w-[50%]"
        >
          <MdGpsFixed className="text-primary text-sm mt-2" />
          <div className="flex flex-col">
            <p className="text-primary text-lg">Detect current location</p>
            <p className="text-gray-400 text-sm">Using GPS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
