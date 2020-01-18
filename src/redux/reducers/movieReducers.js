import {
    FETCH_MOVIES_PENDING,
    FETCH_MOVIES_SUCCEEDED,
    FETCH_MOVIES_FAILED,

    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_SUCCEEDED,
    FETCH_MOVIE_FAILED
} from '../types'



const initialState = {
    movies: [],
    error: null,
    loading: false,
    movie: {},
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                loading: true,
                movies: [],
                movie: {}
            }
        case FETCH_MOVIES_SUCCEEDED: 
            return {
                ...state,
                loading: false,
                movies: action.payload,
                movie: {}
            }
        case FETCH_MOVIES_FAILED: 
            return {
                ...state,
                movies: [],
                error: true,
                loading: false,
                movie: {}
            }

        case FETCH_MOVIE_PENDING: 
            return {
                ...state,
                loading: true,
                movie: {}
            }
        case FETCH_MOVIE_SUCCEEDED: 
            return {
                ...state,
                loading: false,
                movie: action.payload
            }
        case FETCH_MOVIE_FAILED: 
            return {
                ...state,
                movie: {},
                error: true,
                loading: false
            }


            default:
                return state;
    }
}