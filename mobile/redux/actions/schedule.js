import {FORGOT_PASSWORD_URL} from "../URLs";

export const GET_SCHEDULE_LOCAL = '[schedule] GET_SCHEDULE_LOCAL';
export const GET_SCHEDULE_SUCCESS = '[schedule] GET_SCHEDULE_SUCCESS';
export const GET_SCHEDULE_ERROR  = '[schedule] GET_SCHEDULE_ERROR';

export const UPDATE_SCHEDULE = '[schedule] UPDATE_SCHEDULE';
export const GET_SCHEDULE = '[schedule] GET_SCHEDULE';

export const updateSchedule = (data) => ({
    type: UPDATE_SCHEDULE,
    payload: data
})

export const getSchedule = () => ({
    type: GET_SCHEDULE,
    meta: {
        method:'get',
        url:FORGOT_PASSWORD_URL,
        onSuccess: GET_SCHEDULE_SUCCESS,
        onError: GET_SCHEDULE_ERROR,
        authenticated:true
    }
})

export const getScheduleLocal = () => ({
    type: GET_SCHEDULE_LOCAL
})
