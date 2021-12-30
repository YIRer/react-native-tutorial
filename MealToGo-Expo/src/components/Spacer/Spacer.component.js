import React from 'react';
import Styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = Styled.View`
  ${({ variant }) => variant};
`;

// 안드로이드에서는 동적 변환을 바로 적용이 안되는 문제가 있어 미리 계산 후 적용하도록 구성
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'left',
  size: 'small',
};
