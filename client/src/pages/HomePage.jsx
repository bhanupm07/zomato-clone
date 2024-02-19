import React, { useState } from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import logo from "../assets/zomatoWhite.png";
import {
  IoMdArrowDropright,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { MdKeyboardArrowRight, MdGpsFixed } from "react-icons/md";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-bgImage text-white pb-24">
        <SecondaryHeader />
        <img src={logo} alt="zomato logo" className="w-96" />
        <p className="text-4xl pb-6">
          Discover the best food & drinks in Delhi NCR
        </p>
        <SearchBar />
      </div>

      <div className="flex items-center justify-center gap-5 px-20 pt-10 pb-24">
        <Link
          to="/explore/delivery"
          className="custom-div h-56 flex flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300"
        >
          <img
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="decoration"
            className="h-[65%] object-cover w-96"
          />
          <div className="px-6 py-3">
            <h3 className="text-xl">Order Online</h3>
            <p>Stay home and order to your doorstep</p>
          </div>
        </Link>

        <div className="custom-div h-56 flex flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300">
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="decoration"
            className="h-[65%] object-cover w-96"
          />
          <div className="px-6 py-3">
            <h3 className="text-xl">Dining</h3>
            <p>View the city's favorite dining venues</p>
          </div>
        </div>

        <div className="custom-div h-56 flex flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300">
          <img
            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="decoration"
            className="h-[65%] object-cover w-96"
          />
          <div className="px-6 py-3">
            <h3 className="text-xl">Nightlife and Clubs</h3>
            <p>Explore the city's top nightlife outlets</p>
          </div>
        </div>
      </div>

      <div className="px-20">
        <h2 className="text-4xl font-medium">Collections</h2>
        <div className="flex items-center justify-between py-3">
          <p className="text-xl">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </p>
          <span className="text-lg text-primary flex items-center gap-1">
            All collections in Delhi NCR{" "}
            <IoMdArrowDropright className="text-xl" />
          </span>
        </div>

        <div className="text-white flex gap-3 w-full pt-6 pb-24">
          <div className="relative h-80 rounded-lg overflow-hidden w-1/4">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg">Unique Dining Experiences</h3>
              <span className="flex items-center">
                11 places <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden w-1/4">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/0a4f52d9dc95cf3a5d3cf05f2299c1bf_1704348957.png?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg">Hot Chocolate Havens</h3>
              <span className="flex items-center">
                22 places <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden w-1/4">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/ae71f4c72fda8a608a3650b15a994fdb_1696838475.jpg?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg">Best Insta-worthy Places</h3>
              <span className="flex items-center">
                21 places <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden w-1/4">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/2022843bd23fe6c24f67cbea79836a4f_1704970294.png?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg">Cozy Heated Outdoors</h3>
              <span className="flex items-center">
                20 places <IoMdArrowDropright />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mb-28">
          <h3 className="text-4xl mb-10">
            Popular localities in and around{" "}
            <span className="font-medium">Delhi NCR</span>
          </h3>
          <LocalityCard />
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-6">Explore options near me</h3>
          <DropdownComponent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;

function LocalityCard() {
  const localityArr = [
    { name: "Connaught Place", places: 263 },
    { name: "Sector 29", places: 146 },
    { name: "Sector 18, Noida", places: 222 },
    { name: "Rajouri Garden", places: 355 },
    { name: "Saket", places: 333 },
    { name: "DLF Cyber City", places: 179 },
    { name: "Golf Course Road", places: 156 },
    { name: "DLF Phase 4", places: 223 },
    { name: "Rohini", places: 1216 },
  ];

  const renderedItems = localityArr.map((item, index) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between p-3 border rounded-md w-[32%] shadow hover:shadow-lg cursor-pointer"
      >
        <div>
          <h3 className="text-xl">{item.name}</h3>
          <p>{item.places} places</p>
        </div>
        <MdKeyboardArrowRight className="text-xl" />
      </div>
    );
  });

  return <div className="flex flex-wrap gap-4">{renderedItems}</div>;
}

function DropdownComponent() {
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);
  const [thirdDropDown, setThirdDropDown] = useState(false);
  const [fourthDropDown, setFourthDropdown] = useState(false);

  return (
    <>
      <div className="border rounded mb-5">
        <div
          className="flex items-center justify-between  cursor-pointer p-4"
          onClick={() => setFirstDropDown(!firstDropDown)}
        >
          <p className="text-xl">Popular cuisines near me</p>
          {firstDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {firstDropDown && (
          <p className="text-gray-400 p-4">
            Bakery food near me | Beverages food near me | Biryani food near me
            | Burger food near me | Chinese food near me | Coffee food near me |
            Continental food near me | Desserts food near me | Italian food near
            me | Mithai food near me | Momos food near me | Mughlai food near me
            | North Indian food near me
          </p>
        )}
      </div>

      <div className="border rounded mb-5">
        <div
          className="p-4 flex items-center justify-between  cursor-pointer"
          onClick={() => setSecondDropDown(!secondDropDown)}
        >
          <p className="text-xl">Popular restaurant types near me</p>
          {secondDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {secondDropDown && (
          <p className="text-gray-400 p-4">
            Bakeries near me | Bars near me | Beverage shops near me | Bhojnalya
            near me | Cafes near me | Casual Dining near me | Clubs near me |
            Cocktail Bars near me | Confectioneries near me | Dessert Parlors
            near me | Dhabas near me | Fine Dining near me | Food Courts near me
            | Food Trucks near me | Irani Cafes near me | Kiosks near me |
            Lounges near me | Meat Shops near me | Microbreweries near me | Paan
            shop near me | Pubs near me | Quick bites near me | Sweet shops near
            me
          </p>
        )}
      </div>

      <div className="border rounded-lg mb-5">
        <div
          className="p-4 flex items-center justify-between  cursor-pointer"
          onClick={() => setThirdDropDown(!thirdDropDown)}
        >
          <p className="text-xl">Top Restaurant Chains</p>
          {thirdDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {thirdDropDown && (
          <div className="mt-2 text-gray-400 flex gap-20 flex-wrap p-4">
            <div className="flex flex-col gap-2">
              <p>Bikanerwala</p>
              <p>Domino's</p>
              <p>McDonald's</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Biryani Blues</p>
              <p>Dunkin' Donuts</p>
              <p>Moti Mahal Delux</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>BTW</p>
              <p>Haldiram's</p>
              <p>Om Sweets & Snacks</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Burger King</p>
              <p>KFC</p>
              <p>Pizza Hut</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Burger Singh</p>
              <p>Krispy Kreme</p>
              <p>Sagar Ratna</p>
            </div>
          </div>
        )}
      </div>

      {/* <div className="border rounded mb-5">
        <div
          className="p-4 flex items-center justify-between  cursor-pointer"
          onClick={() => setFourthDropdown(!fourthDropDown)}
        >
          <p className="text-xl">Cities We Deliver To</p>
          {fourthDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {fourthDropDown && (
          <p className="text-gray-400 p-4">
            Bakery food near me | Beverages food near me | Biryani food near me
            | Burger food near me | Chinese food near me | Coffee food near me |
            Continental food near me | Desserts food near me | Italian food near
            me | Mithai food near me | Momos food near me | Mughlai food near me
            | North Indian food near me
          </p>
        )}
      </div> */}
    </>
  );
}
