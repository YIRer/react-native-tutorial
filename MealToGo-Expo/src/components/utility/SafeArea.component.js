import { StatusBar } from 'react-native';
import Styled from 'styled-components/native';

export const SafeArea = Styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
