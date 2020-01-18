import React from 'react';
import { Image, View, Text } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import styles from './style';

const MovieDetail = ({ data }) => {
	if (!data.vote_average) return null;
	return (
		<View style={styles.container}>
			<View style={styles.movieContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }}
						style={styles.image}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{data.title}</Text>
					<Rating
						type="custom"
						imageSize={15}
						startingValue={Math.round(data.vote_average)}
						ratingCount={Math.round(data.vote_average)}
					/>

					{data.tagline ? <Text style={styles.tagline}>"{data.tagline}"</Text> : null}
				</View>
			</View>
			<View style={styles.overviewContainer}>
				<Text style={styles.textOverview}>{data.overview}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Text style={styles.textButton}>Buy</Text>
				<Icon name="money" type="font-awesome" color="#eefaff" />
			</View>
		</View>
	);
};

export default MovieDetail;
