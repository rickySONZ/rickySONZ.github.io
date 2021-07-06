import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';

 
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{width: '100%', height: '40px', bottom: '0', position: 'fixed', backgroundColor: 'darkGray'}}>
      <BottomNavigationAction label="Recents" value="recents" className = "bottom-nav-icon" icon={<EmailIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" className = "bottom-nav-icon" icon={<GitHubIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" className = "bottom-nav-icon" icon={<BookIcon />} />
      <BottomNavigationAction label="Folder" value="folder" className = "bottom-nav-icon" icon={<LinkedInIcon />} />
    </BottomNavigation>
  );
}
