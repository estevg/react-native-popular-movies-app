import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { fonts } from './assets/staticFIles';
import { cacheFonts } from './src/utils/cacheFonts';
import Home from './src/container/Home/Home';

const App = () => {
	useEffect(() => {
		const fontAssets = cacheFonts(fonts);
	});

	return (
		<View style={{ flex: 1 }}>
			<Home />
		</View>
	);
};

export default App;
