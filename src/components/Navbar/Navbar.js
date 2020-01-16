import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

const Navbar = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient colors={[ '#3d98ff', '#673aff', '#673aff' ]} style={styles.navbar}>
				<Text style={styles.title}>Today</Text>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Navbar;
