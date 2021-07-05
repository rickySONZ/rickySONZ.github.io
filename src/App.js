import React, { Fragment } from 'react'
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import Cards from './components/Cards'
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import Contact from './components/Contact'
import Background from './images/78a1e442740e0b3e692e36a31d98014d.webp'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
    <div className="App">
      <Route
        path="/"
        render={({ location }) => (
          <Fragment>
            <Tabs value={location.pathname} centered>
              <Tab label="About" value="/" component={Link} to="/about" />
              <Tab label="View My Work" value="/portfolio" component={Link} to="/portfolio" />
              <Tab value="/contact" label="Contact" component={Link} to="/contact" />
            </Tabs>
            <Switch>
              <Route path="/about"component={About} />
              <Route path="/portfolio" component={Home} />
              <Route path="/contact" component={Contact}/>
            </Switch>
          </Fragment>
        )}
      />
    </div>
  </Router>
  );
}

export default App;
