import { Spinner, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { useThunk } from "../../customHooks/useThunk";
import { loginThunk } from "../../store";
import { useSelector } from "react-redux";

const LoginPage = ({
  showLoginPage,
  setShowLoginPage,
  showSignupPage,
  setShowSignupPage,
}) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    passwordVisibility: false,
  });
  const toast = useToast();
  const [runLoginThunk, loginData, isLoading, error] = useThunk(loginThunk);

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSwitchToSignup = () => {
    setShowSignupPage(!showSignupPage);
    setShowLoginPage(!showLoginPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = loginDetails.email && loginDetails.password;

    if (!isFormValid) {
      // If any required field is empty, return without submitting the form
      toast({
        title: "Please fill all credentials",
        description: "Each detail is required during login",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const infoObject = {
      email: loginDetails.email,
      password: loginDetails.password,
    };
    runLoginThunk(infoObject);
  };

  // Close modal after login is successful
  useEffect(() => {
    if (Object.keys(loginData).length && !isLoading && !error) {
      setShowLoginPage(false);
      toast({
        title: "Login successful",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else if (error) {
      toast({
        title: "Login failed",
        description: error.message || "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [loginData, error, isLoading, setShowLoginPage, toast]);

  return (
    <>
      <main className="bg-black/90 fixed inset-0 flex justify-center items-center z-10">
        <div className="bg-white flex flex-col p-6 rounded-lg w-1/2 max-[500px]:w-[90%]">
          <header className="flex justify-between items-center mb-6">
            <span className="text-3xl text-gray-700 font-medium">Login</span>
            <ImCross
              onClick={() => setShowLoginPage(!showLoginPage)}
              className="cursor-pointer text-black"
            />
          </header>

          <form className="flex flex-col gap-4 pb-8 mb-2 border-b">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={loginDetails.email}
              onChange={handleInputChange}
              className="outline-none border text-gray-400 rounded-lg p-2 "
            />
            {loginDetails.passwordVisibility ? (
              <div className="flex items-center justify-between p-2 rounded-lg border">
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={loginDetails.password}
                  onChange={handleInputChange}
                  className="outline-none text-gray-400 flex-1"
                />
                <PiEye
                  onClick={() =>
                    setLoginDetails({
                      ...loginDetails,
                      passwordVisibility: !loginDetails.passwordVisibility,
                    })
                  }
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <div className="flex items-center justify-between p-2 rounded-lg border">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={loginDetails.password}
                  onChange={handleInputChange}
                  className="outline-none text-gray-400 flex-1"
                />
                <PiEyeClosed
                  onClick={() =>
                    setLoginDetails({
                      ...loginDetails,
                      passwordVisibility: !loginDetails.passwordVisibility,
                    })
                  }
                  className="cursor-pointer"
                />
              </div>
            )}
            <button
              onClick={handleSubmit}
              className="bg-primary text-white p-2 rounded-lg"
            >
              {isLoading ? <Spinner /> : "Log In"}
            </button>
          </form>

          <footer className="text-sm text-gray-600">
            New to Zomato?{" "}
            <span
              onClick={handleSwitchToSignup}
              className="text-primary cursor-pointer"
            >
              Create account
            </span>
          </footer>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
