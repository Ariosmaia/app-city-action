import React from 'react';
import { AppLoading } from 'expo';
import { View, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';

import AppProvider from './src/hooks';

import Routes from './src/routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#3C3C3C',
  },
};

const App: React.FC = () => {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#454372" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#3C3C3C' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
