import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Styled from 'styled-components/native';

import { SafeArea } from '../../../components/utility/SafeArea.component';
import { Spacer } from '../../../components/Spacer/Spacer.component';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import RestaurantsInfoCard from '../components/RestaurantsInfoCard.components';
import FavouriteBar from '../../../components/favourites/FavouritesBar.component';
import { Search } from '../components/search.component';

const RestaurantList = Styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Spiner = Styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoaderContainer = Styled.View`
  position: absolute; 
  top: 50%; 
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  const handleOnFavouritesToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={handleOnFavouritesToggle}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <LoaderContainer>
          <Spiner size={50} animating={true} color={Colors.blue300} />
        </LoaderContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RestaurantsDetail', {
                    restaurant: item,
                  });
                }}
              >
                <Spacer position={'bottom'} size="large">
                  <RestaurantsInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
