import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SCREENS_NAVIGATION } from '../constants/navigation';
import AppStackScreen from './AppNavigator';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name={SCREENS_NAVIGATION.APP_STACK} component={AppStackScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
