import {
    getStorage,
    setStorage,
    STORAGE_GET,
    STORAGE_SET
} from '../actions/localStorage'
import {
    AsyncStorage
} from 'react-native'

const localStorage = store => next => action => {
    let {dispatch} = store;
    switch (action.type) {
        case STORAGE_GET:
            AsyncStorage.getItem(action.meta.prop, null).then(data => {
                dispatch({
                    type: action.meta.onSuccess,
                    payload: JSON.parse(data)
                })
            })
            break;
        case STORAGE_SET:
            AsyncStorage.setItem(action.meta.prop, JSON.stringify(action.payload)).catch(error => dispatch({
                type: action.meta.onError
            }));

    }

    return next(action);
};

export default localStorage;
