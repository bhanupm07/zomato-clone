import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { signupThunk } from "../../store";
import { useThunk } from "../../customHooks/useThunk";
import { Spinner, useToast } from "@chakra-ui/react";
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";

const SignUpPage = ({
  showSignupPage,
  setShowSignupPage,
  showLoginPage,
  setShowLoginPage,
}) => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    agreementChecked: false,
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const dispatch = useDispatch();
  const [runSignupThunk, signUpData, isLoading, error] = useThunk(signupThunk);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid =
      signUpDetails.name &&
      signUpDetails.email &&
      signUpDetails.password &&
      signUpDetails.agreementChecked;

    if (!isFormValid) {
      // If any required field is empty, return without submitting the form
      toast({
        title: "Please fill all credentials",
        description: "Each detail is required during signup",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const infoObject = {
      name: signUpDetails.name,
      email: signUpDetails.email,
      password: signUpDetails.password,
      imageUrl: "",
    };
    runSignupThunk(infoObject);
  };

  useEffect(() => {
    if (Object.keys(signUpData).length && !isLoading && !error) {
      setShowSignupPage(false);
      toast({
        title: "Signed Up successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else if (error) {
      toast({
        title: "Sign Up failed",
        description: error.message || "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [signUpData, error, isLoading, setShowSignupPage, toast]);

  const handleInputChange = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSwitchToLogin = (e) => {
    setShowSignupPage(!showSignupPage);
    setShowLoginPage(!showLoginPage);
  };

  return (
    <>
      <main className="bg-black/90 fixed inset-0 flex justify-center items-center z-10">
        <div className="bg-white flex flex-col p-6 rounded-lg w-1/2 max-[500px]:w-[90%]">
          <header className="flex justify-between items-center mb-6">
            <span className="text-3xl text-gray-700 font-medium">Signup</span>
            <ImCross
              onClick={() => setShowSignupPage(!showSignupPage)}
              className="cursor-pointer text-black"
            />
          </header>

          <form
            // onSubmit={handleSubmit}
            className="flex flex-col gap-4 border-b pb-8 mb-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              value={signUpDetails.name}
              onChange={handleInputChange}
              className="outline-none border text-gray-400 rounded-lg p-2 "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={signUpDetails.email}
              onChange={handleInputChange}
              className="outline-none border text-gray-400 rounded-lg p-2 "
            />
            {passwordVisibility ? (
              <div className="flex items-center justify-between p-2 rounded-lg border">
                <input
                  type="text"
                  placeholder="Create Password"
                  name="password"
                  required
                  value={signUpDetails.password}
                  onChange={handleInputChange}
                  className="outline-none text-gray-400 flex-1"
                />
                <PiEye
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <div className="flex items-center justify-between p-2 rounded-lg border">
                <input
                  type="password"
                  placeholder="Create Password"
                  name="password"
                  required
                  value={signUpDetails.password}
                  onChange={handleInputChange}
                  className="outline-none text-gray-400 flex-1"
                />
                <PiEyeClosed
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                  className="cursor-pointer"
                />
              </div>
            )}
            <label
              htmlFor="checkbox"
              className="text-sm flex items-start text-gray-400"
            >
              <input
                id="checkbox"
                type="checkbox"
                name="checkbox"
                checked={signUpDetails.agreementChecked}
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    agreementChecked: e.target.checked,
                  })
                }
                className="accent-primary w-5 h-5 mr-2"
              />
              <p>
                I agree to Zomato's{" "}
                <span className="text-primary font-medium">
                  Terms of Service, Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-primary font-medium">
                  Content Policies
                </span>
              </p>
            </label>
            <button
              //   type="submit"
              onClick={handleSubmit}
              disabled={!signUpDetails.agreementChecked}
              className={`${
                signUpDetails.agreementChecked ? "bg-primary" : "bg-gray-300"
              } text-white p-2 rounded-lg`}
            >
              {isLoading ? <Spinner /> : "Create account"}
            </button>
          </form>

          <footer className="text-sm text-gray-600">
            Already have an account?{" "}
            <span
              onClick={handleSwitchToLogin}
              className="text-primary cursor-pointer"
            >
              Login
            </span>
          </footer>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
