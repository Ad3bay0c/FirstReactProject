import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

import Spinner from '../tools/spinner';

const User = ({ match }) => {
    const userContext = useContext(UserContext);
    const { userData, getUser, loading } = userContext;

    useEffect(() => {
        getUser(match.params.sid);

        // eslint-disable-next-line
    }, []);

    const { firstname, email, lastname, phone } = userData;
    if(loading) {
        return <Spinner />
    } else {
        return (
            
        <Fragment>
            <div className="m-5 btn btn-light" style={{float: 'right', }}>
                <Link to="/">Back</Link>
            </div> 
            <div style={{ marginLeft: '50px' }}>
                <table className="table table-striped">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    <tr>
                        <td> { firstname} </td>
                        <td> { lastname} </td>
                        <td> { email} </td>
                        <td> { phone } </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    );
    }
    
}

export default User;