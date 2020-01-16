import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Movie from '../../components/Movies/Movies';
import Navbar from '../../components/Navbar/Navbar';

const App = () => {
	const [ test, guardartest ] = useState([]);

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

	return (
		<View style={{ flex: 1 }}>
			<Navbar />
			<View style={styles.container}>
				<FlatList
					showsVerticalScrollIndicator={false}
					ScrollView={true}
					data={test}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => <Movie data={item} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 40,
		marginTop: 150
	}
});

export default App;
