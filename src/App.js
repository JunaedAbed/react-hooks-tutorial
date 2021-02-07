//useContext hook is used to store user and share it.

import React, {} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Index} from './pages/index';
import {About} from './pages/about';

function App() {
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        
        <Route path='/' exact component={Index}></Route>
        <Route path='/about/' component={About}></Route>
      </div>
    </Router>
     
  );
}

export default App;
