import React from 'react';
import Styled from 'styled-components/native';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

import { Spacer } from '../Spacer/Spacer.component';
import CompactRestaurantInfoCard from '../restaurant/CompactRestaurantInfoCard.component';

const FavouritesWrapper = Styled.View`
  padding: 10px;
`;

const FavouriteBar = ({ favourites, onNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => (
          <Spacer position={'left'} size={'medium'} key={restaurant.name}>
            <TouchableOpacity
              onPress={() => {
                onNavigate('RestaurantsDetail', {
                  restaurant,
                });
              }}
            >
              <CompactRestaurantInfoCard restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouriteBar;
