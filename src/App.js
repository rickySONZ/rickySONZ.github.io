import React, { Fragment } from 'react'
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import { makeStyles, Tab, Tabs } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Contact from './components/Contact'
import BottomNav from './components/BottomNav';



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
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Route
        path="/"
        render={({ location }) => (
          <Fragment>
            <Tabs value={location.pathname} centered>
              <Tab label="RYAN ERRICSON" value="/" component={Link} to="/about" className="nav-link" />
              <Tab label="View My Work" value="/portfolio" component={Link} to="/portfolio"  className="nav-link" />
              <Tab value="/contact" label="Contact ME" component={Link} to="/contact"  className="nav-link" />
            </Tabs>
            <Switch>
              <Route path="/about"component={About} />
              <Route path="/portfolio" component={Home} />
              <Route path="/contact" component={Contact}/>
              <Route path="/" component={About} />
            </Switch>
            <BottomNav />
          </Fragment>
        )}
      />
   
    </div>
  </Router>
  );
}

export default App;
