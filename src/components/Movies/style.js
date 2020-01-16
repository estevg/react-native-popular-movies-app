import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerMovie: {
		backgroundColor: 'white',
		borderWidth: StyleSheet.hairlineWidth,
		color: '#bdc3c7',
		width: '80%',
		flexDirection: 'row',
		margin: 30,
		borderRadius: 10,
		justifyContent: 'space-between',
	},
	conatinerImage: {
		width: 70,
		height: 140
	},
	image: {
		width: 90,
		height: 145,
		top: -10,
		right: 30,
		borderRadius: 20,
		resizeMode: 'center'
	},
	containerText: {
		width: '60%',
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
		justifyContent: 'center',
		alignItems: 'center',
		top: 40
	}
});
