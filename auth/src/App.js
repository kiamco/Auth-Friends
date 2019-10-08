import React from 'react';
import Login from './components/login';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import FriendsList from './components/friendList';
import './App.css';

function App() {
  return (
    <div className="App">
        <PrivateRoute exact path='/friendsList' component={FriendsList} />
        <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
