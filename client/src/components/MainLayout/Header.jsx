import React, { useEffect, useState } from "react";
import logoBlack from "../../assets/zomatoBlack.png";
import SearchBar from "../SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useThunk } from "../../customHooks/useThunk";
import { clearUserDetails, fetchUserDetails } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Spinner, useToast } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = ({
  showSignupPage,
  setShowSignupPage,
  showLoginPage,
  setShowLoginPage,
}) => {
  const [runFetchUserDetailThunk, _, isLoading] = useThunk(fetchUserDetails);
  const { userId, name, email, password, imageUrl } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { cart } = useSelector((state) => state.user);

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
        <section className="flex items-center gap-4">
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
            {!isLoading ? (
              <span
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                className="capitalize font-medium"
              >
                {name}
              </span>
            ) : (
              <Spinner />
            )}
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
          <Link
            to={`/explore/cart/${userId}`}
            className="relative cursor-pointer hover:scale-110"
          >
            <IoCartOutline className="text-primary text-2xl" />
            <span className="absolute -top-1 -right-1 text-[8px] bg-primary text-white rounded-full w-3 h-3 flex justify-center items-center">
              {cart?.length}
            </span>
          </Link>
        </section>
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
  const navigate = useNavigate();

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
    navigate("/explore/order/delivery");
  };

  return (
    <main className="flex flex-col shadow-xl absolute -bottom-36 right-0 rounded-lg z-20 border-[0.5px] bg-white">
      <Link
        to="/explore/profile"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="p-2 pr-10 hover:bg-gray-100"
      >
        Profile
      </Link>
      <Link
        to="/explore/bookmarks"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="p-2 pr-10 hover:bg-gray-100"
      >
        Bookmarks
      </Link>
      <span className="p-2 pr-10 hover:bg-gray-100" onClick={handleLogOut}>
        Log out
      </span>
    </main>
  );
}
