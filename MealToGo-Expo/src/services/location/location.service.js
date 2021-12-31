import camelize from 'camelize';
import { locations } from './location.mock';

export const locationRequest = searchTerm => {
  return new Promise((resolve, reject) => {
    const mockData = locations[searchTerm];
    if (mockData) {
      resolve(mockData);
    } else {
      reject('not found!');
    }
  });
};

export const formattedLocationResults = result => {
  const formattedLocation = camelize(result);
  const { geometry = {} } = formattedLocation.results[0];
  const { lng, lat } = geometry.location;

  return { lng, lat };
};
