import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AppContainer from '@app/navigation/AppNavigator';

const Fonts = {
  h1: 35,
  h2: 30,
  h3: 20,
  h4: 17,
  h5: 15,
  small: 10,
};

const theme = {
  ...DefaultTheme,
  fonts: {
    ...Fonts,
  },
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};
    
function App() {
  return (
    <NavigationContainer theme={theme}>
      <AppContainer />
    </NavigationContainer>
  );
}

export default App;