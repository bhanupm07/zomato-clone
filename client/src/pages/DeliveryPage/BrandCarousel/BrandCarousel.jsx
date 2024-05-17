import React from "react";
import Carousel from "../../../components/DeliveryPage/Carousel";

const BrandCarousel = () => {
  const brandArray = [
    {
      _id: "65e9f64a31797c39a87a4699",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
      type: "brand",
      name: "McDonald's",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/1/171/abcd31b911a095eaca9c859d5ceb8215_o2_featured_v2.jpg?output-format=webp",
      discountText: "50% OFF",
      rating: 4.3,
      diningRating: 3.7,
      cuisine: ["Burger", "Wraps", "Fast Food", "Beverages"],
      cost: 200,
      deliveryTime: 23,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a46a1",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
      type: "brand",
      name: "Domino's Pizza",
      imageUrl:
        "https://b.zmtcdn.com/data/dish_photos/d17/14d8197b31ae36df0b697ba52b204d17.jpeg",
      discountText: "50% OFF",
      rating: 4.2,
      diningRating: 0,
      cuisine: ["Pizza", "Fast Food"],
      cost: 200,
      deliveryTime: 30,
      safeDelivery: false,
    },
    {
      _id: "65e9f64a31797c39a87a469e",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp",
      type: "brand",
      name: "Bikkgane Biryani",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg",
      discountText: "50% OFF",
      rating: 4.1,
      diningRating: 3.9,
      cuisine: ["North Indian", "Biryani", "Hyderabadi", "Andhra", "Mughlai"],
      cost: 250,
      deliveryTime: 18,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a469f",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
      type: "brand",
      name: "Burger King",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg",
      discountText: "50% OFF",
      rating: 4.2,
      diningRating: 3.6,
      cuisine: ["Burger", "Shake", "Fast Food", "Desserts"],
      cost: 250,
      deliveryTime: 23,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a46b4",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
      type: "brand",
      name: "Haldiram's",
      imageUrl:
        "https://b.zmtcdn.com/data/dish_photos/7e1/2774be09bd6b1b2f45508ceb350cb7e1.png",
      discountText: "50% OFF",
      rating: 3.8,
      diningRating: 2.6,
      cuisine: [
        "North Indian",
        "Chinese",
        "South Indian",
        "Street Food",
        "Continental",
        "Mithai",
        "Beverages",
        "Desserts",
      ],
      cost: 250,
      deliveryTime: 33,
      safeDelivery: false,
    },
    {
      _id: "65e9f64a31797c39a87a4697",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
      type: "brand",
      name: "KFC",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/1/931/73fb3feeb849e1ed0ceb2c36b0643f55_o2_featured_v2.jpg?output-format=webp",
      discountText: "50% OFF",
      rating: 4.2,
      diningRating: 3.7,
      cuisine: ["Burger", "Fast Food", "Biryani", "Desserts", "Beverages"],
      cost: 200,
      deliveryTime: 12,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a46b7",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
      type: "brand",
      name: "Subway",
      imageUrl:
        "https://b.zmtcdn.com/data/dish_photos/af6/e48ec990ff80206d2445092a75673af6.jpg",
      discountText: "50% OFF",
      rating: 3.9,
      diningRating: 3.4,
      cuisine: [
        "Healthy Food",
        "Sandwich",
        "Fast Food",
        "Wraps",
        "Salad",
        "Beverages",
      ],
      cost: 300,
      deliveryTime: 17,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a46a0",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/36fe2c2e5b191e58adf5d571931bc50e1698645278.png?output-format=webp",
      type: "brand",
      name: "Bheemeshwara",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/2/20551982/fd160ef7fece200d9a9607bf1ee2a17c_o2_featured_v2.jpg",
      discountText: "50% OFF",
      // name: "Bheemeshwara - A South Indian Delicacy",
      rating: 4.1,
      diningRating: 4.1,
      cuisine: ["South Indian", "Biryani", "Andhra", "Desserts", "Beverages"],
      cost: 250,
      deliveryTime: 20,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a46b3",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
      type: "brand",
      name: "Bikanerwala",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg",
      discountText: "50% OFF",
      rating: 4.3,
      diningRating: 3.5,
      cuisine: [
        "Mithai",
        "North Indian",
        "South Indian",
        "Street Food",
        "Fast Food",
        "Juices",
        "Beverages",
        "Desserts",
      ],
      cost: 250,
      deliveryTime: 25,
      safeDelivery: true,
    },
    {
      _id: "65e9f64a31797c39a87a4695",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
      type: "brand",
      name: "Pizza Hut",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/6/246/e81f66522df2f3dbc3c9d0aa3ce0756d_o2_featured_v2.jpg?output-format=webp",
      discountText: "50% OFF",
      rating: 3.9,
      diningRating: 3.3,
      cuisine: ["Pizza", "Fast Food", "Italian"],
      cost: 200,
      deliveryTime: 25,
      safeDelivery: true,
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
