import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (<View><Text>Home</Text></View>);
};

export default App;
