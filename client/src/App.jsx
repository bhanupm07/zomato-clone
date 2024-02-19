import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout/MainLayout";
import DiningPage from "./pages/DiningPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import NightLifePage from "./pages/NightLifePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<MainLayout />}>
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="dining" element={<DiningPage />} />
          <Route path="night-life" element={<NightLifePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
