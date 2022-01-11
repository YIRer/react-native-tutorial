import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const saveFavourites = async value => {
    try {
      const jsonData = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites');
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const add = restaurant => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = restaurant => {
    const filteredFavourites = favourites.filter(
      item => item.placeId !== restaurant.placeId,
    );

    setFavourites(filteredFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite: add,
        removeFavourite: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
