/* eslint-disable import/no-anonymous-default-export */
import {
    WEB_SCRAPE
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case WEB_SCRAPE:
            return action.payload;
        default:
            return state;
    }
}