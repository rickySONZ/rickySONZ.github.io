import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';


const Contact = () => {
    return (
        <div className="contact-div">
        <div className="sidebar">
        <h1>Ryan Erricson</h1>
        <p>Feel free to contact me at any of the links posted below. I am currently looking for </p>
            <a href="https://github.com/rickySONZ"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ryan-erricson-992890113/"><LinkedInIcon /></a>
            <a href="https://www.facebook.com/ryan.erricson"><FacebookIcon /></a>
            <a href="https://dev.to/rickysonz"><BookIcon /></a>
           <a href='mailto: ryanerricson@gmail.com'><EmailIcon /></a></div>
        </div>
    );
}

export default Contact;
