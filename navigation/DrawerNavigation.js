import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {changePasswordScreen} from '../screens/changePassword';
import {Notifications} from '../screens/notifications';
import Icon from 'react-native-vector-icons/Ionicons';

const MyDrawerNavigator = createDrawerNavigator({
    Password: {
      screen: changePasswordScreen,
      navigationOptions: {
          headerLeft: (
              <Icon 
                style={{padding: 10, color: 'white'}}
                onPress= {() => navigation.openDrawer()}
                name="md-menu"
                size={30}
              />
          )
      }
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
  
const DrawerNavigator = createAppContainer(MyDrawerNavigator);

export default DrawerNavigator;