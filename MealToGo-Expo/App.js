import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { RestaurantProvider } from './src/services/restaurants/restaurants.context';
import { LocationProvider } from './src/services/location/location.context';

import { Navigation } from './src/infrastructure/navigation';

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantProvider>
            <Navigation />
          </RestaurantProvider>
        </LocationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
