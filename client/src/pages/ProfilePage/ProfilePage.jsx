import { Avatar } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import StoryModal from "../../modals/StoryModal";
import EditProfileModal from "../../modals/EditProfileModal";

const ProfilePage = () => {
  const { name, imageUrl } = useSelector((state) => state.user);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  return (
    <main className="my-2 border-t mx-20">
      <div className="relative bg-zomato bg-center bg-cover text-white flex justify-between items-center p-6 py-10">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <section className="flex items-center gap-4 z-10">
          <div className="border-4 border-white rounded-full">
            {!imageUrl ? (
              <Avatar size="2xl" />
            ) : (
              <img src={imageUrl} alt="profile" />
            )}
          </div>
          <div>
            <span className="capitalize font-medium text-xl">{name}</span>
          </div>
        </section>
        <button
          onClick={() => setIsProfileModalVisible(!isProfileModalVisible)}
          className="flex items-center gap-2 p-2 px-4 bg-[#EF4F5F] text-white rounded-md z-10"
        >
          <FaRegEdit className="text-xs" />
          <span>Edit Profile</span>
        </button>
      </div>

      <section className="flex flex-col gap-4 justify-center items-center my-10">
        <img
          src="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
          alt="decoration"
          className="w-40"
        />
        <div className="text-center">
          <p className="text-2xl font-medium">
            Stay tuned for more interesting features
          </p>
          <p className="text-gray-500">
            (Reviews, Photos, Followers, Recently Viewed, Blog Posts, Order
            history and many more.)
          </p>
        </div>
      </section>

      {isProfileModalVisible && (
        <EditProfileModal
          isProfileModalVisible={isProfileModalVisible}
          setIsProfileModalVisible={setIsProfileModalVisible}
        />
      )}
    </main>
  );
};

export default ProfilePage;
