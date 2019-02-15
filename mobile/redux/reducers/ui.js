import {SHOW_SPINNER, HIDE_SPINNER, SHOW_ERROR, CLEAR_ERROR} from "../actions/ui";
import {API_REQUEST_SUCCESS} from "../actions/api";

const initUi = {
    pending: false,
    error: {
        has: false,
        message: ''
    },
    success: false
};

export function uiReducer(state = initUi, action) {

    switch (action.type) {
        case SHOW_SPINNER:
            return {...state, pending: true, success: false};

        case HIDE_SPINNER:
            return {...state, success: false, pending: false};

        case SHOW_ERROR:
            return {...state, error: {has: true, message: action.payload.message}, success: false};

        case CLEAR_ERROR:
            return {...state, error: {has: false, message:'' }};

        case API_REQUEST_SUCCESS:
            return {...state, success: true};

        default:
            return state;
    }
}
