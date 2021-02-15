import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Onboarding from '../screens/Onboarding';
import Home from '../screens/Home';
import { SCREENS_NAVIGATION } from '../constants/navigation';

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode='none'>
      <AppStack.Screen name={SCREENS_NAVIGATION.ONBOARDING_SCREEN} component={Onboarding} />
      <AppStack.Screen name={SCREENS_NAVIGATION.HOME_SCREEN} component={Home} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
