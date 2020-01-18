import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginTop: 200,
		flex: 1,
		justifyContent: 'space-around',
		top: -30
	},
	movieContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	imageContainer: {
		width: 150,
		height: 200,
		marginRight: 20
	},
	image: {
		width: 150,
		height: 200,
		borderRadius: 20,
		resizeMode: 'center'
	},
	textContainer: {
		flex: 1,
		flexDirection: 'column',
		width: '50%',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		top: 30
	},
	title: {
		fontFamily: 'raleway-bold',
		fontSize: 30,
		marginBottom: 20
	},
	tagline: {
		fontFamily: 'raleway-regular',
		fontSize: 15,
		marginTop: 20
	},
	overviewContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	textOverview: {
		fontFamily: 'raleway-bold',
		fontSize: 16
	},
	buttonContainer: {
		backgroundColor: '#0dbaff',
		height: 50,
		width: '100%',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	textButton: {
		color: 'white',
		fontFamily: 'raleway-bold',
		fontSize: 20,
		marginRight: 10
	}
});
