import React, { useState, useContext } from 'react';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Spacer } from '../../../components/Spacer/Spacer.component';
import { Text } from '../../../components/typography/Text.component';

const LoginScreen = () => {
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateEmail = text => {
    setEmail(text);
  };

  const handleUpdatePassword = text => {
    setPassword(text);
  };

  const handleLogin = () => {
    onLogin(email, password);
  };
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          value={email}
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={handleUpdateEmail}
        />
        <Spacer size="large" position="top">
          <AuthInput
            value={password}
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={handleUpdatePassword}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large" position="top">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            disabled={isLoading}
            onPress={handleLogin}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;
