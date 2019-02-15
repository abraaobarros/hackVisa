import {
    apiGet,
    apiRequest
} from '../actions/api'
import {
    getStorage, setStorage
} from '../actions/localStorage'
import {
    showSpinner,
    hideSpinner
} from '../actions/ui'

import {
    GET_SCHEDULE,
    GET_SCHEDULE_LOCAL,
    FETCH_SCHEDULE_ERROR,
    FETCH_SCHEDULE_SUCCESS,
    updateSchedule
} from "../actions/schedule";

export const getScheduleFlow = ({
                                    dispatch
                                }) => next => action => {
    next(action);
    if (action.type === GET_SCHEDULE) {
        const {onSuccess, onError, email, password, url, authenticated} = action.meta;
        dispatch(apiGet(url, {}, onSuccess, onError, null, authenticated))
    }
}

export const processSchedule = ({
                                    dispatch
                                }) => next => action => {
    next(action);
    if (action.type === FETCH_SCHEDULE_SUCCESS) {
        if (action.payload != null) {
            // dispatch(setStorage('schedule', action.payload))
            dispatch(updateSchedule(action.payload))
        } else {
            dispatch({type: GET_SCHEDULE})
        }
        dispatch(hideSpinner())
    }
    if (action.type === FETCH_SCHEDULE_ERROR) {
        dispatch(hideSpinner())
    }
}


export const scheduleMld = [getScheduleFlow, processSchedule]
