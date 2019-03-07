import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Details extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('title', 'Default title'),
        header: navigation.getParam('header'),
        tabBarVisible: navigation.getParam('tabVisible', false),
        headerRight: <TouchableOpacity style={{ width: 20, height: 20, marginRight: 10, borderRadius: 10 }} onPress={() => {
            navigation.setParams({ variable: 'Variable from the Details Screen' })
        }} >
            <Icon
                name={'variable'}
                type='material-community'
            />
        </TouchableOpacity>
    });

    state = {
        show: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate() {
        console.log('Will update')
    }

    componentDidUpdate() {
        console.log('Did update')
    }

    componentDidMount() {
        console.log('Did mount');
    }

    render() {

        const variable = this.props.navigation.getParam('variable', 'Without value')

        return (
            <View style={styles.container} >

                <Text>{variable}</Text>

                <Button style={{ width: 100, height: 100 }} title='Change Title' onPress={() => {
                    this.props.navigation.setParams({ title: 'Details' });
                }} />

                <Button style={{ width: 100, height: 100 }} title='Change Variable' onPress={() => {
                    this.props.navigation.setParams({ variable: 'I change the Variable' });
                }} />

                <Button style={{ width: 100, height: 100 }} title='Hide the header' onPress={() => {
                    this.props.navigation.setParams({ header: null });
                }} />

                <Button style={{ width: 100, height: 100 }} title='Show the header' onPress={() => {
                    this.props.navigation.setParams({ header: undefined });
                }} />

                <Button style={{ width: 100, height: 100 }} title='Hide Tab' onPress={() => {
                    this.props.navigation.navigate('HomeTab', { tabVisible: false });
                }} />

                <Button style={{ width: 100, height: 100 }} title='Show Tab' onPress={() => {
                    this.props.navigation.navigate('HomeTab', { tabVisible: true });
                }} />

                <Button style={{ width: 100, height: 100 }} title='Call Screen Details Again ' onPress={() => {
                    this.props.navigation.push('Details');
                }} />

                <Button style={{ width: 100, height: 100 }} title='Go to The First Details Screen' onPress={() => {
                    this.props.navigation.navigate('Details');
                }} />

                <Button style={{ width: 100, height: 100 }} title='Click to update the actually screen' onPress={() => {
                    this.setState({ container: 2 })
                }} />

                <Button style={{ width: 100, height: 100 }} title='Go Back' onPress={() => {
                    this.props.navigation.goBack();
                }} />

                <Button style={{ width: 100, height: 100 }} title='Go Back to the first screen' onPress={() => {
                    this.props.navigation.popToTop();
                }} />

                <Button style={{ width: 100, height: 100 }} title='Show button in the underside' onPress={() => {
                    this.props.navigation.navigate('HomeTab', { tabVisible: false });
                    this.setState({ show: true })
                }} />

                {

                    this.state.show &&

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70, width: 150, height: 40, backgroundColor: 'green', borderRadius: 100, marginRight: 10 }} onPress={() => {
                            this.props.navigation.navigate('HomeTab', { tabVisible: true });
                            this.setState({ show: false })
                        }} >
                            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Save Button</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70, width: 150, height: 40, backgroundColor: 'black', borderRadius: 100 }} onPress={() => {
                            this.props.navigation.navigate('HomeTab', { tabVisible: true });
                            this.setState({ show: false })
                        }} >
                            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                }

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
