import { createStore } from 'redux'
import rootReducer from './reducers'

export default function configureStore(initalState) {
    return createStore(
        rootReducer, 
        initalState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}