import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MovieDetail from '../../components/MovieDetails/MovieDetail';
// Components
import Navbar from '../../components/Navbar/Navbar';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/actions/MovieActions';

const HomeDetails = (props) => {
	const { id } = props.navigation.state.params;

	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getMovie(id));
		},
		[ dispatch, id ]
	);

	const data = useSelector((state) => state.movies.movie);

	if (!data) return null;
	return (
		<View style={styles.container}>
			<Navbar navigation={props.navigation} image={data.backdrop_path} />
			<MovieDetail data={data} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

export default HomeDetails;
