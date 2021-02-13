/* eslint-disable import/no-anonymous-default-export */
import {
    TIME_CAPSULE
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case TIME_CAPSULE:
            return action.payload;
        default:
            return state;
    }
}