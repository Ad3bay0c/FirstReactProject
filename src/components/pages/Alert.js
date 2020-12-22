import React, { useContext } from 'react';
import AlertContext from '../context/Alert/AlertContext';
import PropTypes from 'prop-types';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
        {console.log(alert)}
           <i>{ alert.message }</i>
        </div>
        )
    );
}

Alert.propTypes = {
    alert: PropTypes.object.isRequired,
}
export default Alert;