import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import Styled from 'styled-components/native';

import { SafeArea } from '../../../components/utility/SafeArea.component';
import { Spacer } from '../../../components/Spacer/Spacer.component';

import RestaurantsInfoCard from '../components/RestaurantsInfoCard.components';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';

const SearchBarContainer = Styled.View`
  padding: ${props => props.theme.space[2]};
  `;

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

const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>
      {isLoading ? (
        <LoaderContainer>
          <Spiner size={50} animating={true} color={Colors.blue300} />
        </LoaderContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position={'bottom'} size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
