import React, { useState, useEffect, createContext } from 'react';
import { formattedLocationResults, locationRequest } from './location.service';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocaion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async searchKeyword => {
    try {
      if (!searchKeyword.length) {
        return;
      }

      const res = await locationRequest(searchKeyword.toLowerCase());
      const formattedData = formattedLocationResults(res);
      setLocaion(formattedData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = searchKeyword => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        search: handleSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
