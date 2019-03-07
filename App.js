import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from './src/home/home'
import Details from './src/home/details'
import Settings from './src/settings/settings'
import Profile from './src/settings/profile'

//Filho
const SettingsStack = createStackNavigator({
  Settings,
  Profile
});

//Filho
const HomeNavigator = createStackNavigator({
  Home,
  Details,
}, {
    initialRouteName: 'Home',
  })

//Pai
const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      tabBarVisible: navigation.getParam('tabVisible'),
      tabBarIcon: <Icon
        name='home'
      />
    })
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      tabBarVisible: navigation.getParam('tabVisible'),
      tabBarIcon: <Icon
        name='settings'
      />
    })
  }
}, {
    navigationOptions: {

      headerTitle: <View></View>
    }
  })

//Container
const AppContainer = createAppContainer(TabNavigator)

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}

