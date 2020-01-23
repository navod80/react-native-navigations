import React from 'react';
import { View, TouchableOpacity, Text, Stylesheet } from 'react-native';
import Background from '../components/backgroundImage';

const MyNotificationsScreen = (props) => {
  
    return (
        <Background>
        <View style={styles.container}>
          <Text style={styles.Intext}>Notfications</Text>
        </View>
      </Background>
      );
    }

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

export default MyNotificationsScreen;