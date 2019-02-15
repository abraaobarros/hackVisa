import {
    applyMiddleware,
    compose
} from 'redux'


import loggerMiddleware from './logger'
import monitorReducerEnhancer from './monitor'
import {apiMdl} from './api'
import localStorageMiddleware from './localStorage'
import {
    gameMld
} from './game'
import {scheduleMld} from "./schedule";
import {authMdl} from "./auth";

let middlewares = [localStorageMiddleware]
let middlewareEnhancer = applyMiddleware(...middlewares, ...gameMld,...authMdl, ...apiMdl, ...scheduleMld)

let enhancers = [middlewareEnhancer]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancerMiddleware = composeEnhancers(...enhancers)

export {
    enhancerMiddleware
};
