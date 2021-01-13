import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
