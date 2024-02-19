import React from "react";
import logoBlack from "../../assets/zomatoBlack.png";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center gap-6 py-2 pl-[70px]">
      <img src={logoBlack} alt="zomato logo" className="w-36" />
      <SearchBar />
      <div className="flex items-center gap-8 text-lg text-gray-500 tracking-wider ml-24">
        <Link to="/login">Log in</Link>
        <Link to="/signUp">Sign up</Link>
      </div>
    </div>
  );
};

export default Header;
