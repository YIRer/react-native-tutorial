import Styled from 'styled-components/native';

import { Card } from 'react-native-paper';

export const IconImage = Styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = Styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = Styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = Styled.View`
  padding: ${props => props.theme.space[3]};
  `;

export const Address = Styled.Text`
  font-size:${props => props.theme.fontSizes.caption};
  `;

export const RatingRow = Styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
  `;

export const IconSection = Styled.View`
  flex-direction: row;
  align-items: center;
  `;

export const StateContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
