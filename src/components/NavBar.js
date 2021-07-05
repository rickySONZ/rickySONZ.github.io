import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="navbar">
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="scorllable"
        scorllButtons="auto"
      >
        <Tab label="ABOUT" to="/about"/>
        <Tab label="PORTFOLIO" />
        <Tab label="CONTACT" />
      </Tabs>
    </Paper>
    </div>
  );
}