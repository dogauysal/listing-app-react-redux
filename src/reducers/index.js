import { combineReducers } from 'redux';
import continentsReducer from './continentsReducer';
import countriesReducer from './countriesReducer';

export default combineReducers({
    continents: continentsReducer,
    countries: countriesReducer
});