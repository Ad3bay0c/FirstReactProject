import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_USER: 
            return {
                ...state,
                userData: action.payload,
                loading: false
            };
        case CLEAR_USER: 
            return {
                ...state,
                users: []
            };
        case SEARCH_USERS: 
            return {
                ...state,
                users: action.payload,
                loading: false,
                alert: null,
            };  
        default : 
            return state;
    }
}