import { ADD_LIST_ITEM, CLEAR_LIST_ITEMS, DELETE_LIST_ITEM, GET_LIST_ITEMS } from '../actions/index';
const axios = require('axios');

export default function listItemReducer(state = [], action) {
    switch (action.type) {
        case ADD_LIST_ITEM: 
            return [...state, { ...action.input }];
        case CLEAR_LIST_ITEMS:
            return [];
        case DELETE_LIST_ITEM:
            return [...state].filter((input) => { return input._id !== action._id});
        case GET_LIST_ITEMS:
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}