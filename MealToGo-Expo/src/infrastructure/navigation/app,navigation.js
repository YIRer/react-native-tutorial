import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { SafeArea } from '../../components/utility/SafeArea.component';
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen.component';
import { RestaurantNavigator } from './restaurant.navigation';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: 'restaurant',
  Maps: 'map',
  Settings: 'settings',
};

const TabBarIcon = ({ isFontAwesome, iconName, color, size }) => {
  if (isFontAwesome) {
    return <FontAwesome name={iconName} size={size} color={color} />;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ color, size }) => (
      <TabBarIcon
        isFontAwesome={route.name === 'Maps'}
        iconName={iconName}
        color={color}
        size={size}
      />
    ),
  };
};

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map Page</Text>
    </SafeArea>
  );
};

const SettingScreen = () => {
  return (
    <SafeArea>
      <Text>Setting Page</Text>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name={'Restaurants'} component={RestaurantNavigator} />
        <Tab.Screen name={'Maps'} component={MapScreen} />
        <Tab.Screen name={'Settings'} component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
