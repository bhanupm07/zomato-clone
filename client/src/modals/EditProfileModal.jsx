import { Avatar, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { HiCamera } from "react-icons/hi2";

const EditProfileModal = ({
  isProfileModalVisible,
  setIsProfileModalVisible,
}) => {
  const { name, email, imageUrl } = useSelector((state) => state.user);
  const [formDetails, setFormDetails] = useState({
    imageUrl,
    name: name,
    email: email,
    description: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const formData = [
    {
      legend: "Full Name",
      type: "text",
      name: "name",
      value: formDetails.name,
    },
    {
      legend: "Email address",
      type: "email",
      name: "email",
      value: formDetails.email,
    },
    {
      legend: "Description",
      type: "text",
      name: "description",
      value: formDetails.description,
    },
    {
      legend: "Phone",
      type: "number",
      name: "phone",
      value: formDetails.phone,
    },
  ];

  const handleInputChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleProfilePhotoChange = async (e) => {
    setIsLoading(true);
    try {
      const file = e.target.files[0];
      const imageForm = new FormData();
      imageForm.append("file", file);
      imageForm.append("cloud_name", "dxn1nqijs");
      imageForm.append("upload_preset", "internvilla");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxn1nqijs/image/upload",
        {
          method: "POST",
          body: imageForm,
        }
      );
      const data = await response.json();
      setFormDetails({ ...formDetails, imageUrl: data.secure_url });
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <main className="fixed inset-0 bg-black/70 flex justify-center items-center z-20">
      <div className="bg-white rounded-md w-1/3">
        <div className="flex justify-between items-center p-6 pb-1">
          <h3 className="text-2xl">Edit profile</h3>
          <IoClose
            onClick={() => setIsProfileModalVisible(!isProfileModalVisible)}
            className="text-2xl cursor-pointer"
          />
        </div>

        <div className="relative bg-zomato bg-center bg-cover flex items-center p-4 pt-8">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <label className="relative border-4 border-white rounded-full cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePhotoChange}
            />
            {formDetails.imageUrl ? (
              <img
                src={formDetails.imageUrl}
                alt="profile"
                className="w-24 rounded-full"
              />
            ) : (
              <Avatar size="xl" />
            )}
            {/* <Avatar /> */}
            {isLoading ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Spinner />
              </div>
            ) : (
              <HiCamera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-2 text-4xl bg-black/60 rounded-full" />
            )}
          </label>
        </div>

        <section className="p-6 flex flex-col gap-6">
          {formData.map((data) => {
            return (
              <fieldset className="border border-gray-300 rounded-md">
                <legend className="text-xs text-gray-400 px-1 mx-2">
                  {data.legend}
                </legend>
                <input
                  type={data.type}
                  value={data.value}
                  name={data.name}
                  onChange={handleInputChange}
                  className={`outline-none w-full p-2 pt-0 rounded-md ${
                    data.name === "name" && "capitalize"
                  }`}
                />
              </fieldset>
            );
          })}
        </section>

        <section className="p-6 pt-0 flex gap-6 justify-end">
          <button
            onClick={() => setIsProfileModalVisible(!isProfileModalVisible)}
            className="w-36 border border-primary text-primary py-2 rounded-md"
          >
            Cancel
          </button>
          <button className="w-36 border bg-primary text-white py-2 rounded-md">
            Update
          </button>
        </section>
      </div>
    </main>
  );
};

export default EditProfileModal;
