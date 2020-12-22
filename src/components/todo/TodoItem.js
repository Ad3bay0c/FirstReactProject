import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const TodoItem = item => {
    const { firstname } = item;
    return (
<Fragment>
        <div>
            {{ firstname }}
        </div>
    </Fragment>
    )
    
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default TodoItem;