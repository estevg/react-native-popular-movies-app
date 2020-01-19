import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerMovie: {
		backgroundColor: 'white',
		color: '#bdc3c7',
		width: '80%',
		flexDirection: 'row',
		margin: 30,
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		borderRadius: 10
	},
	conatinerImage: {
		width: 90,
		height: 140,
		top: -10,
		right: 20,
		borderRadius: 10,
		overflow: 'hidden',
		resizeMode: 'contain',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	image: {
		width: '100%',
		height: '100%'
	},
	containerText: {
		width: '55%',
		justifyContent: 'space-around',
		alignItems: 'flex-start'
	},
	title: {
		fontFamily: 'raleway-bold',
		fontSize: 20
	},
	genre: {
		fontSize: 20,
		fontWeight: '700',
		fontFamily: 'raleway-bold'
	},
	button: {
		backgroundColor: '#0dbaff',
		height: 50,
		width: 50,
		borderRadius: 10,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		top: 40,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2
	}
});
