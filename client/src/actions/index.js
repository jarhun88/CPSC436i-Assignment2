const axios = require('axios');

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
export const CLEAR_LIST_ITEMS = 'CLEAR_LIST_ITEMS'
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'
export const GET_LIST_ITEMS = 'GET_LIST_ITEMS'

export const getListItems = () => async (
    dispatch, getState
) => {
    try {
        let listItems = await axios.get('http://localhost:8000/messages/');
        dispatch({
            type: GET_LIST_ITEMS,
            payload: listItems.data
        })
    } catch (err) {
        console.log('error occured', err);
    }
} 

export const addListItem = (input) => async (
    dispatch, getState
) =>  {
    try {
        console.log(input)
        await axios.post('http://localhost:8000/messages/createMessage', {
            text: input.text,
            date: input.date
        });
        dispatch({
            type: ADD_LIST_ITEM, 
            input
        })
    } catch (err) {
        console.log('error occured', err);
    }
    
}

export const deleteListItem = (_id) => async (
    dispatch, getState
) => {
    try {
        console.log(_id);
        await axios.delete('http://localhost:8000/messages/deleteMessage', {
            data: {_id: _id}
        })
        dispatch({
            type: DELETE_LIST_ITEM,
            _id
        })
    } catch (err) {
        console.log('error occured', err)
    }
}
 
export const clearListItem = () => async (
    dispatch, getState
) => {
    try {
        await axios.delete('http://localhost:8000/messages/deleteAllMessages');
        dispatch({
            type: CLEAR_LIST_ITEMS
        })
    } catch (err) {
        console.log('error occured', err);
    }
}

