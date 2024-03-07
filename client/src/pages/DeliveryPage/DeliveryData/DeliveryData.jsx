import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../../../customHooks/useThunk";
import { fetchAllDelivery } from "../../../store/thunks/fetchAllDelivery";
import RestaurantCard from "../../../components/DeliveryPage/RestaurantCard";
import { Spinner } from "@chakra-ui/react";

const DeliveryData = () => {
  const location = useSelector((state) => state.location);
  const deliveryRestaurants = useSelector((state) => state.delivery);
  const [runFetchAllDeliveryThunk, _, isLoading, error] =
    useThunk(fetchAllDelivery);

  useEffect(() => {
    runFetchAllDeliveryThunk();
  }, []);

  console.log(deliveryRestaurants);

  const deliveryRestaurantsJsx = deliveryRestaurants.map(
    (deliveryRestaurant) => {
      return <RestaurantCard data={deliveryRestaurant} />;
    }
  );

  return (
    <div className="px-20 py-8">
      <h2 className="text-3xl mb-8">
        Delivery Restaurants {location && `in ${location}`}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {isLoading ? (
          <Spinner
            size="xl"
            color="red.400"
            thickness="5px"
            emptyColor="gray.200"
          />
        ) : (
          deliveryRestaurantsJsx
        )}
      </div>
    </div>
  );
};

export default DeliveryData;
