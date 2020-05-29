import { ADD_LIST_ITEM } from '../actions/index';

const initialState = [
    { text: "W O R K"},
    { text: "L I F T"}
]

export default function addListItemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIST_ITEM: 
            return [...state, { ...action.input }];
        default:
            return state;
    }
}