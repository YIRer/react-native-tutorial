import React from 'react';
import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen.component';
import RestaurantDetailScreen from '../../features/restaurants/screens/RestaurantDetailScreen.component';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      {...TransitionPresets.ModalPresentationIOS}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
