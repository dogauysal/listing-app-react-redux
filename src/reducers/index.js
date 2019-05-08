import { combineReducers } from 'redux';
import continentsReducer from './continentsReducer';

export default combineReducers({
    continents: continentsReducer
});