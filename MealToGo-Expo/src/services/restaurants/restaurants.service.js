import { mocks, mockImages } from './mock';
import camelize from 'camelize';
export const restaurantsRequest = location => {
  return new Promise((resolve, reject) => {
    const mockData = mocks[location];
    if (mockData) {
      resolve(mockData);
    } else {
      reject('not found!');
    }
  });
};

export const formattedRestaurantsResults = ({ results = [] }) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(p => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};
