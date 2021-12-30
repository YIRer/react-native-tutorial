import React, { useState, createContext, useEffect, useMemo } from 'react';
import {
  restaurantsRequest,
  formattedRestaurantsResults,
} from './restaurants.service';

export const RestaurantContext = createContext();
export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retriveRestaurants = async () => {
    try {
      setIsLoading(true);
      const res = await restaurantsRequest();
      const formattedData = formattedRestaurantsResults(res);
      setRestaurants(formattedData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);
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
