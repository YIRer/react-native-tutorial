import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components/native";

import RestaurantsInfoCard from "../components/RestaurantsInfoCard.components";

const RestaurantContainer = Styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = Styled.View`
  padding: ${(props) => props.theme.space[2]};
  `;

const RestaurantCardsContainer = Styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantsScreen = () => {
  return (
    <RestaurantContainer>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>
      <RestaurantCardsContainer>
        <RestaurantsInfoCard />
      </RestaurantCardsContainer>
    </RestaurantContainer>
  );
};

export default RestaurantsScreen;
