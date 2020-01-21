import React, { useEffect } from 'react';
import { View } from 'react-native';
import { fonts } from './assets/staticFIles';
import { cacheFonts } from './src/utils/cacheFonts';
import Home from './src/container/Home/Home';
import AppNavigator from './src/navegation'
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
useEffect(() => {
	const fontAssets = cacheFonts(fonts);
});

	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<AppNavigator />
			</View>
		</Provider>
	);
};

export default App;
