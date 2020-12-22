import { useState, useContext } from 'react';
import AlertContext from '../context/Alert/AlertContext';
import UserContext from '../context/UserContext';

const Search = () => {
    const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext);

    const [text, setText] = useState('');

    const { setAlert } = alertContext;
    const { searchUsers, clearUser } = userContext;

    const onChange = e => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        if(text === '') {
            setAlert('Please Enter Something', 'light');
        } else {
            searchUsers(text);
        }
        setText('');
    }

    const clearUsers = () => {
        
        clearUser();
    }

    return (
        <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" value={text} onChange={onChange} placeholder="Search Users..." />
                    <input type="submit" value="Search" className='btn btn-dark btn-block'/>
                </form>
                    <button className="form btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                
            </div>
    );
}

export default Search;