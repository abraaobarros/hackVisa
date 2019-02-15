import {
    createStore,
} from 'redux'
import {
    reducers
} from './reducers'
import {
    enhancerMiddleware
} from './middleware';

export default () => {

    return createStore(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        enhancerMiddleware);
}
