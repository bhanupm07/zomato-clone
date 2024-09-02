import React from "react";
import wip from "../assets/wip.jpg";
import { Link } from "react-router-dom";

const NightLifePage = () => {
  return (
    <main className="flex flex-col items-center p-12">
      <h2 className="text-3xl font-bold">Work In Progress</h2>
      <img src={wip} alt="" className="w-[450px]" />
      <Link
        to="/explore/order/delivery"
        className="px-16 py-2 rounded-lg bg-primary text-white font-semibold text-lg"
      >
        Explore Delivery
      </Link>
    </main>
  );
};

export default NightLifePage;
