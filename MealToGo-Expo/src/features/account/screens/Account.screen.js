import React from 'react';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';

import { Spacer } from '../../../components/Spacer/Spacer.component';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          Login
        </AuthButton>
        <Spacer size="large" position="top">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
