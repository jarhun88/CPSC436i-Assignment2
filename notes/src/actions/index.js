export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
export const CLEAR_LIST_ITEMS = 'CLEAR_LIST_ITEMS'
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM'

export function addListItem(input) {
    return {
        type: ADD_LIST_ITEM, 
        input
    }
}

export function clearListItem() {
    return {
        type: CLEAR_LIST_ITEMS
    }
}

