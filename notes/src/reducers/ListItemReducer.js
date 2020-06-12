import { ADD_LIST_ITEM, CLEAR_LIST_ITEMS, DELETE_LIST_ITEM } from '../actions/index';

const initialState = [
    { text: "W O R K", id: 0, date: "01/1/2015"},
    { text: "L I F T", id: 1, date: "21/4/2019"}
]

export default function listItemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIST_ITEM: 
            return [...state, { ...action.input }];
        case CLEAR_LIST_ITEMS:
            return []
        case DELETE_LIST_ITEM:
            return [...state].filter((input) => { return input.id !== action.id})
        default:
            return state;
    }
}