import React from 'react';

const About = () => {
    return (
        <div className="about-section">
        <img src={process.env.PUBLIC_URL + '/linkedin_pic_21.png'}  className="profile-image" alt="Ryan Erricson's Headshot"/>
        <div className="icon-div">
            <h1>Active Learner, <br/>Full Stack Engineer</h1>
            <p>Hello, and welcome to my site. I am a full stack engineer who currently specializes in React JS.
            Recent code junkie and lifelong coffee junkie, I have recently graduated </p>
             <br/>
             <br/>
            
     

             <p>hi</p>
             
             <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-ruby-plain colored"></i><br />
          <i className="devicon-rails-plain-wordmark colored"></i>
          <i className="devicon-redux-original colored"></i>
          <i className="devicon-postgresql-plain-wordmark colored"></i><br />
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-heroku-original-wordmark colored"></i>
          </div>
        </div>
    );
}

export default About;
