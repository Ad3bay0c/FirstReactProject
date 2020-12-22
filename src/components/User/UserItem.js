import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { Text, View } from 'react-native';

const UserItem = ( {user} ) => {

const { sid, firstname, lastname, email, phone } = user;
        return (
            <div className="card text-center">
               
                 <h3>{firstname}</h3>
                 <i>{ email }</i>, <i>{ phone }</i>

                 <div>
                     <Link to={`/user/${sid}`} className="btn btn-dark btn-sm">
                       More
                     </Link>
                 </div>
            </div>
        )
    };

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
