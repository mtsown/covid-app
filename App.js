import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Onboarding from './src/screens/Onboarding';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (<Onboarding />);
};

export default App;
