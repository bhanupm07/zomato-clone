import React, { useEffect, useState } from "react";
import logoBlack from "../../assets/zomatoBlack.png";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { useThunk } from "../../customHooks/useThunk";
import { clearUserDetails, fetchUserDetails } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, useToast } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = ({
  showSignupPage,
  setShowSignupPage,
  showLoginPage,
  setShowLoginPage,
}) => {
  const [runFetchUserDetailThunk, _, isLoading] = useThunk(fetchUserDetails);
  const { name, email, password, imageUrl } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      runFetchUserDetailThunk(localStorage.getItem("token"));
    }
  }, [name]);

  return (
    <div className="flex items-center gap-6 py-2 pl-[70px]">
      <Link to="/">
        <img src={logoBlack} alt="zomato logo" className="w-36" />
      </Link>
      <SearchBar />
      {localStorage.getItem("token") ? (
        <div className="flex gap-2 items-center ml-24 relative cursor-pointer">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="profile_pic"
              className="rounded-full object-cover w-6 h-6"
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            />
          ) : (
            <Avatar
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
              size="sm"
            />
          )}
          <span
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            className="capitalize font-medium"
          >
            {name}
          </span>
          {isDropdownVisible ? (
            <IoIosArrowUp
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            />
          )}
          {isDropdownVisible && (
            <DropdownModal
              isDropdownVisible={isDropdownVisible}
              setIsDropdownVisible={setIsDropdownVisible}
            />
          )}
        </div>
      ) : (
        <div className="flex items-center gap-8 text-lg text-gray-500 tracking-wider ml-24">
          <span
            onClick={() => setShowLoginPage(!showLoginPage)}
            className="cursor-pointer"
          >
            Log in
          </span>
          <span
            onClick={() => setShowSignupPage(!showSignupPage)}
            className="cursor-pointer"
          >
            Sign up
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;

function DropdownModal({ isDropdownVisible, setIsDropdownVisible }) {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(clearUserDetails());
    setIsDropdownVisible(!isDropdownVisible);
    toast({
      title: "Logged out successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <main className="flex flex-col shadow-xl absolute -bottom-44 right-0 rounded-lg z-10 border-[0.5px]">
      <span className="p-2 pr-10 hover:bg-gray-100">Profile</span>
      <span className="p-2 pr-10 hover:bg-gray-100">Bookmarks</span>
      <span className="p-2 pr-10 hover:bg-gray-100">Reviews</span>
      <span className="p-2 pr-10 hover:bg-gray-100" onClick={handleLogOut}>
        Log out
      </span>
    </main>
  );
}
