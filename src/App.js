// import logo from './logo.svg';
import './App.css';
import Register from './Components/pages/Register';
import Login from './Components/pages/Login';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
          <Route path = "/login" component = {Login}/>

          <Register/>

          </Switch>
        </Router>
        {/* <ValidationSchemaExample/> */}
        
        
      </div>

  );
}

export default App;
