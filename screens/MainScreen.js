import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

import Background from '../components/backgroundImage';
import DividerFunc from '../components/divider';
import ForButton from '../components/forwardButton';

const MainScreen = (props) => {
    return (
        <Background>
            <View style={styles.TextWord}>
                <Text style={styles.Intext}>Roy Spencer</Text>
                <Text style={styles.Intext}>roy_spencer@gmail.com</Text>
            </View>
            <DividerFunc>
                <Text style={styles.Intext}>Notifications</Text>
                <SwitchToggle />
            </DividerFunc>
            <DividerFunc>
              <Text style={styles.Intext}>Language</Text>
              <Text style={styles.Intext}>English <ForButton /></Text>
            </DividerFunc>
          <TouchableOpacity onPress={()=> props.navigation.navigate('Password')}>
            <DividerFunc>
                <Text style={styles.Intext}>Add/Remove Number</Text>
                <ForButton />
            </DividerFunc>
          </TouchableOpacity>
            <DividerFunc>
                <Text style={styles.Intext}>Change Password</Text>
                <ForButton />
            </DividerFunc>
        </Background>
    )
}

export default MainScreen;


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },
    TextWord: {
        marginTop: 280,
        justifyContent:'center', 
        alignItems:'center',
        width:'100%',
        marginBottom: 45
      },
      Intext: {
        color: '#FFFFFF', 
      }
})