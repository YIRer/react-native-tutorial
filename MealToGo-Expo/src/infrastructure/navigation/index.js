import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app.navigation';
import { AccountNavigatior } from './account.navigation';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {
  const { isAuthentication } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthentication ? <AppNavigator /> : <AccountNavigatior />}
    </NavigationContainer>
  );
};
