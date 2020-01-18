import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import styles from './style';

const Navbar = ({ isHome, title, navigation, image }) => {
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient colors={[ '#3d98ff', '#673aff', '#673aff' ]} style={styles.navbar}>
				{isHome ? (
					<View>
						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={() => navigation.openDrawer()}>
								<Icon name="align-justify" type="font-awesome" color="#eefaff" />
							</TouchableOpacity>

							<Icon name="search" type="font-awesome" color="#eefaff" />
						</View>
						<Text style={styles.title}>{title}</Text>
					</View>
				) : (
					<ImageBackground
						source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
						style={styles.imageContainer}
					>
						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<Icon name="arrow-left" type="font-awesome" color="#eefaff" />
							</TouchableOpacity>
							<Icon name="comments" type="font-awesome" color="#eefaff" />
						</View>
						<Text style={styles.title}>{title}</Text>
					</ImageBackground>
				)}
			</LinearGradient>
		</SafeAreaView>
	);
};

export default Navbar;
