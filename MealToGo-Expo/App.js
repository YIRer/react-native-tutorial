import React from 'react';
import { initializeApp } from 'firebase/app';

import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { AuthenticationProvider } from './src/services/authentication/authentication.context';
import { RestaurantProvider } from './src/services/restaurants/restaurants.context';
import { LocationProvider } from './src/services/location/location.context';
import { FavouritesProvider } from './src/services/favourites/favourites.context';

import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyAp7sOJlVu0lDNrx4Z5ZxZZo28lQMp9OKU',
  authDomain: 'mealtogo-5ce3f.firebaseapp.com',
  projectId: 'mealtogo-5ce3f',
  storageBucket: 'mealtogo-5ce3f.appspot.com',
  messagingSenderId: '212388360740',
  appId: '1:212388360740:web:cac72b89bb048e8e451eb1',
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <FavouritesProvider>
            <LocationProvider>
              <RestaurantProvider>
                <Navigation />
              </RestaurantProvider>
            </LocationProvider>
          </FavouritesProvider>
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
