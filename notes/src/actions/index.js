export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'

export function addListItem(input) {
    return {
        type: ADD_LIST_ITEM, 
        input
    }
}