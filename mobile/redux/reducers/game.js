import {
    UPDATE_GAME
} from '../actions/game'


const INITIAL_STATE = {
    total_points: 0,
    ranking_position: 0
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_GAME:
            return action.payload
        default:
            return state;
    }
};
