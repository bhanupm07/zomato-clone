import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useThunk } from "../../customHooks/useThunk";
import { fetchAllDelivery } from "../../store";
import { Spinner } from "@chakra-ui/react";
import SearchBar from "../SearchBar";

const MainLayout = () => {
  const location = useSelector((state) => state.location);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [runFetchAllDeliveryThunk, _, isLoading] = useThunk(fetchAllDelivery);

  useEffect(() => {
    runFetchAllDeliveryThunk();
  }, []);

  return (
    <>
      <Header
        showSignupPage={showSignupPage}
        setShowSignupPage={setShowSignupPage}
        showLoginPage={showLoginPage}
        setShowLoginPage={setShowLoginPage}
      />

      {location ? (
        <p className="text-gray-400 text-sm px-20 max-[500px]:px-7 max-[500px]:text-xs mt-5 tracking-wide capitalize">
          Home / {location}
        </p>
      ) : (
        ""
      )}

      <div className="hidden max-[500px]:flex max-[500px]:justify-center py-4 w-full">
        <div className="w-[90%]">
          <SearchBar />
        </div>
      </div>

      <Outlet />

      <Footer />

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
    </>
  );
};

export default MainLayout;
