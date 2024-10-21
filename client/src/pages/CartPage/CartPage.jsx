import React, { useEffect, useState } from "react";
import {
  addToCartThunk,
  clearCartThunk,
  getCartThunk,
  removeFromCart,
} from "../../store";
import { Link, useParams } from "react-router-dom";
import { useThunk } from "../../customHooks/useThunk";
import { useSelector } from "react-redux";
import veg from "../../assets/veg.svg";
import nonVeg from "../../assets/non-veg.svg";
import { FaCaretRight } from "react-icons/fa";
import emptyCart from "../../assets/empty-cart.webp";
import { Spinner, useToast } from "@chakra-ui/react";

const CartPage = () => {
  const [runGetCartThunk, _, fetchingCartLoader] = useThunk(getCartThunk);
  const [removeFromCartThunk, __, removingLoader] = useThunk(removeFromCart);
  const [runAddToCartThunk, ___, addingLoader] = useThunk(addToCartThunk);
  const [runClearCartThunk, ____, clearCartLoading] = useThunk(clearCartThunk);
  const { userId } = useParams();
  const { cart } = useSelector((state) => state.user);
  const toast = useToast();

  useEffect(() => {
    const argument = {
      userId,
      token: localStorage.getItem("token"),
    };

    runGetCartThunk(argument);
  }, [runGetCartThunk]);

  //   console.log(cart);

  const handleMinusButton = (foodId) => {
    const argument = {
      userId,
      foodId,
      quantity: 1,
      token: localStorage.getItem("token"),
    };
    removeFromCartThunk(argument);
  };

  const handleAddButton = (foodId) => {
    const argument = {
      userId,
      foodId,
      quantity: 1,
      token: localStorage.getItem("token"),
    };
    runAddToCartThunk(argument);
  };

  const cartItemsJsx = cart?.map((item) => {
    const { _id, imageUrl, name, vegOrNonVeg, description, price } =
      item.foodId;

    return (
      <>
        <div key={_id} className="flex items-center gap-1 justify-between">
          <section className="flex gap-2 justify-start">
            <div className="relative w-26 h-16 rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
              <img
                src={vegOrNonVeg === "veg" ? veg : nonVeg}
                alt={vegOrNonVeg}
                className="absolute top-2 right-2 bg-white rounded-sm"
              />
            </div>

            <div>
              <span className="font-medium text-lg">{name}</span>
              <p>₹ {price}</p>
              {/* <p>{description}</p> */}
            </div>
          </section>

          <section className="flex flex-col items-end">
            <div className="flex items-center gap-3 px-2 rounded-md border-primary border bg-primary/20 font-medium">
              <span
                onClick={() => handleMinusButton(_id)}
                className="text-primary cursor-pointer"
              >
                -
              </span>
              <span className="">{item.quantity}</span>
              <span
                onClick={() => handleAddButton(_id)}
                className="text-primary cursor-pointer"
              >
                +
              </span>
            </div>
            <span>₹ {price * item.quantity}</span>
          </section>
        </div>
      </>
    );
  });

  const cartTotal = cart?.reduce(
    (acc, curr) => acc + curr.foodId.price * curr.quantity,
    0
  );

  const placeOrder = () => {
    const argument = { userId, token: localStorage.getItem("token") };
    runClearCartThunk(argument);
    toast({
      title: "Order placed successfully!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <main className="mx-20 max-[500px]:mx-7 py-4 mt-4 border-t flex flex-col items-center">
      {fetchingCartLoader ? (
        <Spinner size="xl" />
      ) : !cart?.length ? (
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-medium">Your Cart's Empty</h2>
          <img src={emptyCart} alt="decoration" className="w-80" />
          <Link
            to="/explore/order/delivery"
            className="underline text-primary text-2xl -mt-5"
          >
            Add Items Now
          </Link>
        </div>
      ) : (
        <section className="flex flex-col items-center max-[500px]:items-stretch w-[55%] max-[500px]:w-full">
          <h2 className="text-4xl font-medium mb-2">Cart items</h2>
          <div className="">
            <div className="flex flex-col gap-4 my-6">{cartItemsJsx}</div>
            <div
              onClick={placeOrder}
              className="bg-primary text-white max-[500px]:my-7 max-[500px]:mt-10 flex items-center justify-between p-4 rounded-md cursor-pointer hover:scale-105 transition-transform"
            >
              <section className="flex flex-col">
                <span className="font-medium text-lg">₹ {cartTotal}</span>
                <span className="text-sm">TOTAL</span>
              </section>
              {(addingLoader || removingLoader || clearCartLoading) && (
                <Spinner size="lg" />
              )}
              <section className="flex items-center font-medium text-lg">
                <p>Place Order</p>
                <FaCaretRight />
              </section>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CartPage;
