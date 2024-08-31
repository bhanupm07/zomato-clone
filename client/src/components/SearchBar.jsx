import React, { useState, useEffect, useRef } from "react";
import locationSvg from "../assets/location.svg";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdGpsFixed } from "react-icons/md";
import { Spinner } from "@chakra-ui/react";
import { useThunk } from "../customHooks/useThunk";
import { fetchLocation } from "../store/thunks/fetchLocation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const { allDeliveryRestaurants } = useSelector((state) => state.delivery);

  const [locationModal, setLocationModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisinesMatched, setCuisinesMatched] = useState([]);
  const [restaurantsMatched, setRestaurantsMatched] = useState([]);
  const [isSearchModal, setIsSearchModal] = useState(false);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && inputRef.current.contains(event.target)) {
        setIsSearchModal(true);
      } else if (modalRef.current && modalRef.current.contains(event.target)) {
        // if (event.target.tagName === "A") {
        // Close the modal after the link is clicked
        setTimeout(() => {
          setIsSearchModal(false);
        }, 400);
        // }
      } else {
        setIsSearchModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    searchTermHandling(e.target.value);
    setIsSearchModal(true);
  };

  const searchTermHandling = (searchTerm) => {
    const matchedCuisines = allDeliveryRestaurants.filter((obj) => {
      let isThere = false;
      obj.cuisine.forEach((cuisine) => {
        if (cuisine.toLowerCase().includes(searchTerm.toLowerCase())) {
          isThere = true;
        }
      });
      return isThere;
    });
    const matchedRestaurants = allDeliveryRestaurants.filter(
      (obj) => obj.name.toLowerCase().includes(searchTerm.toLowerCase())
      // obj.name.includes(searchTerm)
    );
    const searchedRestaurants = [
      ...matchedCuisines,
      ...matchedRestaurants,
    ].filter(
      (value, index, self) =>
        index === self.findIndex((t) => t._id === value._id)
    );
    // setCuisinesMatched(matchedCuisines);

    setRestaurantsMatched(searchedRestaurants);
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
        ref={inputRef}
        value={searchTerm}
        onChange={handleSearchInputChange}
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
      {restaurantsMatched.length && searchTerm.length && isSearchModal ? (
        <div
          ref={modalRef}
          className="absolute top-16 right-0 bg-white border border-gray-200 h-[300px] w-[420px] overflow-y-scroll z-50 shadow-2xl rounded-xl py-2"
        >
          {restaurantsMatched.map((obj) => {
            return (
              <Link
                to={`/explore/${obj._id}`}
                key={obj._id}
                className="flex gap-4 p-3 px-4 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={obj.imageUrl}
                  alt=""
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="">{obj.name}</h3>
                  <div className="flex items-center gap-4 text-xs font-thin">
                    <div className="flex items-center gap-1">
                      <span className="flex items-center bg-green-600 gap-1 px-1 rounded-md font-semibold text-white">
                        {obj?.diningRating} <FaStar className="text-[9px]" />
                      </span>
                      <span>DINING</span>
                    </div>
                    <span className="font-thin text-xs">|</span>
                    <div className="flex items-center gap-1">
                      <span className="flex items-center bg-green-600 gap-1 px-1 rounded-md font-semibold text-white">
                        {obj?.rating} <FaStar className="text-[9px]" />
                      </span>
                      <span>DELIVERY</span>
                    </div>
                  </div>
                  <div className="flex items-center text-red-500 text-sm">
                    <span>Order Now</span>
                    <RiArrowRightSFill className="text-lg" />
                  </div>
                  <p className="text-xs text-gray-500">
                    Delivery in {obj.deliveryTime} minutes
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;

const SearchResultModal = () => {
  return <div></div>;
};
