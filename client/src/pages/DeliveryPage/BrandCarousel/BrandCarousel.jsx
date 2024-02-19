import React from "react";
import Carousel from "../../../components/DeliveryPage/Carousel";

const BrandCarousel = () => {
  const brandArray = [
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
      name: "McDonald's",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
      name: "Domino's Pizza",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp",
      name: "Bikkgane Biryani",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
      name: "Burger King",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
      name: "Haldiram's",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
      name: "KFC",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
      name: "Subway",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/36fe2c2e5b191e58adf5d571931bc50e1698645278.png?output-format=webp",
      name: "Bheemeshwara",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
      name: "Bikanerwala",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
      name: "Pizza Hut",
    },
  ];

  return (
    <div className="px-20 py-8">
      <h2 className="text-3xl mb-8">Top brands for you</h2>
      <Carousel dataArray={brandArray} />
    </div>
  );
};

export default BrandCarousel;
