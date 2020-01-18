import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeMovie from '../container/Home/Home';
import HomeMovieDetail from '../container/Home/HomeDetails';

import SideMenu from './sidemenu/SideMenu';

const navOptionHandler = (navigation) => ({
	headerShown: false
});

const MovieStack = createStackNavigator({
	Movie: {
		screen: HomeMovie,
		navigationOptions: navOptionHandler
	},
	MovieDetails: {
		screen: HomeMovieDetail,
		navigationOptions: navOptionHandler
	}
});

const MainStack = createStackNavigator(
	{
		Home: {
			screen: MovieStack,
			navigationOptions: navOptionHandler
		}
	},
	{ initialRouteName: 'Home' }
);

const appDrawer = createDrawerNavigator(
	{
		drawer: MainStack
	},
	{
		contentComponent: SideMenu,
		drawerWidth: Dimensions.get('window').width * 3 / 5,
		drawerType: 'slide'
	}
);

const app = createSwitchNavigator(
	{
		app: appDrawer
	},
	{
		initialRouteName: 'app'
	}
);

export default class App extends Component {
	render() {
		const AppNavigator = createAppContainer(app);
		return <AppNavigator />;
	}
}
