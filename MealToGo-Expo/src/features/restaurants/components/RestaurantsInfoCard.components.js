import React from 'react';
import Styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = Styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = Styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = Styled.Text`
  padding: ${props => props.theme.space[3]};
  color:${props => props.theme.colors.ui.primary};
  font-family:${props => props.theme.fonts.body};
`;

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Restaurant Name',
    icon,
    photos = 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    address = '레스토랑 주소',
    openingNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <RestaurantCardCover
        key={name}
        style={styles.cover}
        source={{ uri: photos }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
  cover: {},
});
