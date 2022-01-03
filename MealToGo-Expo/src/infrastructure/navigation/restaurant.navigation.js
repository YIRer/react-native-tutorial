import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen.component';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="Restaurants Detail"
        component={() => <Text>Restaurants Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
