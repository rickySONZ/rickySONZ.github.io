import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment'

const Contact = () => {
    return (
        <div className="contact-div">
        <img src={process.env.PUBLIC_URL + '/210750700_546644596351347_4845502012161129932_n.jpeg'}  className="contact-photo" alt="Ryan Erricson Sitting On a Bench"/>
        <div className="sidebar">
        <h1>Ryan Erricson</h1>
        <a href="https://docs.google.com/document/d/1ZjCeAa9b3zIcf_NtM4MHSYYGCDrMDpWAtaaE7U911tU/edit" target = "_blank" rel="noreferrer"><AssignmentIcon /></a>
        <a href="https://github.com/rickySONZ"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ryan-erricson-992890113/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.facebook.com/ryan.erricson" target="_blank" rel="noreferrer"><FacebookIcon /></a>
            <a href="https://dev.to/rickysonz" target="_blank" rel="noreferrer"><BookIcon /></a>
           <a href='mailto: ryanerricson@gmail.com'><EmailIcon /></a>
        <p>Feel free to contact me at any of the links posted above or below. I am currently looking for 
        a position either remotely or in the greater Boston Area, with a forward thinking and open minded company. If you would like to reach out to me considering project collaborations,
        future work opportunities, or to talk about code, I am more than open to it! My primary languages are Ruby and Javascript
        but welcome opportunities to break out of my comfort zone!</p>
        <a href={process.env.PUBLIC_URL + "/Ryan Erricson Resume 7_12_2021.pdf"} target = "_blank" rel="noreferrer"><AssignmentIcon /> My Resume</a><br />
        <a href='mailto: ryanerricson@gmail.com'><EmailIcon /> Email Me Directly!</a><br/>
        <a href="https://github.com/rickySONZ" target="_blank" rel="noreferrer"><GitHubIcon /> Check Out My GitHub</a><br/>
        <a href="https://www.linkedin.com/in/ryan-erricson-992890113/" target="_blank" rel="noreferrer"><LinkedInIcon /> Check Out My LinkedIn</a><br/>
        <a href="https://dev.to/rickysonz" target="_blank" rel="noreferrer"><BookIcon />Check Out My Blogs</a>
        </div>
        </div>
    );
}

export default Contact;
