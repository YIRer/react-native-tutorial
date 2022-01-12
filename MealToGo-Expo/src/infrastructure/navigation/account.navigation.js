import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AccountNavigatior = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Account Navigator</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Login</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
