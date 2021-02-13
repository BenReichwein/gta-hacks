import { combineReducers } from 'redux';
import covidReducer from './covidReducer'
import capsuleReducer from './capsuleReducer'

export default combineReducers({
    covid: covidReducer,
    capsule: capsuleReducer
})