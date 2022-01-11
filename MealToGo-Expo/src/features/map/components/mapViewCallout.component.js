import React from 'react';
import CompactRestaurantInfoCard from '../../../components/restaurant/CompactRestaurantInfoCard.component';

const MapViewCallout = ({ restaurant }) => {
  return <CompactRestaurantInfoCard restaurant={restaurant} isWebView={true} />;
};

export default MapViewCallout;
