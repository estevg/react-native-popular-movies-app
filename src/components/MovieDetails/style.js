import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		marginHorizontal: 20,
		flex: 1,
		top: -70,
		height: '100%',
		width: '90%'
	},
	movieDetail: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
		overflow: 'hidden',
		flex: 1,
		alignItems: 'center'
	},

	movieContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 50,
		marginHorizontal: 10
	},
	imageContainer: {
		width: 150,
		height: 200,
		marginRight: 20,
		borderRadius: 20,
		overflow: 'hidden',
		resizeMode: 'contain',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7
	},
	image: {
		width: '100%',
		height: '100%'
	},
	textContainer: {
		flexDirection: 'column',
		width: '50%',
		justifyContent: 'space-around',
		alignItems: 'flex-start'
		// top: 30
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
		marginBottom: 50
	},
	textOverview: {
		fontFamily: 'raleway-bold',
		fontSize: 16
	},
	buttonContainer: {
		backgroundColor: '#0dbaff',
		height: 60,
		width: '100%',
		borderRadius: 10,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: '#0dbaff',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		justifyContent: 'space-around'
	},
	textButton: {
		color: 'white',
		fontFamily: 'raleway-bold',
		fontSize: 25,
		marginRight: 10
	}
});
