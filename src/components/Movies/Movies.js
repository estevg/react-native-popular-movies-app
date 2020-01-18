import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import styles from './style';

const Movie = ({ data, onPress }) => {
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
	return (
		<View key={data.id} style={styles.containerMovie}>
			<View style={styles.conatinerImage}>
				<Image source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }} style={styles.image} />
			</View>
			<View style={styles.containerText}>
				<Text style={styles.title}>{data.title}</Text>
				<Rating
					type="custom"
					imageSize={15}
					startingValue={Math.round(data.vote_average)}
					ratingCount={Math.round(data.vote_average)}
				/>
				<Text style={styles.genre}>{getGeners(data.genre_ids[0])}</Text>
			</View>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Icon name="ticket" type="font-awesome" color="#eefaff" />
			</TouchableOpacity>
		</View>
	);
};

export default Movie;
