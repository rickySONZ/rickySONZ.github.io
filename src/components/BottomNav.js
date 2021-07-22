import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-nav-div">
      <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{ width: '100%', height: '40px', bottom: '0', position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <BottomNavigationAction label="Email Me!" value="email" href='mailto: ryanerricson@gmail.com' className="bottom-nav-icon" icon={<EmailIcon />} />
        <BottomNavigationAction label="My Resume" value="blog" href='https://docs.google.com/document/d/1ZjCeAa9b3zIcf_NtM4MHSYYGCDrMDpWAtaaE7U911tU/edit' target="_blank" rel="noreferrer" className="bottom-nav-icon" icon={<AssignmentIcon />} />
        <BottomNavigationAction label="My Github" value="github" href="https://github.com/rickySONZ" target="_blank" rel="noreferrer" className="bottom-nav-icon" icon={<GitHubIcon />} />
        <BottomNavigationAction label="My LinkedIn" value="folder" href="https://www.linkedin.com/in/ryan-erricson-992890113/" target="_blank" rel="noreferrer" className="bottom-nav-icon" icon={<LinkedInIcon />} />
        <p id="signature">Site by Ryan Erricson</p>
      </BottomNavigation>
    </div>
  );
}
