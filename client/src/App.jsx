import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout/MainLayout";
import DiningPage from "./pages/DiningPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import NightLifePage from "./pages/NightLifePage";
import DeliveryRestaurantPage from "./pages/DeliveryRestaurant";
import SecondaryLayout from "./components/SecondaryLayout";
import CartPage from "./pages/CartPage/CartPage";
import BookmarkPage from "./pages/BookmarkPage/BookmarkPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const App = () => {
  const user = useSelector((state) => state.user);
  const toast = useToast();

  // useEffect(() => {
  //   if (user.message && !user.name) {
  //     toast({
  //       title: user.message,
  //       // description: "Please enter the right credentials",
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   } else if (user.name) {
  //     toast({
  //       title: "Signed up successfully",
  //       status: "success",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   }
  // }, [user]);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<MainLayout />}>
          <Route path="order" element={<SecondaryLayout />}>
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="dining" element={<DiningPage />} />
            <Route path="night-life" element={<NightLifePage />} />
          </Route>
          <Route path="/explore/:cafeId" element={<DeliveryRestaurantPage />} />
          <Route path="cart/:userId" element={<CartPage />} />
          <Route path="bookmarks" element={<BookmarkPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
