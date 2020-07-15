import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const SagaMiddleware = createSagaMiddleware();

export default function configureStore(initalState) {
    const middleware = [thunk, SagaMiddleware];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initalState, composeEnhancers(applyMiddleware(...middleware)));
    return store;
}