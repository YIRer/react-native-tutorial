import React from 'react';
import Styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';
import { Text } from '../typography/Text.component';

const CompactImage = Styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactImageWebView = Styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = Styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';
const CompactRestaurantInfoCard = ({ restaurant, isWebView = false }) => {
  const Image = isAndroid && isWebView ? CompactImageWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant={'caption'} numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfoCard;
