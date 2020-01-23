import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Background from '../components/backgroundImage';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import screen1Screen from '../screens/screen1';
import screeen2Screen from '../screens/screeen2';
import TabNavigator from '../navigation/TabNavigation';

const changePasswordScreen = (props) => {
    return (
      <Background>
        <View><TouchableOpacity onPress={()=> props.navigation.openDrawer()}><Text style={styles.Intext}>go</Text></TouchableOpacity></View>
        <View style={styles.container}>
          <Text style={styles.Intext}>Change password</Text>
        </View>
        <TabNavigator />
      </Background>
    );
  }

const MyNotificationsScreen = (props) => {

  return (
      <Background>
        <TouchableOpacity onPress={()=> props.navigation.openDrawer()}><Text style={styles.Intext}>go</Text></TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.Intext}>Notifications</Text>
      </View>
      <TabNavigator />
    </Background>
    );
  }

const MyDrawerNavigator = createDrawerNavigator({
      Password: {
        screen: changePasswordScreen,
      },
      Notifications: {
        screen: MyNotificationsScreen,
      },
    });
    
const MyApp = createAppContainer(MyDrawerNavigator);
  
  const styles = StyleSheet.create({
    container: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextWord: {
        marginTop: 50,
        justifyContent:'center', 
        alignItems:'center',
        width:'100%',
        marginBottom: 45
      },
      Intext: {
        color: '#FFFFFF', 
        fontSize: 20
      },
      Text: {
        color: '#FFFFFF',
        marginLeft: 40,
      },
      icon: {
        width: 24,
        height: 24,
      },
  });
  
export default MyApp;