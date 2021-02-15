import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/routes/RootNavigator';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (<RootNavigator />);
};

export default App;
