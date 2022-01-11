import React, { useContext } from 'react';
import Styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = Styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find(
    favourite => favourite.placeId === restaurant.placeId,
  );

  const handlePressButton = () => {
    if (isFavourite) {
      removeFavourite(restaurant);
    } else {
      addFavourite(restaurant);
    }
  };

  return (
    <FavouriteButton onPress={handlePressButton}>
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};

export default Favourite;
