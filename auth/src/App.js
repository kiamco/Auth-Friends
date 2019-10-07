import React from 'react';
import Login from './components/login';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Login} />
    </div>
  );
}

export default App;
