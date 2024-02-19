import React from "react";
import appLogo from "../assets/appLogo.svg";
import { Link } from "react-router-dom";

const SecondaryHeader = () => {
  return (
    <div className="flex justify-between px-12 py-6 w-full">
      <div className="flex gap-2 items-center cursor-pointer">
        <img src={appLogo} alt="app logo" />
        <p className="text-sm">App Coming soon</p>
      </div>
      <div className="flex items-center gap-6 text-lg">
        <Link to="/login">Log in</Link>
        <Link to="/signUp">Sign up</Link>
      </div>
    </div>
  );
};

export default SecondaryHeader;
