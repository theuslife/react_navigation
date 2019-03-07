import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class settings extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('title', 'Settings'),
    });

    render() {
        return (
            <View style={styles.container} >
                <Text> Hello Matheus </Text>
                <Text> You are in the settings screen : ) </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
