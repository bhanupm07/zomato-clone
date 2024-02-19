import { Avatar } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Profile = () => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar />
      <span>Bhanu</span>
      <IoIosArrowDown />
    </div>
  );
};

export default Profile;
