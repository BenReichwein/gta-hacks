import axios from 'axios'
import {
    COVID_TRACKER,
    TIME_CAPSULE
} from './types'
//
// -> Covid Tracker
//
export const covidTracker = () => async (dispatch) => {
    let response = await axios.get('https://api.covid19tracker.ca/summary')
    let data = await response.data;

    dispatch({ type: COVID_TRACKER, payload: data});
}
//
// -> Time Capsule
//
export const postTimeCapsule = (formValues) => async (dispatch) => {
    const response = await axios.post('http://localhost:8080/notes', {
        from: formValues.from,
        note: formValues.note
    })
    let data = await response.data;

    dispatch({ type: TIME_CAPSULE, payload: data})
}

export const getTimeCapsule = () => async (dispatch) => {
    const response = await axios.get('http://localhost:8080/notes')
    let data = await response.data;

    dispatch({ type: TIME_CAPSULE, payload: data});
}