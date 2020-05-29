import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initalState) {
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    return createStore(
        rootReducer, 
        initalState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}