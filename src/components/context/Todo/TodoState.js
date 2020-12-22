import { useReducer } from 'react';
import axios from 'axios';

import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';

import {
    CREATE_ITEM,
    GET_ITEMS,
} from './types';

const TodoState = props => {
    const initialState = {
        items: []
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);

// function to create new item
const createItem = async text => {
    const res = await axios.post(`http://127.0.0.1:8000/api/createitem`, {text: text});

    dispatch({
        type: CREATE_ITEM,
        payload: res.data
    });
};

// function to get all items
const getItems = async() => {
    const res = await axios.get(`http://127.0.0.1:8000/api/users`);

    dispatch({
        type: GET_ITEMS,
        payload: res.data
    });
}

return (
    <TodoContext.Provider
        value={{
            items: state.items,
            createItem,
            getItems,
        }}
    >
        {props.children}
    </TodoContext.Provider>
);
    
}

export default TodoState;