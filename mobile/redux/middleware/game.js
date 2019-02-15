import {
    GET_GAME,
    GET_GAME_LOCAL,
    updateGame,
    FETCH_GAME_SUCCESS,
    FETCH_GAME_ERROR
} from '../actions/game'
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


export const getGameFlow = ({
                                dispatch
                            }) => next => action => {
    next(action);
    if (action.type === GET_GAME) {
        const {url, onSuccess, onError, authenticated} = action.meta;
        dispatch(apiGet(url, action.payload, onSuccess, onError, {username:"abraao@urbbox.com.br",password:"bynd2017"}, authenticated))
    }

    if (action.type === GET_GAME_LOCAL) {
        dispatch(getStorage('game', FETCH_GAME_SUCCESS, FETCH_GAME_ERROR))
        dispatch(showSpinner())
    }
}

export const processGame = ({dispatch}) => next => action => {
    next(action);
    if (action.type === FETCH_GAME_SUCCESS) {
        if (action.payload != null) {
            dispatch(setStorage('game', action.payload))
            dispatch(updateGame(action.payload))
        } else {
            dispatch({type: GET_GAME})
        }
        dispatch(hideSpinner())
    }
    if (action.type === FETCH_GAME_ERROR) {
        dispatch(hideSpinner())
    }
}


export const gameMld = [getGameFlow, processGame]
