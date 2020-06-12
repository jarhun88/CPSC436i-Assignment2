export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
export const CLEAR_LIST_ITEMS = 'CLEAR_LIST_ITEMS'
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'

export function addListItem(input, _id, date) {
    return {
        type: ADD_LIST_ITEM, 
        _id,
        date,
        input
    }
}

export function deleteListItem(_id) {
    return {
        type: DELETE_LIST_ITEM,
        _id
    }
}
 
export function clearListItem() {
    return {
        type: CLEAR_LIST_ITEMS
    }
}

