import React, {useContext} from 'react';

import UserContext from '../context/UserContext';

import Spinner from '../tools/spinner';
import UserItem from './UserItem';

const Users = () => {
    const userContext = useContext(UserContext);

    const { users, loading } = userContext;

    if(loading) {
        return <Spinner />
    } else if(users.length < 1) {
        return (
            <div className="text-center">
                
            </div>
        )
    } 
    else if(users.data.length < 1) {
        return (
            <div style={{margin: '10px'}} className="text-center text-danger">
                No Records Found
            </div>
        )
    }
    else {
        return (
            <div style={userStyle}>
                {users.data.map(user =>  (
                <UserItem key={user.id} user={user} />                    
                ))}
            </div>
        )
        
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;