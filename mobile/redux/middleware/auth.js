import {
    FORGOT_PASSWORD_REQUEST,
    IS_LOGGED, IS_LOGGED_FALSE,
    IS_LOGGED_OK,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    VALID_EMAIL_REQUEST
} from "../actions/auth";
import {apiGet, apiPost} from "../actions/api";
import {getStorage, setStorage} from "../actions/localStorage";


const authHandler = ({dispatch}) => next => action => {


    if (action.type === LOGIN_REQUEST) {

        const {onSuccess, onError, email, password, url, authenticated} = action.meta;

        let auth = {username: email, password}
        dispatch(apiGet(url, {auth}, onSuccess, onError, auth, authenticated))

    }

    if (action.type === VALID_EMAIL_REQUEST) {

        const {url, onSuccess, onError, authenticated} = action.meta;
        dispatch(apiGet(url, action.payload, onSuccess, onError, authenticated))

    }

    if ( action.type === FORGOT_PASSWORD_REQUEST) {

        const {url, onSuccess, onError, authenticated} = action.meta;
        dispatch(apiPost(url, action.payload, onSuccess, onError, authenticated))

    }

    if (action.type === VALID_EMAIL_REQUEST) {

        const {url, onSuccess, onError, authenticated} = action.meta;
        dispatch(apiGet(url, action.payload, onSuccess, onError, authenticated))

    }

    if (action.type === IS_LOGGED) {
        dispatch(getStorage("username", IS_LOGGED_OK, IS_LOGGED_FALSE, IS_LOGGED_FALSE));
    }

    return next(action);
};

const authProcess = ({dispatch}) => next => action => {

    if (action.type === LOGIN_SUCCESS) {
        dispatch(setStorage('username', action.payload.auth.username))
        dispatch(setStorage('password', action.payload.auth.password))
        dispatch(setStorage('loggedUser', action.payload.auth))
    }

    return next(action);
}


export const authMdl = [authHandler, authProcess];
