import { combineReducers } from 'redux';
import covidReducer from './covidReducer'
import capsuleReducer from './capsuleReducer'
import webScrapeReducer from './webScrapeReducer'

export default combineReducers({
    covid: covidReducer,
    capsule: capsuleReducer,
    webScrape: webScrapeReducer
})