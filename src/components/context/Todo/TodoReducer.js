import {
    CREATE_ITEM,
    GET_ITEMS,
} from './types';

export default (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload

            }
        case CREATE_ITEM:
            return state;
        default:
            return state
    }
}