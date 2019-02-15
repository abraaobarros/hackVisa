export const API_REQUEST_GET = '[app] API_REQUEST get';
export const API_REQUEST_POST = '[app] API_REQUEST post';
export const API_REQUEST_SUCCESS = '[app] API_REQUEST success';
export const API_REQUEST_ERROR = '[app] API_REQUEST error';



export const apiGet = (url, data, onSuccess, onError, auth = null, authenticated) => ({
    type: API_REQUEST_GET,
    payload: data,
    meta:{
        url,
        auth,
        authenticated,
        onSuccess,
        onError
    }

});

export const apiPost = (url, data, onSuccess, onError, auth = null, authenticated) => ({
    type: API_REQUEST_POST,
    payload: data,
    meta:{
        url,
        auth,
        authenticated,
        onSuccess,
        onError
    }
});

export const apiSuccess = (onSuccess, data) => ({
    type: API_REQUEST_SUCCESS,
    payload:data,
    onSuccess
});

export const apiError = (onError, data) => ({
    type: API_REQUEST_ERROR,
    payload:data,
    onError
});







