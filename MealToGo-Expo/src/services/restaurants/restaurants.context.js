import React, { useState, createContext, useEffect, useContext } from 'react';
import {
  restaurantsRequest,
  formattedRestaurantsResults,
} from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();
export const RestaurantProvider = ({ children }) => {
  const { location } = useContext(LocationContext);

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retriveRestaurants = async location => {
    try {
      setIsLoading(true);
      const res = await restaurantsRequest(location);
      const formattedData = formattedRestaurantsResults(res);
      setRestaurants(formattedData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      retriveRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
