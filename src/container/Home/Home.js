import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
// Components
import Movie from '../../components/Movies/Movies';
import Navbar from '../../components/Navbar/Navbar';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions/MovieActions';

const MovieHome = (props) => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			const getmovies = () => dispatch(getMovies());
			getmovies();
		},
		[ dispatch ]
	);

	const data = useSelector((state) => state.movies.movies);

	const viewMovie = (item) => {
		props.navigation.dispatch(
			NavigationActions.navigate({
				routeName: 'MovieDetails',
				params: {
					id: item.id
				}
			})
		);
	};

	if (!data) return null;

	return (
		<View style={{ flex: 1 }}>
			<Navbar isHome={true} title="Today" navigation={props.navigation} />
			<View style={styles.container}>
				<FlatList
					showsVerticalScrollIndicator={false}
					ScrollView={true}
					data={data}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => (
						<Movie
							data={item}
							onPress={() => {
								viewMovie(item);
							}}
						/>
					)}
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

export default MovieHome;
