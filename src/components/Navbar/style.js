import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		height: '30%',
		width: width
		// position: 'absolute'
	},
	navbar: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		fontSize: 50,
		color: 'white',
		fontWeight: '700',
		marginHorizontal: 20,
		paddingTop: 30
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		opacity: 0.8
	}
});
