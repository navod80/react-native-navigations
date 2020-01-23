import React from 'react';
import { StyleSheet, View } from 'react-native';

const DividerFunc = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

export default DividerFunc;

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 60
    }
})