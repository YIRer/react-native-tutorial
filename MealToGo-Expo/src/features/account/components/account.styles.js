import Styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors';

import HomeBg from '../../../../assets/home_bg.jpg';

export const AccountBackground = Styled.ImageBackground.attrs({
  source: HomeBg,
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = Styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = Styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
`;

export const AuthButton = Styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${props => props.theme.space[2]};
`;

export const AuthInput = Styled(TextInput)`
  width: 300px;
`;
