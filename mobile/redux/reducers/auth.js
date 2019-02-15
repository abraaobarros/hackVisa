import {AUTH_LOGOUT, IS_LOGGED_FALSE, IS_LOGGED_OK, LOGIN_SUCCESS, VALID_EMAIL_SUCCESS} from "../actions/auth";

const initUi = {
    auth: {},
    logged:false
};

export function authReducer(state = initUi, action) {

    switch (action.type) {

        case VALID_EMAIL_SUCCESS:
            return {...state, ...action.payload};

        case LOGIN_SUCCESS:
            return {...state, ...action.payload};

        case IS_LOGGED_OK:
            return {...state, logged:true};

        case IS_LOGGED_FALSE:
            return {...state, logged:false};

        case AUTH_LOGOUT:
            return {...state, logged:false}

        default:
            return state;
    }
}
