import React, { useEffect } from "react";
import appLogo from "../assets/appLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Avatar, Spinner, useToast } from "@chakra-ui/react";
import { clearUserDetails, fetchUserDetails } from "../store";
import { useThunk } from "../customHooks/useThunk";

const SecondaryHeader = () => {
  const { imageUrl, cart, userId, name } = useSelector((state) => state.user);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [runFetchUserDetailThunk, _, isLoading] = useThunk(fetchUserDetails);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      runFetchUserDetailThunk(localStorage.getItem("token"));
    }
  }, []);

  return (
    <div className="flex justify-between px-12 py-6 w-full max-[500px]:px-4 max-[500px]:py-4">
      <div className="flex gap-2 items-center cursor-pointer">
        <img src={appLogo} alt="app logo" />
        <p className="text-sm">App Coming soon</p>
      </div>
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
                className="capitalize font-medium max-[500px]:hidden"
              >
                {name}
              </span>
            ) : (
              <div className="max-[500px]:hidden">
                <Spinner />
              </div>
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
            className="relative cursor-pointer hover:scale-110 max-[500px]:hidden"
          >
            <IoCartOutline className="text-primary text-2xl" />
            <span className="absolute -top-1 -right-1 text-[8px] bg-primary text-white rounded-full w-3 h-3 flex justify-center items-center">
              {cart?.length}
            </span>
          </Link>
        </section>
      ) : (
        <div className="flex items-center gap-6 text-lg max-[500px]:text-sm">
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

      {showSignupPage && (
        <SignUpPage
          showSignupPage={showSignupPage}
          setShowSignupPage={setShowSignupPage}
          showLoginPage={showLoginPage}
          setShowLoginPage={setShowLoginPage}
        />
      )}
      {showLoginPage && (
        <LoginPage
          showSignupPage={showSignupPage}
          setShowSignupPage={setShowSignupPage}
          showLoginPage={showLoginPage}
          setShowLoginPage={setShowLoginPage}
        />
      )}
    </div>
  );
};

export default SecondaryHeader;

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
    <main className="flex flex-col shadow-xl absolute -bottom-36 right-0 rounded-lg z-20 border-[0.5px] text-black bg-white">
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
