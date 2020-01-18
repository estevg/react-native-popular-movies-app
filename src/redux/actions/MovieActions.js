import {
	FETCH_MOVIES_PENDING,
	FETCH_MOVIES_SUCCEEDED,
	FETCH_MOVIES_FAILED,
	FETCH_MOVIE_PENDING,
	FETCH_MOVIE_SUCCEEDED,
	FETCH_MOVIE_FAILED
} from '../types';

import clienteAxios from '../config/axios';

/// Acción para buscar todos los hoteles
export function getMovies() {
	return (dispatch) => {
		dispatch(getMoviesPeding());

		clienteAxios
			.get('/top-movie')
			.then((res) => {
				// console.log(res)
				dispatch(getMoviesSucceeded(res.data));
			})
			.catch((error) => {
				// console.log(error)
				dispatch(getMoviesFailed());
			});
	};
}

export const getMoviesPeding = () => ({
	type: FETCH_MOVIES_PENDING
});

export const getMoviesSucceeded = (movies) => ({
	type: FETCH_MOVIES_SUCCEEDED,
	payload: movies
});

export const getMoviesFailed = () => ({
	type: FETCH_MOVIES_FAILED
});





// Acción cuando seleccionan un hotel
export function getMovie(id) {
	return (dispatch) => {
		dispatch(getMoviePeding());

		clienteAxios
			.get(`/detail-movie/${id}`)
			.then((res) => {
				// console.log(res)
				dispatch(getMovieSucceeded(res.data));
			})
			.catch((error) => {
				// console.log(error)
				dispatch(getMovieFailed());
			});
	};
}

export const getMoviePeding = () => ({
	type: FETCH_MOVIE_PENDING
});

export const getMovieSucceeded = (movie) => ({
	type: FETCH_MOVIE_SUCCEEDED,
	payload: movie
});

export const getMovieFailed = () => ({
	type: FETCH_MOVIE_FAILED
});
