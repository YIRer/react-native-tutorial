import React from 'react';
import { SvgXml } from 'react-native-svg';
import Styled from 'styled-components/native';

import { Spacer } from '../../../components/Spacer/Spacer.component';
import { Text } from '../../../components/typography/Text.component';
import Favourite from '../../../components/favourites/Favourite.component';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  RatingRow,
  IconSection,
  StateContainer,
  IconImage,
} from './RestaurantsInfoCard.styles';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RedLabel = Styled(Text)`
  color: red;
`;

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Restaurant Name',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    ],
    address = '9 St',
    isOpenNow = true,
    rating = 3.4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArr = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text varient="label">{name}</Text>
        <IconSection>
          <RatingRow>
            {ratingArr.map((_, index) => (
              <SvgXml
                key={`${name}-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </RatingRow>
          <StateContainer>
            {isClosedTemporarily && (
              <RedLabel varient="label">CLOSED TEMPORARILY</RedLabel>
            )}
            <Spacer position={'left'} size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position={'left'} size="large">
              <IconImage source={{ uri: icon }} />
            </Spacer>
          </StateContainer>
        </IconSection>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;
