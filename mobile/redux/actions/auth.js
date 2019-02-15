import {FETCH_PROFILE_URL, FORGOT_PASSWORD_URL, VALID_EMAIL_URL} from "../URLs";


const AUTH_REQUEST = ' AUTH Request';
const AUTH_SUCCESS =  ' AUTH Success';
const AUTH_ERROR =  ' AUTH Error';

const LOGIN = '[auth] LOGIN'
export const LOGIN_REQUEST = LOGIN + AUTH_REQUEST;
export const LOGIN_SUCCESS =  LOGIN + AUTH_SUCCESS;
export const LOGIN_ERROR =  LOGIN + AUTH_ERROR;


const CREATE = '[auth] CREATE';
export const CREATE_USER_REQUEST =  CREATE + AUTH_REQUEST;
export const CREATE_USER_SUCCESS =   CREATE + AUTH_SUCCESS;
export const CREATE_USER_ERROR =   CREATE + AUTH_ERROR;


const FORGOT = '[auth] FORGOT'
export const FORGOT_PASSWORD_REQUEST =  FORGOT + AUTH_REQUEST;
export const FORGOT_PASSWORD_SUCCESS =  FORGOT + AUTH_SUCCESS;
export const FORGOT_PASSWORD_ERROR =  FORGOT + AUTH_ERROR;


const VALID_EMAIL = '[auth] VALID EMAIL'
export const VALID_EMAIL_REQUEST = VALID_EMAIL  + AUTH_REQUEST;
export const VALID_EMAIL_SUCCESS = VALID_EMAIL  + AUTH_SUCCESS;
export const VALID_EMAIL_ERROR   = VALID_EMAIL  + AUTH_ERROR;

export const AUTH_LOGOUT = '[auth] LOGOUT'


export const login = (email, password) => ({
    type: LOGIN_REQUEST,
    meta: {
        url:FETCH_PROFILE_URL,
        method:'get',
        email,
        password,
        onSuccess: LOGIN_SUCCESS,
        onError: LOGIN_ERROR,
        authenticated: true
    }
});

export const logout = () => ({
    type: AUTH_LOGOUT
})

export const validateEmail = (email) => ({
    type: VALID_EMAIL_REQUEST,
    payload:{email},
    meta: {
        url:VALID_EMAIL_URL,
        onSuccess: VALID_EMAIL_SUCCESS,
        onError: VALID_EMAIL_ERROR,
        authenticated: false
    }
});


export const sendLinkPassword = (email) => ({
    type: FORGOT_PASSWORD_REQUEST,
    payload:{email},
    meta: {
        url:FORGOT_PASSWORD_URL,
        onSuccess: VALID_EMAIL_SUCCESS,
        onError: VALID_EMAIL_ERROR,
        authenticated:false
    }
});

export const createUser = (user) => ({
    type: CREATE_USER_REQUEST,
    payload:user,
    meta: {
        url:CREATE_USER_REQUEST,
        onSuccess: CREATE_USER_SUCCESS,
        onError: CREATE_USER_ERROR,
        authenticated:false
    }
});

