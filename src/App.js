import './App.css';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import Homepage from './components/pages/Homepage';
import UserState from './components/context/UserState';
import TodoState from './components/context/Todo/TodoState';
import AlertState from './components/context/Alert/AlertState';

import Alert from './components/pages/Alert';
import NotFound from './components/pages/NotFound';
import Todo from './components/todo/Todo';

import User from './components/User/User';

const App =  () => {

  return (
    <TodoState>
    <UserState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert />
            <Switch>
              <Route exact path='/' component= { Homepage } />
              <Route exact path='/About' component={About} />
              <Route exact path='/user/:sid' component={User} />
              <Route exact path='/todo' component={Todo} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </AlertState>
    </UserState>
    </TodoState>
    
  );
}

export default App;
