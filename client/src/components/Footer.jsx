import React from "react";
import logo from "../assets/zomatoBlack.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import india from "../assets/india.png";

const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] px-20 pb-8 text-gray-500">
      <div className="flex justify-between py-10">
        <img src={logo} alt="logo" className=" ml-[-12px] w-40" />
        <div className="flex items-center gap-2 p-2 border border-gray-400 rounded">
          <img src={india} alt="indian flag" className="w-5" />
          <span className="text-black">India</span>
        </div>
      </div>
      <div className="flex gap-20 flex-wrap">
        <div className="flex flex-col gap-1 text-sm tracking-wide">
          <h4 className="font-medium text-black tracking-widest text-base mb-2">
            ABOUT ZOMATO
          </h4>
          <span>Who We Are</span>
          <span>Blog</span>
          <span>Work With Us</span>
          <span>Investor Relations</span>
          <span>Report Fraud</span>
          <span>Press Kit</span>
          <span>Contact Us</span>
        </div>
        <div className="flex flex-col gap-1 text-sm tracking-wide">
          <h4 className="font-medium text-black tracking-widest text-base mb-2">
            ZOMAVERSE
          </h4>
          <span>Zomato</span>
          <span>Blinkit</span>
          <span>Feeding India</span>
          <span>Hyperpure</span>
          <span>Zomaland</span>
        </div>
        <div>
          <div className="flex flex-col gap-1 text-sm tracking-wide mb-6">
            <h4 className="font-medium text-black tracking-widest text-base mb-2">
              FOR RESTAURANTS
            </h4>
            <span>Partner With Us</span>
            <span>Apps For You</span>
          </div>
          <div className="flex flex-col gap-1 text-sm tracking-wide">
            <h4 className="font-medium text-black tracking-widest text-base mb-2">
              FOR ENTERPRISES
            </h4>
            <span>Zomato For Enterprise</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm tracking-wide">
          <h4 className="font-medium text-black tracking-widest text-base mb-2">
            LEARN MORE
          </h4>
          <span>Privacy</span>
          <span>Security</span>
          <span>Terms</span>
          <span>Sitemap</span>
        </div>
        <div className="flex flex-col gap-1 text-sm tracking-wide">
          <h4 className="font-medium text-black tracking-widest text-base mb-2">
            SOCIAL LINKS
          </h4>
          <div className="flex gap-2 text-xl">
            <FaLinkedinIn className="text-white bg-black rounded-[50%] p-1" />
            <FaInstagram className="text-white bg-black rounded-[50%] p-1" />
            <FaTwitter className="text-white bg-black rounded-[50%] p-1" />
            <FaYoutube className="text-white bg-black rounded-[50%] p-1" />
            <FaFacebookF className="text-white bg-black rounded-[50%] p-1" />
          </div>
        </div>
      </div>

      <hr className="mt-16 mb-6 h-[1px] bg-gray-400" />

      <p className="text-sm tracking-wide">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners, 2008-2024 © Zomato™ Ltd. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
