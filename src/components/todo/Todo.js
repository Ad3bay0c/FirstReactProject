import React, { Fragment, useState, useContext, useEffect } from 'react';
import TodoContext from '../context/Todo/TodoContext';

// import TodoItem from './TodoItem';

const Todo = () => {
    const [text, setText] = useState('');
    const todoContext = useContext(TodoContext);

    const { createItem, getItems, items } = todoContext;

    useEffect(()=> {
        getItems();
        
        //eslint-diasble-next-line
    }, []);

console.log(items);
const onChange = (e) => setText(e.target.value);

const onSubmit = (e) => {
    e.preventDefault();

    createItem(text);

    setText('');
}
    return (
        <Fragment>
            <div className="m-3" style={{float:'left'}}>
                <form className="form-group" onSubmit={onSubmit}>
                    <input style={{display: 'block', width: '200%'}}
                    placeholder="Enter new Item" type="text" value={text} onChange={onChange}/>
                    <input className="btn btn-primary btn-block btn-sm btn-rounded " type="submit" value="Add" />
                </form>
            </div>

            <div className="m-3" style={{float:'right'}}>
                <table className="table table-striped">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    { items.map(item => (
                        <tr>
                            <td>{item.firstname}</td>
                             <td>{item.lastname}</td>
                              <td>{item.firstname}</td>
                        </tr>
                    )) }
                </table>
                
            </div>
        </Fragment>
    );
}

export default Todo;