import React from 'react';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import changePasswordScreen from '../screens/changePassword';

import screen1Screen from '../screens/screen1';
import screeen2Screen from '../screens/screeen2';

const TabNavigator = createMaterialTopTabNavigator({
    screen1: screen1Screen,
    screeen2: screeen2Screen,
  });
  
export default createAppContainer(TabNavigator);
  