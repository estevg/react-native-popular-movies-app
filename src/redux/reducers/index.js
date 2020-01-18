import { combineReducers } from 'redux';
import movieReducers from './movieReducers'

export default combineReducers({
    movies: movieReducers
})