import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function LanguagesAccordion() {
  const classes = useStyles();

  return (
      <div className="accordion-div" >
    <div className={classes.root}>
      <Accordion style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '70%', justifySelf: 'center', margin: '2% auto', textAlign: 'center'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{justify: 'center', }}>Languages and Frameworks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-ruby-plain colored"></i><br></br>
          <i class="devicon-rails-plain-wordmark colored"></i>
          <i class="devicon-redux-original colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i>
          <i class="devicon-git-plain-wordmark colored"></i><br></br>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-heroku-original-wordmark colored"></i>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
  );
}
