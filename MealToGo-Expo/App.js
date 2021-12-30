import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { SafeArea } from './src/components/utility/SafeArea.component';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen.component';
import { RestaurantProvider } from './src/services/restaurants/restaurants.context';

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

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={'Restaurants'} component={RestaurantsScreen} />
      <Tab.Screen name={'Maps'} component={MapScreen} />
      <Tab.Screen name={'Settings'} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </RestaurantProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
