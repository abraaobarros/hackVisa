import axios from "axios";
import {clearError, hideSpinner, showError, showSpinner} from "../actions/ui";
import {
    API_REQUEST_ERROR,
    API_REQUEST_GET,
    API_REQUEST_POST,
    API_REQUEST_SUCCESS,
    apiError,
    apiSuccess
} from "../actions/api";
import {AsyncStorage} from "react-native";

const apiHandler = ({dispatch}) => next => action => {

    if (action.type === API_REQUEST_POST) {

        const {payload, meta:{onSuccess, onError, url, auth, authenticated}} = action;
        dispatch(showSpinner())
        request.post(url, payload, auth, authenticated)
            .then(response => dispatch(apiSuccess(onSuccess, response.data.data)))
            .catch(error => dispatch(apiError(onError, error)))

    }

    if (action.type === API_REQUEST_GET) {

        const {payload, meta:{onSuccess, onError, url, auth, authenticated}} = action;
        dispatch(showSpinner())
        request.get(url, payload, auth, authenticated)
            .then(response => dispatch(apiSuccess(onSuccess, {auth,...response.data.data})))
            .catch(error => dispatch(apiError(onError, error)))

    }

    return next(action);
};

const apiProcess = ({dispatch}) => next => action => {
    if (action.type === API_REQUEST_SUCCESS) {
        dispatch({ type: action.onSuccess, payload: action.payload})
        dispatch(hideSpinner())
        dispatch(clearError())
    }
    if (action.type === API_REQUEST_ERROR) {
        dispatch(hideSpinner())
        dispatch(showError(action.payload))
    }
    return next(action);
}


let request = {
    get: async (url, data, auth = null, authenticated) => {
        auth = await request.getAuthorization(auth, authenticated);
        let config = {
            params: data,
            auth
        }
        return await axios.get(url,config)
    },

    post: async (url, data, auth = null, authenticated) => {
        auth = await request.getAuthorization(auth, authenticated);
        let config = {
            auth
        }
        return await axios.post(url,data, config)
    },

    getAuthorization: async (auth = null, authenticated) => {
        if (auth == null && authenticated) {
            try {
                let username = await AsyncStorage.getItem('username');
                let password = await AsyncStorage.getItem('password');
                auth = {
                    username:username.split("").join(''),
                    password:password.split("").join('')
                }
            } catch (e) {

            }
        }
        return auth;
    }

}


export const apiMdl = [apiHandler, apiProcess];
