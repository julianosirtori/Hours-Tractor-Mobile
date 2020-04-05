import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import ChooseTractor from './pages/ChooseTractor';
import ChooseClient from './pages/ChooseClient';
import NewOrder from './pages/NewOrder';


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen component={Home} name="Home" />
        <AppStack.Screen component={ChooseTractor} name="ChooseTractor" />
        <AppStack.Screen component={ChooseClient} name="ChooseClient" />
        <AppStack.Screen component={NewOrder} name="NewOrder" />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
