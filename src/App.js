import React, { Fragment } from 'react'
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import {Link} from 'react-router-dom'

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
              <Tab label="View My Work" value="/tab2" component={Link} to="/portfolio" />
              <Tab
                value="/tab3"
                label="Contact"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Switch>
              <Route path="/about"component={About} />
              <Route path="/portfolio" component={Cards} />
              <Route path="/contact" component={Home}/>
            </Switch>
          </Fragment>
        )}
      />
    </div>
  </Router>
  );
}

export default App;
