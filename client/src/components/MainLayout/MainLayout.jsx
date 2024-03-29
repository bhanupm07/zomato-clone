import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const MainLayout = () => {
  const location = useSelector((state) => state.location);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <>
      <Header
        showSignupPage={showSignupPage}
        setShowSignupPage={setShowSignupPage}
        showLoginPage={showLoginPage}
        setShowLoginPage={setShowLoginPage}
      />

      {location ? (
        <p className="text-gray-400 text-sm px-20 mt-5 tracking-wide capitalize">
          Home / {location}
        </p>
      ) : (
        ""
      )}

      <div className="flex items-center border-b-[1px] border-gray-200 px-20">
        <NavLink to="delivery">
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center gap-2 py-4 px-6 border-b-2 border-primary">
                <div className="rounded-full bg-[#FCEEC0] p-4">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                    alt="decoration"
                    className="w-8"
                  />
                </div>
                <span className="text-xl font-medium text-primary">
                  Delivery
                </span>{" "}
              </div>
            ) : (
              <div className="flex items-center gap-2 py-4 px-6">
                <div className="rounded-full bg-[#F8F8F8] p-4">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                    alt="decoration"
                    className="w-8"
                  />
                </div>
                <span className="text-xl font-medium text-gray-500">
                  Delivery
                </span>
              </div>
            )
          }
        </NavLink>

        <NavLink to="dining">
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center gap-2 py-4 px-6 border-b-2 border-primary">
                <div className="rounded-full bg-[#E5F3F3] p-4">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                    alt="decoration"
                    className="w-8"
                  />
                </div>
                <span className="text-xl font-medium text-primary">
                  Dining Out
                </span>{" "}
              </div>
            ) : (
              <div className="flex items-center gap-2 py-4 px-6">
                <div className="rounded-full bg-[#F8F8F8] p-4">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                    alt="decoration"
                    className="w-8"
                  />
                </div>
                <span className="text-xl font-medium text-gray-500">
                  Dining Out
                </span>
              </div>
            )
          }
        </NavLink>

        <NavLink to="night-life">
          {({ isActive }) =>
            isActive ? (
              <div className="flex items-center gap-2 py-4 px-6 border-b-2 border-primary">
                <div className="rounded-full bg-[#EDF4FF] p-4">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                    alt="decoration"
                    className="w-8"
                  />
                </div>
                <span className="text-xl font-medium text-primary">
                  Nightlife
                </span>{" "}
              </div>
            ) : (
              <div className="flex items-center gap-2 py-4 px-6">
                <div className="rounded-full bg-[#F8F8F8] p-4">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                    alt="decoration"
                    className="w-8"
                  />
                </div>
                <span className="text-xl font-medium text-gray-500">
                  Nightlife
                </span>
              </div>
            )
          }
        </NavLink>
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
