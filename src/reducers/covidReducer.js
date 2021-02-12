/* eslint-disable import/no-anonymous-default-export */
import {
    COVID_TRACKER
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case COVID_TRACKER:
            return action.payload;
        default:
            return state;
    }
}