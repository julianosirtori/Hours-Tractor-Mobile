import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import ChooseTractor from './pages/ChooseTractor';
import ChooseClient from './pages/ChooseClient';
import NewOrder from './pages/NewOrder';
import NewTractor from './pages/NewTractor';
import EditTractor from './pages/EditTractor';
import NewClient from './pages/NewClient';


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen component={Home} name="Home" />
        <AppStack.Screen component={ChooseTractor} name="ChooseTractor" />
        <AppStack.Screen component={ChooseClient} name="ChooseClient" />
        <AppStack.Screen component={NewOrder} name="NewOrder" />
        <AppStack.Screen component={NewTractor} name="NewTractor" />
        <AppStack.Screen component={EditTractor} name="EditTractor" />
        <AppStack.Screen component={NewClient} name="NewClient" />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
