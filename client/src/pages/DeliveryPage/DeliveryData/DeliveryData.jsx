import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThunk } from "../../../customHooks/useThunk";
import { fetchAllDelivery } from "../../../store/thunks/fetchAllDelivery";
import RestaurantCard from "../../../components/DeliveryPage/RestaurantCard";
import { Spinner } from "@chakra-ui/react";
import { handleFilter } from "../../../store";

const DeliveryData = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const { allDeliveryRestaurants, filteredRestaurants } = useSelector(
    (state) => state.delivery
  );
  const filters = useSelector((state) => state.filters);
  const { filterCount, cuisineSelected } = useSelector(
    (state) => state.filters
  );
  const [runFetchAllDeliveryThunk, _, isLoading, error] =
    useThunk(fetchAllDelivery);

  useEffect(() => {
    runFetchAllDeliveryThunk();
  }, []);

  console.log(filteredRestaurants);

  const deliveryRestaurantsJsx =
    filteredRestaurants.length === 0 && filterCount === 0 ? (
      allDeliveryRestaurants.map((deliveryRestaurant) => {
        return (
          <RestaurantCard
            key={deliveryRestaurant._id}
            data={deliveryRestaurant}
          />
        );
      })
    ) : filteredRestaurants.length === 0 && filterCount > 0 ? (
      <div>
        <p>No such restaurants/cafes available.</p>
        <p>Try applying different filters.</p>
      </div>
    ) : (
      filteredRestaurants.map((deliveryRestaurant) => {
        return (
          <RestaurantCard
            key={deliveryRestaurant._id}
            data={deliveryRestaurant}
          />
        );
      })
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
