import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

export default class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Matheus!</Text>
                <Button style={{ width: 100, height: 100 }} title='Details Screen' onPress={() => {
                    this.props.navigation.navigate('Details');
                }} />
            </View>
        );
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
