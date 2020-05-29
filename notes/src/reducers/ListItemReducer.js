import { ADD_LIST_ITEM, CLEAR_LIST_ITEMS } from '../actions/index';

const initialState = [
    { text: "W O R K"},
    { text: "L I F T"}
]

export default function listItemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIST_ITEM: 
            return [...state, { ...action.input }];
        case CLEAR_LIST_ITEMS:
            return []
        default:
            return state;
    }
}