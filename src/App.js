import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
    <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
