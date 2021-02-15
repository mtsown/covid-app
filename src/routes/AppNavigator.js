import { StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Onboarding from '../screens/Onboarding';

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode='none'>
      <AppStack.Screen name='Onboarding' component={Onboarding} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
