import {
    UPDATE_SCHEDULE
} from '../actions/schedule'

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SCHEDULE:
            return action.payload
        default:
            return state;
    }
};
