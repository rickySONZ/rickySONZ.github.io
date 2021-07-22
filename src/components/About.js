import React from 'react';
import Icons from './Icons'
import AssignmentIcon from '@material-ui/icons/Assignment'

const About = () => {
    return (
        <div className="about-section">
            <img src={process.env.PUBLIC_URL + '/linkedin_pic_21.png'} className="profile-image" alt="Ryan Erricson's Headshot" />
            <div className="icon-div">
                <h1>Ryan Erricson</h1>
                <h4>Active Learner, Full Stack Engineer</h4>
                <p><b>Currently Open To Work!</b></p>
                <p>Welcome to my site. I'm a coffee powered full stack engineer who currently specializes in <b>JavaScript/ReactJS</b> and <b>Ruby/Ruby On Rails</b>.
            I am passionate about creating dynamic applications that solve issues in people's lives (see my projects!) and have a strong focus on crafting user experiences.
            Currently living in the Boston area. When I'm not coding I typically spend my time hiking, going home to get to the beach or watching one of Arsenal FC or the Pittsburgh Steelers.<br /><br />
            Looking for a developer with a high apititude for problem solving and an appetite for learning? Look no further.</p>
                <Icons />
            </div>
        </div>
    );
}

export default About;
