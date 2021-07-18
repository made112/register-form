// import logo from './logo.svg';
import './App.css';
import Register from './Components/pages/Register';
import login, {ValidationSchemaExample} from './Components/pages/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path = "/login" component = {login}/>

        <Register/>

        </Switch>
      </Router>
      {/* <ValidationSchemaExample/> */}
      
      
    </div>

  );
}

export default App;
