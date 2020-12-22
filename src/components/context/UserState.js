import React, { useReducer } from 'react';
import axios from 'axios';

import UserContext from './UserContext';
import UserReducer from './UserReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER
} from '../types';

const UserState = props => {
    const initialState = {
        users: [],
        userData: {},
        loading: false,
        alert: null
    };

const [state, dispatch] = useReducer(UserReducer, initialState);
    
    //Search Users    
    const searchUsers = async text => {
        dispatch({type: SET_LOADING});

        const res = await axios.get(`http://127.0.0.1:8000/api/users/${text}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res
        })
    };

    //clear User
    const clearUser = () => dispatch({type: CLEAR_USER});

    // Get User
    const getUser = async sid => {
        dispatch({type: SET_LOADING});

        const res = await axios.get(`http://127.0.0.1:8000/api/user/${sid}`);
        // console.log(res.data);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };

    return  (
        <UserContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                alert: state.alert,
                userData: state.userData,
                searchUsers,
                clearUser,
                getUser,
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}

export default UserState;
