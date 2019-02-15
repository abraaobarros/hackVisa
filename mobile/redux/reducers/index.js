import {
    combineReducers
} from 'redux'
import {
    uiReducer
} from './ui'

import gameReducer from './game'
import scheduleReducer from './schedule'
import {authReducer} from "./auth";

export const reducers = combineReducers({
    ui: uiReducer,
    game: gameReducer,
    schedule: scheduleReducer,
    profile: authReducer
})
