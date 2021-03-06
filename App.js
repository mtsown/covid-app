import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/routes/RootNavigator';
import Home from './src/screens/Home';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (<Home />);
};

export default App;
