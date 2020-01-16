import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon, Rating } from 'react-native-elements';

const App = () => {
	const [ test, guardartest ] = useState([]);
	const [ geners, guardarGenero ] = useState([]);

	useEffect(() => {
		fetch('https://apimovieapp.herokuapp.com/top-movie/')
			.then((res) => res.json())
			.then((respuesta) => {
				guardartest(respuesta);
			})
			.catch((error) => {
				console.log(error);
			});

		fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=5284936e2774291ab4701bf2b2ac9f6d&language=en-US')
			.then((res) => res.json())
			.then((respuesta) => {
				guardarGenero(respuesta);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(test);

	const getGeners = (genrsId) => {
		switch (genrsId) {
			case 12:
				return 'Adventure';
			case 16:
				return 'Animation';
			case 28:
				return 'Action';
			case 35:
				return 'Comedy';
			case 80:
				return 'Crime';
			case 99:
				return 'Documentary';
			case 18:
				return 'Drama';
			case 10751:
				return 'Family';
			case 14:
				return 'Fantasy';
			case 36:
				return 'History';
			case 27:
				return 'Horror';
			case 10402:
				return 'Music';
			case 9648:
				return 'Mystery';
			case 10749:
				return 'Romance';
			case 878:
				return 'Science Fiction';
			case 10770:
				return 'TV Movie';
			case 53:
				return 'Thriller';
			case 10752:
				return 'War';
			case 37:
				return 'Western';
			default:
				return '';
		}
	};

	if (!geners) return null;

	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ height: '30%', width: '100%', position: 'absolute' }}>
				<LinearGradient colors={[ '#3d98ff', '#673aff', '#673aff' ]} style={styles.navbar}>
					<Text style={styles.title}>Today</Text>
				</LinearGradient>
			</SafeAreaView>

			<ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 40, marginTop: 150 }}>
				{test.map((movie) => (
					<View
						key={movie.id}
						style={{
							backgroundColor: 'white',
							borderWidth: StyleSheet.hairlineWidth,
							color: '#bdc3c7',
							width: '80%',
							flexDirection: 'row',
							margin: 30,
							borderRadius: 10
						}}
					>
						<View style={{ width: 70, height: 140 }}>
							{/* <Text >Image</Text> */}
							<Image
								source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
								style={{
									width: 90,
									height: 145,
									top: -10,
									right: 30,
									borderRadius: 20,
									resizeMode: 'center'
								}}
							/>
						</View>
						<View style={{ width: '60%', justifyContent: 'space-around' }}>
							<Text style={{ fontSize: 20, fontWeight: '700' }}>{movie.title}</Text>
							<Text style={{ fontSize: 15, fontWeight: '800' }}>{getGeners(movie.genre_ids[0])}</Text>
							<Rating type="custom" imageSize={20} readonly ratingCount={parseInt(movie.vote_average)} />
						</View>
						<View
							style={{
								backgroundColor: '#0dbaff',
								height: 50,
								width: 50,
								borderRadius: 10,
								justifyContent: 'center',
								alignItems: 'center',
								top: 40
							}}
						>
							<Icon name="ticket" type="font-awesome" color="#eefaff" />
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navbar: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		fontSize: 50,
		color: 'white',
		fontWeight: '700',
		marginHorizontal: 20
	}
});
