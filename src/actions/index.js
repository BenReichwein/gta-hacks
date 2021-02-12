import axios from 'axios'
import {
    COVID_TRACKER
} from './types'
//
// -> Covid Tracker
//
export const covidTracker = () => async (dispatch) => {
    let response = await axios.get('https://api.covid19tracker.ca/summary')
    let data = await response.data;

    dispatch({ type: COVID_TRACKER, payload: data});
}