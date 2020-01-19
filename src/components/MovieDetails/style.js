import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		marginHorizontal: 20,
		flex: 1,
		top: -70
	},
	movieDetail: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7
	},

	movieContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
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
